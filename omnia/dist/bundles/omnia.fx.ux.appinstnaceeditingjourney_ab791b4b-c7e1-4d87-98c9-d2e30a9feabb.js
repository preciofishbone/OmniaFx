if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["ab791b4b-c7e1-4d87-98c9-d2e30a9feabb"])throw new Error("Error, already loaded manifest ab791b4b-c7e1-4d87-98c9-d2e30a9feabb with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["ab791b4b-c7e1-4d87-98c9-d2e30a9feabb"]=function(){(()=>{var e={"./client/fx/ux/appprovisioning/appinstanceeditingjourney/appinstanceeditingjourney.tsx":(e,t,n)=>{"use strict";n.r(t),n.d(t,{AppInstanceEditingJourneyComponent:()=>L});var o=n("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),a=n("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),s=n("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","ab791b4b-c7e1-4d87-98c9-d2e30a9feabb"),i=n("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),r=n("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),p=n("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","ab791b4b-c7e1-4d87-98c9-d2e30a9feabb"),d=n("./client/fx/ux/validation/index.js"),c=n("5e618f4d-d014-414e-a681-89e34cbeda0f"),l=Object.defineProperty,b=Object.getOwnPropertyDescriptor;const h="appinstanceupdatingprogressblade",m="appinstanceeditpropertiesblade",u="appinstanceeditenterprisepropertiesblade";let g=class extends s.VueComponentBase{constructor(){super(),this.errorMessage="",this.isSaving=!1,this.appStore=p.ServiceContainer.createInstance(c.AppStore)}update(e,t){setTimeout((()=>{this.useValidator.validateAll()&&t(e).then((e=>{}))}),100)}};g=((e,t,n,o)=>{for(var a,s=o>1?void 0:o?b(t,n):t,i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o?a(t,n,s):a(s))||s);return o&&s&&l(t,n,s),s})([a.default],g);var v=n("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),f=Object.defineProperty,y=Object.getOwnPropertyDescriptor,x=(e,t,n,o)=>{for(var a,s=o>1?void 0:o?y(t,n):t,i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o?a(t,n,s):a(s))||s);return o&&s&&f(t,n,s),s};let I=class extends g{constructor(){super(...arguments),this.internalAppInstance={},this.rollupRatios=[],this.isRenderMediaPicker=!1,this.isMediaPickerReady=!1,this.imagePlaceholderWrapperStyle="",this.showImagePlaceholder=!1}created(){this.internalAppInstance=p.Utils.clone(this.appInstance)}onAppInstanceChange(){JSON.stringify(this.internalAppInstance)!==JSON.stringify(this.appInstance)&&(this.internalAppInstance=p.Utils.clone(this.appInstance))}getImageProviderContext(){return new i.MediaPickerStorageProviderAppInstanceContext(this.appInstance.id)}setDataChanged(){this.internalAppInstance.onDataChanged&&this.appInstance.onDataChanged()}renderAppInstanceSettings(){return(0,o.h)("v-row",{attrs:{align:"center","no-gutters":!0},style:{width:"100%"}},[(0,o.h)("v-col",{attrs:{cols:"12"}},[(0,o.h)("omfx-multilingual-input",{domProps:{valueBind:this.internalAppInstance.title,requiredWithValidator:this.useValidator,onValueChanged:e=>{this.internalAppInstance.title=e,this.setDataChanged()}},attrs:{dark:this.theming.body.bg.dark,label:this.omniaUxLoc.Common.Title}})]),(0,o.h)("v-col",{attrs:{cols:"12"}},[(0,o.h)("omfx-multilingual-input",{domProps:{valueBind:this.internalAppInstance.description,onValueChanged:e=>{this.internalAppInstance.description=e,this.setDataChanged()}},attrs:{dark:this.theming.body.bg.dark,label:this.omniaUxLoc.Common.Description}})]),(0,o.h)("v-col",{attrs:{cols:"12"}},[(0,o.h)("omfx-app-property-naming-policy-input",{attrs:{useValidator:this.useValidator}})]),(0,o.h)("v-col",{attrs:{cols:"12"}},[(0,o.h)("v-switch",{attrs:{dark:this.theming.body.bg.dark,color:this.theming.body.fg.color.base,label:this.omniaUxLoc.Apps.ShowInPublicListings,"input-value":this.internalAppInstance.showInPublicListings},on:{change:()=>{this.internalAppInstance.showInPublicListings=!this.internalAppInstance.showInPublicListings,this.setDataChanged()}}})])])}render(){return(0,o.h)("div",[(0,o.h)("v-app-bar",{attrs:{flat:!0,dark:this.omniaTheming.promoted.header.dark,color:this.omniaTheming.promoted.header.background.base}},[(0,o.h)("v-toolbar-title",[this.omniaUxLoc.Apps.EditApp]),(0,o.h)("v-spacer"),(0,o.h)("omfx-button",{domProps:{onClick:()=>{this.journeyInstance.travelBack()},preset:s.ButtonPresets.icons.close},attrs:{dark:this.omniaTheming.promoted.header.dark}})]),(0,o.h)("v-divider"),(0,o.h)("v-container",[(0,o.h)("v-layout",{attrs:{"pa-4":!0,"align-center":!0,row:!0,wrap:!0,dark:this.omniaTheming.promoted.body.dark}},[this.renderAppInstanceSettings(),(0,o.h)("omfx-app-image-input",{attrs:{appInstance:this.appInstance}}),(0,o.h)("div",{style:{width:"100%"}},[this.content])])]),(0,o.h)("div",[(0,o.h)("div",{class:"text-right"},[(0,o.h)("omfx-button",{domProps:{mode:i.ButtonModes.flat,onClick:()=>{this.journeyInstance.travelBack()}},attrs:{dark:this.omniaTheming.promoted.body.dark,text:this.omniaUxLoc.Common.Buttons.Cancel}}),this.lastStep?(0,o.h)("omfx-button",{attrs:{dark:this.omniaTheming.promoted.body.dark,loading:this.isSaving,text:this.omniaUxLoc.Common.Buttons.Save},domProps:{mode:i.ButtonModes.flat,onClick:()=>{this.update(this.internalAppInstance,this.save)}}}):(0,o.h)("omfx-button",{attrs:{dark:this.omniaTheming.promoted.body.dark,loading:this.isSaving,text:this.omniaUxLoc.Common.Buttons.Next},domProps:{mode:i.ButtonModes.flat,onClick:()=>{this.useValidator.validateAll()&&(this.onNext(this.internalAppInstance),this.journeyInstance.visibleBlades[0].disabled=!0,this.journeyInstance.travelToNext(u))}}})])])])}};x([(0,r.Prop)()],I.prototype,"lastStep",2),x([(0,r.Prop)()],I.prototype,"appInstance",2),x([(0,r.Prop)()],I.prototype,"onCanceled",2),x([(0,r.Prop)()],I.prototype,"onCompleted",2),x([(0,r.Prop)()],I.prototype,"onNext",2),x([(0,r.Prop)()],I.prototype,"save",2),x([(0,r.Prop)()],I.prototype,"content",2),x([(0,r.Prop)()],I.prototype,"journeyInstance",2),x([(0,p.Inject)(s.OmniaTheming)],I.prototype,"omniaTheming",2),x([(0,p.Inject)(c.MediaPickerStore)],I.prototype,"mediaPickerStore",2),x([(0,p.Inject)(v.MediaPickerService)],I.prototype,"mediaPickerService",2),x([(0,p.Localize)(s.OmniaUxLocalizationNamespace)],I.prototype,"omniaUxLoc",2),x([(0,r.Watch)("appInstance",{deep:!0,immediate:!1})],I.prototype,"onAppInstanceChange",1),I=x([a.default],I);var P=n("./client/fx/ux/appprovisioning/components/index.js"),k=Object.defineProperty,j=Object.getOwnPropertyDescriptor,C=(e,t,n,o)=>{for(var a,s=o>1?void 0:o?j(t,n):t,i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o?a(t,n,s):a(s))||s);return o&&s&&k(t,n,s),s};let A=class extends g{onCloseEnterprisePropertiesBlade(){this.journeyInstance.visibleBlades[0].disabled=!1,this.journeyInstance.travelBack()}render(){return(0,o.h)("div",[(0,o.h)("v-app-bar",{attrs:{flat:!0,dark:this.omniaTheming.promoted.header.dark,color:this.omniaTheming.promoted.header.background.base}},[(0,o.h)("v-toolbar-title",[this.omniaUxLoc.Apps.EditApp]),(0,o.h)("v-spacer"),(0,o.h)("omfx-button",{domProps:{onClick:this.onCloseEnterprisePropertiesBlade,preset:s.ButtonPresets.icons.close},attrs:{dark:this.omniaTheming.promoted.header.dark}})]),(0,o.h)("v-divider"),(0,o.h)("v-container",[(0,o.h)("v-layout",{attrs:{"pa-4":!0,"align-center":!0,row:!0,wrap:!0,dark:this.omniaTheming.promoted.body.dark}},[this.errorMessage&&(0,o.h)("p",{style:{color:"red",width:"100%"},class:"text-center pa-2"},[this.errorMessage]),(0,o.h)(P.AppInstanceEnterprisePropertiesVueComponent,{attrs:{appInstance:this.appInstance,useValidator:this.useValidator}})])]),(0,o.h)("div",[(0,o.h)("div",{class:"text-right"},[(0,o.h)("omfx-button",{domProps:{mode:i.ButtonModes.flat,onClick:this.onCloseEnterprisePropertiesBlade},attrs:{dark:this.omniaTheming.promoted.body.dark,text:this.omniaUxLoc.Common.Buttons.Previous}}),(0,o.h)("omfx-button",{domProps:{onClick:()=>{this.update(this.appInstance,this.save)},mode:i.ButtonModes.flat},attrs:{loading:this.isSaving,dark:this.omniaTheming.promoted.body.dark,text:this.omniaUxLoc.Common.Buttons.Save}})])])])}};C([(0,r.Prop)()],A.prototype,"lastStep",2),C([(0,r.Prop)()],A.prototype,"appInstance",2),C([(0,r.Prop)()],A.prototype,"canceled",2),C([(0,r.Prop)()],A.prototype,"completed",2),C([(0,r.Prop)()],A.prototype,"save",2),C([(0,r.Prop)()],A.prototype,"content",2),C([(0,r.Prop)()],A.prototype,"journeyInstance",2),C([(0,p.Inject)(s.OmniaTheming)],A.prototype,"omniaTheming",2),C([(0,p.Localize)(s.OmniaUxLocalizationNamespace)],A.prototype,"omniaUxLoc",2),A=C([a.default],A);var S=n("./client/fx/ux/appprovisioning/enums.js"),B=Object.defineProperty,T=Object.getOwnPropertyDescriptor,E=(e,t,n,o)=>{for(var a,s=o>1?void 0:o?T(t,n):t,i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o?a(t,n,s):a(s))||s);return o&&s&&B(t,n,s),s};let L=class extends s.VueComponentBase{constructor(){super(...arguments),this.blades=[],this.internalAppInstance={},this.isSaving=!1,this.isDisplayEditEnterprisePropertiesBlade=!1,this.errorMessage=""}created(){this.useValidator||(this.useValidator=new d.FormValidator),this.loadTemplatePromise=this.appStore.actions.loadAppTemplates.dispatch(),this.internalAppInstance=p.Utils.clone(this.appInstance)}mounted(){p.WebComponentBootstrapper.registerElementInstance(this,this.$el),super.mounted()}beforeDestroy(){}onJourneyInstanceCreated(e){this.journeyInstance=e,this.loadTemplatePromise.then((e=>{const t=this.appStore.getters.getAppTemplate(this.appInstance.appTemplateId);!p.Utils.isNullOrEmpty(t.properties)&&t.properties.enterprisePropertySetId&&t.properties.enterprisePropertySetId!=i.Guid.empty?(this.isDisplayEditEnterprisePropertiesBlade=!0,this.blades.push({id:m,size:i.BladeSizes.medium,content:()=>this.getEditPropertiesBlade()},{id:u,size:i.BladeSizes.medium,content:()=>this.getEditEnterprisePropertiesBlade()})):this.blades.push({id:m,size:i.BladeSizes.medium,content:()=>this.getEditPropertiesBlade()}),this.blades.push({id:h,size:i.BladeSizes.medium,content:()=>this.getProgressBlade()}),this.journeyInstance&&this.blades.length>0&&this.$nextTick((()=>{this.journeyInstance.travelToNext(m)}))}))}handleSave(e){return new Promise(((t,n)=>{this.onSave(e).then((()=>{this.updateInternalAppInstance(e),this.journeyInstance.visibleBlades[this.blades.length-2].disabled=!0,this.journeyInstance.travelToNext(h)}))}))}updateInternalAppInstance(e){JSON.stringify(this.internalAppInstance)!==JSON.stringify(e)&&(this.internalAppInstance=e)}onUpdateCompleted(e){this.journeyInstance.closeJourney()}onUpdateError(e){}onCloseProgressBlade(){this.journeyInstance.visibleBlades[this.blades.length-2].disabled=!1,this.journeyInstance.travelBack()}getEditEnterprisePropertiesBlade(){return(0,o.h)(A,{attrs:{useValidator:this.useValidator,appInstance:this.internalAppInstance,content:this.content,save:this.handleSave,canceled:this.onCanceled,completed:this.onCompleted,journeyInstance:this.journeyInstance,lastStep:!this.isDisplayEditEnterprisePropertiesBlade}})}getEditPropertiesBlade(){return(0,o.h)(I,{attrs:{useValidator:this.useValidator,appInstance:this.internalAppInstance,content:this.content,save:this.handleSave,next:this.updateInternalAppInstance,canceled:this.onCanceled,completed:this.onCompleted,journeyInstance:this.journeyInstance,lastStep:!this.isDisplayEditEnterprisePropertiesBlade}})}getProgressBlade(){return(0,o.h)("div",[(0,o.h)("v-app-bar",{attrs:{flat:!0,dark:this.omniaTheming.promoted.header.dark,color:this.omniaTheming.promoted.header.background.base}},[(0,o.h)("v-toolbar-title",[this.omniaUxLoc.Apps.UpdatingCompleted]),(0,o.h)("v-spacer"),(0,o.h)("omfx-button",{domProps:{onClick:this.onCloseProgressBlade,preset:s.ButtonPresets.icons.close},attrs:{dark:this.omniaTheming.promoted.header.dark}})]),(0,o.h)("v-divider"),(0,o.h)("v-container",[(0,o.h)(P.AppInstanceCompletedStepVueComponent,{attrs:{action:S.AppInstanceProgressActions.Update,appInstance:this.internalAppInstance,handleAppActionCompleted:this.onUpdateCompleted,handleAppActionError:this.onUpdateError}})])])}render(){return(0,o.h)("omfx-journey",{domProps:{onInstanceCreated:this.onJourneyInstanceCreated,blades:this.blades}})}};E([(0,r.Prop)()],L.prototype,"appInstance",2),E([(0,r.Prop)()],L.prototype,"content",2),E([(0,r.Prop)()],L.prototype,"onCanceled",2),E([(0,r.Prop)()],L.prototype,"onCompleted",2),E([(0,r.Prop)()],L.prototype,"onSave",2),E([(0,p.Inject)(s.OmniaTheming)],L.prototype,"omniaTheming",2),E([(0,p.Inject)(c.AppStore)],L.prototype,"appStore",2),E([(0,p.Localize)(s.OmniaUxLocalizationNamespace)],L.prototype,"omniaUxLoc",2),L=E([a.default],L),p.WebComponentBootstrapper.registerElement((e=>{(0,p.vueCustomElement)(e.elementName,L)}))},"./client/fx/ux/appprovisioning/components/index.js":(e,t,n)=>{e.exports=n("dll-reference md32")("./client/fx/ux/appprovisioning/components/index.js")},"./client/fx/ux/appprovisioning/enums.js":(e,t,n)=>{e.exports=n("dll-reference md66")("./client/fx/ux/appprovisioning/enums.js")},"./client/fx/ux/validation/index.js":(e,t,n)=>{e.exports=n("dll-reference md66")("./client/fx/ux/validation/index.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,n)=>{e.exports=n("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,n)=>{e.exports=n("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,n)=>{e.exports=n("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,n)=>{e.exports=n("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,n)=>{e.exports=n("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,n)=>{e.exports=n("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,n)=>{e.exports=n("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(e,t,n)=>{e.exports=n("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md32":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["61540ff7-266a-4142-a42e-c62ba077f0b9"]},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["ab791b4b-c7e1-4d87-98c9-d2e30a9feabb"])throw new Error("Error, already loaded manifest ab791b4b-c7e1-4d87-98c9-d2e30a9feabb with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["ab791b4b-c7e1-4d87-98c9-d2e30a9feabb"]=n;var t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};n("./client/fx/ux/appprovisioning/appinstanceeditingjourney/appinstanceeditingjourney.tsx")})()};