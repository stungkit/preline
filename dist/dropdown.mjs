var e={189:(e,t,n)=>{n.d(t,{In:()=>i,lP:()=>o});const o={auto:"auto","auto-start":"auto-start","auto-end":"auto-end",top:"top","top-left":"top-start","top-right":"top-end",bottom:"bottom","bottom-left":"bottom-start","bottom-right":"bottom-end",right:"right","right-start":"right-start","right-end":"right-end",left:"left","left-start":"left-start","left-end":"left-end"},i=["Escape","ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Home","End","Enter"]},615:(e,t,n)=>{n.d(t,{A:()=>o});class o{constructor(e,t,n){this.el=e,this.options=t,this.events=n,this.el=e,this.options=t,this.events={}}createCollection(e,t){var n;e.push({id:(null===(n=null==t?void 0:t.el)||void 0===n?void 0:n.id)||e.length+1,element:t})}fireEvent(e,t=null){if(this.events.hasOwnProperty(e))return this.events[e](t)}on(e,t){this.events[e]=t}}},663:(e,t,n)=>{n.d(t,{ll:()=>oe,rD:()=>le,UU:()=>se,cY:()=>ie});const o=Math.min,i=Math.max,s=Math.round,l=Math.floor,r=e=>({x:e,y:e}),c={left:"right",right:"left",bottom:"top",top:"bottom"},a={start:"end",end:"start"};function u(e,t){return"function"==typeof e?e(t):e}function d(e){return e.split("-")[0]}function h(e){return e.split("-")[1]}function f(e){return"y"===e?"height":"width"}function m(e){return["top","bottom"].includes(d(e))?"y":"x"}function p(e){return"x"===m(e)?"y":"x"}function g(e){return e.replace(/start|end/g,(e=>a[e]))}function w(e){return e.replace(/left|right|bottom|top/g,(e=>c[e]))}function y(e){const{x:t,y:n,width:o,height:i}=e;return{width:o,height:i,top:n,left:t,right:t+o,bottom:n+i,x:t,y:n}}function v(e,t,n){let{reference:o,floating:i}=e;const s=m(t),l=p(t),r=f(l),c=d(t),a="y"===s,u=o.x+o.width/2-i.width/2,g=o.y+o.height/2-i.height/2,w=o[r]/2-i[r]/2;let y;switch(c){case"top":y={x:u,y:o.y-i.height};break;case"bottom":y={x:u,y:o.y+o.height};break;case"right":y={x:o.x+o.width,y:g};break;case"left":y={x:o.x-i.width,y:g};break;default:y={x:o.x,y:o.y}}switch(h(t)){case"start":y[l]-=w*(n&&a?-1:1);break;case"end":y[l]+=w*(n&&a?-1:1)}return y}async function x(e,t){var n;void 0===t&&(t={});const{x:o,y:i,platform:s,rects:l,elements:r,strategy:c}=e,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:f=!1,padding:m=0}=u(t,e),p=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(m),g=r[f?"floating"===h?"reference":"floating":h],w=y(await s.getClippingRect({element:null==(n=await(null==s.isElement?void 0:s.isElement(g)))||n?g:g.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(r.floating)),boundary:a,rootBoundary:d,strategy:c})),v="floating"===h?{x:o,y:i,width:l.floating.width,height:l.floating.height}:l.reference,x=await(null==s.getOffsetParent?void 0:s.getOffsetParent(r.floating)),b=await(null==s.isElement?void 0:s.isElement(x))&&await(null==s.getScale?void 0:s.getScale(x))||{x:1,y:1},L=y(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:r,rect:v,offsetParent:x,strategy:c}):v);return{top:(w.top-L.top+p.top)/b.y,bottom:(L.bottom-w.bottom+p.bottom)/b.y,left:(w.left-L.left+p.left)/b.x,right:(L.right-w.right+p.right)/b.x}}function b(){return"undefined"!=typeof window}function L(e){return T(e)?(e.nodeName||"").toLowerCase():"#document"}function E(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function C(e){var t;return null==(t=(T(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function T(e){return!!b()&&(e instanceof Node||e instanceof E(e).Node)}function A(e){return!!b()&&(e instanceof Element||e instanceof E(e).Element)}function S(e){return!!b()&&(e instanceof HTMLElement||e instanceof E(e).HTMLElement)}function P(e){return!(!b()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof E(e).ShadowRoot)}function D(e){const{overflow:t,overflowX:n,overflowY:o,display:i}=O(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(i)}function k(e){return["table","td","th"].includes(L(e))}function I(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function R(e){const t=M(),n=A(e)?O(e):e;return["transform","translate","scale","rotate","perspective"].some((e=>!!n[e]&&"none"!==n[e]))||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","translate","scale","rotate","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function M(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function $(e){return["html","body","#document"].includes(L(e))}function O(e){return E(e).getComputedStyle(e)}function F(e){return A(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function H(e){if("html"===L(e))return e;const t=e.assignedSlot||e.parentNode||P(e)&&e.host||C(e);return P(t)?t.host:t}function q(e){const t=H(e);return $(t)?e.ownerDocument?e.ownerDocument.body:e.body:S(t)&&D(t)?t:q(t)}function V(e,t,n){var o;void 0===t&&(t=[]),void 0===n&&(n=!0);const i=q(e),s=i===(null==(o=e.ownerDocument)?void 0:o.body),l=E(i);if(s){const e=U(l);return t.concat(l,l.visualViewport||[],D(i)?i:[],e&&n?V(e):[])}return t.concat(i,V(i,[],n))}function U(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function W(e){const t=O(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=S(e),l=i?e.offsetWidth:n,r=i?e.offsetHeight:o,c=s(n)!==l||s(o)!==r;return c&&(n=l,o=r),{width:n,height:o,$:c}}function B(e){return A(e)?e:e.contextElement}function z(e){const t=B(e);if(!S(t))return r(1);const n=t.getBoundingClientRect(),{width:o,height:i,$:l}=W(t);let c=(l?s(n.width):n.width)/o,a=(l?s(n.height):n.height)/i;return c&&Number.isFinite(c)||(c=1),a&&Number.isFinite(a)||(a=1),{x:c,y:a}}const j=r(0);function _(e){const t=E(e);return M()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:j}function X(e,t,n,o){void 0===t&&(t=!1),void 0===n&&(n=!1);const i=e.getBoundingClientRect(),s=B(e);let l=r(1);t&&(o?A(o)&&(l=z(o)):l=z(e));const c=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==E(e))&&t}(s,n,o)?_(s):r(0);let a=(i.left+c.x)/l.x,u=(i.top+c.y)/l.y,d=i.width/l.x,h=i.height/l.y;if(s){const e=E(s),t=o&&A(o)?E(o):o;let n=e,i=U(n);for(;i&&o&&t!==n;){const e=z(i),t=i.getBoundingClientRect(),o=O(i),s=t.left+(i.clientLeft+parseFloat(o.paddingLeft))*e.x,l=t.top+(i.clientTop+parseFloat(o.paddingTop))*e.y;a*=e.x,u*=e.y,d*=e.x,h*=e.y,a+=s,u+=l,n=E(i),i=U(n)}}return y({width:d,height:h,x:a,y:u})}function Y(e,t){const n=F(e).scrollLeft;return t?t.left+n:X(C(e)).left+n}function N(e,t,n){void 0===n&&(n=!1);const o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-(n?0:Y(e,o)),y:o.top+t.scrollTop}}function G(e,t,n){let o;if("viewport"===t)o=function(e,t){const n=E(e),o=C(e),i=n.visualViewport;let s=o.clientWidth,l=o.clientHeight,r=0,c=0;if(i){s=i.width,l=i.height;const e=M();(!e||e&&"fixed"===t)&&(r=i.offsetLeft,c=i.offsetTop)}return{width:s,height:l,x:r,y:c}}(e,n);else if("document"===t)o=function(e){const t=C(e),n=F(e),o=e.ownerDocument.body,s=i(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),l=i(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Y(e);const c=-n.scrollTop;return"rtl"===O(o).direction&&(r+=i(t.clientWidth,o.clientWidth)-s),{width:s,height:l,x:r,y:c}}(C(e));else if(A(t))o=function(e,t){const n=X(e,!0,"fixed"===t),o=n.top+e.clientTop,i=n.left+e.clientLeft,s=S(e)?z(e):r(1);return{width:e.clientWidth*s.x,height:e.clientHeight*s.y,x:i*s.x,y:o*s.y}}(t,n);else{const n=_(e);o={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return y(o)}function J(e,t){const n=H(e);return!(n===t||!A(n)||$(n))&&("fixed"===O(n).position||J(n,t))}function K(e,t,n){const o=S(t),i=C(t),s="fixed"===n,l=X(e,!0,s,t);let c={scrollLeft:0,scrollTop:0};const a=r(0);if(o||!o&&!s)if(("body"!==L(t)||D(i))&&(c=F(t)),o){const e=X(t,!0,s,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else i&&(a.x=Y(i));const u=!i||o||s?r(0):N(i,c);return{x:l.left+c.scrollLeft-a.x-u.x,y:l.top+c.scrollTop-a.y-u.y,width:l.width,height:l.height}}function Z(e){return"static"===O(e).position}function Q(e,t){if(!S(e)||"fixed"===O(e).position)return null;if(t)return t(e);let n=e.offsetParent;return C(e)===n&&(n=n.ownerDocument.body),n}function ee(e,t){const n=E(e);if(I(e))return n;if(!S(e)){let t=H(e);for(;t&&!$(t);){if(A(t)&&!Z(t))return t;t=H(t)}return n}let o=Q(e,t);for(;o&&k(o)&&Z(o);)o=Q(o,t);return o&&$(o)&&Z(o)&&!R(o)?n:o||function(e){let t=H(e);for(;S(t)&&!$(t);){if(R(t))return t;if(I(t))return null;t=H(t)}return null}(e)||n}const te={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:o,strategy:i}=e;const s="fixed"===i,l=C(o),c=!!t&&I(t.floating);if(o===l||c&&s)return n;let a={scrollLeft:0,scrollTop:0},u=r(1);const d=r(0),h=S(o);if((h||!h&&!s)&&(("body"!==L(o)||D(l))&&(a=F(o)),S(o))){const e=X(o);u=z(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}const f=!l||h||s?r(0):N(l,a,!0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-a.scrollLeft*u.x+d.x+f.x,y:n.y*u.y-a.scrollTop*u.y+d.y+f.y}},getDocumentElement:C,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:s,strategy:l}=e;const r=[..."clippingAncestors"===n?I(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let o=V(e,[],!1).filter((e=>A(e)&&"body"!==L(e))),i=null;const s="fixed"===O(e).position;let l=s?H(e):e;for(;A(l)&&!$(l);){const t=O(l),n=R(l);n||"fixed"!==t.position||(i=null),(s?!n&&!i:!n&&"static"===t.position&&i&&["absolute","fixed"].includes(i.position)||D(l)&&!n&&J(e,l))?o=o.filter((e=>e!==l)):i=t,l=H(l)}return t.set(e,o),o}(t,this._c):[].concat(n),s],c=r[0],a=r.reduce(((e,n)=>{const s=G(t,n,l);return e.top=i(s.top,e.top),e.right=o(s.right,e.right),e.bottom=o(s.bottom,e.bottom),e.left=i(s.left,e.left),e}),G(t,c,l));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:ee,getElementRects:async function(e){const t=this.getOffsetParent||ee,n=this.getDimensions,o=await n(e.floating);return{reference:K(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=W(e);return{width:t,height:n}},getScale:z,isElement:A,isRTL:function(e){return"rtl"===O(e).direction}};function ne(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function oe(e,t,n,s){void 0===s&&(s={});const{ancestorScroll:r=!0,ancestorResize:c=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:u="function"==typeof IntersectionObserver,animationFrame:d=!1}=s,h=B(e),f=r||c?[...h?V(h):[],...V(t)]:[];f.forEach((e=>{r&&e.addEventListener("scroll",n,{passive:!0}),c&&e.addEventListener("resize",n)}));const m=h&&u?function(e,t){let n,s=null;const r=C(e);function c(){var e;clearTimeout(n),null==(e=s)||e.disconnect(),s=null}return function a(u,d){void 0===u&&(u=!1),void 0===d&&(d=1),c();const h=e.getBoundingClientRect(),{left:f,top:m,width:p,height:g}=h;if(u||t(),!p||!g)return;const w={rootMargin:-l(m)+"px "+-l(r.clientWidth-(f+p))+"px "+-l(r.clientHeight-(m+g))+"px "+-l(f)+"px",threshold:i(0,o(1,d))||1};let y=!0;function v(t){const o=t[0].intersectionRatio;if(o!==d){if(!y)return a();o?a(!1,o):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}1!==o||ne(h,e.getBoundingClientRect())||a(),y=!1}try{s=new IntersectionObserver(v,{...w,root:r.ownerDocument})}catch(e){s=new IntersectionObserver(v,w)}s.observe(e)}(!0),c}(h,n):null;let p,g=-1,w=null;a&&(w=new ResizeObserver((e=>{let[o]=e;o&&o.target===h&&w&&(w.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=w)||e.observe(t)}))),n()})),h&&!d&&w.observe(h),w.observe(t));let y=d?X(e):null;return d&&function t(){const o=X(e);y&&!ne(y,o)&&n();y=o,p=requestAnimationFrame(t)}(),n(),()=>{var e;f.forEach((e=>{r&&e.removeEventListener("scroll",n),c&&e.removeEventListener("resize",n)})),null==m||m(),null==(e=w)||e.disconnect(),w=null,d&&cancelAnimationFrame(p)}}const ie=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:i,y:s,placement:l,middlewareData:r}=t,c=await async function(e,t){const{placement:n,platform:o,elements:i}=e,s=await(null==o.isRTL?void 0:o.isRTL(i.floating)),l=d(n),r=h(n),c="y"===m(n),a=["left","top"].includes(l)?-1:1,f=s&&c?-1:1,p=u(t,e);let{mainAxis:g,crossAxis:w,alignmentAxis:y}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return r&&"number"==typeof y&&(w="end"===r?-1*y:y),c?{x:w*f,y:g*a}:{x:g*a,y:w*f}}(t,e);return l===(null==(n=r.offset)?void 0:n.placement)&&null!=(o=r.arrow)&&o.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:l}}}}},se=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:i,middlewareData:s,rects:l,initialPlacement:r,platform:c,elements:a}=t,{mainAxis:y=!0,crossAxis:v=!0,fallbackPlacements:b,fallbackStrategy:L="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:C=!0,...T}=u(e,t);if(null!=(n=s.arrow)&&n.alignmentOffset)return{};const A=d(i),S=m(r),P=d(r)===r,D=await(null==c.isRTL?void 0:c.isRTL(a.floating)),k=b||(P||!C?[w(r)]:function(e){const t=w(e);return[g(e),t,g(t)]}(r)),I="none"!==E;!b&&I&&k.push(...function(e,t,n,o){const i=h(e);let s=function(e,t,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:o:t?o:i;case"left":case"right":return t?s:l;default:return[]}}(d(e),"start"===n,o);return i&&(s=s.map((e=>e+"-"+i)),t&&(s=s.concat(s.map(g)))),s}(r,C,E,D));const R=[r,...k],M=await x(t,T),$=[];let O=(null==(o=s.flip)?void 0:o.overflows)||[];if(y&&$.push(M[A]),v){const e=function(e,t,n){void 0===n&&(n=!1);const o=h(e),i=p(e),s=f(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[s]>t.floating[s]&&(l=w(l)),[l,w(l)]}(i,l,D);$.push(M[e[0]],M[e[1]])}if(O=[...O,{placement:i,overflows:$}],!$.every((e=>e<=0))){var F,H;const e=((null==(F=s.flip)?void 0:F.index)||0)+1,t=R[e];if(t)return{data:{index:e,overflows:O},reset:{placement:t}};let n=null==(H=O.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:H.placement;if(!n)switch(L){case"bestFit":{var q;const e=null==(q=O.filter((e=>{if(I){const t=m(e.placement);return t===S||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:q[0];e&&(n=e);break}case"initialPlacement":n=r}if(i!==n)return{reset:{placement:n}}}return{}}}},le=(e,t,n)=>{const o=new Map,i={platform:te,...n},s={...i.platform,_c:o};return(async(e,t,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:l}=n,r=s.filter(Boolean),c=await(null==l.isRTL?void 0:l.isRTL(t));let a=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=v(a,o,c),h=o,f={},m=0;for(let n=0;n<r.length;n++){const{name:s,fn:p}=r[n],{x:g,y:w,data:y,reset:x}=await p({x:u,y:d,initialPlacement:o,placement:h,strategy:i,middlewareData:f,rects:a,platform:l,elements:{reference:e,floating:t}});u=null!=g?g:u,d=null!=w?w:d,f={...f,[s]:{...f[s],...y}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(h=x.placement),x.rects&&(a=!0===x.rects?await l.getElementRects({reference:e,floating:t,strategy:i}):x.rects),({x:u,y:d}=v(a,h,c))),n=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:f}})(e,t,{...i,platform:s})}},926:(e,t,n)=>{n.d(t,{BF:()=>s,IM:()=>u,JD:()=>c,PK:()=>o,gj:()=>i,un:()=>l,yd:()=>a,zG:()=>r});
/*
 * @version: 3.0.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
const o=e=>"true"===e,i=(e,t,n="")=>(window.getComputedStyle(e).getPropertyValue(t)||n).replace(" ",""),s=(e,t,n="")=>{let o="";return e.classList.forEach((e=>{e.includes(t)&&(o=e)})),o.match(/:(.*)]/)?o.match(/:(.*)]/)[1]:n},l=()=>!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform),r=()=>navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform),c=(e,t,n=null)=>{const o=new CustomEvent(e,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});t.dispatchEvent(o)},a=(e,t)=>{const n=()=>{t(),e.removeEventListener("transitionend",n,!0)},o=window.getComputedStyle(e),i=o.getPropertyValue("transition-duration");"none"!==o.getPropertyValue("transition-property")&&parseFloat(i)>0?e.addEventListener("transitionend",n,!0):t()},u={historyIndex:-1,addHistory(e){this.historyIndex=e},existsInHistory(e){return e>this.historyIndex},clearHistory(){this.historyIndex=-1}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};n.d(o,{A:()=>a});var i=n(926),s=n(663),l=n(615),r=n(189);
/*
 * HSDropdown
 * @version: 3.0.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class c extends l.A{constructor(e,t,n){super(e,t,n),this.longPressTimer=null,this.onTouchStartListener=null,this.onTouchEndListener=null,this.toggle=this.el.querySelector(":scope > .hs-dropdown-toggle")||this.el.querySelector(":scope > .hs-dropdown-toggle-wrapper > .hs-dropdown-toggle")||this.el.children[0],this.closers=Array.from(this.el.querySelectorAll(":scope .hs-dropdown-close"))||null,this.menu=this.el.querySelector(":scope > .hs-dropdown-menu"),this.eventMode=(0,i.gj)(this.el,"--trigger","click"),this.closeMode=(0,i.gj)(this.el,"--auto-close","true"),this.hasAutofocus=(0,i.PK)((0,i.gj)(this.el,"--has-autofocus","true")||"true"),this.animationInProcess=!1,this.onCloserClickListener=[],this.toggle&&this.menu&&this.init()}elementMouseEnter(){this.onMouseEnterHandler()}elementMouseLeave(){this.onMouseLeaveHandler()}toggleClick(e){this.onClickHandler(e)}toggleContextMenu(e){e.preventDefault(),this.onContextMenuHandler(e)}handleTouchStart(e){this.longPressTimer=window.setTimeout((()=>{e.preventDefault();const t=e.touches[0],n=new MouseEvent("contextmenu",{bubbles:!0,cancelable:!0,view:window,clientX:t.clientX,clientY:t.clientY});this.toggle&&this.toggle.dispatchEvent(n)}),400)}handleTouchEnd(e){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}closerClick(){this.close()}init(){if(this.createCollection(window.$hsDropdownCollection,this),this.toggle.disabled)return!1;this.toggle&&this.buildToggle(),this.menu&&this.buildMenu(),this.closers&&this.buildClosers(),(0,i.un)()||(0,i.zG)()||(this.onElementMouseEnterListener=()=>this.elementMouseEnter(),this.onElementMouseLeaveListener=()=>this.elementMouseLeave(),this.el.addEventListener("mouseenter",this.onElementMouseEnterListener),this.el.addEventListener("mouseleave",this.onElementMouseLeaveListener))}resizeHandler(){this.eventMode=(0,i.gj)(this.el,"--trigger","click"),this.closeMode=(0,i.gj)(this.el,"--auto-close","true")}buildToggle(){var e;(null===(e=null==this?void 0:this.toggle)||void 0===e?void 0:e.ariaExpanded)&&(this.el.classList.contains("open")?this.toggle.ariaExpanded="true":this.toggle.ariaExpanded="false"),"contextmenu"===this.eventMode?(this.onToggleContextMenuListener=e=>this.toggleContextMenu(e),this.onTouchStartListener=this.handleTouchStart.bind(this),this.onTouchEndListener=this.handleTouchEnd.bind(this),this.toggle.addEventListener("contextmenu",this.onToggleContextMenuListener),this.toggle.addEventListener("touchstart",this.onTouchStartListener,{passive:!1}),this.toggle.addEventListener("touchend",this.onTouchEndListener),this.toggle.addEventListener("touchmove",this.onTouchEndListener)):(this.onToggleClickListener=e=>this.toggleClick(e),this.toggle.addEventListener("click",this.onToggleClickListener))}buildMenu(){this.menu.role=this.menu.getAttribute("role")||"menu";const e=this.menu.querySelectorAll('[role="menuitemcheckbox"]'),t=this.menu.querySelectorAll('[role="menuitemradio"]');e.forEach((e=>e.addEventListener("click",(()=>this.selectCheckbox(e))))),t.forEach((e=>e.addEventListener("click",(()=>this.selectRadio(e)))))}buildClosers(){this.closers.forEach((e=>{this.onCloserClickListener.push({el:e,fn:()=>this.closerClick()}),e.addEventListener("click",this.onCloserClickListener.find((t=>t.el===e)).fn)}))}getScrollbarSize(){let e=document.createElement("div");e.style.overflow="scroll",e.style.width="100px",e.style.height="100px",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}onContextMenuHandler(e){const t={getBoundingClientRect:(()=>new DOMRect,()=>new DOMRect(e.clientX,e.clientY,0,0))};c.closeCurrentlyOpened(),this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")?(this.close(),document.body.style.overflow="",document.body.style.paddingRight=""):(document.body.style.overflow="hidden",document.body.style.paddingRight=`${this.getScrollbarSize()}px`,this.open(t))}onClickHandler(e){this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")?this.close():this.open()}onMouseEnterHandler(){if("hover"!==this.eventMode)return!1;(!this.el._floatingUI||this.el._floatingUI&&!this.el.classList.contains("open"))&&this.forceClearState(),!this.el.classList.contains("open")&&this.menu.classList.contains("hidden")&&this.open()}onMouseLeaveHandler(){if("hover"!==this.eventMode)return!1;this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")&&this.close()}destroyFloatingUI(){const e=(window.getComputedStyle(this.el).getPropertyValue("--scope")||"").trim();this.menu.classList.remove("block"),this.menu.classList.add("hidden"),this.menu.style.inset=null,this.menu.style.position=null,this.el&&this.el._floatingUI&&(this.el._floatingUI.destroy(),this.el._floatingUI=null),"window"===e&&this.el.appendChild(this.menu),this.animationInProcess=!1}focusElement(){const e=this.menu.querySelector("[autofocus]");if(!e)return!1;e.focus()}setupFloatingUI(e){const t=e||this.el,n=window.getComputedStyle(this.el),o=(n.getPropertyValue("--placement")||"").trim(),i=(n.getPropertyValue("--flip")||"true").trim(),l=(n.getPropertyValue("--strategy")||"fixed").trim(),c=(n.getPropertyValue("--offset")||"10").trim(),a=(n.getPropertyValue("--gpu-acceleration")||"true").trim(),u=(window.getComputedStyle(this.el).getPropertyValue("--adaptive")||"adaptive").replace(" ",""),d=l,h=parseInt(c,10),f=r.lP[o]||"bottom-start",m=[..."true"===i?[(0,s.UU)()]:[],(0,s.cY)(h)],p={placement:f,strategy:d,middleware:m},g=e=>{const t=this.menu.getBoundingClientRect(),n=window.innerWidth-(window.innerWidth-document.documentElement.clientWidth);return e+t.width>n&&(e=n-t.width),e<0&&(e=0),e},w=()=>{(0,s.rD)(t,this.menu,p).then((({x:e,y:t,placement:n})=>{const o=g(e);"absolute"===d&&"none"===u?Object.assign(this.menu.style,{position:d,margin:"0"}):"absolute"===d?Object.assign(this.menu.style,{position:d,transform:`translate3d(${e}px, ${t}px, 0px)`,margin:"0"}):"true"===a?Object.assign(this.menu.style,{position:d,left:"",top:"",inset:"0px auto auto 0px",margin:"0",transform:`translate3d(${"adaptive"===u?o:0}px, ${t}px, 0)`}):Object.assign(this.menu.style,{position:d,left:`${e}px`,top:`${t}px`,transform:""}),this.menu.setAttribute("data-placement",n)}))};w();return{update:w,destroy:(0,s.ll)(t,this.menu,w)}}selectCheckbox(e){e.ariaChecked="true"===e.ariaChecked?"false":"true"}selectRadio(e){if("true"===e.ariaChecked)return!1;const t=e.closest(".group").querySelectorAll('[role="menuitemradio"]');Array.from(t).filter((t=>t!==e)).forEach((e=>{e.ariaChecked="false"})),e.ariaChecked="true"}calculatePopperPosition(e){const t=this.setupFloatingUI(e),n=this.menu.getAttribute("data-placement");return t.update(),t.destroy(),n}open(e){if(this.el.classList.contains("open")||this.animationInProcess)return!1;this.animationInProcess=!0,this.menu.style.cssText="";const t=e||this.el,n=window.getComputedStyle(this.el),o=(n.getPropertyValue("--scope")||"").trim(),s=(n.getPropertyValue("--strategy")||"fixed").trim();"window"===o&&document.body.appendChild(this.menu),"static"!==s&&(this.el._floatingUI=this.setupFloatingUI(t)),this.menu.style.margin=null,this.menu.classList.remove("hidden"),this.menu.classList.add("block"),setTimeout((()=>{var e;(null===(e=null==this?void 0:this.toggle)||void 0===e?void 0:e.ariaExpanded)&&(this.toggle.ariaExpanded="true"),this.el.classList.add("open"),"window"===o&&this.menu.classList.add("open"),this.animationInProcess=!1,this.hasAutofocus&&this.focusElement(),this.fireEvent("open",this.el),(0,i.JD)("open.hs.dropdown",this.el,this.el)}))}close(e=!0){if(this.animationInProcess||!this.el.classList.contains("open"))return!1;const t=(window.getComputedStyle(this.el).getPropertyValue("--scope")||"").trim();if(this.animationInProcess=!0,"window"===t&&this.menu.classList.remove("open"),e){const e=this.el.querySelector("[data-hs-dropdown-transition]")||this.menu;(0,i.yd)(e,(()=>this.destroyFloatingUI()))}else this.destroyFloatingUI();(()=>{var e;this.menu.style.margin=null,(null===(e=null==this?void 0:this.toggle)||void 0===e?void 0:e.ariaExpanded)&&(this.toggle.ariaExpanded="false"),this.el.classList.remove("open"),this.fireEvent("close",this.el),(0,i.JD)("close.hs.dropdown",this.el,this.el)})()}forceClearState(){this.destroyFloatingUI(),this.menu.style.margin=null,this.el.classList.remove("open"),this.menu.classList.add("hidden")}destroy(){(0,i.un)()||(0,i.zG)()||(this.el.removeEventListener("mouseenter",this.onElementMouseEnterListener),this.el.removeEventListener("mouseleave",(()=>this.onElementMouseLeaveListener)),this.onElementMouseEnterListener=null,this.onElementMouseLeaveListener=null),"contextmenu"===this.eventMode?(this.toggle&&(this.toggle.removeEventListener("contextmenu",this.onToggleContextMenuListener),this.toggle.removeEventListener("touchstart",this.onTouchStartListener),this.toggle.removeEventListener("touchend",this.onTouchEndListener),this.toggle.removeEventListener("touchmove",this.onTouchEndListener)),this.onToggleContextMenuListener=null,this.onTouchStartListener=null,this.onTouchEndListener=null):(this.toggle&&this.toggle.removeEventListener("click",this.onToggleClickListener),this.onToggleClickListener=null),this.closers.length&&(this.closers.forEach((e=>{e.removeEventListener("click",this.onCloserClickListener.find((t=>t.el===e)).fn)})),this.onCloserClickListener=null),this.el.classList.remove("open"),this.destroyFloatingUI(),window.$hsDropdownCollection=window.$hsDropdownCollection.filter((({element:e})=>e.el!==this.el))}static findInCollection(e){return window.$hsDropdownCollection.find((t=>e instanceof c?t.element.el===e.el:"string"==typeof e?t.element.el===document.querySelector(e):t.element.el===e))||null}static getInstance(e,t){const n=window.$hsDropdownCollection.find((t=>t.element.el===("string"==typeof e?document.querySelector(e):e)));return n?t?n:n.element.el:null}static autoInit(){if(!window.$hsDropdownCollection){window.$hsDropdownCollection=[],document.addEventListener("keydown",(e=>c.accessibility(e))),window.addEventListener("click",(e=>{const t=e.target;c.closeCurrentlyOpened(t)}));let e=window.innerWidth;window.addEventListener("resize",(()=>{window.innerWidth!==e&&(e=innerWidth,c.closeCurrentlyOpened(null,!1))}))}window.$hsDropdownCollection&&(window.$hsDropdownCollection=window.$hsDropdownCollection.filter((({element:e})=>document.contains(e.el)))),document.querySelectorAll(".hs-dropdown:not(.--prevent-on-load-init)").forEach((e=>{window.$hsDropdownCollection.find((t=>{var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new c(e)}))}static open(e){const t=c.findInCollection(e);t&&t.element.menu.classList.contains("hidden")&&t.element.open()}static close(e){const t=c.findInCollection(e);t&&!t.element.menu.classList.contains("hidden")&&t.element.close()}static accessibility(e){this.history=i.IM;const t=window.$hsDropdownCollection.find((e=>e.element.el.classList.contains("open")));if(t&&(r.In.includes(e.code)||4===e.code.length&&e.code[e.code.length-1].match(/^[A-Z]*$/))&&!e.metaKey&&!t.element.menu.querySelector("input:focus")&&!t.element.menu.querySelector("textarea:focus"))switch(e.code){case"Escape":t.element.menu.querySelector(".hs-select.active")||(e.preventDefault(),this.onEscape(e));break;case"Enter":t.element.menu.querySelector(".hs-select button:focus")||t.element.menu.querySelector(".hs-collapse-toggle:focus")||this.onEnter(e);break;case"ArrowUp":e.preventDefault(),e.stopImmediatePropagation(),this.onArrow();break;case"ArrowDown":e.preventDefault(),e.stopImmediatePropagation(),this.onArrow(!1);break;case"ArrowRight":e.preventDefault(),e.stopImmediatePropagation(),this.onArrowX(e,"right");break;case"ArrowLeft":e.preventDefault(),e.stopImmediatePropagation(),this.onArrowX(e,"left");break;case"Home":e.preventDefault(),e.stopImmediatePropagation(),this.onStartEnd();break;case"End":e.preventDefault(),e.stopImmediatePropagation(),this.onStartEnd(!1);break;default:e.preventDefault(),this.onFirstLetter(e.key)}}static onEscape(e){const t=e.target.closest(".hs-dropdown.open");if(window.$hsDropdownCollection.find((e=>e.element.el===t))){const e=window.$hsDropdownCollection.find((e=>e.element.el===t));e&&(e.element.close(),e.element.toggle.focus())}else this.closeCurrentlyOpened()}static onEnter(e){var t;const n=e.target,{element:o}=null!==(t=window.$hsDropdownCollection.find((e=>e.element.el===n.closest(".hs-dropdown"))))&&void 0!==t?t:null;if(o&&n.classList.contains("hs-dropdown-toggle"))e.preventDefault(),o.open();else if(o&&"menuitemcheckbox"===n.getAttribute("role"))o.selectCheckbox(n),o.close();else{if(!o||"menuitemradio"!==n.getAttribute("role"))return!1;o.selectRadio(n),o.close()}}static onArrow(e=!0){const t=window.$hsDropdownCollection.find((e=>e.element.el.classList.contains("open")));if(t){const n=t.element.menu;if(!n)return!1;const o=e?Array.from(n.querySelectorAll('a:not([hidden]), :scope button:not([hidden]), [role="button"]:not([hidden]), [role^="menuitem"]:not([hidden])')).reverse():Array.from(n.querySelectorAll('a:not([hidden]), :scope button:not([hidden]), [role="button"]:not([hidden]), [role^="menuitem"]:not([hidden])')),i=Array.from(o).filter((e=>{const t=e;return null===t.closest("[hidden]")&&null!==t.offsetParent})).filter((e=>!e.classList.contains("disabled"))),s=n.querySelector('a:focus, button:focus, [role="button"]:focus, [role^="menuitem"]:focus');let l=i.findIndex((e=>e===s));l+1<i.length&&l++,i[l].focus()}}static onArrowX(e,t){var n,o;const i=e.target,s=i.closest(".hs-dropdown.open"),l=!!s&&!(null==s?void 0:s.parentElement.closest(".hs-dropdown")),r=null!==(n=c.getInstance(i.closest(".hs-dropdown"),!0))&&void 0!==n?n:null,a=r.element.menu.querySelector('a, button, [role="button"], [role^="menuitem"]');if(l&&!i.classList.contains("hs-dropdown-toggle"))return!1;const u=null!==(o=c.getInstance(i.closest(".hs-dropdown.open"),!0))&&void 0!==o?o:null;if(r.element.el.classList.contains("open")&&r.element.el._floatingUI.state.placement.includes(t))return a.focus(),!1;const d=r.element.calculatePopperPosition();if(l&&!d.includes(t))return!1;d.includes(t)&&i.classList.contains("hs-dropdown-toggle")?(r.element.open(),a.focus()):(u.element.close(!1),u.element.toggle.focus())}static onStartEnd(e=!0){const t=window.$hsDropdownCollection.find((e=>e.element.el.classList.contains("open")));if(t){const n=t.element.menu;if(!n)return!1;const o=(e?Array.from(n.querySelectorAll('a, button, [role="button"], [role^="menuitem"]')):Array.from(n.querySelectorAll('a, button, [role="button"], [role^="menuitem"]')).reverse()).filter((e=>!e.classList.contains("disabled")));o.length&&o[0].focus()}}static onFirstLetter(e){const t=window.$hsDropdownCollection.find((e=>e.element.el.classList.contains("open")));if(t){const n=t.element.menu;if(!n)return!1;const o=Array.from(n.querySelectorAll('a, [role="button"], [role^="menuitem"]')),i=()=>o.findIndex(((t,n)=>t.innerText.toLowerCase().charAt(0)===e.toLowerCase()&&this.history.existsInHistory(n)));let s=i();-1===s&&(this.history.clearHistory(),s=i()),-1!==s&&(o[s].focus(),this.history.addHistory(s))}}static closeCurrentlyOpened(e=null,t=!0){const n=e&&e.closest(".hs-dropdown")&&e.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")?e.closest(".hs-dropdown").parentElement.closest(".hs-dropdown"):null;let o=n?window.$hsDropdownCollection.filter((e=>e.element.el.classList.contains("open")&&e.element.menu.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")===n)):window.$hsDropdownCollection.filter((e=>e.element.el.classList.contains("open")));e&&e.closest(".hs-dropdown")&&"inside"===(0,i.BF)(e.closest(".hs-dropdown"),"--auto-close")&&(o=o.filter((t=>t.element.el!==e.closest(".hs-dropdown")))),o&&o.forEach((e=>{if("false"===e.element.closeMode||"outside"===e.element.closeMode)return!1;e.element.close(t)})),o&&o.forEach((e=>{if("contextmenu"!==(0,i.BF)(e.element.el,"--trigger"))return!1;document.body.style.overflow="",document.body.style.paddingRight=""}))}static on(e,t,n){const o=c.findInCollection(t);o&&(o.element.events[e]=n)}}window.addEventListener("load",(()=>{c.autoInit()})),window.addEventListener("resize",(()=>{window.$hsDropdownCollection||(window.$hsDropdownCollection=[]),window.$hsDropdownCollection.forEach((e=>e.element.resizeHandler()))})),"undefined"!=typeof window&&(window.HSDropdown=c);const a=c;var u=o.A;export{u as default};