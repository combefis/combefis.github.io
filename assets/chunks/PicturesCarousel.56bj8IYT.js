import{d as Y,p as s,a2 as A,V as _,v as Me,P as Oe,x as je,h as O,q as ee,a3 as Se,a4 as h,L as m,F as ye,o as te,b as we,w as ne,G as xe,k as $,c as Le,C as Ee,j as z,K as Ie,t as De,_ as Pe}from"./framework.xETXYpcG.js";/**
 * Vue 3 Carousel 0.3.4
 * (c) 2024
 * @license MIT
 */const v={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},_e={itemsToShow:{default:v.itemsToShow,type:Number},itemsToScroll:{default:v.itemsToScroll,type:Number},wrapAround:{default:v.wrapAround,type:Boolean},throttle:{default:v.throttle,type:Number},snapAlign:{default:v.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:v.transition,type:Number},breakpoints:{default:v.breakpoints,type:Object},autoplay:{default:v.autoplay,type:Number},pauseAutoplayOnHover:{default:v.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:v.mouseDrag,type:Boolean},touchDrag:{default:v.touchDrag,type:Boolean},dir:{default:v.dir,validator(t){return["rtl","ltr"].includes(t)}},i18n:{default:v.i18n,type:Object},settings:{default(){return{}},type:Object}};function Be({config:t,slidesCount:n}){const{snapAlign:e,wrapAround:r,itemsToShow:l=1}=t;if(r)return Math.max(n-1,0);let o;switch(e){case"start":o=n-l;break;case"end":o=n-1;break;case"center":case"center-odd":o=n-Math.ceil((l-.5)/2);break;case"center-even":o=n-Math.ceil(l/2);break;default:o=0;break}return Math.max(o,0)}function Re({config:t,slidesCount:n}){const{wrapAround:e,snapAlign:r,itemsToShow:l=1}=t;let o=0;if(e||l>n)return o;switch(r){case"start":o=0;break;case"end":o=l-1;break;case"center":case"center-odd":o=Math.floor((l-1)/2);break;case"center-even":o=Math.floor((l-2)/2);break;default:o=0;break}return o}function ae({val:t,max:n,min:e}){return n<e?t:Math.min(Math.max(t,e),n)}function Ve({config:t,currentSlide:n,slidesCount:e}){const{snapAlign:r,wrapAround:l,itemsToShow:o=1}=t;let p=n;switch(r){case"center":case"center-odd":p-=(o-1)/2;break;case"center-even":p-=(o-2)/2;break;case"end":p-=o-1;break}return l?p:ae({val:p,max:e-o,min:0})}function Ae(t){return t?t.reduce((n,e)=>{var r;return e.type===ye?[...n,...Ae(e.children)]:((r=e.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?[...n,e]:n},[]):[]}function U({val:t,max:n,min:e=0}){return t>n?U({val:t-(n+1),max:n,min:e}):t<e?U({val:t+(n+1),max:n,min:e}):t}function Xe(t,n){let e;return n?function(...r){const l=this;e||(t.apply(l,r),e=!0,setTimeout(()=>e=!1,n))}:t}function $e(t,n){let e;return function(...r){e&&clearTimeout(e),e=setTimeout(()=>{t(...r),e=null},n)}}function Te(t="",n={}){return Object.entries(n).reduce((e,[r,l])=>e.replace(`{${r}}`,String(l)),t)}var ze=Y({name:"ARIA",setup(){const t=m("config",A(Object.assign({},v))),n=m("currentSlide",s(0)),e=m("slidesCount",s(0));return()=>h("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Te(t.i18n.itemXofY,{currentSlide:n.value+1,slidesCount:e.value}))}}),Ue=Y({name:"Carousel",props:_e,setup(t,{slots:n,emit:e,expose:r}){var l;const o=s(null),p=s([]),u=s(0),d=s(0),i=A(Object.assign({},v));let b=Object.assign({},v),w;const c=s((l=t.modelValue)!==null&&l!==void 0?l:0),N=s(0),I=s(0),y=s(0),j=s(0);let M,H;_("config",i),_("slidesCount",d),_("currentSlide",c),_("maxSlide",y),_("minSlide",j),_("slideWidth",u);function G(){w=Object.assign({},t.breakpoints),b=Object.assign(Object.assign(Object.assign({},b),t),{i18n:Object.assign(Object.assign({},b.i18n),t.i18n),breakpoints:void 0}),re(b)}function D(){if(!w||!Object.keys(w).length)return;const a=Object.keys(w).map(f=>Number(f)).sort((f,x)=>+x-+f);let g=Object.assign({},b);a.some(f=>{const x=window.matchMedia(`(min-width: ${f}px)`).matches;return x&&(g=Object.assign(Object.assign({},g),w[f])),x}),re(g)}function re(a){Object.entries(a).forEach(([g,f])=>i[g]=f)}const le=$e(()=>{D(),P(),L()},16);function L(){if(!o.value)return;const a=o.value.getBoundingClientRect();u.value=a.width/i.itemsToShow}function P(){d.value<=0||(I.value=Math.ceil((d.value-1)/2),y.value=Be({config:i,slidesCount:d.value}),j.value=Re({config:i,slidesCount:d.value}),i.wrapAround||(c.value=ae({val:c.value,max:y.value,min:j.value})))}Me(()=>{Oe(()=>L()),setTimeout(()=>L(),1e3),D(),de(),window.addEventListener("resize",le,{passive:!0}),e("init")}),je(()=>{H&&clearTimeout(H),M&&clearInterval(M),window.removeEventListener("resize",le,{passive:!0})});let S=!1;const B={x:0,y:0},R={x:0,y:0},T=A({x:0,y:0}),V=s(!1),W=s(!1),ke=()=>{V.value=!0},Ce=()=>{V.value=!1};function se(a){["INPUT","TEXTAREA","SELECT"].includes(a.target.tagName)||(S=a.type==="touchstart",S||a.preventDefault(),!(!S&&a.button!==0||k.value)&&(B.x=S?a.touches[0].clientX:a.clientX,B.y=S?a.touches[0].clientY:a.clientY,document.addEventListener(S?"touchmove":"mousemove",ue,!0),document.addEventListener(S?"touchend":"mouseup",ce,!0)))}const ue=Xe(a=>{W.value=!0,R.x=S?a.touches[0].clientX:a.clientX,R.y=S?a.touches[0].clientY:a.clientY;const g=R.x-B.x,f=R.y-B.y;T.y=f,T.x=g},i.throttle);function ce(){const a=i.dir==="rtl"?-1:1,g=Math.sign(T.x)*.4,f=Math.round(T.x/u.value+g)*a;if(f&&!S){const x=be=>{window.removeEventListener("click",x,!0)};window.addEventListener("click",x,!0)}C(c.value-f),T.x=0,T.y=0,W.value=!1,document.removeEventListener(S?"touchmove":"mousemove",ue,!0),document.removeEventListener(S?"touchend":"mouseup",ce,!0)}function de(){!i.autoplay||i.autoplay<=0||(M=setInterval(()=>{i.pauseAutoplayOnHover&&V.value||X()},i.autoplay))}function ve(){M&&(clearInterval(M),M=null),de()}const k=s(!1);function C(a){const g=i.wrapAround?a:ae({val:a,max:y.value,min:j.value});c.value===g||k.value||(e("slide-start",{slidingToIndex:a,currentSlideIndex:c.value,prevSlideIndex:N.value,slidesCount:d.value}),k.value=!0,N.value=c.value,c.value=g,H=setTimeout(()=>{if(i.wrapAround){const f=U({val:g,max:y.value,min:0});f!==c.value&&(c.value=f,e("loop",{currentSlideIndex:c.value,slidingToIndex:a}))}e("update:modelValue",c.value),e("slide-end",{currentSlideIndex:c.value,prevSlideIndex:N.value,slidesCount:d.value}),k.value=!1,ve()},i.transition))}function X(){C(c.value+i.itemsToScroll)}function F(){C(c.value-i.itemsToScroll)}const fe={slideTo:C,next:X,prev:F};_("nav",fe),_("isSliding",k);const pe=O(()=>Ve({config:i,currentSlide:c.value,slidesCount:d.value}));_("slidesToScroll",pe);const Ne=O(()=>{const a=i.dir==="rtl"?-1:1,g=pe.value*u.value*a;return{transform:`translateX(${T.x-g}px)`,transition:`${k.value?i.transition:0}ms`,margin:i.wrapAround?`0 -${d.value*u.value}px`:"",width:"100%"}});function me(){G(),D(),P(),L(),ve()}Object.keys(_e).forEach(a=>{["modelValue"].includes(a)||ee(()=>t[a],me)}),ee(()=>t.modelValue,a=>{a!==c.value&&C(Number(a))}),ee(d,P),e("before-init"),G();const ge={config:i,slidesCount:d,slideWidth:u,next:X,prev:F,slideTo:C,currentSlide:c,maxSlide:y,minSlide:j,middleSlide:I};r({updateBreakpointsConfigs:D,updateSlidesData:P,updateSlideWidth:L,initDefaultConfigs:G,restartCarousel:me,slideTo:C,next:X,prev:F,nav:fe,data:ge});const q=n.default||n.slides,K=n.addons,he=A(ge);return()=>{const a=Ae(q==null?void 0:q(he)),g=(K==null?void 0:K(he))||[];a.forEach((J,Q)=>J.props.index=Q);let f=a;if(i.wrapAround){const J=a.map((Z,E)=>Se(Z,{index:-a.length+E,isClone:!0,key:`clone-before-${E}`})),Q=a.map((Z,E)=>Se(Z,{index:a.length+E,isClone:!0,key:`clone-after-${E}`}));f=[...J,...a,...Q]}p.value=a,d.value=Math.max(a.length,1);const x=h("ol",{class:"carousel__track",style:Ne.value,onMousedownCapture:i.mouseDrag?se:null,onTouchstartPassiveCapture:i.touchDrag?se:null},f),be=h("div",{class:"carousel__viewport"},x);return h("section",{ref:o,class:{carousel:!0,"is-sliding":k.value,"is-dragging":W.value,"is-hover":V.value,"carousel--rtl":i.dir==="rtl"},dir:i.dir,"aria-label":i.i18n.ariaGallery,tabindex:"0",onMouseenter:ke,onMouseleave:Ce},[be,g,h(ze)])}}}),ie;(function(t){t.arrowUp="arrowUp",t.arrowDown="arrowDown",t.arrowRight="arrowRight",t.arrowLeft="arrowLeft"})(ie||(ie={}));const Ye={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function He(t){return t in ie}const oe=t=>{const n=m("config",A(Object.assign({},v))),e=String(t.name),r=`icon${e.charAt(0).toUpperCase()+e.slice(1)}`;if(!e||typeof e!="string"||!He(e))return;const l=Ye[e],o=h("path",{d:l}),p=n.i18n[r]||t.title||e,u=h("title",p);return h("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":p},[u,o])};oe.props={name:String,title:String};const Ge=(t,{slots:n,attrs:e})=>{const{next:r,prev:l}=n||{},o=m("config",A(Object.assign({},v))),p=m("maxSlide",s(1)),u=m("minSlide",s(1)),d=m("currentSlide",s(1)),i=m("nav",{}),{dir:b,wrapAround:w,i18n:c}=o,N=b==="rtl",I=h("button",{type:"button",class:["carousel__prev",!w&&d.value<=u.value&&"carousel__prev--disabled",e==null?void 0:e.class],"aria-label":c.ariaPreviousSlide,onClick:i.prev},(l==null?void 0:l())||h(oe,{name:N?"arrowRight":"arrowLeft"})),y=h("button",{type:"button",class:["carousel__next",!w&&d.value>=p.value&&"carousel__next--disabled",e==null?void 0:e.class],"aria-label":c.ariaNextSlide,onClick:i.next},(r==null?void 0:r())||h(oe,{name:N?"arrowLeft":"arrowRight"}));return[I,y]},We=()=>{const t=m("config",A(Object.assign({},v))),n=m("maxSlide",s(1)),e=m("minSlide",s(1)),r=m("currentSlide",s(1)),l=m("nav",{}),o=u=>U({val:r.value,max:n.value,min:0})===u,p=[];for(let u=e.value;u<n.value+1;u++){const d=h("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":o(u)},"aria-label":Te(t.i18n.ariaNavigateToSlide,{slideNumber:u+1}),onClick:()=>l.slideTo(u)}),i=h("li",{class:"carousel__pagination-item",key:u},d);p.push(i)}return h("ol",{class:"carousel__pagination"},p)};var Fe=Y({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(t,{slots:n}){const e=m("config",A(Object.assign({},v))),r=m("currentSlide",s(0)),l=m("slidesToScroll",s(0)),o=m("isSliding",s(!1)),p=O(()=>t.index===r.value),u=O(()=>t.index===r.value-1),d=O(()=>t.index===r.value+1),i=O(()=>{const b=Math.floor(l.value),w=Math.ceil(l.value+e.itemsToShow-1);return t.index>=b&&t.index<=w});return()=>{var b;return h("li",{style:{width:`${100/e.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":t.isClone,"carousel__slide--visible":i.value,"carousel__slide--active":p.value,"carousel__slide--prev":u.value,"carousel__slide--next":d.value,"carousel__slide--sliding":o.value},"aria-hidden":!i.value},(b=n.default)===null||b===void 0?void 0:b.call(n,{isActive:p.value,isClone:t.isClone,isPrev:u.value,isNext:d.value,isSliding:o.value,isVisible:i.value}))}}});const qe={class:"carousel__item"},Ke=Y({__name:"PicturesCarousel",props:{images:{}},setup(t){return(n,e)=>(te(),we($(Ue),{"wrap-around":!0},{addons:ne(()=>[xe($(Ge)),xe($(We))]),default:ne(()=>[(te(!0),Le(ye,null,Ee(n.images,({image:r,caption:l},o)=>(te(),we($(Fe),{key:o},{default:ne(()=>[z("div",qe,[z("img",Ie({ref_for:!0},r),null,16),e[0]||(e[0]=z("br",null,null,-1)),z("small",null,De(l),1)])]),_:2},1024))),128))]),_:1}))}}),Qe=Pe(Ke,[["__scopeId","data-v-28bb36f2"]]);export{Qe as P};
