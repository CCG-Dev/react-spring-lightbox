"use strict";var e=require("react"),t=require("@babel/runtime/helpers/extends"),n=require("@react-spring/web"),r=require("react-use-gesture"),i=require("@babel/runtime/helpers/defineProperty"),a=require("@babel/runtime/helpers/objectWithoutProperties"),l=require("styled-components"),o=require("react-dom");function s(e){return e&&e.__esModule?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var u=c(e),d=s(t),g=s(i),f=s(a),p=s(l),m=s(o);const h=e=>{let{currentTranslate:[t,n],imageRef:r,pinchDelta:i,scale:a,touchOrigin:[l,o]}=e;if(!r?.current)return[0,0];const{height:s,left:c,top:u,width:d}=r.current?.getBoundingClientRect();return[-((l-c-d/2)/a)*i+t,-((o-u-s/2)/a)*i+n]},v=e=>{if(!e.current)return!1;const{bottom:t,left:n,right:r,top:i}=e.current?.getBoundingClientRect(),{innerHeight:a,innerWidth:l}=window;return n>.5*l||i>.5*a||r<.5*l||t<.5*a},y=["style"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){g.default(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const x={pinching:!1,scale:1,translateX:0,translateY:0},E=t=>{let{imgProps:{style:i},inline:a,isCurrentImage:l,pagerHeight:o,pagerIsDragging:s,setDisableDrag:c,singleClickToZoom:g}=t,p=f.default(t.imgProps,y);const[m,b]=e.useState(!1),[E,P]=e.useState(!0),k=e.useRef(null),[{scale:j,translateX:D,translateY:T},$]=n.useSpring((()=>w(w({},x),{},{onChange:(e,t)=>{(e.value.scale<1||!e.value.pinching)&&t.start(x),e.value.scale>1&&v(k)&&t.start(x)},onRest:(e,t)=>{1===e.value.scale&&(t.start(x),c(!1))}})));return e.useEffect((()=>{l||1===j.get()||$.start(x)}),[l,j,$]),r.useGesture({onDrag:e=>{let{cancel:t,first:n,memo:r={initialTranslateX:0,initialTranslateY:0},movement:[i,a],pinching:l,tap:o,touches:c}=e;if(!(s||1===j.get()||o||(i&&a&&!m&&b(!0),c>1||l||j.get()<=1)))return j.get()>1&&v(k)?void t():n?{initialTranslateX:D.get(),initialTranslateY:T.get()}:($.start({translateX:r.initialTranslateX+i,translateY:r.initialTranslateY+a}),r)},onDragEnd:e=>{let{memo:t}=e;void 0!==t&&setTimeout((()=>b(!1)),100)},onPinch:e=>{let{cancel:t,ctrlKey:n,event:r,last:i,movement:[a],origin:[l,o]}=e;if(s)return;if(c(!0),a&&!m&&b(!0),i)return void t();const u=n?1e3:250,d=j.get()+a/u,g=d-j.get();let f=[l,o];"clientX"in r&&"clientY"in r&&n&&(f=[r.clientX,r.clientY]);const[p,v]=h({currentTranslate:[D.get(),T.get()],imageRef:k,pinchDelta:g,scale:j.get(),touchOrigin:f});d<.5?$.start({pinching:!0,scale:.5}):d>3?$.start({pinching:!0,scale:3}):$.start({pinching:!0,scale:d,translateX:p,translateY:v})},onPinchEnd:()=>{s||(j.get()>1?c(!0):$.start(x),setTimeout((()=>b(!1)),100))}},{domTarget:k,drag:{filterTaps:!0},enabled:!a,eventOptions:{passive:!1}}),(t=>{let{enabled:n=!0,latency:r=300,onDoubleClick:i=(()=>null),onSingleClick:a=(()=>null),ref:l}=t;e.useEffect((()=>{const e=l.current;let t,o=0;const s=e=>{n&&(o+=1,t=setTimeout((()=>{1===o?a(e):2===o&&i(e),o=0}),r))};return e?.addEventListener("click",s),()=>{e?.removeEventListener("click",s),t&&clearTimeout(t)}}))})({[g?"onSingleClick":"onDoubleClick"]:e=>{if(s||m)return void e.stopPropagation();if(1!==j.get())return void $.start(x);const{clientX:t,clientY:n}=e,r=j.get()+1,i=r-j.get(),[a,l]=h({currentTranslate:[D.get(),T.get()],imageRef:k,pinchDelta:i,scale:j.get(),touchOrigin:[t,n]});c(!0),$.start({pinching:!0,scale:r,translateX:a,translateY:l})},enabled:!a,latency:g?0:200,ref:k}),u.default.createElement(u.default.Fragment,null,u.default.createElement(O,d.default({$inline:a,$loading:E,className:"lightbox-image",draggable:"false",onClick:e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},onDragStart:e=>{e.preventDefault()},onLoad:()=>P(!1),ref:k,style:w(w({},i),{},{maxHeight:o,transform:n.to([j,D,T],((e,t,n)=>`translate(${t}px, ${n}px) scale(${e})`))},l&&{willChange:"transform"})},p)),E&&u.default.createElement(C,null))};E.displayName="Image";const O=p.default(n.animated.img)`
    width: auto;
    height: auto;
    max-width: 100%;
    user-select: none;
    touch-action: ${e=>{let{$inline:t}=e;return t?"pan-y":"none"}};
    ${e=>{let{$loading:t}=e;return t?"display: none;":""}}
    ::selection {
        background: none;
    }
`,C=p.default.div`
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
`,P=t=>{let{currentIndex:i,images:a,imageStageHeight:l,imageStageWidth:o,inline:s,onClose:c,onNext:g,onPrev:f,renderImageOverlay:p,singleClickToZoom:m}=t;const h=e.useRef(!0),[v,y]=e.useState(!1),[b,w]=e.useState("100%"),[x,O]=e.useState(!1);e.useEffect((()=>{const e=s?l:l-50;e!==b&&w(e)}),[s,b,l]);const C=u.default.useCallback((function(e){const t=(e-i)*o+(arguments.length>1&&void 0!==arguments[1]&&arguments[1]?arguments.length>2&&void 0!==arguments[2]?arguments[2]:0:0);return e<i-1||e>i+1?{display:"none",x:t}:{display:"flex",x:t}}),[i,o]),[P,I]=n.useSprings(a.length,(e=>C(e)));e.useEffect((()=>{h.current?h.current=!1:I.start((e=>C(e)))}),[i,C,I]);const S=r.useGesture({onDrag:e=>{let{active:t,cancel:n,direction:[r],distance:i,down:a,movement:[l],tap:s,touches:c,velocity:u}=e;if(v||0===l||s)return;x||O(!0);const d=Math.abs(r)>.7;if((a&&d&&i>o/3.5||a&&d&&u>2)&&t){const e=r>0?-1:1;return n(),void(e>0?g():e<0&&f())}c>1?n():I.start((e=>C(e,a,l)))},onDragEnd:()=>{x&&(I.start((e=>C(e))),setTimeout((()=>O(!1)),100))},onWheel:e=>{let{ctrlKey:t,direction:[n,r],velocity:i}=e;if(t||v||0===i)return;x||O(!0);if(i>1.1){const e=n+r>0?-1:1;e>0?g():e<0&&f()}},onWheelEnd:()=>{I.start((e=>C(e))),setTimeout((()=>O(!1)),100)}},{drag:{filterTaps:!0},wheel:{enabled:!s}});return u.default.createElement(k,null,P.map(((e,t)=>{let{display:n,x:r}=e;return u.default.createElement(T,d.default({$inline:s},S(),{className:"lightbox-image-pager",key:t,onClick:()=>{if(c)return Math.abs(r.get())<1&&!v&&c()},role:"presentation",style:{display:n,transform:r.to((e=>`translateX(${e}px)`))}}),u.default.createElement(D,null,u.default.createElement(j,null,u.default.createElement($,{$inline:s,onClick:e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}},u.default.createElement(E,{imgProps:a[t],inline:s,isCurrentImage:t===i,pagerHeight:b,pagerIsDragging:x,setDisableDrag:y,singleClickToZoom:m}),p()))))})))};P.displayName="ImagePager";const k=p.default.div`
    height: 100%;
    width: 100%;
`,j=p.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,D=p.default.div`
    width: 100%;
    display: flex;
    justify-content: center;
`,T=p.default(n.animated.span)`
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
`,$=p.default.div`
    position: relative;
    touch-action: ${e=>{let{$inline:t}=e;return t?"pan-y":"none"}};
    user-select: none;
    display: flex;
    justify-content: center;
    width: 100%;
`,I=e=>{let{currentIndex:t,images:n}=e;return u.createElement(S,null,n.map(((e,n)=>{let{alt:r,src:i}=e;return u.createElement(N,{$isCurrentImage:n===t,alt:r,key:`${r}-${i}-${n}`,src:i})})))},S=p.default.div`
    width: 100%;
    height: inherit;
`,N=p.default.img`
    ${e=>{let{$isCurrentImage:t}=e;return!t&&l.css`
            visibility: hidden;
            display: none;
        `}}
    height:100%;
    width: 100%;
    object-fit: contain;
`,L=t=>{let{className:n="",currentIndex:r,images:i,inline:a,onClose:l,onNext:o,onPrev:s,renderImageOverlay:c,renderNextButton:d,renderPrevButton:g,singleClickToZoom:f}=t;const p=r>0,m=r+1<i.length,h=m?o:()=>null,v=p?s:()=>null,[{height:y,width:b},w]=(()=>{const t=e.useRef(null),[n,r]=e.useState(null),[i,a]=e.useState({height:t.current?.clientHeight||0,width:t.current?.clientWidth||0}),l=e.useCallback((e=>{null!==e&&(r(e),a({height:e.clientHeight,width:e.clientWidth}))}),[]);return e.useEffect((()=>{const e=()=>{if(n){const e=n.clientHeight,t=n.clientWidth;e===i.height&&t===i.width||a({height:e,width:t})}};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}}),[n,i.height,i.width]),[i,l]})();return u.default.createElement(W,{className:n,"data-testid":"lightbox-image-stage",ref:w},g({canPrev:p}),b?u.default.createElement(P,{currentIndex:r,images:i,imageStageHeight:y,imageStageWidth:b,inline:a,onClose:l,onNext:h,onPrev:v,renderImageOverlay:c,singleClickToZoom:f}):a?u.default.createElement(I,{currentIndex:r,images:i}):null,d({canNext:m}))},W=p.default.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){g.default(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Y=e=>{let{children:t,className:r,isOpen:i,pageTransitionConfig:a,style:l}=e;const o={config:H(H({},n.config.default),{},{friction:32,mass:1,tension:320}),enter:{opacity:1,transform:"scale(1)"},from:{opacity:0,transform:"scale(0.75)"},leave:{opacity:0,transform:"scale(0.75)"}},s=n.useTransition(i,H(H({},o),a));return u.default.createElement(u.default.Fragment,null,s(((e,n)=>n&&u.default.createElement(R,{className:"lightbox-container"+(r?` ${r}`:""),"data-testid":"lightbox-container",style:H(H({},e),l)},t))))},R=p.default(n.animated.div)`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 400;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;class q extends u.default.Component{constructor(){super(...arguments),g.default(this,"portalContainer",void 0),g.default(this,"body",void 0),g.default(this,"preventWheel",(e=>e.preventDefault()))}componentDidMount(){this.body=document.body,this.portalContainer=document.createElement("div"),this.portalContainer.setAttribute("class","lightbox-portal"),this.body.appendChild(this.portalContainer),this.forceUpdate(),this.portalContainer.addEventListener("wheel",this.preventWheel)}componentWillUnmount(){this.portalContainer.removeEventListener("wheel",this.preventWheel),this.body.removeChild(this.portalContainer)}render(){if(void 0===this.portalContainer)return null;const{children:e}=this.props;return u.default.createElement(u.default.Fragment,null,m.default.createPortal(e,this.portalContainer))}}module.exports=t=>{let{className:n="",currentIndex:r,images:i=[],inline:a=!1,isOpen:l,onClose:o,onNext:s,onPrev:c,pageTransitionConfig:d=null,renderFooter:g=(()=>null),renderHeader:f=(()=>null),renderImageOverlay:p=(()=>null),renderNextButton:m=(()=>null),renderPrevButton:h=(()=>null),singleClickToZoom:v=!1,style:y={}}=t;e.useEffect((()=>{const e=e=>{l&&["ArrowUp","ArrowDown","End","Home","PageUp","PageDown"].includes(e.key)&&e.preventDefault()},t=e=>{if(l)switch(e.key){case"ArrowLeft":c();break;case"ArrowRight":s();break;case"Escape":o&&o();break;default:e.preventDefault()}};return document.addEventListener("keyup",t),document.addEventListener("keydown",e),()=>{document.removeEventListener("keyup",t),document.removeEventListener("keydown",e)}}));const b=u.default.createElement(L,{currentIndex:r,images:i,inline:a,onClose:o,onNext:s,onPrev:c,renderImageOverlay:p,renderNextButton:m,renderPrevButton:h,singleClickToZoom:v});return a?b:u.default.createElement(q,null,u.default.createElement(Y,{className:n,isOpen:l,pageTransitionConfig:d,style:y},f(),b,g()))};
//# sourceMappingURL=index.cjs.js.map
