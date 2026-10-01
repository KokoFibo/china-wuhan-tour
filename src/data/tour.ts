export type Lang='id'|'zh';
export type B={id:string;zh:string};
const b=(id:string,zh:string):B=>({id,zh});
export const ui={
 title:b('Tur China 8 Hari','中国8天之旅'),sub:b('Wuhan · Fenghuang · Zhangjiajie · Three Gorges','武汉 · 凤凰 · 张家界 · 三峡'),
 nav:[['',b('Home','首页')],['info',b('Info','信息')],['flight',b('Penerbangan','航班')],['prep',b('Persiapan','准备')],['hotel',b('Hotel','酒店')],['plan',b('Itinerary','行程')],['dest',b('Destinasi','景点')]] as [string,B][],
 h:{info:b('Informasi Utama & Kontak','主要信息与联系'),flight:b('Penerbangan & Bagasi','航班与行李'),prep:b('Checklist Persiapan','行前准备'),hotel:b('Akomodasi','住宿'),plan:b('Itinerary Per Hari','每日行程'),dest:b('Jelajahi Destinasi','探索景点')},
 day:b('Hari','第'),dayEnd:b('','天'),hist:b('Sejarah','历史'),back:b('← Semua destinasi','← 所有景点'),map:b('Peta','地图'),photo:b('Foto','照片'),wiki:b('Wikipedia','维基百科'),more:b('Detail','详情'),lang:b('中文','Indonesia'),
 leader:b('WhatsApp','WhatsApp'),call:b('Telepon','拨打电话'),ai:b('Isi formulir All Indonesia','填写All Indonesia表格')};
export const info:[B,B][]=[
 [b('Kode Tour','团号'),b('CWZH8-051026MF','CWZH8-051026MF')],
 [b('Periode','行程日期'),b('05 – 12 Oktober 2026 (8 Hari / 7 Malam)','2026年10月5日–12日（8天7晚）')],
 [b('Tour Leader','领队'),b('Ms. Jeanette Velicia','Jeanette Velicia 女士')],
 [b('Berkumpul','集合'),b('Senin, 05 Oktober 2026 pkl 03.30 WIB, Terminal 3 Bandara Soekarno-Hatta (Keberangkatan Internasional, Gate 2 antara Row B & C, depan "Putu Made")','2026年10月5日（周一）凌晨3:30（雅加达时间），苏加诺-哈达机场3号航站楼国际出发厅2号门，B、C排之间，"Putu Made"前')]];
export const flights:[B,B][]=[
 [b('Berangkat','去程'),b('Xiamen Airlines MF 8684 · 05 Okt · Jakarta CGK – Wuhan WUH · 06.50 – 14.25','厦门航空 MF 8684 · 10月5日 · 雅加达 CGK – 武汉 WUH · 06:50 – 14:25')],
 [b('Pulang','回程'),b('Xiamen Airlines MF 8683 · 12 Okt · Wuhan WUH – Jakarta CGK · 16.25 – 21.50','厦门航空 MF 8683 · 10月12日 · 武汉 WUH – 雅加达 CGK · 16:25 – 21:50')],
 [b('Bagasi Terdaftar','托运行李'),b('Maks. 1 koper per orang, maks. 23 kg','每人限1件，最重23公斤')],
 [b('Bagasi Kabin','手提行李'),b('Maks. 7 kg, ukuran maks. 56 x 36 x 23 cm','最重7公斤，尺寸不超过56 x 36 x 23厘米')]];
