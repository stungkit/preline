!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var s in o)("object"==typeof exports?exports:e)[s]=o[s]}}(self,(()=>(()=>{"use strict";var e={};return(()=>{var t,o=e;
/*
 * @version: 3.0.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */Object.defineProperty(o,"__esModule",{value:!0});const s=null!==(t=null===window||void 0===window?void 0:window.HS_CLIPBOARD_SELECTOR)&&void 0!==t?t:".js-clipboard";window.addEventListener("load",(()=>{document.querySelectorAll(s).forEach((e=>{new ClipboardJS(e,{text:e=>{const t=e.dataset.clipboardText;if(t)return t;const o=e.dataset.clipboardTarget,s=document.querySelector(o);return"SELECT"===s.tagName||"INPUT"===s.tagName||"TEXTAREA"===s.tagName?s.value:s.textContent}}).on("success",(()=>{const t=e.querySelector(".js-clipboard-default"),o=e.querySelector(".js-clipboard-success"),s=e.querySelector(".js-clipboard-success-text"),l=e.dataset.clipboardSuccessText||"",n=e.closest(".hs-tooltip");let d;s&&(d=s.textContent,s.textContent=l),t&&o&&(t.style.display="none",o.style.display="block"),n&&window.HSTooltip.show(n),setTimeout((function(){s&&d&&(s.textContent=d),n&&window.HSTooltip.hide(n),t&&o&&(o.style.display="",t.style.display="")}),800)}))}))}))})(),e})()));