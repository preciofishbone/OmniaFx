if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["f8ff3212-b3ad-4ad1-a07e-286a6f0c4935"])throw new Error("Error, already loaded manifest f8ff3212-b3ad-4ad1-a07e-286a6f0c4935 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["f8ff3212-b3ad-4ad1-a07e-286a6f0c4935"]=function(){(()=>{var e={"./client/fx/sp/ux/enterpriseproperties/edit/enterprisekeywordsfield/enterprisekeywordsfieldedit.tsx":(e,t,r)=>{"use strict";r.r(t),r.d(t,{EnterpriseKeywordsFieldEdit:()=>f});var o=r("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),a=r("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),s=r("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),i=r("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","f8ff3212-b3ad-4ad1-a07e-286a6f0c4935"),d=r("eff19cad-5557-434b-a477-1e1e2a70a2a0"),b=r("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","f8ff3212-b3ad-4ad1-a07e-286a6f0c4935"),n=r("5e618f4d-d014-414e-a681-89e34cbeda0f"),p=Object.defineProperty,l=Object.getOwnPropertyDescriptor,c=(e,t,r,o)=>{for(var a,s=o>1?void 0:o?l(t,r):t,i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&p(t,r,s),s};let f=class extends b.VueComponentBase{constructor(){super(...arguments),this.termSet=null,this.isLoading=!0,this.isRequired=!1}mounted(){i.WebComponentBootstrapper.registerElementInstance(this,this.$el)}created(){this.valueBind[this.property.internalName]||(this.valueBind[this.property.internalName]=[]),this.termStore.actions.ensurekeywordTermSet.dispatch().then((e=>{this.termSet=e,this.isLoading=!1})),this.isRequired=this.settings.required}beforeDestroy(){}onTermsSelected(e){this.valueBind[this.property.internalName]=e,this.onValueChanged&&this.onValueChanged(e),this.$forceUpdate()}render(){const e=i.EnterprisePropertyHandler.ensureEnterprisePropertiesLabel(this.property.multilingualTitle,this.isRequired,this.settings.showLabel,this.settings.customLabel);return(0,o.h)("div",[this.isLoading?(0,o.h)("v-text-field",{attrs:{loading:!0}}):(0,o.h)("omfx-term-picker",{attrs:{allowCreateNewTerm:!0,disabled:this.disabled,label:e,multi:this.settings.allowMultipleValues,required:this.isRequired,isEnterpriseKeyword:!0},domProps:{termSetId:this.termSet.id,preSelectedTermIds:this.valueBind[this.property.internalName],lcid:this.lcid,onTermsSelected:this.onTermsSelected,validator:this.useValidator,description:this.multilingualStore.getters.stringValue(this.settings.description)}})])}};c([(0,s.Prop)()],f.prototype,"valueBind",2),c([(0,s.Prop)()],f.prototype,"onValueChanged",2),c([(0,s.Prop)()],f.prototype,"disabled",2),c([(0,s.Prop)()],f.prototype,"property",2),c([(0,s.Prop)({default:!1})],f.prototype,"dark",2),c([(0,s.Prop)()],f.prototype,"lcid",2),c([(0,s.Prop)({default:null})],f.prototype,"settings",2),c([(0,i.Inject)(d.TermStore)],f.prototype,"termStore",2),c([(0,i.Inject)(n.MultilingualStore)],f.prototype,"multilingualStore",2),f=c([a.default],f),i.WebComponentBootstrapper.registerElement((e=>{(0,i.vueCustomElement)(e.elementName,f)}))},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,r)=>{e.exports=r("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,r)=>{e.exports=r("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,r)=>{e.exports=r("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,r)=>{e.exports=r("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,r)=>{e.exports=r("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,r)=>{e.exports=r("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"eff19cad-5557-434b-a477-1e1e2a70a2a0":(e,t,r)=>{e.exports=r("dll-reference md20")("eff19cad-5557-434b-a477-1e1e2a70a2a0")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]},"dll-reference md20":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["fa502cf2-bcf9-4dc0-b4f9-13dc63c04bfc"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["f8ff3212-b3ad-4ad1-a07e-286a6f0c4935"])throw new Error("Error, already loaded manifest f8ff3212-b3ad-4ad1-a07e-286a6f0c4935 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["f8ff3212-b3ad-4ad1-a07e-286a6f0c4935"]=r;var t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};r("./client/fx/sp/ux/enterpriseproperties/edit/enterprisekeywordsfield/enterprisekeywordsfieldedit.tsx")})()};