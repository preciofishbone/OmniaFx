if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["4f805003-50fa-4672-b24f-6f8fa2455523"])throw new Error("Error, already loaded manifest 4f805003-50fa-4672-b24f-6f8fa2455523 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["4f805003-50fa-4672-b24f-6f8fa2455523"]=function(){(()=>{var e={"./client/fx/sp/ux/enterpriseproperties/settings/enterprisekeywordsfield/enterprisekeywordsfieldsettings.tsx":(e,o,r)=>{"use strict";r.r(o),r.d(o,{EnterpriseKeywordsFieldSettings:()=>f});var t,s=r("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),b=r("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),a=r("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),n=r("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","4f805003-50fa-4672-b24f-6f8fa2455523");(t||(t={})).namespace="Omnia.Ux.EnterpriseProperties.Settings.EnterpriseKeywords";var i=r("eff19cad-5557-434b-a477-1e1e2a70a2a0"),d=Object.defineProperty,p=Object.getOwnPropertyDescriptor,l=(e,o,r,t)=>{for(var s,b=t>1?void 0:t?p(o,r):o,a=e.length-1;a>=0;a--)(s=e[a])&&(b=(t?s(o,r,b):s(b))||b);return t&&b&&d(o,r,b),b};let f=class extends a.Vue{constructor(){super(...arguments),this.termSet=null,this.isLoading=!0}mounted(){n.WebComponentBootstrapper.registerElementInstance(this,this.$el)}created(){this.termStore.actions.ensurekeywordTermSet.dispatch().then((e=>{this.termSet=e,this.isLoading=!1}))}render(){return(0,s.h)("v-flex",{attrs:{xs12:!0}},[this.isLoading?(0,s.h)("div",[(0,s.h)("v-progress-linear",{attrs:{indeterminate:!0,size:16}})]):(0,s.h)("span",[`${this.loc.KeyWordTermSet} ${this.termSet.id}`])])}};l([(0,a.Prop)()],f.prototype,"property",2),l([(0,a.Prop)()],f.prototype,"disabled",2),l([(0,a.Prop)({default:!1})],f.prototype,"dark",2),l([(0,a.Prop)()],f.prototype,"styles",2),l([(0,a.Prop)({default:null})],f.prototype,"useValidator",2),l([(0,n.Localize)(t.namespace)],f.prototype,"loc",2),l([(0,n.Inject)(i.TermStore)],f.prototype,"termStore",2),f=l([b.default],f),n.WebComponentBootstrapper.registerElement((e=>{(0,n.vueCustomElement)(e.elementName,f)}))},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,o,r)=>{e.exports=r("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,o,r)=>{e.exports=r("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,o,r)=>{e.exports=r("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,o,r)=>{e.exports=r("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"eff19cad-5557-434b-a477-1e1e2a70a2a0":(e,o,r)=>{e.exports=r("dll-reference md20")("eff19cad-5557-434b-a477-1e1e2a70a2a0")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md20":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["fa502cf2-bcf9-4dc0-b4f9-13dc63c04bfc"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["4f805003-50fa-4672-b24f-6f8fa2455523"])throw new Error("Error, already loaded manifest 4f805003-50fa-4672-b24f-6f8fa2455523 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["4f805003-50fa-4672-b24f-6f8fa2455523"]=r;var o={};function r(t){var s=o[t];if(void 0!==s)return s.exports;var b=o[t]={exports:{}};return e[t](b,b.exports,r),b.exports}r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};r("./client/fx/sp/ux/enterpriseproperties/settings/enterprisekeywordsfield/enterprisekeywordsfieldsettings.tsx")})()};