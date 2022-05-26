if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["171ae633-5cef-4eaa-8897-7eba3bca0049"])throw new Error("Error, already loaded manifest 171ae633-5cef-4eaa-8897-7eba3bca0049 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["171ae633-5cef-4eaa-8897-7eba3bca0049"]=function(){(()=>{var e={"./client/fx/ux/appprovisioning/renderer/renderer.tsx":(e,t,s)=>{"use strict";s.r(t),s.d(t,{RendererComponent:()=>I});var n=s("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),a=s("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),i=s("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),o=s("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","171ae633-5cef-4eaa-8897-7eba3bca0049"),r=s("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","171ae633-5cef-4eaa-8897-7eba3bca0049"),p=s("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),d=s("5e618f4d-d014-414e-a681-89e34cbeda0f"),c=s("./client/fx/ux/validation/index.js"),l=s("8610c059-395a-45c2-804a-8c236f4d60d9"),b=s("./client/fx/ux/appprovisioning/components/index.js"),m=s("./client/fx/ux/appprovisioning/enums.js"),u=s("./node_modules/typestyle/umd/typestyle.js"),h=s("./node_modules/csx/lib.es2015/index.js");const g={};o.StyleFlow.define(g,{provisioningWrapper:{position:"relative",display:"inline-block"},provisioningImage:{maxHeight:"30vh",maxWidth:"30vw"},provisioningProgress:{position:"absolute",bottom:"calc(25% - 75px)",right:"calc(24% - 55px)"},containerIllustrationsStyles:{maxWidth:(0,h.important)("600px")},progressCircularAnimation:{$nest:{".v-progress-circular":{borderRadius:"50%",animation:"breathe 2s linear infinite"}}}}),(0,u.cssRaw)("\n@keyframes breathe {\n 0% {\nbox-shadow:\n   0 0 0 10px #f2f3f5;\n }\n\n 50% {\nbox-shadow:\n  0 0 0 20px #f2f3f5;\n }\n\n   100% {\nbox-shadow:\n  0 0 0 10px #f2f3f5;\n }\n}\n");var f=Object.defineProperty,x=Object.getOwnPropertyDescriptor,v=(e,t,s,n)=>{for(var a,i=n>1?void 0:n?x(t,s):t,o=e.length-1;o>=0;o--)(a=e[o])&&(i=(n?a(t,s,i):a(i))||i);return n&&i&&f(t,s,i),i};let I=class extends l.VueComponentBase{constructor(){super(...arguments),this.loadingData=!0,this.readyToProvisioning=!1,this.updating=!1,this.appInstance=null,this.errorMessage="",this.appProvisioningValidatorElement="",this.styles=o.StyleFlow.use(g)}created(){this.useValidator=new c.FormValidator(this),this.omniaContext.appRoute.appInstance?(this.appStore.actions.loadAppDefinitions.dispatch(),this.loadData()):this.errorMessage=this.omniaUxLoc.Apps.Messages.AppNotFound}mounted(){r.WebComponentBootstrapper.registerElementInstance(this,this.$el)}loadData(){this.appService.getAppInstanceById(this.omniaContext.appRoute.appInstance.id).then((e=>{this.validateAppBeforeProvisioning(e).then((e=>{e&&this.ensureAppProvisioning()}))}))}updateAppInstanceInputInfo(e){this.inputInfo=e}ensureAppProvisioning(){this.appStore.actions.ensureAppProvisioning.dispatch(this.omniaContext.appRoute.appInstance.id).then((e=>{this.appInstance=e,this.readyToProvisioning=!0})).catch((()=>{this.errorMessage=this.omniaUxLoc.Apps.Messages.UnexpectedError}))}isAppInstanceAdmin(e){return this.permissionService.hasPermissionForRole(n.RoleDefinitions.AppInstanceAdmin,{[n.Parameters.AppInstanceId]:e.id.toString()})}validateAppBeforeProvisioning(e){return this.appInstance=e,new Promise(((t,s)=>{e.status===n.AppInstanceStatus.Creating?t(!0):e.status===n.AppInstanceStatus.Pending?(this.errorMessage=this.omniaUxLoc.Apps.Messages.AppWaitForApproval,t(!1)):e.status===n.AppInstanceStatus.Ready||e.status===n.AppInstanceStatus.ReadyWithWarning?location.href=e.outputInfo.absoluteAppUrl:e.status===n.AppInstanceStatus.ReadyToCreate?this.isAppInstanceAdmin(e).then((s=>{s?omniaApi.fx.ux.appProvisioning.validator.then((s=>{s.validate(e).then((e=>{e?.requiredValidatorElement?(this.appProvisioningValidatorElement=e.requiredValidatorElement,t(!1)):t(!0)}))})):(this.errorMessage=this.omniaUxLoc.Apps.Messages.RequireAppAdminToProvisioning,t(!1))})):e.status===n.AppInstanceStatus.Error?(this.errorMessage=this.omniaUxLoc.Apps.Messages.UnexpectedError,t(!1)):(this.errorMessage=this.omniaUxLoc.Apps.Messages.AppNotWaitForProvisioning,t(!1))}))}updateAppInstance(e){this.useValidator.validateAll()&&(this.updating=!0,e?this.appStore.actions.requestChangeProvisioning.dispatch(this.omniaContext.appRoute.appInstance.id,this.inputInfo).then((e=>{this.appProvisioningValidatorElement=null,this.appInstance=e,this.errorMessage=this.omniaUxLoc.Apps.Messages.AppWaitForApproval,this.updating=!1})):this.appStore.actions.ensureAppProvisioning.dispatch(this.omniaContext.appRoute.appInstance.id,this.inputInfo).then((e=>{this.appProvisioningValidatorElement=null,this.appInstance=e,this.updating=!1})))}handleAppActionCompleted(e){this.appInstance=e,e.status!==n.AppInstanceStatus.Ready&&e.status!==n.AppInstanceStatus.ReadyWithWarning||(location.href=location.href)}renderValidatorWrapper(){return this.appProvisioningValidatorElement?[(0,i.h)("omfx-app-provisioning-validator-wrapper",{attrs:{appInstance:this.appInstance,renderValidator:this.renderValidator}}),this.actionButtons()]:null}renderValidator(){const e={updateAppInstanceInputInfo:this.updateAppInstanceInputInfo,appInstance:this.appInstance,useValidator:this.useValidator};return(0,i.h)(this.appProvisioningValidatorElement,{domProps:e})}renderProvisioning(){return this.errorMessage?[(0,i.h)("v-avatar",{attrs:{size:"100",color:this.theming.colors.primary.base},class:"mb-4"},[(0,i.h)("v-icon",{attrs:{dark:this.theming.colors.primary.dark,size:"80"}},["fal fa-times"])]),(0,i.h)("div",{style:{color:this.theming.colors.primary.base},class:["text-center subtitle-1"]},[this.errorMessage])]:this.appInstance?.status===n.AppInstanceStatus.Ready||this.appInstance?.status===n.AppInstanceStatus.ReadyWithWarning?(0,i.h)("div",{class:"text-center subtitle-1"},[(0,i.h)("span",[this.omniaUxLoc.Apps.RedirectMessage])]):this.appProvisioningValidatorElement?null:(0,i.h)("div",{class:this.styles.provisioningWrapper},[this.renderImage(),this.readyToProvisioning&&(0,i.h)("div",{class:[this.styles.provisioningProgress,this.styles.progressCircularAnimation]},[(0,i.h)(b.AppInstanceCompletedStepVueComponent,{attrs:{hideProgressLabel:!0,appInstance:this.appInstance,action:m.AppInstanceProgressActions.Create,handleAppActionError:()=>{this.errorMessage=this.omniaUxLoc.Apps.Messages.UnexpectedError},handleAppActionCompleted:this.handleAppActionCompleted}})])])}renderImage(){return(0,i.h)("img",{class:this.styles.provisioningImage,attrs:{src:`/api/apps/image/app-create.svg?color=${encodeURIComponent(this.theming.colors.primary.base)}`}})}actionButtons(){const e=this.appInstance.appTemplate.properties.permissionLevel===n.AppTemplatePermissionLevel.Approval;return(0,i.h)("div",{class:"text-right mt-10"},[(0,i.h)("v-card-actions",[(0,i.h)("v-spacer"),(0,i.h)("omfx-button",{attrs:{dark:this.theming.body.fg.dark,loading:this.updating,text:e?this.omniaUxLoc.Common.Buttons.SendRequest:this.omniaUxLoc.Common.Buttons.Create},domProps:{styles:{bgColor:this.theming.body.fg.color.base},onClick:()=>{this.updateAppInstance(e)}}})])])}render(){if(!this.omniaContext.appRoute.appInstance)return null;const e=this.multilingualStore.getters.stringValue(this.omniaContext.appRoute.appInstance.title,n.MultilingualScopes.BusinessProfile),t=this.omniaUxLoc.Apps.ProvisioningSteps.Creating+" "+e;return(0,i.h)("v-container",{attrs:{fluid:!0},class:[this.breakpoint.mdAndUp?"pt-10":"",this.styles.containerIllustrationsStyles]},[this.breakpoint.mdAndUp?(0,i.h)("h2",{class:"text-center pb-8 pt-10"},[t]):(0,i.h)("h3",{class:"text-center pb-8 pt-5"},[t]),(0,i.h)("div",{class:"text-center"},[this.renderValidatorWrapper(),this.renderProvisioning()])])}};v([(0,r.Localize)(o.OmniaUxLocalizationNamespace)],I.prototype,"omniaUxLoc",2),v([(0,r.Inject)(p.AppService)],I.prototype,"appService",2),v([(0,r.Inject)(d.AppStore)],I.prototype,"appStore",2),v([(0,r.Inject)(r.OmniaContext)],I.prototype,"omniaContext",2),v([(0,r.Inject)(p.PermissionService)],I.prototype,"permissionService",2),v([(0,r.Inject)(d.MultilingualStore)],I.prototype,"multilingualStore",2),I=v([a.default],I);class A{constructor(){this.validator={}}validate(e){return this.validator[e.appDefinitionId.toString().toLowerCase()](e)}registerValidator(e,t){this.validator[e.toString().toLowerCase()]=t}}function y(e,t){document.getElementsByTagName(e)[0]?.remove(),t&&setTimeout((()=>{const t=document.getElementById(n.Constants.ux.html.selectors.omniaContentBody),s=document.createElement(e);s.setAttribute("themeTargetId",n.Constants.ux.themeTargetIds.layout.toString()),t.appendChild(s)}),0)}(0,r.registerApi)((e=>e.fx.ux.appProvisioning.validator),(e=>e(new A))),r.WebComponentBootstrapper.registerElement((e=>{(0,r.vueCustomElement)(e.elementName,I);const t=r.ServiceContainer.createInstance(r.OmniaContext);y(e.elementName,t.appRoute.manifestId.toString()===e.resourceId),o.Router.onAppInstanceChanged().subscribe((t=>{y(e.elementName,t.appRouteWithProperties.manifestId.toString()===e.resourceId)}))}))},"./client/fx/ux/appprovisioning/components/index.js":(e,t,s)=>{e.exports=s("dll-reference md32")("./client/fx/ux/appprovisioning/components/index.js")},"./client/fx/ux/appprovisioning/enums.js":(e,t,s)=>{e.exports=s("dll-reference md66")("./client/fx/ux/appprovisioning/enums.js")},"./client/fx/ux/validation/index.js":(e,t,s)=>{e.exports=s("dll-reference md66")("./client/fx/ux/validation/index.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/csx/lib.es2015/index.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/csx/lib.es2015/index.js")},"./node_modules/typestyle/umd/typestyle.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/typestyle/umd/typestyle.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,s)=>{e.exports=s("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,s)=>{e.exports=s("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"8610c059-395a-45c2-804a-8c236f4d60d9":(e,t,s)=>{e.exports=s("dll-reference md66")("8610c059-395a-45c2-804a-8c236f4d60d9")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,s)=>{e.exports=s("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,s)=>{e.exports=s("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(e,t,s)=>{e.exports=s("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md32":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["61540ff7-266a-4142-a42e-c62ba077f0b9"]},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["171ae633-5cef-4eaa-8897-7eba3bca0049"])throw new Error("Error, already loaded manifest 171ae633-5cef-4eaa-8897-7eba3bca0049 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["171ae633-5cef-4eaa-8897-7eba3bca0049"]=s;var t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};s("./client/fx/ux/appprovisioning/renderer/renderer.tsx")})()};