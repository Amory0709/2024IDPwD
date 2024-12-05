import{$a as b,Ea as a,Fa as w,Na as c,Pb as v,Qb as y,Rb as d,Sa as m,Sb as g,Yb as M,Za as o,ab as l,bb as i,cb as s,fb as h,kb as _,lb as C,tb as f,ub as p}from"./chunk-ZLMIVOC7.js";var x=e=>({transform:e}),k=(e,n)=>({"height.px":e,"bottom.px":n}),I=(e,n)=>({"bottom.px":e,transform:n}),N=e=>({"bottom.px":e});function D(e,n){if(e&1&&s(0,"div",10),e&2){let t=h();o("ngStyle",p(1,I,t.leafPosition,"translateX(-100%) rotate("+t.leafRotation+"deg)"))}}function z(e,n){if(e&1&&s(0,"div",11),e&2){let t=h();o("ngStyle",f(1,N,t.leafPositionRight))}}var u=class e{name="";petalScale;stemHeight;leafCount;leafPosition;leafPositionRight;leafRotation;flowerScale;ngOnInit(){this.petalScale=.7+Math.random()*.2,this.stemHeight=35+Math.random()*10,this.leafCount=Math.floor(Math.random()*3),this.leafPosition=-20-Math.random()*10,this.leafPositionRight=-20-Math.random()*10,this.leafRotation=15+Math.random()*25,this.flowerScale=.7+Math.random()*.2}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["app-flower"]],inputs:{name:"name"},decls:11,vars:13,consts:[[1,"flower-container"],[1,"name-tooltip"],[1,"flower",3,"ngStyle"],[1,"petal",3,"ngStyle"],[1,"petal-right"],[1,"petal-center"],[1,"petal-left"],[1,"stem",3,"ngStyle"],["class","leaf",3,"ngStyle",4,"ngIf"],["class","leaf leaf-second",3,"ngStyle",4,"ngIf"],[1,"leaf",3,"ngStyle"],[1,"leaf","leaf-second",3,"ngStyle"]],template:function(t,r){t&1&&(l(0,"div",0)(1,"div",1),_(2),i(),l(3,"div",2)(4,"div",3),s(5,"div",4)(6,"div",5)(7,"div",6),i(),s(8,"div",7),m(9,D,1,4,"div",8)(10,z,1,3,"div",9),i()()),t&2&&(a(2),C(r.name),a(),o("ngStyle",f(6,x,"scale("+r.flowerScale+")")),a(),o("ngStyle",f(8,x,"translateY(5px) scale("+r.petalScale+")")),a(4),o("ngStyle",p(10,k,r.stemHeight,-r.stemHeight)),a(),o("ngIf",r.leafCount===0||r.leafCount===2),a(),o("ngIf",r.leafCount===1||r.leafCount===2))},dependencies:[g,y,d],styles:['.flower-container[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;position:relative}.flower-container[_ngcontent-%COMP%]   .name-tooltip[_ngcontent-%COMP%]{position:absolute;top:-35px;left:50%;transform:translate(-50%);background-color:#9154b1e6;color:#fff;padding:5px 10px;border-radius:15px;font-size:14px;opacity:1;visibility:visible;white-space:nowrap;z-index:100}.flower-container[_ngcontent-%COMP%]   .name-tooltip[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-5px;left:50%;transform:translate(-50%);border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid rgba(145,84,177,.9)}.flower-container[_ngcontent-%COMP%]:hover   .name-tooltip[_ngcontent-%COMP%]{opacity:1;visibility:visible;top:-35px}.flower[_ngcontent-%COMP%]{position:relative;transform-origin:bottom center;transition:transform .3s ease}.flower[_ngcontent-%COMP%]:hover{animation:_ngcontent-%COMP%_sway 2s ease-in-out infinite}.petal[_ngcontent-%COMP%]{width:30px;height:45px;background-color:#9154b1;border-radius:50% 50% 45% 45%;position:relative;transform:translateY(5px);box-shadow:none}.petal-left[_ngcontent-%COMP%]{position:absolute;top:0;left:-12px;width:30px;height:45px;background-color:#9154b1;border-radius:50% 50% 45% 45%;transform:rotate(-15deg);z-index:10}.petal-right[_ngcontent-%COMP%]{position:absolute;top:0;right:-12px;width:30px;height:45px;background-color:#9154b1;border-radius:50% 50% 45% 45%;transform:rotate(15deg);z-index:10}.petal-center[_ngcontent-%COMP%]{position:absolute;top:-2px;left:0;width:30px;height:45px;background-color:#9154b1;border-radius:50% 50% 45% 45%;z-index:11}.stem[_ngcontent-%COMP%]{width:3px;height:60px;background-color:#4a7c59;position:absolute;bottom:-60px;left:50%;transform:translate(-50%);transition:height .3s ease}.leaf[_ngcontent-%COMP%]{width:30px;height:15px;background-color:#4a7c59;position:absolute;left:50%;border-radius:50%;transform-origin:center left}.leaf[_ngcontent-%COMP%]:before{content:"";position:absolute;width:30px;height:15px;background-color:#4a7c59;border-radius:50%;transform:rotate(-10deg);transform-origin:right center}.leaf-second[_ngcontent-%COMP%]{z-index:-1;transform-origin:center right}@keyframes _ngcontent-%COMP%_sway{0%,to{transform:rotate(0)}25%{transform:rotate(5deg)}75%{transform:rotate(-5deg)}}.growing[_ngcontent-%COMP%]   .stem[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_growStem 1s ease-out}.growing[_ngcontent-%COMP%]   .leaf[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_unfoldLeaves 1s ease-out .8s}.growing[_ngcontent-%COMP%]   .petal[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_bloomPetal 1.2s ease-out 1.6s}@keyframes _ngcontent-%COMP%_bloomPetal{0%{transform:translateY(5px) scale(0)}60%{transform:translateY(5px) scale(1.1)}80%{transform:translateY(5px) scale(.95)}to{transform:translateY(5px) scale(1)}}@keyframes _ngcontent-%COMP%_growStem{0%{height:0;opacity:0}20%{opacity:1}to{height:100%}}@keyframes _ngcontent-%COMP%_unfoldLeaves{0%{transform:scale(0) rotate(0);opacity:0}20%{opacity:1}to{transform:scale(1) rotate(-20deg)}}']})};var L=(e,n)=>({left:e,top:n});function R(e,n){if(e&1&&(l(0,"div",3),s(1,"app-flower",4),i()),e&2){let t=n.$implicit;b("growing",t.isNew),o("ngStyle",p(4,L,t.position.x+"%",t.position.y+"%")),a(),o("name",t.name)}}var P=class e{constructor(n){this.supportersService=n}flowers=[];ngOnInit(){this.flowers=this.supportersService.currentSupporters;let n=this.supportersService.currentUser;n&&this.addSupporter(n)}addSupporter(n){let t={name:n,joinDate:new Date,position:{x:3+Math.random()*90,y:3+Math.random()*90},isNew:!0};this.flowers.push(t),setTimeout(()=>{t.isNew=!1,this.supportersService.addSupporter(t),this.supportersService.clearUser()},3e3)}static \u0275fac=function(t){return new(t||e)(w(M))};static \u0275cmp=c({type:e,selectors:[["app-leaderboard"]],decls:3,vars:1,consts:[[1,"leaderboard-container"],[1,"flower-field"],["class","flower-wrapper",3,"growing","ngStyle",4,"ngFor","ngForOf"],[1,"flower-wrapper",3,"ngStyle"],[3,"name"]],template:function(t,r){t&1&&(l(0,"div",0)(1,"div",1),m(2,R,2,7,"div",2),i()()),t&2&&(a(2),o("ngForOf",r.flowers))},dependencies:[u,g,v,d],styles:[".leaderboard-container[_ngcontent-%COMP%]{width:70vw;height:90vh;min-height:600px;position:relative;padding:50px}.flower-field[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.flower-wrapper[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);transition:all .3s ease}.flower-wrapper.growing[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_growFlower 3s ease-out}.flower-wrapper[_ngcontent-%COMP%]:hover{z-index:100}@keyframes _ngcontent-%COMP%_growFlower{0%{transform:translate(-50%,-50%) scale(0);opacity:0}30%{transform:translate(-50%,-50%) scale(.3);opacity:.3}60%{transform:translate(-50%,-50%) scale(.8);opacity:.7}85%{transform:translate(-50%,-50%) scale(1.1);opacity:1}to{transform:translate(-50%,-50%) scale(1)}}@keyframes _ngcontent-%COMP%_growStem{0%{height:0}to{height:100%}}@keyframes _ngcontent-%COMP%_unfoldLeaves{0%{transform:scale(0) rotate(0)}to{transform:scale(1) rotate(-20deg)}}"]})};export{P as LeaderboardComponent};