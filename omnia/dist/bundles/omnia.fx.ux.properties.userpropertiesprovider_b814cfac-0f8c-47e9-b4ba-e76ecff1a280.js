if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["b814cfac-0f8c-47e9-b4ba-e76ecff1a280"])throw new Error("Error, already loaded manifest b814cfac-0f8c-47e9-b4ba-e76ecff1a280 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["b814cfac-0f8c-47e9-b4ba-e76ecff1a280"]=function(){(()=>{var e={"./client/fx/ux/user/userpropertiesprovider.js":(e,b,r)=>{"use strict";r.r(b);var a=r("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),t=r("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","b814cfac-0f8c-47e9-b4ba-e76ecff1a280"),o=r("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","b814cfac-0f8c-47e9-b4ba-e76ecff1a280"),i=r("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),n=Object.defineProperty,d=Object.getOwnPropertyDescriptor,s=(e,b,r,a)=>{for(var t,o=a>1?void 0:a?d(b,r):b,i=e.length-1;i>=0;i--)(t=e[i])&&(o=(a?t(b,r,o):t(o))||o);return a&&o&&n(b,r,o),o};let c=class extends o.PropertyDataSourceBase{constructor(){super(...arguments),this.id=a.Constants.properties.userPropertiesRegistrationId,this.title="$Localize:Omnia.Ux.User.UserPropertiesProvider.Name;"}supportsWriteback(e){return!0}onSavePropertyValue(e){throw new Error("Method not implemented.")}async getPropertyBinding(e){return new Promise((async(b,r)=>{0==c.properties.length&&await this.getProperties();const a=c.properties.find((b=>b.propertyBinding.bindingId.toString()==e.toString()));b(a?a.propertyBinding:null)}))}async getProperties(){return new Promise((async(e,b)=>{(await omniaApi.fx.ux.properties.definitions).getAllPropertyDefinition().then((b=>{c.properties=[];const r=new c;b.forEach((e=>{const b=new e.propertyDefinition,t=this.localizationService.transform(`$Localize:Omnia.Ux.User.UserProperties.${(new e.propertyDefinition).typeName};`),o=new a.PropertyBinding(b.id,t,e.propertyDefinition),i=new a.DataSourcePropertyBinding(r,o,t,null);c.properties.push(i)})),e(c.properties)}))}))}async getPropertyValue(e){return new Promise((async(b,r)=>{const a={value:null,propertyConfigurationId:e.configurationId};a.value="example property value",b(a)}))}};c.properties=[],s([(0,t.Inject)(t.OmniaContext)],c.prototype,"omniaContext",2),s([(0,t.Inject)(i.LocalizationService)],c.prototype,"localizationService",2),c=s([(0,t.Injectable)({lifetime:a.InstanceLifetimes.Transient})],c),(0,t.extendApi)((e=>e.fx.ux.properties.dataSources.registrations),(e=>{e.register(c)}))},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,b,r)=>{e.exports=r("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,b,r)=>{e.exports=r("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,b,r)=>{e.exports=r("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(e,b,r)=>{e.exports=r("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["b814cfac-0f8c-47e9-b4ba-e76ecff1a280"])throw new Error("Error, already loaded manifest b814cfac-0f8c-47e9-b4ba-e76ecff1a280 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["b814cfac-0f8c-47e9-b4ba-e76ecff1a280"]=r;var b={};function r(a){var t=b[a];if(void 0!==t)return t.exports;var o=b[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};r("./client/fx/ux/user/userpropertiesprovider.js")})()};