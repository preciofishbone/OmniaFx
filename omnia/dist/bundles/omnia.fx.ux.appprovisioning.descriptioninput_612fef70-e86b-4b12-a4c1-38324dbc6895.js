if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["612fef70-e86b-4b12-a4c1-38324dbc6895"])throw new Error("Error, already loaded manifest 612fef70-e86b-4b12-a4c1-38324dbc6895 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["612fef70-e86b-4b12-a4c1-38324dbc6895"]=function(){(()=>{var e={"./client/fx/ux/appprovisioning/apptitledescription/appdescriptioninput.tsx":(e,t,i)=>{"use strict";i.r(t),i.d(t,{AppDescriptionInput:()=>f});var o=i("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),s=i("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),n=i("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),r=i("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","612fef70-e86b-4b12-a4c1-38324dbc6895"),b=i("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","612fef70-e86b-4b12-a4c1-38324dbc6895"),a=i("97786ea9-4861-48bd-8a57-eae9bbdb4892"),d=i("./client/fx/ux/validation/index.js"),c=i("8610c059-395a-45c2-804a-8c236f4d60d9"),p=i("./node_modules/csx/lib.es2015/index.js");const l={};r.StyleFlow.define(l,{detailsWrapper:e=>({marginBottom:!e&&(0,p.important)("24px"),$nest:{".v-input__control":{$nest:{".v-text-field__details":{marginBottom:(0,p.important)("0px"),paddingLeft:(0,p.important)("0px")}}}}})});var m=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h=(e,t,i,o)=>{for(var s,n=o>1?void 0:o?u(t,i):t,r=e.length-1;r>=0;r--)(s=e[r])&&(n=(o?s(t,i,n):s(n))||n);return o&&n&&m(t,i,n),n};let f=class extends c.VueComponentBase{constructor(){super(...arguments),this.fieldClasses=r.StyleFlow.use(l),this.hint="",this.countDown="",this.minLength=null,this.error=!1,this.errorMessage="",this.isFocus=!1}created(){this.minLength=this.appPolicyValidationState.validationState?.policies.minimumDescriptionLength||null,this.hint=this.minLength?this.omniaUxLoc.Apps.Policies.MinimumDescriptionLengthHint.replace("{0}",this.minLength.toString()):"",this.checkDescription()}mounted(){b.WebComponentBootstrapper.registerElementInstance(this,this.$el),this.useValidator.register(this)}checkDescription(){this.minLength&&this.description&&this.description.length<this.minLength?this.countDown=" "+this.omniaUxLoc.Apps.Policies.MinimumDescriptionLengthCountDown.replace("{0}",(this.minLength-this.description.length).toString()):this.countDown="",this.minLength&&(this.error=!this.description||this.description.length<this.minLength,this.errorMessage=this.hint+this.countDown)}render(){let e=this.hint+this.countDown;return this.description&&!this.error&&(e=""),(0,o.h)("v-textarea",{attrs:{filled:!0,dark:this.dark,hint:e,"persistent-hint":!0,rules:(new d.FieldValueValidation).CustomFunction((()=>this.isFocus||!this.error),this.errorMessage).getRules(),label:this.omniaUxLoc.Common.Description},class:["mb-4",this.fieldClasses.detailsWrapper(!!this.description)],on:{focus:()=>{this.isFocus=!0},blur:()=>{this.isFocus=!1},input:e=>{this.onDescriptionChanged(e),this.checkDescription()}},model:{value:this.description,callback:e=>{this.description=e}}})}};h([(0,n.Prop)()],f.prototype,"description",2),h([(0,n.Prop)()],f.prototype,"dark",2),h([(0,n.Prop)()],f.prototype,"onDescriptionChanged",2),h([(0,b.Localize)(r.OmniaUxLocalizationNamespace)],f.prototype,"omniaUxLoc",2),h([(0,a.Inject)(r.AppPolicyValidationState)],f.prototype,"appPolicyValidationState",2),f=h([s.default],f),b.WebComponentBootstrapper.registerElement((e=>{(0,b.vueCustomElement)(e.elementName,f)}))},"./client/fx/ux/validation/index.js":(e,t,i)=>{e.exports=i("dll-reference md66")("./client/fx/ux/validation/index.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/csx/lib.es2015/index.js":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/csx/lib.es2015/index.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,i)=>{e.exports=i("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"8610c059-395a-45c2-804a-8c236f4d60d9":(e,t,i)=>{e.exports=i("dll-reference md66")("8610c059-395a-45c2-804a-8c236f4d60d9")},"97786ea9-4861-48bd-8a57-eae9bbdb4892":(e,t,i)=>{e.exports=i("dll-reference md9")("97786ea9-4861-48bd-8a57-eae9bbdb4892")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,i)=>{e.exports=i("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["612fef70-e86b-4b12-a4c1-38324dbc6895"])throw new Error("Error, already loaded manifest 612fef70-e86b-4b12-a4c1-38324dbc6895 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["612fef70-e86b-4b12-a4c1-38324dbc6895"]=i;var t={};function i(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};i("./client/fx/ux/appprovisioning/apptitledescription/appdescriptioninput.tsx")})()};