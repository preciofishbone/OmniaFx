if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["42aef9dd-fa37-4548-9aed-5b4fedef43ed"])throw new Error("Error, already loaded manifest 42aef9dd-fa37-4548-9aed-5b4fedef43ed with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["42aef9dd-fa37-4548-9aed-5b4fedef43ed"]=function(){(()=>{var e={"./client/fx/ux/appprovisioning/apptitleinput/apptitleinput.tsx":(e,t,a)=>{"use strict";a.r(t),a.d(t,{AppTitleInput:()=>f});var i=a("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),s=a("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),n=a("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),o=a("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","42aef9dd-fa37-4548-9aed-5b4fedef43ed"),l=a("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","42aef9dd-fa37-4548-9aed-5b4fedef43ed"),d=a("97786ea9-4861-48bd-8a57-eae9bbdb4892"),r=a("eff19cad-5557-434b-a477-1e1e2a70a2a0"),b=a("./client/fx/ux/validation/index.js"),p=a("8610c059-395a-45c2-804a-8c236f4d60d9"),c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h=(e,t,a,i)=>{for(var s,n=i>1?void 0:i?u(t,a):t,o=e.length-1;o>=0;o--)(s=e[o])&&(n=(i?s(t,a,n):s(n))||n);return i&&n&&c(t,a,n),n};let f=class extends p.VueComponentBase{constructor(){super(...arguments),this.internalValues={prefix:"",suffix:"",value:""},this.validating=!1,this.pendingValidation=!1,this.isValid=!1,this.validationMessage="",this.timeWatchId=d.Utils.generateGuid(),this.isInputDirty=!1,this.isFocus=!1,this.styles=o.StyleFlow.use(o.WizardStyles)}created(){this.parseInternalValue(this.title),this.validateTitleWithTimewatch(0),this.subcribePolicyValidationStateChanged()}mounted(){l.WebComponentBootstrapper.registerElementInstance(this,this.$el),this.useValidator.register(this)}onChanged(e){this.onTitleChanged(e),d.Topics.onAppTitleChanged.publish({title:e})}subcribePolicyValidationStateChanged(){this.appNamingPolicyValidationState.validationState&&this.subscriptionHandler.add(this.appNamingPolicyValidationState.onValidationStateChanged.subscribe((()=>{this.handleValidationStateChanged()})))}handleValidationStateChanged(){this.parseInternalValue(this.internalValues.value),this.validateTitleWithTimewatch()}parseInternalValue(e){if(e=e?.replace(/\/$/,"")||"",this.appNamingPolicyValidationState.validationState){const t=this.appNamingPolicyValidationState.parseTitle(e);this.internalValues={prefix:t.prefix,suffix:t.suffix,value:t.value}}else this.internalValues.value=e}getFullInternalUrl(){return this.internalValues.prefix+this.internalValues.value+this.internalValues.suffix}validateTitle(){const e=this.appNamingPolicyValidationState.getExistingBlockWord(this.internalValues.value);e?this.validationMessage=this.omniaUxLoc.Apps.NamingPolicies.BlockedWordMessage.replace("{0}",e):this.isValid=!0,this.internalValues.value&&this.onChanged(this.getFullInternalUrl())}validateTitleWithTimewatch(e=500){this.isValid=!1,this.validating=!1,this.pendingValidation=!1,this.validationMessage="";const t=this.getFullInternalUrl();t?(this.pendingValidation=!0,d.Utils.timewatch(this.timeWatchId,(()=>{this.pendingValidation=!1,this.validateTitle()}),e)):this.onChanged(t)}renderNormalInput(){return(0,i.h)("div",{class:this.styles.textFieldStyles},[(0,i.h)("v-text-field",{attrs:{dark:this.dark,filled:!0,rules:(new b.FieldValueValidation).IsRequired().MaxLength(500).getRules(),disabled:this.disabled,value:this.title,label:this.omniaUxLoc.Common.Title},on:{input:e=>{this.onChanged(e)}}})])}render(){if(!this.appNamingPolicyValidationState.validationState)return this.renderNormalInput();const e=this.pendingValidation||this.validating,t=this.internalValues.value&&this.isValid;let a=this.internalValues.prefix,s=this.internalValues.suffix,n=this.internalValues.value;return t&&!this.isFocus&&(n=a+n+s,a="",s=""),(0,i.h)("div",{class:this.styles.textFieldStyles},[(0,i.h)("v-text-field",{attrs:{dark:this.dark,filled:!0,placeholder:" ",prefix:a,suffix:s,rules:(new b.FieldValueValidation).IsRequired().MaxLength(500).CustomFunction((()=>e||this.isValid),this.validationMessage).getRules(),error:this.isInputDirty&&!this.isValid&&!e,"error-messages":this.validationMessage,disabled:this.disabled,value:n,label:this.omniaUxLoc.Common.Title},on:{focus:()=>{this.isFocus=!0},blur:()=>{this.isFocus=!1},input:e=>{this.internalValues.value=e,this.isInputDirty=!0,this.validateTitleWithTimewatch()}}},[t&&(0,i.h)("v-icon",{slot:"append",attrs:{small:!0,color:"green darken-2"},class:"mt-1"},["fa fa-check-circle"]),this.validating&&(0,i.h)("v-progress-circular",{class:"mt-1",slot:"append",attrs:{indeterminate:!0,size:"13",color:"primary"}})])])}};h([(0,n.Prop)()],f.prototype,"title",2),h([(0,n.Prop)()],f.prototype,"onTitleChanged",2),h([(0,n.Prop)()],f.prototype,"disabled",2),h([(0,n.Prop)()],f.prototype,"dark",2),h([(0,l.Localize)(o.OmniaUxLocalizationNamespace)],f.prototype,"omniaUxLoc",2),h([(0,d.Inject)(r.AppNamingPolicyValidationState)],f.prototype,"appNamingPolicyValidationState",2),h([(0,d.Inject)(d.SubscriptionHandler)],f.prototype,"subscriptionHandler",2),f=h([s.default],f),l.WebComponentBootstrapper.registerElement((e=>{(0,l.vueCustomElement)(e.elementName,f)}))},"./client/fx/ux/validation/index.js":(e,t,a)=>{e.exports=a("dll-reference md66")("./client/fx/ux/validation/index.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,a)=>{e.exports=a("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,a)=>{e.exports=a("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,a)=>{e.exports=a("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,a)=>{e.exports=a("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"8610c059-395a-45c2-804a-8c236f4d60d9":(e,t,a)=>{e.exports=a("dll-reference md66")("8610c059-395a-45c2-804a-8c236f4d60d9")},"97786ea9-4861-48bd-8a57-eae9bbdb4892":(e,t,a)=>{e.exports=a("dll-reference md9")("97786ea9-4861-48bd-8a57-eae9bbdb4892")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,a)=>{e.exports=a("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"eff19cad-5557-434b-a477-1e1e2a70a2a0":(e,t,a)=>{e.exports=a("dll-reference md20")("eff19cad-5557-434b-a477-1e1e2a70a2a0")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]},"dll-reference md20":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["fa502cf2-bcf9-4dc0-b4f9-13dc63c04bfc"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["42aef9dd-fa37-4548-9aed-5b4fedef43ed"])throw new Error("Error, already loaded manifest 42aef9dd-fa37-4548-9aed-5b4fedef43ed with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["42aef9dd-fa37-4548-9aed-5b4fedef43ed"]=a;var t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,a),n.exports}a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};a("./client/fx/ux/appprovisioning/apptitleinput/apptitleinput.tsx")})()};