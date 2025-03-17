!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var s=e();for(var o in s)("object"==typeof exports?exports:t)[o]=s[o]}}(self,(()=>(()=>{"use strict";var t={100:function(t,e,s){
/*
 * HSTogglePassword
 * @version: 3.0.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=s(292),n=o(s(961));class l extends n.default{constructor(t,e){super(t,e);const s=t.getAttribute("data-hs-toggle-password"),o=s?JSON.parse(s):{},n=Object.assign(Object.assign({},o),e),l=[];if((null==n?void 0:n.target)&&"string"==typeof(null==n?void 0:n.target)){(null==n?void 0:n.target.split(",")).forEach((t=>{l.push(document.querySelector(t))}))}else(null==n?void 0:n.target)&&"object"==typeof(null==n?void 0:n.target)?n.target.forEach((t=>l.push(document.querySelector(t)))):n.target.forEach((t=>l.push(t)));this.target=l,this.isShown=!!this.el.hasAttribute("type")&&this.el.checked,this.eventType=(0,i.isFormElement)(this.el)?"change":"click",this.isMultiple=this.target.length>1&&!!this.el.closest("[data-hs-toggle-password-group]"),this.target&&this.init()}elementAction(){this.isShown?this.hide():this.show(),this.fireEvent("toggle",this.target),(0,i.dispatch)("toggle.hs.toggle-select",this.el,this.target)}init(){this.createCollection(window.$hsTogglePasswordCollection,this),this.isShown?this.show():this.hide(),this.onElementActionListener=()=>this.elementAction(),this.el.addEventListener(this.eventType,this.onElementActionListener)}getMultipleToggles(){const t=this.el.closest("[data-hs-toggle-password-group]").querySelectorAll("[data-hs-toggle-password]"),e=[];return t.forEach((t=>{e.push(l.getInstance(t))})),e}show(){if(this.isMultiple){this.getMultipleToggles().forEach((t=>!!t&&(t.isShown=!0))),this.el.closest("[data-hs-toggle-password-group]").classList.add("active")}else this.isShown=!0,this.el.classList.add("active");this.target.forEach((t=>{t.type="text"}))}hide(){if(this.isMultiple){this.getMultipleToggles().forEach((t=>!!t&&(t.isShown=!1))),this.el.closest("[data-hs-toggle-password-group]").classList.remove("active")}else this.isShown=!1,this.el.classList.remove("active");this.target.forEach((t=>{t.type="password"}))}destroy(){this.isMultiple?this.el.closest("[data-hs-toggle-password-group]").classList.remove("active"):this.el.classList.remove("active"),this.target.forEach((t=>{t.type="password"})),this.el.removeEventListener(this.eventType,this.onElementActionListener),this.isShown=!1,window.$hsTogglePasswordCollection=window.$hsTogglePasswordCollection.filter((({element:t})=>t.el!==this.el))}static getInstance(t,e){const s=window.$hsTogglePasswordCollection.find((e=>e.element.el===("string"==typeof t?document.querySelector(t):t)));return s?e?s:s.element:null}static autoInit(){window.$hsTogglePasswordCollection||(window.$hsTogglePasswordCollection=[]),window.$hsTogglePasswordCollection&&(window.$hsTogglePasswordCollection=window.$hsTogglePasswordCollection.filter((({element:t})=>document.contains(t.el)))),document.querySelectorAll("[data-hs-toggle-password]:not(.--prevent-on-load-init)").forEach((t=>{window.$hsTogglePasswordCollection.find((e=>{var s;return(null===(s=null==e?void 0:e.element)||void 0===s?void 0:s.el)===t}))||new l(t)}))}}window.addEventListener("load",(()=>{l.autoInit()})),"undefined"!=typeof window&&(window.HSTogglePassword=l),e.default=l},292:function(t,e){
/*
 * @version: 3.0.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
Object.defineProperty(e,"__esModule",{value:!0}),e.menuSearchHistory=e.classToClassList=e.htmlToElement=e.afterTransition=e.dispatch=e.debounce=e.isScrollable=e.isParentOrElementHidden=e.isJson=e.isIpadOS=e.isIOS=e.isDirectChild=e.isFormElement=e.isFocused=e.isEnoughSpace=e.getHighestZIndex=e.getZIndex=e.getClassPropertyAlt=e.getClassProperty=e.stringToBoolean=void 0;e.stringToBoolean=t=>"true"===t;e.getClassProperty=(t,e,s="")=>(window.getComputedStyle(t).getPropertyValue(e)||s).replace(" ","");e.getClassPropertyAlt=(t,e,s="")=>{let o="";return t.classList.forEach((t=>{t.includes(e)&&(o=t)})),o.match(/:(.*)]/)?o.match(/:(.*)]/)[1]:s};const s=t=>window.getComputedStyle(t).getPropertyValue("z-index");e.getZIndex=s;e.getHighestZIndex=t=>{let e=Number.NEGATIVE_INFINITY;return t.forEach((t=>{let o=s(t);"auto"!==o&&(o=parseInt(o,10),o>e&&(e=o))})),e};e.isDirectChild=(t,e)=>{const s=t.children;for(let t=0;t<s.length;t++)if(s[t]===e)return!0;return!1};e.isEnoughSpace=(t,e,s="auto",o=10,i=null)=>{const n=e.getBoundingClientRect(),l=i?i.getBoundingClientRect():null,r=window.innerHeight,a=l?n.top-l.top:n.top,c=(i?l.bottom:r)-n.bottom,d=t.clientHeight+o;return"bottom"===s?c>=d:"top"===s?a>=d:a>=d||c>=d};e.isFocused=t=>document.activeElement===t;e.isFormElement=t=>t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement;e.isIOS=()=>!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform);e.isIpadOS=()=>navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform);e.isJson=t=>{if("string"!=typeof t)return!1;const e=t.trim()[0],s=t.trim().slice(-1);if("{"===e&&"}"===s||"["===e&&"]"===s)try{return JSON.parse(t),!0}catch(t){return!1}return!1};const o=t=>{if(!t)return!1;return"none"===window.getComputedStyle(t).display||o(t.parentElement)};e.isParentOrElementHidden=o;e.isScrollable=t=>{const e=window.getComputedStyle(t),s=e.overflowY,o=e.overflowX,i=("scroll"===s||"auto"===s)&&t.scrollHeight>t.clientHeight,n=("scroll"===o||"auto"===o)&&t.scrollWidth>t.clientWidth;return i||n};e.debounce=(t,e=200)=>{let s;return(...o)=>{clearTimeout(s),s=setTimeout((()=>{t.apply(this,o)}),e)}};e.dispatch=(t,e,s=null)=>{const o=new CustomEvent(t,{detail:{payload:s},bubbles:!0,cancelable:!0,composed:!1});e.dispatchEvent(o)};e.afterTransition=(t,e)=>{const s=()=>{e(),t.removeEventListener("transitionend",s,!0)},o=window.getComputedStyle(t),i=o.getPropertyValue("transition-duration");"none"!==o.getPropertyValue("transition-property")&&parseFloat(i)>0?t.addEventListener("transitionend",s,!0):e()};e.htmlToElement=t=>{const e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild};e.classToClassList=(t,e,s=" ",o="add")=>{t.split(s).forEach((t=>"add"===o?e.classList.add(t):e.classList.remove(t)))};const i={historyIndex:-1,addHistory(t){this.historyIndex=t},existsInHistory(t){return t>this.historyIndex},clearHistory(){this.historyIndex=-1}};e.menuSearchHistory=i},961:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t,e,s){this.el=t,this.options=e,this.events=s,this.el=t,this.options=e,this.events={}}createCollection(t,e){var s;t.push({id:(null===(s=null==e?void 0:e.el)||void 0===s?void 0:s.id)||t.length+1,element:e})}fireEvent(t,e=null){if(this.events.hasOwnProperty(t))return this.events[t](e)}on(t,e){this.events[t]=e}}}},e={};var s=function s(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,s),n.exports}(100);return s})()));