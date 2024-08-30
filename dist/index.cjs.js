"use strict";var e=require("react"),t=require("styled-components"),n=require("@babel/runtime/helpers/extends"),r=require("react-use-gesture"),i=require("@react-spring/web"),a=require("@babel/runtime/helpers/defineProperty"),o=require("@babel/runtime/helpers/objectWithoutProperties"),l=require("react-dom");function s(e){return e&&e.__esModule?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var u=c(e),d=s(t),g=s(n),m=s(a),f=s(o),h=s(l);const p=e=>{let{currentTranslate:[t,n],imageRef:r,pinchDelta:i,scale:a,touchOrigin:[o,l]}=e;if(!r?.current)return[0,0];const{height:s,left:c,top:u,width:d}=r.current?.getBoundingClientRect();return[-((o-c-d/2)/a)*i+t,-((l-u-s/2)/a)*i+n]},v=e=>{if(!e.current)return!1;const{bottom:t,left:n,right:r,top:i}=e.current?.getBoundingClientRect(),{innerHeight:a,innerWidth:o}=window;return n>.5*o||i>.5*a||r<.5*o||t<.5*a},y=["style"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){m.default(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const O={pinching:!1,scale:1,translateX:0,translateY:0},C=t=>{let{imgProps:{style:n},inline:a,isCurrentImage:o,loadingComponent:l,onZoomLevelChange:s,pagerHeight:c,pagerIsDragging:d,setDisableDrag:m,showZoomIconsOnHover:h,singleClickToZoom:b,zoomLevel:C}=t,P=f.default(t.imgProps,y);const[k,j]=e.useState(!1),[D,T]=e.useState(!0),I=e.useRef(null),[{scale:L,translateX:$,translateY:Z},H]=i.useSpring((()=>w(w({},O),{},{onChange:(e,t)=>{(e.value.scale<1||!e.value.pinching)&&t.start(O),e.value.scale>1&&v(I)&&t.start(O)},onRest:(e,t)=>{1===e.value.scale&&(t.start(O),m(!1))}})));e.useEffect((()=>{const e=L.get(),t=C||1;t!==e&&(e<t&&S(t-e),e>t&&W(e-t))}),[C]),e.useEffect((()=>{o||1===L.get()||H.start(O)}),[o,L,H]),r.useGesture({onDrag:e=>{let{cancel:t,first:n,memo:r={initialTranslateX:0,initialTranslateY:0},movement:[i,a],pinching:o,tap:l,touches:s}=e;if(!(d||1===L.get()||l||(i&&a&&!k&&j(!0),s>1||o||L.get()<=1)))return L.get()>1&&v(I)?void t():n?{initialTranslateX:$.get(),initialTranslateY:Z.get()}:(H.start({translateX:r.initialTranslateX+i,translateY:r.initialTranslateY+a}),r)},onDragEnd:e=>{let{memo:t}=e;void 0!==t&&setTimeout((()=>j(!1)),100)},onPinch:e=>{let{cancel:t,ctrlKey:n,event:r,last:i,movement:[a],origin:[o,l]}=e;if(d)return;if(m(!0),a&&!k&&j(!0),i)return void t();const s=n?1e3:250,c=L.get()+a/s,u=c-L.get();let g=[o,l];"clientX"in r&&"clientY"in r&&n&&(g=[r.clientX,r.clientY]);const[f,h]=p({currentTranslate:[$.get(),Z.get()],imageRef:I,pinchDelta:u,scale:L.get(),touchOrigin:g});c<.5?H.start({pinching:!0,scale:.5}):c>3?H.start({pinching:!0,scale:3}):H.start({pinching:!0,scale:c,translateX:f,translateY:h})},onPinchEnd:()=>{d||(L.get()>1?m(!0):H.start(O),setTimeout((()=>j(!1)),100))}},{domTarget:I,drag:{filterTaps:!0},enabled:!a,eventOptions:{passive:!1}}),(t=>{let{enabled:n=!0,latency:r=300,onDoubleClick:i=(()=>null),onSingleClick:a=(()=>null),ref:o}=t;e.useEffect((()=>{const e=o.current;let t,l=0;const s=e=>{n&&(l+=1,t=setTimeout((()=>{1===l?a(e):2===l&&i(e),l=0}),r))};return e?.addEventListener("click",s),()=>{e?.removeEventListener("click",s),t&&clearTimeout(t)}}))})({[b?"onSingleClick":"onDoubleClick"]:e=>{if(d||k)return void e.stopPropagation();if(1!==L.get())return H.start(O),void(s&&s(1));const{clientX:t,clientY:n}=e,r=L.get()+1,i=r-L.get(),[a,o]=p({currentTranslate:[$.get(),Z.get()],imageRef:I,pinchDelta:i,scale:L.get(),touchOrigin:[t,n]});s&&s(r),m(!0),H.start({pinching:!0,scale:r,translateX:a,translateY:o})},enabled:!a,latency:b?0:200,ref:I});const S=e=>{const t=L.get()+(e||.5),n=t-L.get(),r=window.innerWidth/2,i=window.innerHeight/2,[a,o]=p({currentTranslate:[$.get(),Z.get()],imageRef:I,pinchDelta:n,scale:L.get(),touchOrigin:[r,i]});s&&s(t),m(!0),H.start({pinching:!0,scale:t,translateX:a,translateY:o})},W=e=>{if(1===L.get())return;const t=L.get()-(e||.5),n=t-L.get(),r=window.innerWidth/2,i=window.innerHeight/2,[a,o]=p({currentTranslate:[$.get(),Z.get()],imageRef:I,pinchDelta:n,scale:L.get(),touchOrigin:[r,i]});s&&s(t),m(!0),H.start({pinching:!0,scale:t,translateX:a,translateY:o})};return u.default.createElement(u.default.Fragment,null,u.default.createElement(x,g.default({$enableHoverZoom:h,$inline:a,$loading:D,$scale:C,className:"lightbox-image",draggable:"false",onClick:e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},onDragStart:e=>{e.preventDefault()},onLoad:()=>T(!1),onLoadStart:()=>T(!0),ref:I,style:w(w({},n),{},{maxHeight:c,transform:i.to([L,$,Z],((e,t,n)=>`translate(${t}px, ${n}px) scale(${e})`))},o&&{willChange:"transform"})},P)),D&&u.default.createElement(u.default.Fragment,null,l||u.default.createElement(E,null)))};C.displayName="Image";const x=d.default(i.animated.img)`
    width: auto;
    height: auto;
    max-width: 100%;
    user-select: none;
    touch-action: ${e=>{let{$inline:t}=e;return t?"pan-y":"none"}};
    transition: opacity 0.25s ease-out;
    ${e=>{let{$enableHoverZoom:t,$scale:n}=e;return`\n            ${t&&(1===n?"cursor: zoom-in;":"cursor: zoom-out;")}\n        \n        `}}
    ${e=>{let{$loading:t}=e;return t?"\n            width: 0;\n    height: 0;\n        opacity: 0;\n    ":"\n            opacity: 1;\n      \n            "}}
    ::selection {
        background: none;
    }
`,E=d.default.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
        content: '';
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
`,P=t=>{let{currentIndex:n,disableMouseWheel:a,images:o,imageStageHeight:l,imageStageWidth:s,inline:c,loadingComponent:d,onClose:m,onNext:f,onPrev:h,onZoomLevelChange:p,renderImageOverlay:v,showZoomIconsOnHover:y,singleClickToZoom:b,zoomLevel:w}=t;const O=e.useRef(!0),[x,E]=e.useState(!1),[P,L]=e.useState("100%"),[$,Z]=e.useState(!1);e.useEffect((()=>{const e=c?l:l-50;e!==P&&L(e)}),[c,P,l]);const H=u.default.useCallback((function(e){const t=(e-n)*s+(arguments.length>1&&void 0!==arguments[1]&&arguments[1]?arguments.length>2&&void 0!==arguments[2]?arguments[2]:0:0);return e<n-1||e>n+1?{display:"none",x:t}:{display:"flex",x:t}}),[n,s]),[S,W]=i.useSprings(o.length,(e=>H(e)));e.useEffect((()=>{O.current?O.current=!1:W.start((e=>H(e)))}),[n,H,W]);const N=r.useGesture({onDrag:e=>{let{active:t,cancel:n,direction:[r],distance:i,down:a,movement:[o],tap:l,touches:c,velocity:u}=e;if(x||0===o||l)return;$||Z(!0);const d=Math.abs(r)>.7;if((a&&d&&i>s/3.5||a&&d&&u>2)&&t){const e=r>0?-1:1;return n(),e>0?f():e<0&&h(),void p?.(1)}c>1?n():W.start((e=>H(e,a,o)))},onDragEnd:()=>{$&&(W.start((e=>H(e))),setTimeout((()=>Z(!1)),100))},onWheel:e=>{let{ctrlKey:t,direction:[n,r],velocity:i}=e;if(t||x||0===i)return;if($||Z(!0),a)return;if(i>1.1){const e=n+r>0?-1:1;e>0?f():e<0&&h(),p?.(1)}},onWheelEnd:()=>{W.start((e=>H(e))),setTimeout((()=>Z(!1)),100)}},{drag:{filterTaps:!0},wheel:{enabled:!c}});return u.default.createElement(k,null,S.map(((e,t)=>{let{display:r,x:i}=e;return u.default.createElement(T,g.default({$inline:c},N(),{className:"lightbox-image-pager",key:t,onClick:()=>{if(m)return Math.abs(i.get())<1&&!x&&m()},role:"presentation",style:{display:r,transform:i.to((e=>`translateX(${e}px)`))}}),u.default.createElement(D,null,u.default.createElement(j,null,u.default.createElement(I,{$inline:c,onClick:e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}},u.default.createElement(C,{imgProps:o[t],inline:c,isCurrentImage:t===n,loadingComponent:d,onZoomLevelChange:p,pagerHeight:P,pagerIsDragging:$,setDisableDrag:E,showZoomIconsOnHover:y,singleClickToZoom:b,zoomLevel:w}),v()))))})))};P.displayName="ImagePager";const k=d.default.div`
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
`,I=d.default.div`
    position: relative;
    touch-action: ${e=>{let{$inline:t}=e;return t?"pan-y":"none"}};
    user-select: none;
    display: flex;
    justify-content: center;
    width: 100%;
`,L=e=>{let{currentIndex:t,images:n}=e;return u.createElement($,null,n.map(((e,n)=>{let{alt:r,src:i}=e;return u.createElement(Z,{$isCurrentImage:n===t,alt:r,key:`${r}-${i}-${n}`,src:i})})))},$=d.default.div`
    width: 100%;
    height: inherit;
`,Z=d.default.img`
    ${e=>{let{$isCurrentImage:n}=e;return!n&&t.css`
            visibility: hidden;
            display: none;
        `}}
    height:100%;
    width: 100%;
    object-fit: contain;
`,H=t=>{let{className:n="",currentIndex:r,disableMouseWheel:i,images:a,inline:o,loadingComponent:l,onClose:s,onNext:c,onPrev:d,onZoomLevelChange:g,renderImageOverlay:m,renderNextButton:f,renderPrevButton:h,showZoomIconsOnHover:p,singleClickToZoom:v,zoomLevel:y}=t;const b=r>0,w=r+1<a.length,O=w?()=>{g&&g(1),c?.()}:()=>null,C=b?()=>{g&&g(1),d?.()}:()=>null,[{height:x,width:E},k]=(()=>{const t=e.useRef(null),[n,r]=e.useState(null),[i,a]=e.useState({height:t.current?.clientHeight||0,width:t.current?.clientWidth||0}),o=e.useCallback((e=>{null!==e&&(r(e),a({height:e.clientHeight,width:e.clientWidth}))}),[]);return e.useEffect((()=>{const e=()=>{if(n){const e=n.clientHeight,t=n.clientWidth;e===i.height&&t===i.width||a({height:e,width:t})}};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}}),[n,i.height,i.width]),[i,o]})();return u.default.createElement(S,{className:n,"data-testid":"lightbox-image-stage",ref:k},h({canPrev:b}),E?u.default.createElement(P,{currentIndex:r,disableMouseWheel:i,images:a,imageStageHeight:x,imageStageWidth:E,inline:o,loadingComponent:l,onClose:()=>{g&&g(1),s?.()},onNext:O,onPrev:C,onZoomLevelChange:g,renderImageOverlay:m,showZoomIconsOnHover:p,singleClickToZoom:v,zoomLevel:y}):o?u.default.createElement(L,{currentIndex:r,images:a}):null,f({canNext:w}))},S=d.default.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){m.default(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const X=e=>{let{children:t,className:n,isOpen:r,pageTransitionConfig:a,style:o}=e;const l={config:N(N({},i.config.default),{},{friction:32,mass:1,tension:320}),enter:{opacity:1,transform:"scale(1)"},from:{opacity:0,transform:"scale(0.75)"},leave:{opacity:0,transform:"scale(0.75)"}},s=i.useTransition(r,N(N({},l),a));return u.default.createElement(u.default.Fragment,null,s(((e,r)=>r&&u.default.createElement(z,{className:"lightbox-container"+(n?` ${n}`:""),"data-testid":"lightbox-container",style:N(N({},e),o)},t))))},z=d.default(i.animated.div)`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 400;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;class Y extends u.default.Component{constructor(){super(...arguments),m.default(this,"portalContainer",void 0),m.default(this,"body",void 0),m.default(this,"preventWheel",(e=>e.preventDefault()))}componentDidMount(){this.body=document.body,this.portalContainer=document.createElement("div"),this.portalContainer.setAttribute("class","lightbox-portal"),this.body.appendChild(this.portalContainer),this.forceUpdate(),this.portalContainer.addEventListener("wheel",this.preventWheel)}componentWillUnmount(){this.portalContainer.removeEventListener("wheel",this.preventWheel),this.body.removeChild(this.portalContainer)}render(){if(void 0===this.portalContainer)return null;const{children:e}=this.props;return u.default.createElement(u.default.Fragment,null,h.default.createPortal(e,this.portalContainer))}}module.exports=t=>{let{className:n="",currentIndex:r,disableMouseWheel:i=!1,images:a=[],inline:o=!1,isOpen:l,loadingComponent:s=null,onClose:c,onNext:d,onPrev:g,onZoomLevelChange:m,pageTransitionConfig:f=null,renderFooter:h=(()=>null),renderHeader:p=(()=>null),renderImageOverlay:v=(()=>null),renderNextButton:y=(()=>null),renderPrevButton:b=(()=>null),showZoomIconsOnHover:w=!1,singleClickToZoom:O=!1,style:C={},zoomLevel:x}=t;e.useEffect((()=>{const e=e=>{l&&["ArrowUp","ArrowDown","End","Home","PageUp","PageDown"].includes(e.key)&&e.preventDefault()},t=e=>{if(l)switch(e.key){case"ArrowLeft":g();break;case"ArrowRight":d();break;case"Escape":c&&c();break;default:e.preventDefault()}};return document.addEventListener("keyup",t),document.addEventListener("keydown",e),()=>{document.removeEventListener("keyup",t),document.removeEventListener("keydown",e)}}));const E=u.default.createElement(H,{currentIndex:r,disableMouseWheel:i,images:a,inline:o,loadingComponent:s,onClose:c,onNext:d,onPrev:g,onZoomLevelChange:m,renderImageOverlay:v,renderNextButton:y,renderPrevButton:b,showZoomIconsOnHover:w,singleClickToZoom:O,zoomLevel:x});return o?E:u.default.createElement(Y,null,u.default.createElement(X,{className:n,isOpen:l,pageTransitionConfig:f,style:C},p(),E,h()))};
//# sourceMappingURL=index.cjs.js.map
