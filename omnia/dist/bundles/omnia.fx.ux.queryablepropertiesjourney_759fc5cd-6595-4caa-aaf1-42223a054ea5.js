if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["759fc5cd-6595-4caa-aaf1-42223a054ea5"])throw new Error("Error, already loaded manifest 759fc5cd-6595-4caa-aaf1-42223a054ea5 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["759fc5cd-6595-4caa-aaf1-42223a054ea5"]=function(){(()=>{var e={"./client/fx/ux/admin/queryableproperties/queryablepropertiesjourney.tsx":(e,t,r)=>{"use strict";r.r(t),r.d(t,{QueryablePropertiesJourneyComponent:()=>k});var o=r("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),i=r("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),a=r("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","759fc5cd-6595-4caa-aaf1-42223a054ea5"),s=r("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),n=r("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),d=r("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","759fc5cd-6595-4caa-aaf1-42223a054ea5");const l="queryablehome",p="queryableadd",c={home:[l],add:[l,p]};var b=r("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js"),m=r.n(b),h=r("0111486e-5dc8-4705-8247-d91fb2aba33d"),u=r("5e618f4d-d014-414e-a681-89e34cbeda0f"),f=r("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,P=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?v(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&y(t,r,a),a};let g=class extends a.VueComponentBase{constructor(){super(...arguments),this.availableProperties=[],this.selectingProperties=[],this.selectProperty=null,this.isSaving=!1}created(){this.additionalBuiltInProperties||(this.additionalBuiltInProperties=[]),this.getAvailableProperties()}onSave(){this.saveProperties&&(this.isSaving=!0,this.saveProperties(this.selectingProperties).then((()=>{this.isSaving=!1,this.onTravelBack()})))}getAvailableProperties(){const e=this.enterprisePropertyStore.getters.omniaSearchableEnterprisePropertyDataTypes(),t=this.enterprisePropertyStore.getters.queryableEnterpriseProperties(this.serviceId,this.tableName),r=this.enterprisePropertyStore.getters.enterprisePropertyDefinitionsByIndexedTypes(e.map((e=>e.indexedType)));if(r&&r.length){const e=s.Constants.builtInQueryableProperties.language.toString();this.availableProperties=r.filter((r=>r.id.toString()!==e&&(!t.some((e=>e.id===r.id))||this.additionalBuiltInProperties.some((e=>e.toString()===r.id.toString())))))}}onTravelBack(){h.AdminRouter.navigatePath("home",""),this.journeyInstance.travelBack()}onAddProperty(){if(this.selectProperty){this.selectingProperties.find((e=>e.id===this.selectProperty.id))||this.selectingProperties.push(this.selectProperty),this.selectProperty=null}}onRemoveFromList(e,t){e==a.ConfirmDialogResponse.Ok&&(this.selectingProperties=this.selectingProperties.filter((e=>e.id!==t.id)))}render(){return(0,o.h)("v-card",{attrs:{flat:!0,width:"100%"}},[(0,o.h)("v-app-bar",{attrs:{flat:!0,dark:this.omniaTheming.promoted.header.dark,color:this.omniaTheming.promoted.header.background.base}},[(0,o.h)("v-toolbar-title",[this.omniaUxLoc.Common.Buttons.Add]),(0,o.h)("v-spacer"),(0,o.h)("v-btn",{attrs:{icon:!0},on:{click:()=>{this.onTravelBack()}}},[(0,o.h)("v-icon",["close"])])]),(0,o.h)("v-divider"),(0,o.h)("v-card-text",{class:"pa-0"},[(0,o.h)("v-container",[(0,o.h)("v-row",{attrs:{"no-gutters":!0,align:"center"}},[(0,o.h)("v-select",{attrs:{"return-object":!0,"item-text":"multilingualTitle",label:this.omniaUxLoc.EnterpriseProperties.Properties,"single-line":!0,items:this.availableProperties},model:{value:this.selectProperty,callback:e=>{this.selectProperty=e}}}),(0,o.h)("omfx-button",{domProps:{mode:s.ButtonModes.flat,onClick:()=>{this.onAddProperty()}},attrs:{contentClass:"shrink ml-2",text:this.omniaUxLoc.Common.Buttons.Add}})]),this.renderItems(),(0,o.h)("div",{class:"pt-2 text-right"},[(0,o.h)("omfx-button",{domProps:{mode:s.ButtonModes.flat,onClick:()=>{this.onSave()}},attrs:{contentClass:"shrink ml-2",loading:this.isSaving,text:this.omniaUxLoc.Common.Buttons.Save}})])])])])}renderItems(){return(0,o.h)("div",[(0,o.h)("v-list",[(0,o.h)("v-list-item",[(0,o.h)("v-list-item-content",[(0,o.h)("th",{class:"text-left"},[this.omniaUxLoc.QueryableProperties.Property])]),(0,o.h)("v-list-item-action")]),this.selectingProperties.map(((e,t)=>(0,o.h)("v-list-item",[(0,o.h)("v-list-item-content",[(0,o.h)("v-list-item-title",[e.multilingualTitle])]),(0,o.h)("v-list-item-action",[(0,o.h)("omfx-confirm-dialog",{domProps:{icon:"far fa-trash-alt",styles:{icon:{fontSize:"18px !important"},button:{marginLeft:"0px !important",marginRight:"0px! important"}},onClose:t=>{this.onRemoveFromList(t,e)}}})])])))])])}};P([(0,n.Prop)()],g.prototype,"serviceId",2),P([(0,n.Prop)()],g.prototype,"journeyInstance",2),P([(0,n.Prop)()],g.prototype,"saveProperties",2),P([(0,n.Prop)()],g.prototype,"additionalBuiltInProperties",2),P([(0,n.Prop)({default:""})],g.prototype,"tableName",2),P([(0,d.Inject)(a.OmniaTheming)],g.prototype,"omniaTheming",2),P([(0,d.Inject)(u.MultilingualStore)],g.prototype,"multilingualStore",2),P([(0,d.Inject)(f.LocalizationService)],g.prototype,"localizationService",2),P([(0,d.Inject)(u.EnterprisePropertyStore)],g.prototype,"enterprisePropertyStore",2),P([(0,d.Localize)(a.OmniaUxLocalizationNamespace)],g.prototype,"omniaUxLoc",2),g=P([i.default],g);var x=Object.defineProperty,I=Object.getOwnPropertyDescriptor,j=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?I(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&x(t,r,a),a};let S=class extends a.VueComponentBase{constructor(){super(...arguments),this.headers=[{text:this.omniaUxLoc.QueryableProperties.Title,align:"left",sortable:!1,value:""},{text:this.omniaUxLoc.QueryableProperties.InternalName,align:"left",sortable:!1,value:"",width:""},{text:this.omniaUxLoc.QueryableProperties.Type,align:"left",sortable:!1,value:""},{text:"",align:"center",sortable:!1,value:"",width:"70px"}],this.deleteDialogOption={icon:"far fa-trash-alt",title:this.omniaUxLoc.Common.Buttons.Delete,message:this.omniaUxLoc.QueryableProperties.DeleteConfirmation},this.properties=[]}created(){this.enterprisePropertyStore.actions.ensureLoadQueryableProperties.dispatch(this.serviceId,this.tableName).then((()=>{this.getProperties()}))}travelToAddBlade(){this.journey().hasBlade(p)||this.journey().addOrUpdateBlade(this.getAddBlade()),this.journey().travelTo(c.add),h.AdminRouter.navigatePath("Add properties","add")}getAddBlade(){return{id:p,size:s.BladeSizes.medium,isSubJourney:!0,content:()=>(0,o.h)(g,{attrs:{serviceId:this.serviceId,journeyInstance:this.journey(),tableName:this.tableName,additionalBuiltInProperties:this.additionalBuiltInProperties,saveProperties:this.addQueryableProperties}})}}getProperties(){const e=this.enterprisePropertyStore.getters.queryableEnterpriseProperties(this.serviceId,this.tableName);e&&e.length>0&&(this.properties=e.map((e=>({...e,deleting:!1}))))}removeQueryableProperties(e,t){if(e==a.ConfirmDialogResponse.Ok){const e={enterprisePropertyId:t.id,enterprisePropertyInternalName:t.internalName,tableName:this.tableName};t.deleting=!0,this.enterprisePropertyStore.actions.removeQueryableProperties.dispatch(this.serviceId,e).then((()=>{t.deleting=!1,this.properties=this.properties.filter((e=>e.id!==t.id))}))}}addQueryableProperties(e){return new Promise(((t,r)=>{const o=e.map((e=>({enterprisePropertyId:e.id,tableName:this.tableName,enterprisePropertyInternalName:e.internalName})));this.enterprisePropertyStore.actions.addQueryableProperties.dispatch(this.serviceId,o).then((()=>{this.getProperties(),t()})).catch((()=>{r()}))}))}render(){return(0,o.h)("v-card",{attrs:{flat:!0,width:"100%"}},[(0,o.h)("v-app-bar",{attrs:{flat:!0,dark:this.omniaTheming.promoted.header.dark,color:this.omniaTheming.promoted.header.background.base}},[(0,o.h)("v-toolbar-title",[this.additionalTitle?`${this.additionalTitle}`:this.omniaUxLoc.QueryableProperties.HeaderTitle]),(0,o.h)("v-spacer"),(0,o.h)("v-btn",{attrs:{icon:!0},on:{click:()=>{this.travelToAddBlade()}}},[(0,o.h)("v-icon",["add"])])]),(0,o.h)("v-divider"),(0,o.h)("v-card-text",{class:"pa-0"},[(0,o.h)("v-data-table",{attrs:{"hide-default-footer":!0,"items-per-page":Number.MAX_SAFE_INTEGER,headers:this.headers,items:this.properties},scopedSlots:{item:e=>(0,o.h)("tr",[(0,o.h)("td",{class:"text-left"},[e.item.multilingualTitle]),(0,o.h)("td",{class:"text-left"},[e.item.internalName]),(0,o.h)("td",{class:"text-left"},[this.localizationService.transform(e.item.enterprisePropertyDataType.title)]),(0,o.h)("td",{class:"text-center"},[this.renderActionButon(e.item)])])}})])])}renderActionButon(e){return e.deleting?(0,o.h)("v-btn",{attrs:{icon:!0,loading:!0,"x-small":!0}}):[(0,o.h)("v-tooltip",m()([{attrs:{"nudge-top":"8px",top:!0}},this.transformVSlot({activator:t=>{const r={on:t.on};return[(0,o.h)("omfx-confirm-dialog",m()([{},r,{domProps:{icon:"fas fa-trash",styles:{icon:{fontSize:"16px !important"},button:{marginLeft:"4px !important"}},dialogOptions:this.deleteDialogOption,onClose:t=>{this.removeQueryableProperties(t,e)}},attrs:{type:a.ConfirmDialogDisplay.Icon}}]))]}})]),[(0,o.h)("span",[this.omniaUxLoc.Common.Buttons.Delete])])]}};j([(0,n.Prop)()],S.prototype,"serviceId",2),j([(0,n.Prop)()],S.prototype,"journey",2),j([(0,n.Prop)()],S.prototype,"additionalBuiltInProperties",2),j([(0,n.Prop)()],S.prototype,"additionalTitle",2),j([(0,n.Prop)({default:""})],S.prototype,"tableName",2),j([(0,d.Inject)(a.OmniaTheming)],S.prototype,"omniaTheming",2),j([(0,d.Inject)(u.EnterprisePropertyStore)],S.prototype,"enterprisePropertyStore",2),j([(0,d.Inject)(u.MultilingualStore)],S.prototype,"multilingualStore",2),j([(0,d.Inject)(f.LocalizationService)],S.prototype,"localizationService",2),j([(0,d.Localize)(a.OmniaUxLocalizationNamespace)],S.prototype,"omniaUxLoc",2),S=j([i.default],S);var T=Object.defineProperty,B=Object.getOwnPropertyDescriptor,L=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?B(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&T(t,r,a),a};let k=class extends a.VueComponentBase{getJourneyInstance(){return this.journey}created(){}mounted(){d.WebComponentBootstrapper.registerElementInstance(this,this.$el)}beforeDestroy(){}onJourneyInstanceCreated(e){this.journey=e,this.journey.travelTo(c.home)}getHomeBlade(){return{id:l,size:s.BladeSizes.medium,isSubJourney:!0,content:()=>(0,o.h)(S,{attrs:{serviceId:this.serviceId,additionalTitle:this.additionalTitle,tableName:this.tableName,additionalBuiltInProperties:this.additionalBuiltInProperties,journey:this.getJourneyInstance}})}}render(){return(0,o.h)("omfx-journey",{domProps:{onInstanceCreated:this.onJourneyInstanceCreated,blades:[this.getHomeBlade()]}})}};L([(0,n.Prop)()],k.prototype,"serviceId",2),L([(0,n.Prop)()],k.prototype,"additionalBuiltInProperties",2),L([(0,n.Prop)()],k.prototype,"additionalTitle",2),L([(0,n.Prop)({default:""})],k.prototype,"tableName",2),L([(0,d.Inject)(a.OmniaTheming)],k.prototype,"omniaTheming",2),L([(0,d.Localize)(a.OmniaUxLocalizationNamespace)],k.prototype,"omniaUxLoc",2),k=L([i.default],k),d.WebComponentBootstrapper.registerElement((e=>{(0,d.vueCustomElement)(e.elementName,k)}))},"./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js":(e,t,r)=>{e.exports=r("dll-reference md2")("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,r)=>{e.exports=r("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,r)=>{e.exports=r("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,r)=>{e.exports=r("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"0111486e-5dc8-4705-8247-d91fb2aba33d":(e,t,r)=>{e.exports=r("dll-reference md66")("0111486e-5dc8-4705-8247-d91fb2aba33d")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,r)=>{e.exports=r("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,r)=>{e.exports=r("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,r)=>{e.exports=r("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,r)=>{e.exports=r("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(e,t,r)=>{e.exports=r("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["759fc5cd-6595-4caa-aaf1-42223a054ea5"])throw new Error("Error, already loaded manifest 759fc5cd-6595-4caa-aaf1-42223a054ea5 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["759fc5cd-6595-4caa-aaf1-42223a054ea5"]=r;var t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};r("./client/fx/ux/admin/queryableproperties/queryablepropertiesjourney.tsx")})()};