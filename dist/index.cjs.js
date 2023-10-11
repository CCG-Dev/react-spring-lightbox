"use strict";var e=require("react"),t=require("styled-components"),n=require("@babel/runtime/helpers/extends"),r=require("react-use-gesture"),i=require("@react-spring/web"),a=require("@babel/runtime/helpers/defineProperty"),l=require("@babel/runtime/helpers/objectWithoutProperties"),o=require("react-dom");function s(e){return e&&e.__esModule?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var u=c(e),d=s(t),g=s(n),f=s(a),p=s(l),h=s(o);const m=e=>{let{currentTranslate:[t,n],imageRef:r,pinchDelta:i,scale:a,touchOrigin:[l,o]}=e;if(!r?.current)return[0,0];const{height:s,left:c,top:u,width:d}=r.current?.getBoundingClientRect();return[-((l-c-d/2)/a)*i+t,-((o-u-s/2)/a)*i+n]},v=e=>{if(!e.current)return!1;const{bottom:t,left:n,right:r,top:i}=e.current?.getBoundingClientRect(),{innerHeight:a,innerWidth:l}=window;return n>.5*l||i>.5*a||r<.5*l||t<.5*a},y=["style"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){f.default(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const O={pinching:!1,scale:1,translateX:0,translateY:0},E=t=>{let{imgProps:{style:n},inline:a,isCurrentImage:l,pagerHeight:o,pagerIsDragging:s,setDisableDrag:c,singleClickToZoom:d}=t,f=p.default(t.imgProps,y);const[h,b]=e.useState(!1),E=e.useRef(null),[{scale:C,translateX:P,translateY:j},k]=i.useSpring((()=>w(w({},O),{},{onChange:(e,t)=>{(e.value.scale<1||!e.value.pinching)&&t.start(O),e.value.scale>1&&v(E)&&t.start(O)},onRest:(e,t)=>{1===e.value.scale&&(t.start(O),c(!1))}})));return e.useEffect((()=>{l||1===C.get()||k.start(O)}),[l,C,k]),r.useGesture({onDrag:e=>{let{cancel:t,first:n,memo:r={initialTranslateX:0,initialTranslateY:0},movement:[i,a],pinching:l,tap:o,touches:c}=e;if(!(s||1===C.get()||o||(i&&a&&!h&&b(!0),c>1||l||C.get()<=1)))return C.get()>1&&v(E)?void t():n?{initialTranslateX:P.get(),initialTranslateY:j.get()}:(k.start({translateX:r.initialTranslateX+i,translateY:r.initialTranslateY+a}),r)},onDragEnd:e=>{let{memo:t}=e;void 0!==t&&setTimeout((()=>b(!1)),100)},onPinch:e=>{let{cancel:t,ctrlKey:n,event:r,last:i,movement:[a],origin:[l,o]}=e;if(s)return;if(c(!0),a&&!h&&b(!0),i)return void t();const u=n?1e3:250,d=C.get()+a/u,g=d-C.get();let f=[l,o];"clientX"in r&&"clientY"in r&&n&&(f=[r.clientX,r.clientY]);const[p,v]=m({currentTranslate:[P.get(),j.get()],imageRef:E,pinchDelta:g,scale:C.get(),touchOrigin:f});d<.5?k.start({pinching:!0,scale:.5}):d>3?k.start({pinching:!0,scale:3}):k.start({pinching:!0,scale:d,translateX:p,translateY:v})},onPinchEnd:()=>{s||(C.get()>1?c(!0):k.start(O),setTimeout((()=>b(!1)),100))}},{domTarget:E,drag:{filterTaps:!0},enabled:!a,eventOptions:{passive:!1}}),(t=>{let{enabled:n=!0,latency:r=300,onDoubleClick:i=(()=>null),onSingleClick:a=(()=>null),ref:l}=t;e.useEffect((()=>{const e=l.current;let t,o=0;const s=e=>{n&&(o+=1,t=setTimeout((()=>{1===o?a(e):2===o&&i(e),o=0}),r))};return e?.addEventListener("click",s),()=>{e?.removeEventListener("click",s),t&&clearTimeout(t)}}))})({[d?"onSingleClick":"onDoubleClick"]:e=>{if(s||h)return void e.stopPropagation();if(1!==C.get())return void k.start(O);const{clientX:t,clientY:n}=e,r=C.get()+1,i=r-C.get(),[a,l]=m({currentTranslate:[P.get(),j.get()],imageRef:E,pinchDelta:i,scale:C.get(),touchOrigin:[t,n]});c(!0),k.start({pinching:!0,scale:r,translateX:a,translateY:l})},enabled:!a,latency:d?0:200,ref:E}),u.default.createElement(x,g.default({$inline:a,className:"lightbox-image",draggable:"false",onClick:e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},onDragStart:e=>{e.preventDefault()},ref:E,style:w(w({},n),{},{maxHeight:o,transform:i.to([C,P,j],((e,t,n)=>`translate(${t}px, ${n}px) scale(${e})`))},l&&{willChange:"transform"})},f))};E.displayName="Image";const x=d.default(i.animated.img)`
    width: auto;
    height: auto;
    max-width: 100%;
    user-select: none;
    touch-action: ${e=>{let{$inline:t}=e;return t?"pan-y":"none"}};
    ::selection {
        background: none;
    }
`,C=t=>{let{currentIndex:n,disableMouseWheel:a,images:l,imageStageHeight:o,imageStageWidth:s,inline:c,onClose:d,onNext:f,onPrev:p,renderImageOverlay:h,singleClickToZoom:m}=t;const v=e.useRef(!0),[y,b]=e.useState(!1),[w,O]=e.useState("100%"),[x,C]=e.useState(!1);e.useEffect((()=>{const e=c?o:o-50;e!==w&&O(e)}),[c,w,o]);const I=u.default.useCallback((function(e){const t=(e-n)*s+(arguments.length>1&&void 0!==arguments[1]&&arguments[1]?arguments.length>2&&void 0!==arguments[2]?arguments[2]:0:0);return e<n-1||e>n+1?{display:"none",x:t}:{display:"flex",x:t}}),[n,s]),[$,N]=i.useSprings(l.length,(e=>I(e)));e.useEffect((()=>{v.current?v.current=!1:N.start((e=>I(e)))}),[n,I,N]);const S=r.useGesture({onDrag:e=>{let{active:t,cancel:n,direction:[r],distance:i,down:a,movement:[l],tap:o,touches:c,velocity:u}=e;if(y||0===l||o)return;x||C(!0);const d=Math.abs(r)>.7;if((a&&d&&i>s/3.5||a&&d&&u>2)&&t){const e=r>0?-1:1;return n(),void(e>0?f():e<0&&p())}c>1?n():N.start((e=>I(e,a,l)))},onDragEnd:()=>{x&&(N.start((e=>I(e))),setTimeout((()=>C(!1)),100))},onWheel:e=>{let{ctrlKey:t,direction:[n,r],velocity:i}=e;if(t||y||0===i)return;if(x||C(!0),console.log("onWheel",a),a)return;if(i>1.1){const e=n+r>0?-1:1;e>0?f():e<0&&p()}},onWheelEnd:()=>{N.start((e=>I(e))),setTimeout((()=>C(!1)),100)}},{drag:{filterTaps:!0},wheel:{enabled:!c}});return u.default.createElement(P,null,$.map(((e,t)=>{let{display:r,x:i}=e;return u.default.createElement(D,g.default({$inline:c},S(),{className:"lightbox-image-pager",key:t,onClick:()=>{if(d)return Math.abs(i.get())<1&&!y&&d()},role:"presentation",style:{display:r,transform:i.to((e=>`translateX(${e}px)`))}}),u.default.createElement(k,null,u.default.createElement(j,null,u.default.createElement(T,{$inline:c,onClick:e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}},u.default.createElement(E,{imgProps:l[t],inline:c,isCurrentImage:t===n,pagerHeight:w,pagerIsDragging:x,setDisableDrag:b,singleClickToZoom:m}),h()))))})))};C.displayName="ImagePager";const P=d.default.div`
    height: 100%;
    width: 100%;
`,j=d.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,k=d.default.div`
    width: 100%;
    display: flex;
    justify-content: center;
`,D=d.default(i.animated.span)`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 100%;
    width: 100%;
    will-change: transform;
    touch-action: ${e=>{let{$inline:t}=e;return t?"pan-y":"none"}};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,T=d.default.div`
    position: relative;
    touch-action: ${e=>{let{$inline:t}=e;return t?"pan-y":"none"}};
    user-select: none;
    display: flex;
    justify-content: center;
    width: 100%;
`,I=e=>{let{currentIndex:t,images:n}=e;return u.createElement($,null,n.map(((e,n)=>{let{alt:r,src:i}=e;return u.createElement(N,{$isCurrentImage:n===t,alt:r,key:`${r}-${i}-${n}`,src:i})})))},$=d.default.div`
    width: 100%;
    height: inherit;
`,N=d.default.img`
    ${e=>{let{$isCurrentImage:n}=e;return!n&&t.css`
            visibility: hidden;
            display: none;
        `}}
    height:100%;
    width: 100%;
    object-fit: contain;
`,S=t=>{let{className:n="",currentIndex:r,disableMouseWheel:i,images:a,inline:l,onClose:o,onNext:s,onPrev:c,renderImageOverlay:d,renderNextButton:g,renderPrevButton:f,singleClickToZoom:p}=t;const h=r>0,m=r+1<a.length,v=m?s:()=>null,y=h?c:()=>null,[{height:b,width:w},O]=(()=>{const t=e.useRef(null),[n,r]=e.useState(null),[i,a]=e.useState({height:t.current?.clientHeight||0,width:t.current?.clientWidth||0}),l=e.useCallback((e=>{null!==e&&(r(e),a({height:e.clientHeight,width:e.clientWidth}))}),[]);return e.useEffect((()=>{const e=()=>{if(n){const e=n.clientHeight,t=n.clientWidth;e===i.height&&t===i.width||a({height:e,width:t})}};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}}),[n,i.height,i.width]),[i,l]})();return u.default.createElement(W,{className:n,"data-testid":"lightbox-image-stage",ref:O},f({canPrev:h}),w?u.default.createElement(C,{currentIndex:r,disableMouseWheel:i,images:a,imageStageHeight:b,imageStageWidth:w,inline:l,onClose:o,onNext:v,onPrev:y,renderImageOverlay:d,singleClickToZoom:p}):l?u.default.createElement(I,{currentIndex:r,images:a}):null,g({canNext:m}))},W=d.default.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){f.default(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const H=e=>{let{children:t,className:n,isOpen:r,pageTransitionConfig:a,style:l}=e;const o={config:X(X({},i.config.default),{},{friction:32,mass:1,tension:320}),enter:{opacity:1,transform:"scale(1)"},from:{opacity:0,transform:"scale(0.75)"},leave:{opacity:0,transform:"scale(0.75)"}},s=i.useTransition(r,X(X({},o),a));return u.default.createElement(u.default.Fragment,null,s(((e,r)=>r&&u.default.createElement(Y,{className:"lightbox-container"+(n?` ${n}`:""),"data-testid":"lightbox-container",style:X(X({},e),l)},t))))},Y=d.default(i.animated.div)`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 400;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;class M extends u.default.Component{constructor(){super(...arguments),f.default(this,"portalContainer",void 0),f.default(this,"body",void 0),f.default(this,"preventWheel",(e=>e.preventDefault()))}componentDidMount(){this.body=document.body,this.portalContainer=document.createElement("div"),this.portalContainer.setAttribute("class","lightbox-portal"),this.body.appendChild(this.portalContainer),this.forceUpdate(),this.portalContainer.addEventListener("wheel",this.preventWheel)}componentWillUnmount(){this.portalContainer.removeEventListener("wheel",this.preventWheel),this.body.removeChild(this.portalContainer)}render(){if(void 0===this.portalContainer)return null;const{children:e}=this.props;return u.default.createElement(u.default.Fragment,null,h.default.createPortal(e,this.portalContainer))}}module.exports=t=>{let{className:n="",currentIndex:r,disableMouseWheel:i=!1,images:a=[],inline:l=!1,isOpen:o,onClose:s,onNext:c,onPrev:d,pageTransitionConfig:g=null,renderFooter:f=(()=>null),renderHeader:p=(()=>null),renderImageOverlay:h=(()=>null),renderNextButton:m=(()=>null),renderPrevButton:v=(()=>null),singleClickToZoom:y=!1,style:b={}}=t;e.useEffect((()=>{const e=e=>{o&&["ArrowUp","ArrowDown","End","Home","PageUp","PageDown"].includes(e.key)&&e.preventDefault()},t=e=>{if(o)switch(e.key){case"ArrowLeft":d();break;case"ArrowRight":c();break;case"Escape":s&&s();break;default:e.preventDefault()}};return document.addEventListener("keyup",t),document.addEventListener("keydown",e),()=>{document.removeEventListener("keyup",t),document.removeEventListener("keydown",e)}}));const w=u.default.createElement(S,{currentIndex:r,disableMouseWheel:i,images:a,inline:l,onClose:s,onNext:c,onPrev:d,renderImageOverlay:h,renderNextButton:m,renderPrevButton:v,singleClickToZoom:y});return l?w:u.default.createElement(M,null,u.default.createElement(H,{className:n,isOpen:o,pageTransitionConfig:g,style:b},p(),w,f()))};
//# sourceMappingURL=index.cjs.js.map
