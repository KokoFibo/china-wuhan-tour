import {gsap} from 'gsap';import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const nv=document.getElementById('nv') as HTMLElement,bt=document.getElementById('bt') as HTMLElement;
bt.onclick=()=>{nv.classList.toggle('open');bt.textContent=nv.classList.contains('open')?'✕':'☰'};
nv.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nv.classList.remove('open');bt.textContent='☰'}));
gsap.from('.hero .in > *',{y:40,opacity:0,duration:.9,stagger:.12,ease:'power3.out'});
gsap.to('.mt1',{y:-30,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
gsap.to('.mt2',{y:20,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
document.querySelectorAll('.rv').forEach(e=>gsap.from(e,{y:50,opacity:0,duration:.8,ease:'power2.out',scrollTrigger:{trigger:e,start:'top 90%'}}));

const figs=gsap.utils.toArray<HTMLElement>('.gal2 figure');
if(figs.length){
 gsap.set(figs,{opacity:0});
 ScrollTrigger.batch(figs,{start:'top 92%',once:true,onEnter:(els:any[])=>{
  gsap.fromTo(els,{opacity:0,y:50,scale:.94},{opacity:1,y:0,scale:1,duration:.8,stagger:.15,ease:'power3.out'});
  els.forEach((f:HTMLElement)=>{const i=f.querySelector('img');if(i)gsap.fromTo(i,{scale:1.2},{scale:1,duration:1.4,ease:'power2.out'});});
 }});
}
