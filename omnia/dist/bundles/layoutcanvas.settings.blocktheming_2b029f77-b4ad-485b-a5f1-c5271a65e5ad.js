if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["2b029f77-b4ad-485b-a5f1-c5271a65e5ad"])throw new Error("Error, already loaded manifest 2b029f77-b4ad-485b-a5f1-c5271a65e5ad with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["2b029f77-b4ad-485b-a5f1-c5271a65e5ad"]=function(){(()=>{var e={"./client/fx/ux/layoutcanvas/editor/settings/layout/blocktheming.tsx":(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var i=o("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),n=o("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),a=o("./client/fx/ux/layoutcanvas/index.js"),b=o("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","2b029f77-b4ad-485b-a5f1-c5271a65e5ad"),r=o("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","2b029f77-b4ad-485b-a5f1-c5271a65e5ad"),s=Object.defineProperty,d=Object.getOwnPropertyDescriptor,l=(e,t,o,i)=>{for(var n,a=i>1?void 0:i?d(t,o):t,b=e.length-1;b>=0;b--)(n=e[b])&&(a=(i?n(t,o,a):n(a))||a);return i&&a&&s(t,o,a),a};let c=class extends r.VueComponentBase{constructor(){super(...arguments),this.layoutDefinition=null,this.editingThemedefinition=null}mounted(){b.WebComponentBootstrapper.registerElementInstance(this,this.$el)}created(){this.editingThemedefinition=this.editorStore.themeManager.getDefaultPageThemeForBlockEditingWithFallback(!0),this.layoutDefinition=this.editorStore.layout.state.definition}onThemingChange(e){this.editingThemedefinition=e,this.editorStore.layout.state.definition.settings.themeDefinitionBlock=e,this.editingThemedefinition=e}onSetThemeOption(e){this.layoutDefinition.settings.useCustomBlockTheme=e,this.layoutDefinition.settings.useCustomBlockTheme?this.editorStore.layout.state.definition.settings.themeDefinitionBlock=this.editingThemedefinition:this.editorStore.layout.state.definition.settings.themeDefinitionBlock=null}render(){return(0,i.h)("div",[(0,i.h)("v-switch",{attrs:{dark:this.theming.body.bg.dark,color:this.theming.body.components.color.base,"input-value":this.layoutDefinition.settings.useCustomBlockTheme,label:this.omniaUxLoc.LayoutEngine.Labels.CustomTheme,"true-value":!0,"false-value":!1},class:"mt-0",on:{change:e=>{this.onSetThemeOption(e)}}}),(0,i.h)("div",{directives:[{name:"show",value:this.layoutDefinition.settings.useCustomBlockTheme}]},[(0,i.h)("omfx-themedefinition-editor",{domProps:{valueBind:this.editingThemedefinition,hideChromeSettings:!0,onValueChanged:this.onThemingChange}})])])}};l([(0,b.Inject)(a.LayoutCanvasStore)],c.prototype,"editorStore",2),l([(0,b.Inject)(b.SubscriptionHandler)],c.prototype,"subscriptionHandler",2),l([(0,b.Inject)(r.ThemeStore)],c.prototype,"themeStore",2),l([(0,b.Localize)(r.OmniaUxLocalizationNamespace)],c.prototype,"omniaUxLoc",2),c=l([n.Component],c),b.WebComponentBootstrapper.registerElement((e=>{(0,b.vueCustomElement)(e.elementName,c)}))},"./client/fx/ux/layoutcanvas/index.js":(e,t,o)=>{e.exports=o("dll-reference md66")("./client/fx/ux/layoutcanvas/index.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,o)=>{e.exports=o("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,o)=>{e.exports=o("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["2b029f77-b4ad-485b-a5f1-c5271a65e5ad"])throw new Error("Error, already loaded manifest 2b029f77-b4ad-485b-a5f1-c5271a65e5ad with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["2b029f77-b4ad-485b-a5f1-c5271a65e5ad"]=o;var t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};o("./client/fx/ux/layoutcanvas/editor/settings/layout/blocktheming.tsx")})()};