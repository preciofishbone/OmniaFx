if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["2e089b08-dcf5-4566-992c-7df4617557a4"])throw new Error("Error, already loaded manifest 2e089b08-dcf5-4566-992c-7df4617557a4 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["2e089b08-dcf5-4566-992c-7df4617557a4"]=function(){(()=>{var e={"./client/fx/ux/appprovisioning/appinstancepermissionblade/appinstancepermissionblade.tsx":(e,o,t)=>{"use strict";t.r(o),t.d(o,{AppInstancePermissionBlade:()=>f});var a=t("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),r=t("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),s=t("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),n=t("c041fe9f-1e14-443d-9407-5aa8829fbc21"),i=t("97786ea9-4861-48bd-8a57-eae9bbdb4892"),d=t("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),b=t("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","2e089b08-dcf5-4566-992c-7df4617557a4"),p=t("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","2e089b08-dcf5-4566-992c-7df4617557a4"),c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,m=(e,o,t,a)=>{for(var r,s=a>1?void 0:a?l(o,t):o,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a?r(o,t,s):r(s))||s);return a&&s&&c(o,t,s),s};let f=class extends p.VueComponentBase{constructor(){super(...arguments),this.currentContext={},this.settings=null,this.key=i.Utils.generateGuid(),this.messageBusSubscriptionHandler=null,this.auditLogProviderHandlerId="5f58c189-f064-420e-a4c5-a5b9de31adbd"}created(){const e=this.appInstance?this.appInstance.id.toString():omnia.appRoute?omnia.appRoute.appInstanceId:omnia.businessProfile.pathProperties[0].appInstanceId;this.currentContext[d.Parameters.AppInstanceId]=e,this.settings={roles:[{id:d.RoleDefinitions.AppInstanceAdmin,label:this.omniaUxLoc.Apps.AppAdministrators,principalType:d.AzureAdObjectPrincipalTypes.All},{id:d.RoleDefinitions.AppInstanceContributor,label:this.omniaUxLoc.Apps.AppContributors,principalType:d.AzureAdObjectPrincipalTypes.All,showSpecialIdentities:!0}]}}mounted(){b.WebComponentBootstrapper.registerElementInstance(this,this.$el)}beforeDestroy(){this.messageBusSubscriptionHandler&&this.messageBusSubscriptionHandler.unsubscribe()}onClose(){this.handleClose()}render(){return(0,a.h)("div",[(0,a.h)("v-app-bar",{attrs:{flat:!0,dark:this.omniaTheming.promoted.header.dark,color:this.omniaTheming.promoted.header.background.base}},[(0,a.h)("v-toolbar-title",[this.omniaUxLoc.Common.Permission]),(0,a.h)("v-spacer"),(0,a.h)("omfx-button",{domProps:{onClick:()=>{this.onClose()},preset:p.ButtonPresets.icons.close},attrs:{dark:this.omniaTheming.promoted.header.dark}})]),(0,a.h)("v-divider"),(0,a.h)("v-container",[(0,a.h)("omfx-permission-input",{attrs:{dark:this.omniaTheming.promoted.body.dark,auditLogProviderId:this.auditLogProviderHandlerId,permissionInputUpdated:this.appPermissionsUpdated},key:this.key,domProps:{settings:this.settings,contextParams:this.currentContext},on:{permissionInputUpdated:this.onAppPermissionsUpdated}})])])}};m([(0,s.Prop)()],f.prototype,"appInstance",2),m([(0,s.Prop)()],f.prototype,"handleClose",2),m([(0,s.Prop)()],f.prototype,"onAppPermissionsUpdated",2),m([(0,s.Prop)()],f.prototype,"appPermissionsUpdated",2),m([(0,n.Localize)(p.OmniaUxLocalizationNamespace)],f.prototype,"omniaUxLoc",2),m([(0,i.Inject)(p.OmniaTheming)],f.prototype,"omniaTheming",2),f=m([r.default],f),b.WebComponentBootstrapper.registerElement((e=>{(0,n.vueCustomElement)(e.elementName,f)}))},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,o,t)=>{e.exports=t("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,o,t)=>{e.exports=t("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,o,t)=>{e.exports=t("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,o,t)=>{e.exports=t("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"97786ea9-4861-48bd-8a57-eae9bbdb4892":(e,o,t)=>{e.exports=t("dll-reference md9")("97786ea9-4861-48bd-8a57-eae9bbdb4892")},"c041fe9f-1e14-443d-9407-5aa8829fbc21":(e,o,t)=>{e.exports=t("dll-reference md10")("c041fe9f-1e14-443d-9407-5aa8829fbc21")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,o,t)=>{e.exports=t("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,o,t)=>{e.exports=t("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["2e089b08-dcf5-4566-992c-7df4617557a4"])throw new Error("Error, already loaded manifest 2e089b08-dcf5-4566-992c-7df4617557a4 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["2e089b08-dcf5-4566-992c-7df4617557a4"]=t;var o={};function t(a){var r=o[a];if(void 0!==r)return r.exports;var s=o[a]={exports:{}};return e[a](s,s.exports,t),s.exports}t.d=(e,o)=>{for(var a in o)t.o(o,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};t("./client/fx/ux/appprovisioning/appinstancepermissionblade/appinstancepermissionblade.tsx")})()};