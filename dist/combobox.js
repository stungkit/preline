!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var s in i)("object"==typeof exports?exports:t)[s]=i[s]}}(self,(()=>(()=>{"use strict";var t={223:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BREAKPOINTS=e.COMBO_BOX_ACCESSIBILITY_KEY_SET=e.SELECT_ACCESSIBILITY_KEY_SET=e.TABS_ACCESSIBILITY_KEY_SET=e.OVERLAY_ACCESSIBILITY_KEY_SET=e.DROPDOWN_ACCESSIBILITY_KEY_SET=e.POSITIONS=void 0,e.POSITIONS={auto:"auto","auto-start":"auto-start","auto-end":"auto-end",top:"top","top-left":"top-start","top-right":"top-end",bottom:"bottom","bottom-left":"bottom-start","bottom-right":"bottom-end",right:"right","right-start":"right-start","right-end":"right-end",left:"left","left-start":"left-start","left-end":"left-end"},e.DROPDOWN_ACCESSIBILITY_KEY_SET=["Escape","ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Home","End","Enter"],e.OVERLAY_ACCESSIBILITY_KEY_SET=["Escape","Tab"],e.TABS_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End"],e.SELECT_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter","Space","Tab"],e.COMBO_BOX_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter"],e.BREAKPOINTS={xs:0,sm:640,md:768,lg:1024,xl:1280,"2xl":1536}},292:function(t,e){
/*
 * @version: 3.0.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
Object.defineProperty(e,"__esModule",{value:!0}),e.menuSearchHistory=e.classToClassList=e.htmlToElement=e.afterTransition=e.dispatch=e.debounce=e.isScrollable=e.isParentOrElementHidden=e.isJson=e.isIpadOS=e.isIOS=e.isDirectChild=e.isFormElement=e.isFocused=e.isEnoughSpace=e.getHighestZIndex=e.getZIndex=e.getClassPropertyAlt=e.getClassProperty=e.stringToBoolean=void 0;e.stringToBoolean=t=>"true"===t;e.getClassProperty=(t,e,i="")=>(window.getComputedStyle(t).getPropertyValue(e)||i).replace(" ","");e.getClassPropertyAlt=(t,e,i="")=>{let s="";return t.classList.forEach((t=>{t.includes(e)&&(s=t)})),s.match(/:(.*)]/)?s.match(/:(.*)]/)[1]:i};const i=t=>window.getComputedStyle(t).getPropertyValue("z-index");e.getZIndex=i;e.getHighestZIndex=t=>{let e=Number.NEGATIVE_INFINITY;return t.forEach((t=>{let s=i(t);"auto"!==s&&(s=parseInt(s,10),s>e&&(e=s))})),e};e.isDirectChild=(t,e)=>{const i=t.children;for(let t=0;t<i.length;t++)if(i[t]===e)return!0;return!1};e.isEnoughSpace=(t,e,i="auto",s=10,o=null)=>{const l=e.getBoundingClientRect(),n=o?o.getBoundingClientRect():null,r=window.innerHeight,a=n?l.top-n.top:l.top,u=(o?n.bottom:r)-l.bottom,h=t.clientHeight+s;return"bottom"===i?u>=h:"top"===i?a>=h:a>=h||u>=h};e.isFocused=t=>document.activeElement===t;e.isFormElement=t=>t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement;e.isIOS=()=>!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform);e.isIpadOS=()=>navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform);e.isJson=t=>{if("string"!=typeof t)return!1;const e=t.trim()[0],i=t.trim().slice(-1);if("{"===e&&"}"===i||"["===e&&"]"===i)try{return JSON.parse(t),!0}catch(t){return!1}return!1};const s=t=>{if(!t)return!1;return"none"===window.getComputedStyle(t).display||s(t.parentElement)};e.isParentOrElementHidden=s;e.isScrollable=t=>{const e=window.getComputedStyle(t),i=e.overflowY,s=e.overflowX,o=("scroll"===i||"auto"===i)&&t.scrollHeight>t.clientHeight,l=("scroll"===s||"auto"===s)&&t.scrollWidth>t.clientWidth;return o||l};e.debounce=(t,e=200)=>{let i;return(...s)=>{clearTimeout(i),i=setTimeout((()=>{t.apply(this,s)}),e)}};e.dispatch=(t,e,i=null)=>{const s=new CustomEvent(t,{detail:{payload:i},bubbles:!0,cancelable:!0,composed:!1});e.dispatchEvent(s)};e.afterTransition=(t,e)=>{const i=()=>{e(),t.removeEventListener("transitionend",i,!0)},s=window.getComputedStyle(t),o=s.getPropertyValue("transition-duration");"none"!==s.getPropertyValue("transition-property")&&parseFloat(o)>0?t.addEventListener("transitionend",i,!0):e()};e.htmlToElement=t=>{const e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild};e.classToClassList=(t,e,i=" ",s="add")=>{t.split(i).forEach((t=>"add"===s?e.classList.add(t):e.classList.remove(t)))};const o={historyIndex:-1,addHistory(t){this.historyIndex=t},existsInHistory(t){return t>this.historyIndex},clearHistory(){this.historyIndex=-1}};e.menuSearchHistory=o},809:function(t,e,i){
/*
 * HSComboBox
 * @version: 3.0.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
var s=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(o,l){function n(t){try{a(s.next(t))}catch(t){l(t)}}function r(t){try{a(s.throw(t))}catch(t){l(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(n,r)}a((s=s.apply(t,e||[])).next())}))},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const l=i(292),n=o(i(961)),r=i(223);class a extends n.default{constructor(t,e,i){var s,o,l,n,r,a,u,h,d,p,c,m,b,g,v,y,x,f,E,S,L,T,C,w,A,I,O,P;super(t,e,i),this.isSearchLengthExceeded=!1;const B=t.getAttribute("data-hs-combo-box"),k=B?JSON.parse(B):{},_=Object.assign(Object.assign({},k),e);this.gap=5,this.viewport=null!==(s="string"==typeof(null==_?void 0:_.viewport)?document.querySelector(null==_?void 0:_.viewport):null==_?void 0:_.viewport)&&void 0!==s?s:null,this.preventVisibility=null!==(o=null==_?void 0:_.preventVisibility)&&void 0!==o&&o,this.minSearchLength=null!==(l=null==_?void 0:_.minSearchLength)&&void 0!==l?l:0,this.apiUrl=null!==(n=null==_?void 0:_.apiUrl)&&void 0!==n?n:null,this.apiDataPart=null!==(r=null==_?void 0:_.apiDataPart)&&void 0!==r?r:null,this.apiQuery=null!==(a=null==_?void 0:_.apiQuery)&&void 0!==a?a:null,this.apiSearchQuery=null!==(u=null==_?void 0:_.apiSearchQuery)&&void 0!==u?u:null,this.apiSearchPath=null!==(h=null==_?void 0:_.apiSearchPath)&&void 0!==h?h:null,this.apiSearchDefaultPath=null!==(d=null==_?void 0:_.apiSearchDefaultPath)&&void 0!==d?d:null,this.apiHeaders=null!==(p=null==_?void 0:_.apiHeaders)&&void 0!==p?p:{},this.apiGroupField=null!==(c=null==_?void 0:_.apiGroupField)&&void 0!==c?c:null,this.outputItemTemplate=null!==(m=null==_?void 0:_.outputItemTemplate)&&void 0!==m?m:'<div class="cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-hs-combo-box-output-item>\n\t\t\t\t<div class="flex justify-between items-center w-full">\n\t\t\t\t\t<span data-hs-combo-box-search-text></span>\n\t\t\t\t\t<span class="hidden hs-combo-box-selected:block">\n\t\t\t\t\t\t<svg class="shrink-0 size-3.5 text-blue-600 dark:text-blue-500" xmlns="http:.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n\t\t\t\t\t\t\t<polyline points="20 6 9 17 4 12"></polyline>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>',this.outputEmptyTemplate=null!==(b=null==_?void 0:_.outputEmptyTemplate)&&void 0!==b?b:'<div class="py-2 px-4 w-full text-sm text-gray-800 rounded-lg dark:bg-neutral-900 dark:text-neutral-200">Nothing found...</div>',this.outputLoaderTemplate=null!==(g=null==_?void 0:_.outputLoaderTemplate)&&void 0!==g?g:'<div class="flex justify-center items-center py-2 px-4 text-sm text-gray-800 rounded-lg bg-white dark:bg-neutral-900 dark:text-neutral-200">\n\t\t\t\t<div class="animate-spin inline-block size-6 border-3 border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">\n\t\t\t\t\t<span class="sr-only">Loading...</span>\n\t\t\t\t</div>\n\t\t\t</div>',this.groupingType=null!==(v=null==_?void 0:_.groupingType)&&void 0!==v?v:null,this.groupingTitleTemplate=null!==(y=null==_?void 0:_.groupingTitleTemplate)&&void 0!==y?y:"default"===this.groupingType?'<div class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"></div>':'<button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold whitespace-nowrap rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"></button>',this.tabsWrapperTemplate=null!==(x=null==_?void 0:_.tabsWrapperTemplate)&&void 0!==x?x:'<div class="overflow-x-auto p-4"></div>',this.preventSelection=null!==(f=null==_?void 0:_.preventSelection)&&void 0!==f&&f,this.preventAutoPosition=null!==(E=null==_?void 0:_.preventAutoPosition)&&void 0!==E&&E,this.isOpenOnFocus=null!==(S=null==_?void 0:_.isOpenOnFocus)&&void 0!==S&&S,this.input=null!==(L=this.el.querySelector("[data-hs-combo-box-input]"))&&void 0!==L?L:null,this.output=null!==(T=this.el.querySelector("[data-hs-combo-box-output]"))&&void 0!==T?T:null,this.itemsWrapper=null!==(C=this.el.querySelector("[data-hs-combo-box-output-items-wrapper]"))&&void 0!==C?C:null,this.items=null!==(w=Array.from(this.el.querySelectorAll("[data-hs-combo-box-output-item]")))&&void 0!==w?w:[],this.tabs=[],this.toggle=null!==(A=this.el.querySelector("[data-hs-combo-box-toggle]"))&&void 0!==A?A:null,this.toggleClose=null!==(I=this.el.querySelector("[data-hs-combo-box-close]"))&&void 0!==I?I:null,this.toggleOpen=null!==(O=this.el.querySelector("[data-hs-combo-box-open]"))&&void 0!==O?O:null,this.outputPlaceholder=null,this.selected=this.value=null!==(P=this.el.querySelector("[data-hs-combo-box-input]").value)&&void 0!==P?P:"",this.currentData=null,this.isOpened=!1,this.isCurrent=!1,this.animationInProcess=!1,this.selectedGroup="all",this.init()}inputFocus(){this.isOpened||(this.setResultAndRender(),this.open())}inputInput(t){const e=t.target.value.trim();e.length<=this.minSearchLength?this.setResultAndRender(""):this.setResultAndRender(e),""!==this.input.value?this.el.classList.add("has-value"):this.el.classList.remove("has-value"),this.isOpened||this.open()}toggleClick(){this.isOpened?this.close():this.open(this.toggle.getAttribute("data-hs-combo-box-toggle"))}toggleCloseClick(){this.close()}toggleOpenClick(){this.open()}init(){this.createCollection(window.$hsComboBoxCollection,this),this.build()}build(){this.buildInput(),this.groupingType&&this.setGroups(),this.buildItems(),this.preventVisibility&&(this.preventAutoPosition||this.recalculateDirection()),this.toggle&&this.buildToggle(),this.toggleClose&&this.buildToggleClose(),this.toggleOpen&&this.buildToggleOpen()}getNestedProperty(t,e){return e.split(".").reduce(((t,e)=>t&&t[e]),t)}setValue(t,e=null){this.selected=t,this.value=t,this.input.value=t,e&&(this.currentData=e),this.fireEvent("select",this.currentData),(0,l.dispatch)("select.hs.combobox",this.el,this.currentData)}setValueAndOpen(t){this.value=t,this.items.length&&this.setItemsVisibility()}setValueAndClear(t,e=null){t?this.setValue(t,e):this.setValue(this.selected,e),this.outputPlaceholder&&this.destroyOutputPlaceholder()}setSelectedByValue(t){this.items.forEach((e=>{this.isTextExists(e,t)?e.classList.add("selected"):e.classList.remove("selected")}))}setResultAndRender(t=""){let e=this.preventVisibility?this.input.value:t;this.setResults(e),(this.apiSearchQuery||this.apiSearchPath||this.apiSearchDefaultPath)&&this.itemsFromJson(),this.isSearchLengthExceeded=""===e}setResults(t){this.value=t,this.resultItems(),this.hasVisibleItems()?this.destroyOutputPlaceholder():this.buildOutputPlaceholder()}setGroups(){const t=[];this.items.forEach((e=>{const{group:i}=JSON.parse(e.getAttribute("data-hs-combo-box-output-item"));t.some((t=>(null==t?void 0:t.name)===i.name))||t.push(i)})),this.groups=t}setApiGroups(t){const e=[];t.forEach((t=>{const i=t[this.apiGroupField];e.some((t=>t.name===i))||e.push({name:i,title:i})})),this.groups=e}setItemsVisibility(){"tabs"===this.groupingType&&"all"!==this.selectedGroup&&this.items.forEach((t=>{t.style.display="none"}));const t="tabs"===this.groupingType?"all"===this.selectedGroup?this.items:this.items.filter((t=>{const{group:e}=JSON.parse(t.getAttribute("data-hs-combo-box-output-item"));return e.name===this.selectedGroup})):this.items;"tabs"===this.groupingType&&"all"!==this.selectedGroup&&t.forEach((t=>{t.style.display="block"})),t.forEach((t=>{this.isTextExistsAny(t,this.value)?t.style.display="block":t.style.display="none"})),"default"===this.groupingType&&this.output.querySelectorAll("[data-hs-combo-box-group-title]").forEach((t=>{const e=t.getAttribute("data-hs-combo-box-group-title");this.items.filter((t=>{const{group:i}=JSON.parse(t.getAttribute("data-hs-combo-box-output-item"));return i.name===e&&"block"===t.style.display})).length?t.style.display="block":t.style.display="none"}))}isTextExists(t,e){const i=e.map((t=>t.toLowerCase()));return Array.from(t.querySelectorAll("[data-hs-combo-box-search-text]")).some((t=>i.includes(t.getAttribute("data-hs-combo-box-search-text").toLowerCase())))}isTextExistsAny(t,e){return Array.from(t.querySelectorAll("[data-hs-combo-box-search-text]")).some((t=>t.getAttribute("data-hs-combo-box-search-text").toLowerCase().includes(e.toLowerCase())))}hasVisibleItems(){return!!this.items.length&&this.items.some((t=>"block"===t.style.display))}valuesBySelector(t){return Array.from(t.querySelectorAll("[data-hs-combo-box-search-text]")).reduce(((t,e)=>[...t,e.getAttribute("data-hs-combo-box-search-text")]),[])}sortItems(){return this.items.sort(((t,e)=>{const i=t.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text"),s=e.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text");return i<s?-1:i>s?1:0}))}buildInput(){this.isOpenOnFocus&&(this.onInputFocusListener=()=>this.inputFocus(),this.input.addEventListener("focus",this.onInputFocusListener)),this.onInputInputListener=(0,l.debounce)((t=>this.inputInput(t))),this.input.addEventListener("input",this.onInputInputListener)}buildItems(){return s(this,void 0,void 0,(function*(){this.output.role="listbox",this.output.tabIndex=-1,this.output.ariaOrientation="vertical",this.apiUrl?yield this.itemsFromJson():(this.itemsWrapper?this.itemsWrapper.innerHTML="":this.output.innerHTML="",this.itemsFromHtml()),(null==this?void 0:this.items.length)&&this.items[0].classList.contains("selected")&&(this.currentData=JSON.parse(this.items[0].getAttribute("data-hs-combo-box-item-stored-data")))}))}buildOutputLoader(){if(this.outputLoader)return!1;this.outputLoader=(0,l.htmlToElement)(this.outputLoaderTemplate),this.items.length||this.outputPlaceholder?(this.outputLoader.style.position="absolute",this.outputLoader.style.top="0",this.outputLoader.style.bottom="0",this.outputLoader.style.left="0",this.outputLoader.style.right="0",this.outputLoader.style.zIndex="2"):(this.outputLoader.style.position="",this.outputLoader.style.top="",this.outputLoader.style.bottom="",this.outputLoader.style.left="",this.outputLoader.style.right="",this.outputLoader.style.zIndex="",this.outputLoader.style.height="30px"),this.output.append(this.outputLoader)}buildToggle(){var t,e,i,s;this.isOpened?((null===(t=null==this?void 0:this.toggle)||void 0===t?void 0:t.ariaExpanded)&&(this.toggle.ariaExpanded="true"),(null===(e=null==this?void 0:this.input)||void 0===e?void 0:e.ariaExpanded)&&(this.input.ariaExpanded="true")):((null===(i=null==this?void 0:this.toggle)||void 0===i?void 0:i.ariaExpanded)&&(this.toggle.ariaExpanded="false"),(null===(s=null==this?void 0:this.input)||void 0===s?void 0:s.ariaExpanded)&&(this.input.ariaExpanded="false")),this.onToggleClickListener=()=>this.toggleClick(),this.toggle.addEventListener("click",this.onToggleClickListener)}buildToggleClose(){this.onToggleCloseClickListener=()=>this.toggleCloseClick(),this.toggleClose.addEventListener("click",this.onToggleCloseClickListener)}buildToggleOpen(){this.onToggleOpenClickListener=()=>this.toggleOpenClick(),this.toggleOpen.addEventListener("click",this.onToggleOpenClickListener)}buildOutputPlaceholder(){this.outputPlaceholder||(this.outputPlaceholder=(0,l.htmlToElement)(this.outputEmptyTemplate)),this.appendItemsToWrapper(this.outputPlaceholder)}destroyOutputLoader(){this.outputLoader&&this.outputLoader.remove(),this.outputLoader=null}itemRender(t){var e;const i=t.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text"),s=null!==(e=JSON.parse(t.getAttribute("data-hs-combo-box-item-stored-data")))&&void 0!==e?e:null;this.itemsWrapper?this.itemsWrapper.append(t):this.output.append(t),this.preventSelection||t.addEventListener("click",(()=>{this.close(i,s),this.setSelectedByValue(this.valuesBySelector(t))}))}plainRender(t){t.forEach((t=>{this.itemRender(t)}))}jsonItemsRender(t){t.forEach(((t,e)=>{const i=(0,l.htmlToElement)(this.outputItemTemplate);i.setAttribute("data-hs-combo-box-item-stored-data",JSON.stringify(t)),i.querySelectorAll("[data-hs-combo-box-output-item-field]").forEach((e=>{const i=this.getNestedProperty(t,e.getAttribute("data-hs-combo-box-output-item-field")),s=e.hasAttribute("data-hs-combo-box-output-item-hide-if-empty");e.textContent=null!=i?i:"",!i&&s&&(e.style.display="none")})),i.querySelectorAll("[data-hs-combo-box-search-text]").forEach((e=>{const i=this.getNestedProperty(t,e.getAttribute("data-hs-combo-box-output-item-field"));e.setAttribute("data-hs-combo-box-search-text",null!=i?i:"")})),i.querySelectorAll("[data-hs-combo-box-output-item-attr]").forEach((e=>{JSON.parse(e.getAttribute("data-hs-combo-box-output-item-attr")).forEach((i=>{e.setAttribute(i.attr,t[i.valueFrom])}))})),i.setAttribute("tabIndex",`${e}`),"tabs"!==this.groupingType&&"default"!==this.groupingType||i.setAttribute("data-hs-combo-box-output-item",`{"group": {"name": "${t[this.apiGroupField]}", "title": "${t[this.apiGroupField]}"}}`),this.items=[...this.items,i],this.preventSelection||i.addEventListener("click",(()=>{this.close(i.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text"),JSON.parse(i.getAttribute("data-hs-combo-box-item-stored-data"))),this.setSelectedByValue(this.valuesBySelector(i))})),this.appendItemsToWrapper(i)}))}groupDefaultRender(){this.groups.forEach((t=>{const e=(0,l.htmlToElement)(this.groupingTitleTemplate);e.setAttribute("data-hs-combo-box-group-title",t.name),e.classList.add("--exclude-accessibility"),e.innerText=t.title,this.itemsWrapper?this.itemsWrapper.append(e):this.output.append(e);const i=this.sortItems().filter((e=>{const{group:i}=JSON.parse(e.getAttribute("data-hs-combo-box-output-item"));return i.name===t.name}));this.plainRender(i)}))}groupTabsRender(){const t=(0,l.htmlToElement)(this.tabsWrapperTemplate),e=(0,l.htmlToElement)('<div class="flex flex-nowrap gap-x-2"></div>');t.append(e),this.output.insertBefore(t,this.output.firstChild);const i=(0,l.htmlToElement)(this.groupingTitleTemplate);i.setAttribute("data-hs-combo-box-group-title","all"),i.classList.add("--exclude-accessibility","active"),i.innerText="All",this.tabs=[...this.tabs,i],e.append(i),i.addEventListener("click",(()=>{this.selectedGroup="all";const t=this.tabs.find((t=>t.getAttribute("data-hs-combo-box-group-title")===this.selectedGroup));this.tabs.forEach((t=>t.classList.remove("active"))),t.classList.add("active"),this.setItemsVisibility()})),this.groups.forEach((t=>{const i=(0,l.htmlToElement)(this.groupingTitleTemplate);i.setAttribute("data-hs-combo-box-group-title",t.name),i.classList.add("--exclude-accessibility"),i.innerText=t.title,this.tabs=[...this.tabs,i],e.append(i),i.addEventListener("click",(()=>{this.selectedGroup=t.name;const e=this.tabs.find((t=>t.getAttribute("data-hs-combo-box-group-title")===this.selectedGroup));this.tabs.forEach((t=>t.classList.remove("active"))),e.classList.add("active"),this.setItemsVisibility()}))}))}itemsFromHtml(){if("default"===this.groupingType)this.groupDefaultRender();else if("tabs"===this.groupingType){const t=this.sortItems();this.groupTabsRender(),this.plainRender(t)}else{const t=this.sortItems();this.plainRender(t)}this.setResults(this.input.value)}itemsFromJson(){return s(this,void 0,void 0,(function*(){if(this.isSearchLengthExceeded)return!1;this.buildOutputLoader();try{const t=`${this.apiQuery}`;let e,i,s=this.apiUrl;!this.apiSearchQuery&&this.apiSearchPath?(i=this.apiSearchDefaultPath&&""===this.value?`/${this.apiSearchDefaultPath}`:`/${this.apiSearchPath}/${this.value.toLowerCase()}`,(this.apiSearchPath||this.apiSearchDefaultPath)&&(s+=i)):(e=`${this.apiSearchQuery}=${this.value.toLowerCase()}`,this.apiQuery&&this.apiSearchQuery?s+=`?${e}&${t}`:this.apiQuery?s+=`?${t}`:this.apiSearchQuery&&(s+=`?${e}`));const o=yield fetch(s,this.apiHeaders);let n=yield o.json();this.apiDataPart&&(n=n[this.apiDataPart]),(this.apiSearchQuery||this.apiSearchPath)&&(this.items=[]),this.itemsWrapper?this.itemsWrapper.innerHTML="":this.output.innerHTML="","tabs"===this.groupingType?(this.setApiGroups(n),this.groupTabsRender(),this.jsonItemsRender(n)):"default"===this.groupingType?(this.setApiGroups(n),this.groups.forEach((t=>{const e=(0,l.htmlToElement)(this.groupingTitleTemplate);e.setAttribute("data-hs-combo-box-group-title",t.name),e.classList.add("--exclude-accessibility"),e.innerText=t.title;const i=n.filter((e=>e[this.apiGroupField]===t.name));this.itemsWrapper?this.itemsWrapper.append(e):this.output.append(e),this.jsonItemsRender(i)}))):this.jsonItemsRender(n),this.setResults(this.input.value.length<=this.minSearchLength?"":this.input.value)}catch(t){console.error(t),this.buildOutputPlaceholder()}this.destroyOutputLoader()}))}appendItemsToWrapper(t){this.itemsWrapper?this.itemsWrapper.append(t):this.output.append(t)}resultItems(){if(!this.items.length)return!1;this.setItemsVisibility(),this.setSelectedByValue([this.selected])}destroyOutputPlaceholder(){this.outputPlaceholder&&this.outputPlaceholder.remove(),this.outputPlaceholder=null}getCurrentData(){return this.currentData}setCurrent(){window.$hsComboBoxCollection.length&&(window.$hsComboBoxCollection.map((t=>t.element.isCurrent=!1)),this.isCurrent=!0)}open(t){return!this.animationInProcess&&(void 0!==t&&this.setValueAndOpen(t),!this.preventVisibility&&(this.animationInProcess=!0,this.output.style.display="block",this.preventAutoPosition||this.recalculateDirection(),setTimeout((()=>{var t,e;(null===(t=null==this?void 0:this.input)||void 0===t?void 0:t.ariaExpanded)&&(this.input.ariaExpanded="true"),(null===(e=null==this?void 0:this.toggle)||void 0===e?void 0:e.ariaExpanded)&&(this.toggle.ariaExpanded="true"),this.el.classList.add("active"),this.animationInProcess=!1})),void(this.isOpened=!0)))}close(t,e=null){var i,s;return!this.animationInProcess&&(this.preventVisibility?(this.setValueAndClear(t,e),""!==this.input.value?this.el.classList.add("has-value"):this.el.classList.remove("has-value"),!1):(this.animationInProcess=!0,(null===(i=null==this?void 0:this.input)||void 0===i?void 0:i.ariaExpanded)&&(this.input.ariaExpanded="false"),(null===(s=null==this?void 0:this.toggle)||void 0===s?void 0:s.ariaExpanded)&&(this.toggle.ariaExpanded="false"),this.el.classList.remove("active"),this.preventAutoPosition||(this.output.classList.remove("bottom-full","top-full"),this.output.style.marginTop="",this.output.style.marginBottom=""),(0,l.afterTransition)(this.output,(()=>{this.output.style.display="none",this.setValueAndClear(t,e||null),this.animationInProcess=!1})),""!==this.input.value?this.el.classList.add("has-value"):this.el.classList.remove("has-value"),void(this.isOpened=!1)))}recalculateDirection(){(0,l.isEnoughSpace)(this.output,this.input,"bottom",this.gap,this.viewport)?(this.output.classList.remove("bottom-full"),this.output.style.marginBottom="",this.output.classList.add("top-full"),this.output.style.marginTop=`${this.gap}px`):(this.output.classList.remove("top-full"),this.output.style.marginTop="",this.output.classList.add("bottom-full"),this.output.style.marginBottom=`${this.gap}px`)}destroy(){this.input.removeEventListener("focus",this.onInputFocusListener),this.input.removeEventListener("input",this.onInputInputListener),this.toggle.removeEventListener("click",this.onToggleClickListener),this.toggleClose&&this.toggleClose.removeEventListener("click",this.onToggleCloseClickListener),this.toggleOpen&&this.toggleOpen.removeEventListener("click",this.onToggleOpenClickListener),this.el.classList.remove("has-value","active"),this.items.length&&this.items.forEach((t=>{t.classList.remove("selected"),t.style.display=""})),this.output.removeAttribute("role"),this.output.removeAttribute("tabindex"),this.output.removeAttribute("aria-orientation"),this.outputLoader&&(this.outputLoader.remove(),this.outputLoader=null),this.outputPlaceholder&&(this.outputPlaceholder.remove(),this.outputPlaceholder=null),this.apiUrl&&(this.output.innerHTML=""),this.items=[],window.$hsComboBoxCollection=window.$hsComboBoxCollection.filter((({element:t})=>t.el!==this.el))}static getInstance(t,e){const i=window.$hsComboBoxCollection.find((e=>e.element.el===("string"==typeof t?document.querySelector(t):t)));return i?e?i:i.element:null}static autoInit(){window.$hsComboBoxCollection||(window.$hsComboBoxCollection=[],window.addEventListener("click",(t=>{const e=t.target;a.closeCurrentlyOpened(e)})),document.addEventListener("keydown",(t=>a.accessibility(t)))),window.$hsComboBoxCollection&&(window.$hsComboBoxCollection=window.$hsComboBoxCollection.filter((({element:t})=>document.contains(t.el)))),document.querySelectorAll("[data-hs-combo-box]:not(.--prevent-on-load-init)").forEach((t=>{if(!window.$hsComboBoxCollection.find((e=>{var i;return(null===(i=null==e?void 0:e.element)||void 0===i?void 0:i.el)===t}))){const e=t.getAttribute("data-hs-combo-box"),i=e?JSON.parse(e):{};new a(t,i)}}))}static close(t){const e=window.$hsComboBoxCollection.find((e=>e.element.el===("string"==typeof t?document.querySelector(t):t)));e&&e.element.isOpened&&e.element.close()}static closeCurrentlyOpened(t=null){if(!t.closest("[data-hs-combo-box].active")){const t=window.$hsComboBoxCollection.filter((t=>t.element.isOpened))||null;t&&t.forEach((t=>{t.element.close()}))}}static getPreparedItems(t=!1,e){if(!e)return null;return(t?Array.from(e.querySelectorAll(":scope > *:not(.--exclude-accessibility)")).filter((t=>"none"!==t.style.display)).reverse():Array.from(e.querySelectorAll(":scope > *:not(.--exclude-accessibility)")).filter((t=>"none"!==t.style.display))).filter((t=>!t.classList.contains("disabled")))}static setHighlighted(t,e,i){e.focus(),i.value=e.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text"),t&&t.classList.remove("hs-combo-box-output-item-highlighted"),e.classList.add("hs-combo-box-output-item-highlighted")}static accessibility(t){if(window.$hsComboBoxCollection.find((t=>t.element.preventVisibility?t.element.isCurrent:t.element.isOpened))&&r.COMBO_BOX_ACCESSIBILITY_KEY_SET.includes(t.code)&&!t.metaKey)switch(t.code){case"Escape":t.preventDefault(),this.onEscape();break;case"ArrowUp":t.preventDefault(),t.stopImmediatePropagation(),this.onArrow();break;case"ArrowDown":t.preventDefault(),t.stopImmediatePropagation(),this.onArrow(!1);break;case"Home":t.preventDefault(),t.stopImmediatePropagation(),this.onStartEnd();break;case"End":t.preventDefault(),t.stopImmediatePropagation(),this.onStartEnd(!1);break;case"Enter":t.preventDefault(),this.onEnter(t)}}static onEscape(){const t=window.$hsComboBoxCollection.find((t=>!t.element.preventVisibility&&t.element.isOpened));t&&(t.element.close(),t.element.input.blur())}static onArrow(t=!0){var e;const i=window.$hsComboBoxCollection.find((t=>t.element.preventVisibility?t.element.isCurrent:t.element.isOpened));if(i){const s=null!==(e=i.element.itemsWrapper)&&void 0!==e?e:i.element.output;if(!s)return!1;const o=a.getPreparedItems(t,s),l=s.querySelector(".hs-combo-box-output-item-highlighted");let n=null;l||o[0].classList.add("hs-combo-box-output-item-highlighted");let r=o.findIndex((t=>t===l));r+1<o.length&&r++,n=o[r],a.setHighlighted(l,n,i.element.input)}}static onStartEnd(t=!0){var e;const i=window.$hsComboBoxCollection.find((t=>t.element.preventVisibility?t.element.isCurrent:t.element.isOpened));if(i){const s=null!==(e=i.element.itemsWrapper)&&void 0!==e?e:i.element.output;if(!s)return!1;const o=a.getPreparedItems(t,s),l=s.querySelector(".hs-combo-box-output-item-highlighted");o.length&&a.setHighlighted(l,o[0],i.element.input)}}static onEnter(t){var e;const i=t.target,s=window.$hsComboBoxCollection.find((e=>!(0,l.isParentOrElementHidden)(e.element.el)&&t.target.closest("[data-hs-combo-box]")===e.element.el)),o=s.element.el.querySelector(".hs-combo-box-output-item-highlighted a");i.hasAttribute("data-hs-combo-box-input")?(s.element.close(),i.blur()):(s.element.preventSelection||s.element.setSelectedByValue(s.element.valuesBySelector(t.target)),s.element.preventSelection&&o&&window.location.assign(o.getAttribute("href")),s.element.close(s.element.preventSelection?null:t.target.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text"),null!==(e=JSON.parse(t.target.getAttribute("data-hs-combo-box-item-stored-data")))&&void 0!==e?e:null))}}window.addEventListener("load",(()=>{a.autoInit()})),document.addEventListener("scroll",(()=>{if(!window.$hsComboBoxCollection)return!1;const t=window.$hsComboBoxCollection.find((t=>t.element.isOpened));t&&!t.element.preventAutoPosition&&t.element.recalculateDirection()})),"undefined"!=typeof window&&(window.HSComboBox=a),e.default=a},961:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t,e,i){this.el=t,this.options=e,this.events=i,this.el=t,this.options=e,this.events={}}createCollection(t,e){var i;t.push({id:(null===(i=null==e?void 0:e.el)||void 0===i?void 0:i.id)||t.length+1,element:e})}fireEvent(t,e=null){if(this.events.hasOwnProperty(t))return this.events[t](e)}on(t,e){this.events[t]=e}}}},e={};var i=function i(s){var o=e[s];if(void 0!==o)return o.exports;var l=e[s]={exports:{}};return t[s].call(l.exports,l,l.exports,i),l.exports}(809);return i})()));