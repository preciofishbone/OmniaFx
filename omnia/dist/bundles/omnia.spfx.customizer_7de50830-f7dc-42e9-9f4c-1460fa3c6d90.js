if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["7de50830-f7dc-42e9-9f4c-1460fa3c6d90"])throw new Error("Error, already loaded manifest 7de50830-f7dc-42e9-9f4c-1460fa3c6d90 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["7de50830-f7dc-42e9-9f4c-1460fa3c6d90"]=function(){(()=>{var e={"./wwwroot/scripts/omnia.spfx.customizer.js":function(e,o){define("4c71af72-bb9f-463d-a1b8-9cd6ee78bdb3_2.0.0",["@microsoft/sp-application-base","@microsoft/decorators"],(function(e,o){return function(e){var o={};function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(r,n,function(o){return e[o]}.bind(null,n));return r},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s="dXTj")}({GPet:
/*!*************************************************!*\
  !*** external "@microsoft/sp-application-base" ***!
  \*************************************************/
/*! no static exports found */function(o,t){o.exports=e},dXTj:
/*!************************************************************!*\
  !*** ./lib/extensions/omnia/OmniaApplicationCustomizer.js ***!
  \************************************************************/
/*! exports provided: default */function(e,o,t){"use strict";t.r(o);var r,n=t(/*! @microsoft/decorators */"wxtz"),i=t(/*! @microsoft/sp-application-base */"GPet"),a=(r=function(e,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])})(e,o)},function(e,o){function t(){this.constructor=e}r(e,o),e.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}),c=function(e,o,t,r){var n,i=arguments.length,a=i<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,o,t,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(a=(i<3?n(a):i>3?n(o,t,a):n(o,t))||a);return i>3&&a&&Object.defineProperty(o,t,a),a},s=function(e){function o(){var o=e.call(this)||this;return o.checkDebug=function(){var e=!1;new URLSearchParams(window.location.search);return window.location.search&&window.location.search.toLowerCase().indexOf("debug=true")>=0&&(e=!0),e},o.loadBoot=function(e){var t=o.getCookie("omnia.fx.localhosting.serviceids")||"";t&&(t="&localserving="+t);var r=o.getCookie("OmniaLocalServeDns")||"";r&&(r="&omniaLocalServeDns="+r);var n=document.createElement("script");n.src=e+"/omnia/boot/client/boot.js?bpPath="+o.context.pageContext.site.serverRelativeUrl+(o.properties.appTemplateId?"&appTemplateId="+o.properties.appTemplateId:"")+"&lang="+window.omnia.language+(o.properties.omniaServiceId&&o.properties.manifestId?"&omniaServiceId="+o.properties.omniaServiceId+"&manifestId="+o.properties.manifestId:"")+"&environment=2&debug="+o.checkDebug()+"&clientRuntime=spfx"+t+r,n.async=!0,n.onload=function(){n.onload=null,omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["11fdf0e5-afab-4311-8b35-6525a52ab432"]("fa3a1a13-1571-4b3a-852e-2f232cae82b6").OmniaFxBoot.registerForLoading("bb000000-0000-bbbb-0000-0000000000bb","7de50830-f7dc-42e9-9f4c-1460fa3c6d90",[],"js")},document.head.appendChild(n)},o.retryCount=0,o.renderPlaceHolders=function(){var e=o.tryCreateTopHolder();if(e){if(e)if(o._topPlaceholder.domElement&&(o._topPlaceholder.domElement.innerHTML='<header id="omnia-header"></header>'),o._topPlaceholder){if(o.properties){var t=o.properties.tenantId;t||(t="(Top property was not defined.)")}if(!o._bottomPlaceholder){if(o._bottomPlaceholder=o.context.placeholderProvider.tryCreateContent(i.PlaceholderName.Bottom,{onDispose:o.onDispose}),!o._bottomPlaceholder)return void console.error("The expected placeholder (Bottom) was not found.");if(o.properties){var r=o.properties.tenantId;r||(r="(Bottom property was not defined.)"),o._bottomPlaceholder.domElement&&(o._bottomPlaceholder.domElement.innerHTML='<footer class="omf-footer"></footer>')}}}else console.error("The expected placeholder (Top) was not found.")}else o.retryCount<20?setTimeout((function(){console.log("Omnia retries to get _topPlaceholder from SPFx "+o.retryCount+" time(s)"),o.retryCount++,o.renderPlaceHolders()}),100):console.error("Omnia failed to get _topPlaceholder from SPFx after 20 retries")},o}return a(o,e),o.prototype.onInit=function(){return this.properties&&this.properties.omniaUrl&&(window.omnia=window.omnia||{},window.omnia.user={type:this.context.pageContext.user.isAnonymousGuestUser?1:this.context.pageContext.user.isExternalGuestUser?3:2,uid:this.context.pageContext.user.loginName,userPrincipalName:this.context.pageContext.user.loginName,id:this.context.pageContext.aadInfo&&this.context.pageContext.aadInfo.userId?this.context.pageContext.aadInfo.userId.toString():null},window.omnia.language=this.context.pageContext.cultureInfo.currentUICultureName.toLowerCase(),window.omnia.sharepoint=window.omnia.sharepoint||{},window.omnia.sharepoint.pageContext=this.context.pageContext,window.omnia.sharepoint.applicationCustomizerContext={id:this.context.manifest.id,properties:this.properties},this.omniaUrl=this.properties.omniaUrl,window.omnia.enviroment=window.omnia.enviroment||{},window.omnia.enviroment.omniaUrl=this.omniaUrl,this.context.placeholderProvider.changedEvent.add(this,this.renderPlaceHolders),this.renderPlaceHolders()),Promise.resolve(null)},o.prototype.getHost=function(e){try{var o=document.createElement("a");return o.href=e,o.host}catch(e){return null}},o.prototype.getCookie=function(e){for(var o=e+"=",t=document.cookie.split(";"),r=0;r<t.length;r++){for(var n=t[r];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(o)){var i=n.substring(o.length,n.length);return decodeURIComponent(i)}}return null},o.prototype.tryCreateTopHolder=function(){return this._topPlaceholder||(this._topPlaceholder=this.context.placeholderProvider.tryCreateContent(i.PlaceholderName.Top,{onDispose:this.onDispose})),!(!this._topPlaceholder||!this._topPlaceholder.isVisible)&&(window._loadedOmniaBoot||(window._loadedOmniaBoot=!0,this.loadBoot(this.omniaUrl)),!0)},c([n.override],o.prototype,"onInit",null),o}(i.BaseApplicationCustomizer);o.default=s},wxtz:
/*!****************************************!*\
  !*** external "@microsoft/decorators" ***!
  \****************************************/
/*! no static exports found */function(e,t){e.exports=o}})}))}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["7de50830-f7dc-42e9-9f4c-1460fa3c6d90"])throw new Error("Error, already loaded manifest 7de50830-f7dc-42e9-9f4c-1460fa3c6d90 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["7de50830-f7dc-42e9-9f4c-1460fa3c6d90"]=t;var o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var i=o[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t("./wwwroot/scripts/omnia.spfx.customizer.js")})()},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["7de50830-f7dc-42e9-9f4c-1460fa3c6d90"]();