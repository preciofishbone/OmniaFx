if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["a7105d99-6040-472b-8d55-819f99a434db"])throw new Error("Error, already loaded manifest a7105d99-6040-472b-8d55-819f99a434db with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["a7105d99-6040-472b-8d55-819f99a434db"]=function(){(()=>{var e={"./client/fx/spfx/components/omniawpcontainer.tsx":(e,t,s)=>{"use strict";s.r(t),s.d(t,{OmniaWPContainerComponent:()=>y});var o=s("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),n=s("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),i=s("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),a=s("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),d=s("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","a7105d99-6040-472b-8d55-819f99a434db"),r=s("./client/fx/spfx/services/spfxwpsettingprovider.js"),p=s("./client/fx/spfx/messagebus/internal/internaltopics.js"),l=s("./node_modules/typestyle/umd/typestyle.js"),b=s("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","a7105d99-6040-472b-8d55-819f99a434db");const c=b.StyleFlow.define(null,{dialog:{$nest:{".omfx-dialog-content":{height:"100%"}}},body:{padding:"0 0 15px 0",height:"100%"},dialogSetting:{$nest:{".omfx-dialog-content":{minHeight:"calc(100vh - 80px)",height:"calc(100vh - 80px)",overflow:"hidden"}}},dialogBody:{padding:"0 0 15px 0",height:"100%",overflowX:"auto"}});var m=s("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),g=s("0688ceff-4257-4427-b385-a83d6802c509"),h=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u=(e,t,s,o)=>{for(var n,i=o>1?void 0:o?f(t,s):t,a=e.length-1;a>=0;a--)(n=e[a])&&(i=(o?n(t,s,i):n(i))||i);return o&&i&&h(t,s,i),i};let y=class extends b.VueComponentBase{constructor(){super(...arguments),this.webComponents=[],this.displaySelectComponents=!1,this.displaySettingsComponentForm=!1,this.wpProxy=null,this.settings=Object.create(null),this.selectedComponentTag=null,this.selectedSettingsComponentTag=null,this.currentComponentTitle="",this.settingsComponentDialog={visible:!1}}created(){this.settingsService.registerKeyProvider(this.webpartid,this.spfxSettingsService),this.init()}mounted(){d.WebComponentBootstrapper.registerElementInstance(this,this.$el)}init(){this.wpProxy=window._omniaSpfxProxy[this.webpartid],this.onDisplayModeChanged(this.displaymode),this.wpProxy.subcribeDisplayModeChanged(this.onDisplayModeChanged),this.wpProxy.subcribeOpenPane(this.subcribeOpenPaneEvent),this.wpProxy.settings?("string"==typeof this.wpProxy.settings?this.settings=JSON.parse(this.wpProxy.settings):this.settings=JSON.parse(JSON.stringify(this.wpProxy.settings)),this.settings.componentTag&&(this.selectedComponentTag=this.settings.componentTag)):(this.displaySelectComponents=!0,this.wpProxy.settings=JSON.stringify({})),p.InternalTopics.spfxWebPartSettingTopic(this.webpartid).subscribe(this.subcribeMessage)}handleSettingsElementUpdated(e){this.selectedSettingsComponentTag=e}subcribeOpenPaneEvent(){if(!this.settings||d.Utils.isNullOrEmpty(this.settings.componentManifestId)&&d.Utils.isNullOrEmpty(this.settings.componentTag))this.displaySelectComponents=!0,this.$forceUpdate();else if(this.selectedSettingsComponentTag)this.populateComponentTitle(this.settings.componentManifestId,this.selectedComponentTag),this.settingsComponentDialog.visible=!0,this.displaySettingsComponentForm=!0;else{const e=this.settingsService.getSuggestedKeyRenderer(this.webpartid);e&&e.then((e=>{this.selectedSettingsComponentTag=e,this.populateComponentTitle(this.settings.componentManifestId,this.selectedComponentTag),this.settingsComponentDialog.visible=!0,this.displaySettingsComponentForm=!0}))}}populateComponentTitle(e,t){g.ServiceManifestProviderInternal.getAllOmniaManifests().forEach((s=>{s.webcomponent&&s.webcomponent.forEach((s=>{if(s.resourceId==e||s.elementName===t){const e=s.definition;if(e&&e.title)return void(this.currentComponentTitle=this.localizationService.transform(e.title))}}))}))}saveComponentSettings(e){return new Promise(((t,s)=>{this.settings.componentSettings=e,this.wpProxy.settings=JSON.stringify(this.settings),t()}))}onSelectComponentChanged(e,t){return new Promise(((s,o)=>{this.selectedComponentTag=t,this.settings={componentManifestId:e,componentSettings:null},this.wpProxy.settings=JSON.stringify(this.settings),s()}))}onDisplayModeChanged(e){const t=2==e;null!==y.PageEditMode&&y.PageEditMode===e||(y.PageEditMode=e,d.Topics.onPageEditModeChanged.publish({editMode:t,contentEditing:t}))}subcribeMessage(e){e.action===p.SpfxSettingsActionType.Get?e.callBack&&e.callBack(this.settings.componentSettings):e.action===p.SpfxSettingsActionType.Set&&this.saveComponentSettings(e.value).then((()=>{e.callBack&&e.callBack(e.value)}))}saveSettings(){this.displaySelectComponents=!1}closeSettings(){this.displaySelectComponents=!1}closeSettingsComponentForm(){this.settingsComponentDialog.visible=!1,this.displaySettingsComponentForm=!1}renderSettingsComponent(){return this.settingsComponentDialog.visible=!0,(0,o.h)("omfx-dialog",{attrs:{title:this.currentComponentTitle,headerClass:(0,l.classes)(this.omniaTheming.promoted.header.class),contentClass:c.dialogSetting,lazy:!1,valueBind:this.settingsComponentDialog,width:"500px",position:b.DialogPositions.Right},on:{close:this.closeSettingsComponentForm}},[(0,o.h)("v-card",{attrs:{dark:this.omniaTheming.promoted.body.dark},class:(0,l.classes)(this.omniaTheming.promoted.body.class,c.dialogBody)},[(0,o.h)("omfx-layout-block-renderer-helper",{attrs:{layoutProvider:m.Constants.layoutProviders.spfxWebpart,isEditMode:!0,blockId:this.webpartid,blockRenderer:()=>this.createElementByManifestId(this.settings.settingsComponentManifestId,this.selectedSettingsComponentTag,{domProps:{settingsKey:this.webpartid}}),settingsStorage:this.spfxSettingsService},on:{settingsElementUpdated:this.handleSettingsElementUpdated}})])])}renderDisplayComponent(e){return(0,o.h)("omfx-layout-block-renderer-helper",{attrs:{layoutProvider:m.Constants.layoutProviders.spfxWebpart,blockId:this.webpartid,blockRenderer:()=>this.createElementByManifestId(this.settings.componentManifestId,this.selectedComponentTag,{domProps:{settingsKey:this.webpartid}}),settingsStorage:this.spfxSettingsService},on:{settingsElementUpdated:e=>this.selectedSettingsComponentTag=e}})}render(){return(0,o.h)("div",[this.settings.componentManifestId||this.selectedComponentTag?(0,o.h)("div",{style:"flex: 0 0 100%;"},[this.renderDisplayComponent(this.selectedComponentTag)]):(0,o.h)("div",[this.loc?this.loc.SelectBlock:""]),this.displaySelectComponents?(0,o.h)("omnia-fx-spfx-wp-settings",{domProps:{onChange:this.onSelectComponentChanged,onClosed:this.closeSettings},attrs:{opened:this.displaySelectComponents}}):null,this.displaySettingsComponentForm?this.renderSettingsComponent():null])}};y.PageEditMode=null,u([(0,n.Prop)()],y.prototype,"webpartid",2),u([(0,n.Prop)()],y.prototype,"displaymode",2),u([(0,d.Localize)("Omnia.Fx.Spfx")],y.prototype,"loc",2),u([(0,d.Inject)(a.LocalizationService)],y.prototype,"localizationService",2),u([(0,d.Inject)(a.SettingsService)],y.prototype,"settingsService",2),u([(0,d.Inject)(r.OmniaSpfxSettingsProvider)],y.prototype,"spfxSettingsService",2),u([(0,d.Inject)(b.OmniaTheming)],y.prototype,"omniaTheming",2),u([(0,d.Inject)(b.BlockCatalogStore)],y.prototype,"blockCatalogStore",2),y=u([i.default],y),d.WebComponentBootstrapper.registerElement((e=>{(0,d.vueCustomElement)(e.elementName,y)}))},"./client/fx/spfx/messagebus/internal/internaltopics.js":(e,t,s)=>{e.exports=s("dll-reference md22")("./client/fx/spfx/messagebus/internal/internaltopics.js")},"./client/fx/spfx/services/spfxwpsettingprovider.js":(e,t,s)=>{e.exports=s("dll-reference md22")("./client/fx/spfx/services/spfxwpsettingprovider.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/typestyle/umd/typestyle.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/typestyle/umd/typestyle.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"0688ceff-4257-4427-b385-a83d6802c509":(e,t,s)=>{e.exports=s("dll-reference md9")("0688ceff-4257-4427-b385-a83d6802c509")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,s)=>{e.exports=s("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,s)=>{e.exports=s("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,s)=>{e.exports=s("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(e,t,s)=>{e.exports=s("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]},"dll-reference md22":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["e76db000-51de-47b5-b603-d62b59cacf4e"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a7105d99-6040-472b-8d55-819f99a434db"])throw new Error("Error, already loaded manifest a7105d99-6040-472b-8d55-819f99a434db with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a7105d99-6040-472b-8d55-819f99a434db"]=s;var t={};function s(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};s("./client/fx/spfx/components/omniawpcontainer.tsx")})()};