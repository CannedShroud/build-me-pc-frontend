(this["webpackJsonpbuild-me-pc"]=this["webpackJsonpbuild-me-pc"]||[]).push([[0],{40:function(e,a,t){e.exports=t.p+"static/media/demopc.01149f4a.png"},45:function(e,a,t){e.exports=t(74)},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(20),i=t.n(c),r=(t(50),t(51),t(52),t(92)),o=t(90),m=t(91);t(53);var d=function(){return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"header__left"},n.a.createElement("div",{className:"header__logo"},n.a.createElement("h1",null,"BUILD",n.a.createElement("span",null," ME ")," PC"))),n.a.createElement("div",{className:"header__right"},n.a.createElement(r.a,null,n.a.createElement(o.a,null)),n.a.createElement(r.a,null,n.a.createElement(m.a,null))))};t(57),t(58);var u=function(){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__body"},n.a.createElement("img",{src:"https://store-images.s-microsoft.com/image/apps.46452.13835473807186336.9510cd97-f71a-49b0-9e5c-0877f4bc9de3.611f3905-926e-456a-b549-6b68564b2769?mode=scale&q=90&h=300&w=200&background=%23FFFFFF",alt:""})),n.a.createElement("div",{className:"card__title"},n.a.createElement("h3",null,"WarZone")))};var s=function(){return n.a.createElement("div",{className:"gamecards"},n.a.createElement(u,null),n.a.createElement(u,null),n.a.createElement(u,null),n.a.createElement(u,null),n.a.createElement(u,null))},v=(t(59),t(30));var p=function(){return n.a.createElement("div",{className:"advertbuild"},n.a.createElement("div",{className:"advertbuild__button"},n.a.createElement(v.b,{to:"/build"},n.a.createElement("h1",null,"SHOW ME THEM BUILDS"))))};var E=function(){return n.a.createElement("div",{className:"home"},n.a.createElement("div",{className:"home__header"},n.a.createElement(d,null)),n.a.createElement("div",{className:"home__body"},n.a.createElement(s,null),n.a.createElement(p,null)))},b=t(5),h=(t(61),t(62),t(40)),g=t.n(h);var f=function(){return n.a.createElement("div",{className:"buildcard"},n.a.createElement("div",{className:"buildcard__title"},n.a.createElement("h1",null,"The Value Build")),n.a.createElement("div",{className:"buildcard__image"},n.a.createElement("img",{src:g.a,alt:""})),n.a.createElement("div",{className:"buildcard__price"},n.a.createElement("h3",null,"$1000")),n.a.createElement("div",{className:"buildcard__benchmarks"},n.a.createElement("h4",null,"Cinebench: 1320"),n.a.createElement("h4",null,"3D Mark: 2000")))};t(63);var _=function(e){var a=e.part,t=e.name,l=e.img,c=(e.price,e.detail2),i=e.detail1,r=e.company;return n.a.createElement("div",{className:"part"},n.a.createElement("div",{className:"part__title"},n.a.createElement("h3",null,a),n.a.createElement("div",{className:"part__line"},"")),n.a.createElement("div",{className:"part__body"},n.a.createElement("img",{src:l,alt:"",className:"part__image"}),n.a.createElement("h3",null,t)),n.a.createElement("div",{className:"part__details"},n.a.createElement("p",null,"Price: $199.99"),n.a.createElement("p",null,i),n.a.createElement("p",null,c),n.a.createElement("p",null,"Company: ",r)))},N=t(42),y=t(41),S=t.n(y).a.initializeApp({apiKey:"AIzaSyCBUbwznvDbs1jIGcXAjhWOKtTjup36RRY",authDomain:"build-me-pc-test.firebaseapp.com",databaseURL:"https://build-me-pc-test.firebaseio.com",projectId:"build-me-pc-test",storageBucket:"build-me-pc-test.appspot.com",messagingSenderId:"885602581204",appId:"1:885602581204:web:f9032a4bfdccd9c7301941",measurementId:"G-W1BPV5VSG5"}).firestore();var k=function(){var e=Object(l.useState)({}),a=Object(N.a)(e,2),t=a[0],n=a[1];return Object(l.useEffect)((function(){S.collection("builds").doc("value").get().then((function(e){e.exists?n(e.data()):console.log("No such document")})).catch((function(e){console.log("Error getting document: ",e)}))}),[]),t};var w=function(){var e,a,t,l,c,i,r,o,m,d,u,s,v,p,E,b,h,g,f,N,y,S,w,B,C,M,I,z,G,P,W,j,D,F,T,R,U,A,O,L,V=k();return n.a.createElement("div",{className:"buildelab"},n.a.createElement("h1",null,null===(e=V.details)||void 0===e?void 0:e.name),n.a.createElement("hr",null),n.a.createElement("h2",null,"Scores"),n.a.createElement("h3",null,"Cinebench: ".concat(null===(a=V.benchmarks)||void 0===a?void 0:a.cinebench)),n.a.createElement("h3",null,"3D Mark(Time Spy) ".concat(null===(t=V.benchmarks)||void 0===t?void 0:t.threeDMarkTSpy)),n.a.createElement("hr",null),n.a.createElement("h2",null,"Part List"),n.a.createElement("hr",null),n.a.createElement(_,{part:"CPU",name:null===(l=V.cpu)||void 0===l?void 0:l.name,detail2:"Clockspeed: ".concat(null===(c=V.cpu)||void 0===c?void 0:c.clocks," GHz"),company:null===(i=V.cpu)||void 0===i?void 0:i.company,detail1:"Compute: ".concat(null===(r=V.cpu)||void 0===r?void 0:r.cores,"C/").concat((null===(o=V.cpu)||void 0===o?void 0:o.smt)?2*(null===(m=V.cpu)||void 0===m?void 0:m.cores):null===(d=V.cpu)||void 0===d?void 0:d.cores,"T"),img:null===(u=V.cpu)||void 0===u?void 0:u.img}),n.a.createElement(_,{part:"Motherboard",name:null===(s=V.mbd)||void 0===s?void 0:s.name,detail1:"Sata Ports: ".concat(null===(v=V.mbd)||void 0===v?void 0:v.sataports),detail2:"Ram slots: ".concat(null===(p=V.mbd)||void 0===p?void 0:p.ramslots),company:null===(E=V.mbd)||void 0===E?void 0:E.company,img:null===(b=V.mbd)||void 0===b?void 0:b.img}),n.a.createElement(_,{part:"RAM",name:null===(h=V.dram)||void 0===h?void 0:h.name,detail1:"Size: ".concat(null===(g=V.dram)||void 0===g?void 0:g.size," GB (").concat(null===(f=V.dram)||void 0===f?void 0:f.config,")"),detail2:"Speed: ".concat(null===(N=V.dram)||void 0===N?void 0:N.speed," Mhz"),company:null===(y=V.dram)||void 0===y?void 0:y.company,img:null===(S=V.dram)||void 0===S?void 0:S.img}),n.a.createElement(_,{part:"Storage",name:null===(w=V.ssd)||void 0===w?void 0:w.name,detail1:"Size: ".concat(null===(B=V.ssd)||void 0===B?void 0:B.capacity," GB"),detail2:"Type: ".concat(null===(C=V.ssd)||void 0===C?void 0:C.type),company:null===(M=V.ssd)||void 0===M?void 0:M.company,img:null===(I=V.ssd)||void 0===I?void 0:I.img}),n.a.createElement(_,{part:"GPU",name:null===(z=V.gpu)||void 0===z?void 0:z.name,detail1:"VRAM: ".concat(null===(G=V.gpu)||void 0===G?void 0:G.vram," GB"),detail2:"Bus: ".concat(null===(P=V.gpu)||void 0===P?void 0:P.bus," bit"),company:null===(W=V.gpu)||void 0===W?void 0:W.aib,img:null===(j=V.gpu)||void 0===j?void 0:j.img}),n.a.createElement(_,{part:"Case",name:null===(D=V.case)||void 0===D?void 0:D.name,company:null===(F=V.case)||void 0===F?void 0:F.company,img:null===(T=V.case)||void 0===T?void 0:T.img}),n.a.createElement(_,{part:"PowerSupply",name:null===(R=V.psu)||void 0===R?void 0:R.name,detail1:"Wattage: ".concat(null===(U=V.psu)||void 0===U?void 0:U.wattage,"W"),detail2:"Efficiency: ".concat(null===(A=V.psu)||void 0===A?void 0:A.rating," rated"),company:null===(O=V.psu)||void 0===O?void 0:O.company,img:null===(L=V.psu)||void 0===L?void 0:L.img}))};var B=function(){return n.a.createElement("div",{className:"build"},n.a.createElement("div",{className:"build__header"},n.a.createElement(d,null)),n.a.createElement("div",{className:"build__body"},n.a.createElement("div",{className:"build__cards"},n.a.createElement(f,null),n.a.createElement(f,null),n.a.createElement(f,null)),n.a.createElement("div",{className:"build__featured"},n.a.createElement("h1",null,"Featured Build"),n.a.createElement("hr",null),n.a.createElement(w,null))))};var C=function(){return n.a.createElement(v.a,null,n.a.createElement("div",{className:"app"},n.a.createElement(b.c,null,n.a.createElement(b.a,{path:"/build"},n.a.createElement(B,null)),n.a.createElement(b.a,{path:"/"},n.a.createElement(E,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.43c380ff.chunk.js.map