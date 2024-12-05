import{a as D,b as U,c as q,d as H,e as Y,f as g,g as B,h as W,i as X,j as x}from"./chunk-CC7ITS2Z.js";import{$ as m,$a as F,Ea as d,Fa as h,Ia as T,Na as C,Pb as M,Sa as _,Sb as P,Ub as N,W as v,Yb as b,Za as u,ab as n,bb as i,cb as l,eb as j,fb as z,kb as c,lb as S,oa as E,sa as R,sb as O,wa as I,wb as L}from"./chunk-NCG4YGK7.js";var p=class t{constructor(o,e){this.supportersService=o;this.router=e}canActivate(){return this.supportersService.currentUser?!0:this.router.createUrlTree(["/welcome"])}static \u0275fac=function(e){return new(e||t)(m(b),m(g))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};var f=class t{constructor(o,e){this.supportersService=o;this.router=e}canActivate(o){let e=o.data?.requiredStep,r=this.supportersService.currentStep;if(r<e)switch(r){case 0:return this.router.createUrlTree(["/welcome"]);case 1:return this.router.createUrlTree(["/hello-friend"]);case 2:return this.router.createUrlTree(["/thank-you"]);default:return this.router.createUrlTree(["/welcome"])}return!0}static \u0275fac=function(e){return new(e||t)(m(b),m(g))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};var $=[{path:"welcome",loadComponent:()=>import("./chunk-RLJGUJJC.js").then(t=>t.WelcomeComponent)},{path:"hello-friend",loadComponent:()=>import("./chunk-ZGUEMMYX.js").then(t=>t.HelloFriendComponent),canActivate:[p],data:{requiredStep:1}},{path:"thank-you",loadComponent:()=>import("./chunk-3NTWDL4W.js").then(t=>t.ThankYouComponent),canActivate:[p,f],data:{requiredStep:2}},{path:"did-you-eat",loadComponent:()=>import("./chunk-IWMHBUVF.js").then(t=>t.ComeTogetherComponent),canActivate:[p,f],data:{requiredStep:3}},{path:"leaderboard",loadComponent:()=>import("./chunk-J6U4U2LW.js").then(t=>t.LeaderboardComponent),canActivate:[p,f],data:{requiredStep:4}},{path:"",redirectTo:"welcome",pathMatch:"full"}];var G={providers:[L({eventCoalescing:!0}),X($),q(U())]};var Q=()=>({exact:!0});function V(t,o){if(t&1&&(n(0,"li",2)(1,"div",3)(2,"div",4),l(3,"div",5),n(4,"span",6),c(5),i()(),n(6,"span",7),c(7),i()()()),t&2){let e=o.$implicit;u("routerLink",e.route)("routerLinkActiveOptions",O(4,Q)),d(5),S(e.number),d(2),S(e.text)}}var w=class t{navigationClicked=new E;navItems=[{number:1,text:"Welcome",route:"/welcome"},{number:2,text:'"Hello, Friend"',route:"/hello-friend"},{number:3,text:'"Thank you"',route:"/thank-you"},{number:4,text:'"Did you eat?"',route:"/did-you-eat"},{number:5,text:"Leaderboard",route:"/leaderboard"}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-navigation"]],outputs:{navigationClicked:"navigationClicked"},decls:3,vars:1,consts:[[1,"space-nav"],["routerLinkActive","active",3,"routerLink","routerLinkActiveOptions",4,"ngFor","ngForOf"],["routerLinkActive","active",3,"routerLink","routerLinkActiveOptions"],[1,"nav-item"],[1,"marker"],[1,"diamond"],[1,"number"],[1,"text"]],template:function(e,r){e&1&&(n(0,"nav",0)(1,"ul"),_(2,V,8,5,"li",1),i()()),e&2&&(d(2),u("ngForOf",r.navItems))},dependencies:[P,M,x,B,W],styles:['.space-nav[_ngcontent-%COMP%]{position:fixed;left:40px;top:50%;transform:translateY(-50%);z-index:100;padding:10px}.space-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;position:relative}.space-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:after{content:"";position:absolute;left:22px;top:-20px;bottom:-20px;width:0;border-left:1px dashed rgba(0,0,0,.2);z-index:-1}.space-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:45px 0;position:relative}.space-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;cursor:pointer;transition:all .3s ease}.space-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]{position:relative;width:45px;height:45px;display:flex;align-items:center;justify-content:center;z-index:1}.space-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .diamond[_ngcontent-%COMP%]{width:18px;height:18px;border:2px solid rgba(0,0,0,.5);transform:rotate(45deg);transition:all .3s ease;position:relative}.space-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .diamond[_ngcontent-%COMP%]:after{content:"";position:absolute;width:8px;height:8px;background:#00000080;top:50%;left:50%;transform:translate(-50%,-50%);transition:all .3s ease}.space-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:14px;color:#000000b3;letter-spacing:1px;transition:all .3s ease;white-space:nowrap;opacity:0;visibility:hidden;transform:translate(-20px);position:absolute;left:45px}.space-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{position:absolute;font-size:13px;color:#000000b3;transition:all .3s ease;opacity:0;visibility:hidden;z-index:2}.space-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:#8a2be2}.space-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .diamond[_ngcontent-%COMP%]{border-color:#8a2be2;background:transparent}.space-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .diamond[_ngcontent-%COMP%]:after{background:#8a2be2}.space-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{color:#8a2be2}.space-nav[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:translate(0)}.space-nav[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]:hover   .diamond[_ngcontent-%COMP%]{border-color:#8a2be2;background:transparent}.space-nav[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]:hover   .diamond[_ngcontent-%COMP%]:after{background:transparent;visibility:hidden}.space-nav[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]:hover   .number[_ngcontent-%COMP%]{opacity:1;visibility:visible;color:#8a2be2}@media (max-width: 768px){.space-nav[_ngcontent-%COMP%]{left:20px}.space-nav[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:12px}}']})};var tt=()=>[1,2,3,4,5,6,7];function et(t,o){if(t&1&&l(0,"div",13),t&2){let e=z();F("animate",e.isAnimating)}}var y=class t{constructor(o,e,r,s){this.el=o;this.renderer=e;this.platformId=r;this.router=s;this.router.events.subscribe(a=>{a instanceof H&&this.startAnimation()}),N(this.platformId)&&(this.element=this.el.nativeElement.querySelector(".glass-container"),this.renderer.listen("document","mousemove",a=>{window.requestAnimationFrame(()=>{this.transformElement(a.clientX,a.clientY)})}),this.renderer.listen("document","mouseleave",()=>{this.element&&this.renderer.setStyle(this.element,"transform","rotateX(0) rotateY(0)")}))}isAnimating=!1;name;multiple=25;element;startAnimation(){this.isAnimating=!0,setTimeout(()=>{this.isAnimating=!1},2e3)}transformElement(o,e){if(!this.element)return;let r=this.element.getBoundingClientRect(),s=-(e-r.y-r.height/2)/this.multiple,a=(o-r.x-r.width/2)/this.multiple;s=s>10?10:s,a=a>10?10:a,s=s<-10?-10:s,a=a<-10?-10:a,this.renderer.setStyle(this.element,"transform",`rotateX(${s}deg) rotateY(${a}deg)`)}static \u0275fac=function(e){return new(e||t)(h(R),h(T),h(I),h(g))};static \u0275cmp=C({type:t,selectors:[["app-root"]],decls:28,vars:2,consts:[[1,"container"],[3,"navigationClicked"],[1,"logo"],["src","assets/slb_logo.svg","alt","SLB Logo"],[1,"header"],[1,"hashtags"],[1,"main-content"],[1,"circles-container"],[1,"dripping-circles"],["class","circle",3,"animate",4,"ngFor","ngForOf"],[1,"footer-text"],[1,"highlight"],[1,"badge"],[1,"circle"]],template:function(e,r){e&1&&(n(0,"div",0)(1,"app-navigation",1),j("navigationClicked",function(){return r.startAnimation()}),i(),n(2,"div",2),l(3,"img",3),i(),n(4,"div",4)(5,"h1"),c(6,"International Day of Persons with Disabilities"),i(),n(7,"div",5)(8,"p"),c(9,"#WeAreInclusive"),i(),n(10,"p"),c(11,"#WeAreSlb"),i()()(),n(12,"div",6),l(13,"router-outlet"),i(),n(14,"div",7)(15,"div",8),_(16,et,1,2,"div",9),i()(),n(17,"div",10)(18,"p"),c(19,"Here, we support each other"),i(),n(20,"p"),c(21,"Here, we can all thrive"),i(),n(22,"p",11),c(23,"Here, is SLB"),i()(),n(24,"div",12),c(25," From Awareness"),l(26,"br"),c(27,"to Acceptance "),i()()),e&2&&(d(16),u("ngForOf",O(1,tt)))},dependencies:[P,M,x,Y,w],styles:[".container[_ngcontent-%COMP%]{background-color:#f0e6ff;height:98vh;width:100%;position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:center;box-sizing:border-box;margin:0}.logo[_ngcontent-%COMP%]{position:absolute;top:min(2rem,4vh);left:min(2rem,4vh)}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:min(120px,15vw)}.header[_ngcontent-%COMP%]{position:absolute;top:min(2rem,4vh);right:min(2rem,4vh);text-align:right;max-width:50vw}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#00f;margin-bottom:.5rem;font-size:clamp(1rem,2vw,1.5rem)}.header[_ngcontent-%COMP%]   .hashtags[_ngcontent-%COMP%]{color:#00f;font-size:clamp(.8rem,1.5vw,1.2rem)}.header[_ngcontent-%COMP%]   .hashtags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.circles-container[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:center;width:100%}.dripping-circles[_ngcontent-%COMP%]{position:relative;width:min(100vh,100vw);height:min(100vh,100vw)}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{position:absolute;border-radius:50%;background:#8000ff1a;top:50%;left:50%;transform:translate(-50%,-50%)}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(1){width:180%;height:180%}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(1).animate{animation:_ngcontent-%COMP%_drip1 2s}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2){width:160%;height:160%}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2).animate{animation:_ngcontent-%COMP%_drip2 2s}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(3){width:140%;height:140%}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(3).animate{animation:_ngcontent-%COMP%_drip3 2s}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(4){width:120%;height:120%}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(4).animate{animation:_ngcontent-%COMP%_drip4 2s}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(5){width:100%;height:100%}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(5).animate{animation:_ngcontent-%COMP%_drip5 2s}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(6){width:80%;height:80%}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(6).animate{animation:_ngcontent-%COMP%_drip6 2s}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(7){width:60%;height:60%}.dripping-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(7).animate{animation:_ngcontent-%COMP%_drip7 2s}@keyframes _ngcontent-%COMP%_drip1{0%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.2)}to{transform:translate(-50%,-50%) scale(1)}}@keyframes _ngcontent-%COMP%_drip2{0%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.2)}to{transform:translate(-50%,-50%) scale(1)}}@keyframes _ngcontent-%COMP%_drip3{0%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.2)}to{transform:translate(-50%,-50%) scale(1)}}@keyframes _ngcontent-%COMP%_drip4{0%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.2)}to{transform:translate(-50%,-50%) scale(1)}}@keyframes _ngcontent-%COMP%_drip5{0%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.2)}to{transform:translate(-50%,-50%) scale(1)}}@keyframes _ngcontent-%COMP%_drip6{0%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.2)}to{transform:translate(-50%,-50%) scale(1)}}@keyframes _ngcontent-%COMP%_drip7{0%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.2)}to{transform:translate(-50%,-50%) scale(1)}}.footer-text[_ngcontent-%COMP%]{position:absolute;bottom:min(2rem,4vh);left:min(2rem,4vh);color:#00f}.footer-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.5rem 0;font-size:clamp(1rem,2vw,1.5rem)}.footer-text[_ngcontent-%COMP%]   p.highlight[_ngcontent-%COMP%]{font-weight:700}.badge[_ngcontent-%COMP%]{position:absolute;bottom:min(2rem,4vh);right:min(2rem,4vh);background:#00f;color:#fff;padding:clamp(.5rem,1.5vw,1rem);border-radius:15px;text-align:center;font-size:clamp(.8rem,1.5vw,1rem)}@media (max-width: 768px){.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.2rem}.header[_ngcontent-%COMP%]   .hashtags[_ngcontent-%COMP%]{font-size:.9rem}.footer-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem}.badge[_ngcontent-%COMP%]{font-size:.9rem;padding:.8rem}}.main-content[_ngcontent-%COMP%]{position:absolute;z-index:1;width:100%;max-width:90vw;margin:5vh auto;padding:2rem;display:flex;justify-content:center;align-items:center}"]})};D(y,G).catch(t=>console.error(t));
