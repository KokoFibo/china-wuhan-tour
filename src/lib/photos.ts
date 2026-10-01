import fs from 'node:fs';
const cache=new Map<string,Promise<string[]>>();
const ok=(u:string)=>/\.(jpe?g|png)/i.test(u)&&!/\.svg/i.test(u);
async function j(u:string){const r=await fetch(u,{signal:AbortSignal.timeout(8000)});return r.ok?await r.json():null;}
async function load(slug:string,titles:string[]){
 const dir='public/images/'+slug;
 if(fs.existsSync(dir)&&fs.statSync(dir).isDirectory()){const f=fs.readdirSync(dir).filter(x=>/\.(jpe?g|png|webp)$/i.test(x)).sort();if(f.length)return f.map(x=>'/images/'+slug+'/'+x);}
 const out:string[]=[];
 for(const e of ['jpg','jpeg','png','webp']) if(fs.existsSync('public/images/'+slug+'.'+e)) out.push('/images/'+slug+'.'+e);
 for(const t of titles){
  if(out.length>=3)break;
  try{
   const s=await j('https://en.wikipedia.org/api/rest_v1/page/summary/'+encodeURIComponent(t));
   const u=s?.originalimage?.source||s?.thumbnail?.source;
   if(u&&ok(u)&&!out.includes(u))out.push(u);
   const m=await j('https://en.wikipedia.org/api/rest_v1/page/media-list/'+encodeURIComponent(t));
   for(const it of m?.items||[]){
    if(out.length>=3)break;
    const a=it.srcset?.[it.srcset.length-1]?.src;
    if(it.type!=='image'||!a)continue;
    const x=a.startsWith('//')?'https:'+a:a;
    if(ok(x)&&!out.includes(x))out.push(x);
   }
  }catch{}
 }
 for(const n of [2,3])for(const e of ['jpg','jpeg','png','webp'])if(fs.existsSync('public/images/'+slug+'-'+n+'.'+e)){out[n-1]='/images/'+slug+'-'+n+'.'+e;break;}
 return out.filter(Boolean);
}
export function photos(slug:string,titles:string[]){
 if(!cache.has(slug))cache.set(slug,load(slug,titles));
 return cache.get(slug)!;
}
