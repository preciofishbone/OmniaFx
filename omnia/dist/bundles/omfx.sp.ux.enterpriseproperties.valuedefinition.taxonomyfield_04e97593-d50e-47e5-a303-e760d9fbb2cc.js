if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["04e97593-d50e-47e5-a303-e760d9fbb2cc"])throw new Error("Error, already loaded manifest 04e97593-d50e-47e5-a303-e760d9fbb2cc with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["04e97593-d50e-47e5-a303-e760d9fbb2cc"]=function(){(()=>{var e={"./client/fx/sp/ux/enterpriseproperties/valuedefinition/taxonomyfield/taxonomyfieldvaluedefinition.tsx":(e,i,t)=>{"use strict";t.r(i),t.d(i,{TaxonomyFieldValueDefinition:()=>c});var o,n=t("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),a=t("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),r=t("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),s=t("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","04e97593-d50e-47e5-a303-e760d9fbb2cc"),l=t("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","04e97593-d50e-47e5-a303-e760d9fbb2cc"),d=t("./client/fx/ux/uxmodels.js");(o||(o={})).namespace="Omnia.Ux.EnterpriseProperties.ValueDefinition.Taxonomy";var b=Object.defineProperty,p=Object.getOwnPropertyDescriptor,u=(e,i,t,o)=>{for(var n,a=o>1?void 0:o?p(i,t):i,r=e.length-1;r>=0;r--)(n=e[r])&&(a=(o?n(i,t,a):n(a))||a);return o&&a&&b(i,t,a),a};let c=class extends l.VueComponentBase{mounted(){s.WebComponentBootstrapper.registerElementInstance(this,this.$el)}created(){}beforeDestroy(){}navigate(){}fixLimitLevel(e){if(this.isParentOfOthers)return 1;{let i=null;return e&&(i=Number.parseInt(e),i<1&&(i=null)),i}}onRequiredChanged(){this.valueBind.required=!this.valueBind.required,this.onValueChanged?.(this.valueBind),this.$forceUpdate()}onAllowMultiValuesChanged(){this.valueBind.allowMultipleValues=!this.valueBind.allowMultipleValues,this.onValueChanged?.(this.valueBind),this.$forceUpdate()}onDescriptionChanged(e){this.valueBind.description=e,this.onValueChanged?.(this.valueBind),this.$forceUpdate()}renderLimitLevelSettings(){const e=this.availableParents.concat([]);return this.valueBind.parentEnterprisePropertyDefinitionId&&!e.find((e=>e.id==this.valueBind.parentEnterprisePropertyDefinitionId))&&e.push({id:this.valueBind.parentEnterprisePropertyDefinitionId,multilingualTitle:this.valueBind.parentEnterprisePropertyDefinitionId.toString()}),[e.length>0&&(0,n.h)("v-flex",{attrs:{xs12:!0}},[(0,n.h)("v-select",{on:{change:e=>{e||(this.valueBind.parentEnterprisePropertyDefinitionId=null),this.onValueChanged?.(this.valueBind)}},attrs:{clearable:!0,items:e,"item-text":"multilingualTitle","item-value":"id",label:this.loc.Parent},model:{value:this.valueBind.parentEnterprisePropertyDefinitionId,callback:e=>{this.$set(this.valueBind,"parentEnterprisePropertyDefinitionId",e)}}})]),(0,n.h)("v-flex",{attrs:{xs12:!0}},[(0,n.h)("v-text-field",{attrs:{disabled:this.isParentOfOthers,type:"number",label:this.loc.LimitLevel,min:"1"},on:{change:e=>{this.valueBind.limitLevel=this.fixLimitLevel(e),this.onValueChanged?.(this.valueBind)}},model:{value:this.valueBind.limitLevel,callback:e=>{this.$set(this.valueBind,"limitLevel",e)}}})])]}render(){return(0,n.h)("div",[(0,n.h)("v-flex",{attrs:{xs12:!0}},[(0,n.h)("v-checkbox",{attrs:{dark:this.omniaTheming.promoted.body.dark,disabled:this.disabled,color:this.omniaTheming.promoted.body.primary.base,label:this.omniaUxLoc.EnterpriseProperties.ValueDefinition.Required,"input-value":this.valueBind.required},on:{change:()=>{this.onRequiredChanged()}}})]),(0,n.h)("v-flex",{attrs:{xs12:!0}},[(0,n.h)("v-checkbox",{attrs:{dark:this.omniaTheming.promoted.body.dark,disabled:this.disabled,color:this.omniaTheming.promoted.body.primary.base,label:this.omniaUxLoc.EnterpriseProperties.ValueDefinition.AllowMultipleValues,"input-value":this.valueBind.allowMultipleValues},on:{change:()=>{this.onAllowMultiValuesChanged()}}})]),this.showLimitLevelSettings&&this.renderLimitLevelSettings(),(0,n.h)("omfx-multilingual-input",{attrs:{disabled:this.disabled,label:this.omniaUxLoc.EnterpriseProperties.ValueDefinition.HelpText},domProps:{valueBind:this.valueBind.description,onValueChanged:e=>{this.onDescriptionChanged(e)}}})])}};u([(0,r.Prop)()],c.prototype,"valueBind",2),u([(0,r.Prop)()],c.prototype,"onValueChanged",2),u([(0,r.Prop)({default:!1})],c.prototype,"showLimitLevelSettings",2),u([(0,r.Prop)()],c.prototype,"availableParents",2),u([(0,r.Prop)({default:!1})],c.prototype,"isParentOfOthers",2),u([(0,r.Prop)()],c.prototype,"disabled",2),u([(0,s.Inject)(l.OmniaTheming)],c.prototype,"omniaTheming",2),u([(0,s.Localize)(d.OmniaUxLocalizationNamespace)],c.prototype,"omniaUxLoc",2),u([(0,s.Localize)(o.namespace)],c.prototype,"loc",2),c=u([a.default],c),s.WebComponentBootstrapper.registerElement((e=>{(0,s.vueCustomElement)(e.elementName,c)}))},"./client/fx/ux/uxmodels.js":(e,i,t)=>{e.exports=t("dll-reference md66")("./client/fx/ux/uxmodels.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,i,t)=>{e.exports=t("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,i,t)=>{e.exports=t("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,i,t)=>{e.exports=t("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,i,t)=>{e.exports=t("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,i,t)=>{e.exports=t("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["04e97593-d50e-47e5-a303-e760d9fbb2cc"])throw new Error("Error, already loaded manifest 04e97593-d50e-47e5-a303-e760d9fbb2cc with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["04e97593-d50e-47e5-a303-e760d9fbb2cc"]=t;var i={};function t(o){var n=i[o];if(void 0!==n)return n.exports;var a=i[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.d=(e,i)=>{for(var o in i)t.o(i,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:i[o]})},t.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};t("./client/fx/sp/ux/enterpriseproperties/valuedefinition/taxonomyfield/taxonomyfieldvaluedefinition.tsx")})()};