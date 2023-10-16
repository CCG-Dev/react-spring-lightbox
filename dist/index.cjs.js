"use strict";var e=require("react"),t=require("styled-components"),n=require("@babel/runtime/helpers/extends"),r=require("react-use-gesture"),i=require("@react-spring/web"),a=require("@babel/runtime/helpers/defineProperty"),l=require("@babel/runtime/helpers/objectWithoutProperties"),o=require("react-dom");function s(e){return e&&e.__esModule?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var u=c(e),d=s(t),g=s(n),f=s(a),p=s(l),m=s(o);const h=e=>{let{currentTranslate:[t,n],imageRef:r,pinchDelta:i,scale:a,touchOrigin:[l,o]}=e;if(!r?.current)return[0,0];const{height:s,left:c,top:u,width:d}=r.current?.getBoundingClientRect();return[-((l-c-d/2)/a)*i+t,-((o-u-s/2)/a)*i+n]},v=e=>{if(!e.current)return!1;const{bottom:t,left:n,right:r,top:i}=e.current?.getBoundingClientRect(),{innerHeight:a,innerWidth:l}=window;return n>.5*l||i>.5*a||r<.5*l||t<.5*a},y=["style"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){f.default(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const x={pinching:!1,scale:1,translateX:0,translateY:0},E=t=>{let{imgProps:{style:n},inline:a,isCurrentImage:l,loadingComponent:o,pagerHeight:s,pagerIsDragging:c,setDisableDrag:d,singleClickToZoom:f}=t,m=p.default(t.imgProps,y);const[b,E]=e.useState(!1),[P,k]=e.useState(!0),j=e.useRef(null),[{scale:D,translateX:T,translateY:$},I]=i.useSpring((()=>w(w({},x),{},{onChange:(e,t)=>{(e.value.scale<1||!e.value.pinching)&&t.start(x),e.value.scale>1&&v(j)&&t.start(x)},onRest:(e,t)=>{1===e.value.scale&&(t.start(x),d(!1))}})));return e.useEffect((()=>{l||1===D.get()||I.start(x)}),[l,D,I]),r.useGesture({onDrag:e=>{let{cancel:t,first:n,memo:r={initialTranslateX:0,initialTranslateY:0},movement:[i,a],pinching:l,tap:o,touches:s}=e;if(!(c||1===D.get()||o||(i&&a&&!b&&E(!0),s>1||l||D.get()<=1)))return D.get()>1&&v(j)?void t():n?{initialTranslateX:T.get(),initialTranslateY:$.get()}:(I.start({translateX:r.initialTranslateX+i,translateY:r.initialTranslateY+a}),r)},onDragEnd:e=>{let{memo:t}=e;void 0!==t&&setTimeout((()=>E(!1)),100)},onPinch:e=>{let{cancel:t,ctrlKey:n,event:r,last:i,movement:[a],origin:[l,o]}=e;if(c)return;if(d(!0),a&&!b&&E(!0),i)return void t();const s=n?1e3:250,u=D.get()+a/s,g=u-D.get();let f=[l,o];"clientX"in r&&"clientY"in r&&n&&(f=[r.clientX,r.clientY]);const[p,m]=h({currentTranslate:[T.get(),$.get()],imageRef:j,pinchDelta:g,scale:D.get(),touchOrigin:f});u<.5?I.start({pinching:!0,scale:.5}):u>3?I.start({pinching:!0,scale:3}):I.start({pinching:!0,scale:u,translateX:p,translateY:m})},onPinchEnd:()=>{c||(D.get()>1?d(!0):I.start(x),setTimeout((()=>E(!1)),100))}},{domTarget:j,drag:{filterTaps:!0},enabled:!a,eventOptions:{passive:!1}}),(t=>{let{enabled:n=!0,latency:r=300,onDoubleClick:i=(()=>null),onSingleClick:a=(()=>null),ref:l}=t;e.useEffect((()=>{const e=l.current;let t,o=0;const s=e=>{n&&(o+=1,t=setTimeout((()=>{1===o?a(e):2===o&&i(e),o=0}),r))};return e?.addEventListener("click",s),()=>{e?.removeEventListener("click",s),t&&clearTimeout(t)}}))})({[f?"onSingleClick":"onDoubleClick"]:e=>{if(c||b)return void e.stopPropagation();if(1!==D.get())return void I.start(x);const{clientX:t,clientY:n}=e,r=D.get()+1,i=r-D.get(),[a,l]=h({currentTranslate:[T.get(),$.get()],imageRef:j,pinchDelta:i,scale:D.get(),touchOrigin:[t,n]});d(!0),I.start({pinching:!0,scale:r,translateX:a,translateY:l})},enabled:!a,latency:f?0:200,ref:j}),u.default.createElement(u.default.Fragment,null,u.default.createElement(O,g.default({$inline:a,$loading:P,className:"lightbox-image",draggable:"false",onClick:e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},onDragStart:e=>{e.preventDefault()},onLoad:()=>k(!1),onLoadStart:()=>k(!0),ref:j,style:w(w({},n),{},{maxHeight:s,transform:i.to([D,T,$],((e,t,n)=>`translate(${t}px, ${n}px) scale(${e})`))},l&&{willChange:"transform"})},m)),P&&u.default.createElement(u.default.Fragment,null,o||C))};E.displayName="Image";const O=d.default(i.animated.img)`
    width: auto;
    height: auto;
    max-width: 100%;
    user-select: none;
    touch-action: ${e=>{let{$inline:t}=e;return t?"pan-y":"none"}};
    transition: opacity 0.25s ease-out;
    ${e=>{let{$loading:t}=e;return t?"\n            width: 0;\n    height: 0;\n        opacity: 0;\n    ":"\n            opacity: 1;\n      \n            "}}
    ::selection {
        background: none;
    }
`,C=d.default.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
        content: ' ';
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`,P=t=>{let{currentIndex:n,images:a,imageStageHeight:l,imageStageWidth:o,inline:s,loadingComponent:c,onClose:d,onNext:f,onPrev:p,renderImageOverlay:m,singleClickToZoom:h}=t;const v=e.useRef(!0),[y,b]=e.useState(!1),[w,x]=e.useState("100%"),[O,C]=e.useState(!1);e.useEffect((()=>{const e=s?l:l-50;e!==w&&x(e)}),[s,w,l]);const P=u.default.useCallback((function(e){const t=(e-n)*o+(arguments.length>1&&void 0!==arguments[1]&&arguments[1]?arguments.length>2&&void 0!==arguments[2]?arguments[2]:0:0);return e<n-1||e>n+1?{display:"none",x:t}:{display:"flex",x:t}}),[n,o]),[I,S]=i.useSprings(a.length,(e=>P(e)));e.useEffect((()=>{v.current?v.current=!1:S.start((e=>P(e)))}),[n,P,S]);const N=r.useGesture({onDrag:e=>{let{active:t,cancel:n,direction:[r],distance:i,down:a,movement:[l],tap:s,touches:c,velocity:u}=e;if(y||0===l||s)return;O||C(!0);const d=Math.abs(r)>.7;if((a&&d&&i>o/3.5||a&&d&&u>2)&&t){const e=r>0?-1:1;return n(),void(e>0?f():e<0&&p())}c>1?n():S.start((e=>P(e,a,l)))},onDragEnd:()=>{O&&(S.start((e=>P(e))),setTimeout((()=>C(!1)),100))},onWheel:e=>{let{ctrlKey:t,direction:[n,r],velocity:i}=e;if(t||y||0===i)return;O||C(!0);if(i>1.1){const e=n+r>0?-1:1;e>0?f():e<0&&p()}},onWheelEnd:()=>{S.start((e=>P(e))),setTimeout((()=>C(!1)),100)}},{drag:{filterTaps:!0},wheel:{enabled:!s}});return u.default.createElement(k,null,I.map(((e,t)=>{let{display:r,x:i}=e;return u.default.createElement(T,g.default({$inline:s},N(),{className:"lightbox-image-pager",key:t,onClick:()=>{if(d)return Math.abs(i.get())<1&&!y&&d()},role:"presentation",style:{display:r,transform:i.to((e=>`translateX(${e}px)`))}}),u.default.createElement(D,null,u.default.createElement(j,null,u.default.createElement($,{$inline:s,onClick:e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}},u.default.createElement(E,{imgProps:a[t],inline:s,isCurrentImage:t===n,loadingComponent:c,pagerHeight:w,pagerIsDragging:O,setDisableDrag:b,singleClickToZoom:h}),m()))))})))};P.displayName="ImagePager";const k=d.default.div`
    height: 100%;
    width: 100%;
`,j=d.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,D=d.default.div`
    width: 100%;
    display: flex;
    justify-content: center;
`,T=d.default(i.animated.span)`
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
`,$=d.default.div`
    position: relative;
    touch-action: ${e=>{let{$inline:t}=e;return t?"pan-y":"none"}};
    user-select: none;
    display: flex;
    justify-content: center;
    width: 100%;
`,I=e=>{let{currentIndex:t,images:n}=e;return u.createElement(S,null,n.map(((e,n)=>{let{alt:r,src:i}=e;return u.createElement(N,{$isCurrentImage:n===t,alt:r,key:`${r}-${i}-${n}`,src:i})})))},S=d.default.div`
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
`,L=t=>{let{className:n="",currentIndex:r,images:i,inline:a,loadingComponent:l,onClose:o,onNext:s,onPrev:c,renderImageOverlay:d,renderNextButton:g,renderPrevButton:f,singleClickToZoom:p}=t;const m=r>0,h=r+1<i.length,v=h?s:()=>null,y=m?c:()=>null,[{height:b,width:w},x]=(()=>{const t=e.useRef(null),[n,r]=e.useState(null),[i,a]=e.useState({height:t.current?.clientHeight||0,width:t.current?.clientWidth||0}),l=e.useCallback((e=>{null!==e&&(r(e),a({height:e.clientHeight,width:e.clientWidth}))}),[]);return e.useEffect((()=>{const e=()=>{if(n){const e=n.clientHeight,t=n.clientWidth;e===i.height&&t===i.width||a({height:e,width:t})}};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}}),[n,i.height,i.width]),[i,l]})();return u.default.createElement(W,{className:n,"data-testid":"lightbox-image-stage",ref:x},f({canPrev:m}),w?u.default.createElement(P,{currentIndex:r,images:i,imageStageHeight:b,imageStageWidth:w,inline:a,loadingComponent:l,onClose:o,onNext:v,onPrev:y,renderImageOverlay:d,singleClickToZoom:p}):a?u.default.createElement(I,{currentIndex:r,images:i}):null,g({canNext:h}))},W=d.default.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){f.default(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Y=e=>{let{children:t,className:n,isOpen:r,pageTransitionConfig:a,style:l}=e;const o={config:H(H({},i.config.default),{},{friction:32,mass:1,tension:320}),enter:{opacity:1,transform:"scale(1)"},from:{opacity:0,transform:"scale(0.75)"},leave:{opacity:0,transform:"scale(0.75)"}},s=i.useTransition(r,H(H({},o),a));return u.default.createElement(u.default.Fragment,null,s(((e,r)=>r&&u.default.createElement(R,{className:"lightbox-container"+(n?` ${n}`:""),"data-testid":"lightbox-container",style:H(H({},e),l)},t))))},R=d.default(i.animated.div)`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 400;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;class q extends u.default.Component{constructor(){super(...arguments),f.default(this,"portalContainer",void 0),f.default(this,"body",void 0),f.default(this,"preventWheel",(e=>e.preventDefault()))}componentDidMount(){this.body=document.body,this.portalContainer=document.createElement("div"),this.portalContainer.setAttribute("class","lightbox-portal"),this.body.appendChild(this.portalContainer),this.forceUpdate(),this.portalContainer.addEventListener("wheel",this.preventWheel)}componentWillUnmount(){this.portalContainer.removeEventListener("wheel",this.preventWheel),this.body.removeChild(this.portalContainer)}render(){if(void 0===this.portalContainer)return null;const{children:e}=this.props;return u.default.createElement(u.default.Fragment,null,m.default.createPortal(e,this.portalContainer))}}module.exports=t=>{let{className:n="",currentIndex:r,images:i=[],inline:a=!1,isOpen:l,loadingComponent:o=null,onClose:s,onNext:c,onPrev:d,pageTransitionConfig:g=null,renderFooter:f=(()=>null),renderHeader:p=(()=>null),renderImageOverlay:m=(()=>null),renderNextButton:h=(()=>null),renderPrevButton:v=(()=>null),singleClickToZoom:y=!1,style:b={}}=t;e.useEffect((()=>{const e=e=>{l&&["ArrowUp","ArrowDown","End","Home","PageUp","PageDown"].includes(e.key)&&e.preventDefault()},t=e=>{if(l)switch(e.key){case"ArrowLeft":d();break;case"ArrowRight":c();break;case"Escape":s&&s();break;default:e.preventDefault()}};return document.addEventListener("keyup",t),document.addEventListener("keydown",e),()=>{document.removeEventListener("keyup",t),document.removeEventListener("keydown",e)}}));const w=u.default.createElement(L,{currentIndex:r,images:i,inline:a,loadingComponent:o,onClose:s,onNext:c,onPrev:d,renderImageOverlay:m,renderNextButton:h,renderPrevButton:v,singleClickToZoom:y});return a?w:u.default.createElement(q,null,u.default.createElement(Y,{className:n,isOpen:l,pageTransitionConfig:g,style:b},p(),w,f()))};
//# sourceMappingURL=index.cjs.js.map