export const checks:[B,B][]=[
 [b('Power Bank','充电宝'),b('Maks. 20.000 mAh dan WAJIB berlogo 3C (China Compulsory Certification). Kapasitas harus tercetak jelas (tidak hilang/terkelupas).','最大20,000mAh，必须有3C标志，容量标识须清晰可见。')],
 [b('Cairan & Barang Dilarang','液体与违禁品'),b('Cairan di bagasi kabin maks. 100 ml per wadah. Dilarang keras membawa korek api/gas dan bahan mudah terbakar.','手提行李液体每瓶不超过100毫升。严禁携带打火机/火柴及易燃物品。')],
 [b('Pakaian & Cuaca','衣着与天气'),b('Suhu musim gugur 15–25ºC. Bawa jaket, syal, payung lipat/jas hujan, dan sepatu kets yang nyaman.','秋季气温15–25ºC。请带外套、围巾、折叠伞/雨衣及舒适运动鞋。')],
 [b('Mata Uang & Pembayaran','货币与支付'),b('Chinese Yuan (CNY/RMB); batas membawa tunai maks. CNY 20.000 atau USD 5.000. Kartu kredit yang umum diterima: UnionPay.','人民币（CNY）；现金限额人民币20,000元或5,000美元。常用银行卡：银联UnionPay。')],
 [b('Internet & Aplikasi','网络与应用'),b('WhatsApp, Instagram, Facebook, TikTok, dan VPN terblokir di China. Unduh WeChat untuk komunikasi darurat dan aktifkan roaming internasional.','WhatsApp、Instagram、Facebook、TikTok和VPN在中国被屏蔽。请下载微信用于紧急联系，并开通国际漫游。')],
 [b('Listrik','电压'),b('220V, colokan Tipe A (2 pin gepeng).','220V，A型插头（两脚扁头）。')],
 [b('Kepulangan ke Indonesia','返回印尼'),b('Wajib isi formulir digital All Indonesia sebelum mendarat di Jakarta.','抵达雅加达前必须在线填写All Indonesia表格。')]];
export const AI='https://allindonesia.imigrasi.go.id/';
export const days:{t:B;s:string[];x:B}[]=[
 {t:b('Wuhan','武汉'),s:['wuhan'],x:b('Tiba di Wuhan, berburu kuliner di Hubu Lane dan night view Yellow Crane Tower.','抵达武汉，户部巷美食，夜游黄鹤楼。')},
 {t:b('Jingzhou & Changde','荆州与常德'),s:['jingzhou','changde'],x:b('Jingzhou Ancient City dan Daxiaohe Streets.','荆州古城与大小河街。')},
 {t:b('Fenghuang','凤凰'),s:['taohuayuan','fenghuang'],x:b('Taohuayuan Ancient Town dan night view Phoenix Ancient City (Slate Street, Hanging Towers, Hongqiao, Tuojiang River).','桃花源古镇与凤凰古城夜景（石板街、吊脚楼、虹桥、沱江）。')},
 {t:b('Zhangjiajie','张家界'),s:['tianmen'],x:b('Cableway ke Tianmen Mountain (Glass Walkway, 12 eskalator, Tianmen Cave), foto di 72 Strange Building. Opsional: Fox Lady Show RMB 400/pax.','天门山索道（玻璃栈道、12段扶梯、天门洞），七十二奇楼拍照。自费：天门狐仙秀 RMB 400/人。')},
 {t:b('Zhangjiajie','张家界'),s:['tianzi'],x:b('Tianzi / Avatar Mountain naik Bailong Lift (326 m), mampir toko Medicine & Silk.','天子山（阿凡达山），乘百龙电梯（326米），参观药材与丝绸店。')},
 {t:b('Zhangjiajie','张家界'),s:['glass-bridge'],x:b('Grand Canyon Glass Bridge, toko Latex & Jewelry. Opsional: Huanglong Cave RMB 400/pax.','大峡谷玻璃桥，乳胶与珠宝店。自费：黄龙洞 RMB 400/人。')},
 {t:b('Yichang & Jingzhou','宜昌与荆州'),s:['three-gorges','jingzhou'],x:b('Bendungan Three Gorges Dam, lalu kembali ke Jingzhou.','参观三峡大坝，返回荆州。')},
 {t:b('Wuhan ~ Jakarta','武汉～雅加达'),s:['wuhan'],x:b('Perjalanan darat Jingzhou ke Wuhan, terbang pulang ke Jakarta.','荆州乘车前往武汉，搭机返回雅加达。')}];
export {dests,hotels} from './dests';
export const q=(s:string)=>encodeURIComponent(s);
