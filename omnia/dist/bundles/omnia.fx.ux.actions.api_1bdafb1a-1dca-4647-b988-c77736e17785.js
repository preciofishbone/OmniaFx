if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["1bdafb1a-1dca-4647-b988-c77736e17785"])throw new Error("Error, already loaded manifest 1bdafb1a-1dca-4647-b988-c77736e17785 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["1bdafb1a-1dca-4647-b988-c77736e17785"]=function(){(()=>{var e={"./client/fx/ux/actionhandler/apis/actionhandlerapi.js":(e,a,t)=>{"use strict";t.r(a);var r=t("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),i=t("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","1bdafb1a-1dca-4647-b988-c77736e17785"),n=t("ff061abc-7f0e-444b-b2b9-7ff71c5842c5");class b{constructor(){this.actionRegistrations=[]}getAllHandlers(){return this.actionRegistrations}registerActionHandler(e){i.Utils.isArray(e)?this.actionRegistrations=this.actionRegistrations.concat(e):this.actionRegistrations.push(e)}}class o{constructor(){this._actionHandlerManifests={},this._resolveActionHandlers={},this._alreadyRegisterHandlerType=[]}register(e){if(!(0,i.isInjectable)(e.handler))throw`Action Handler > The @Injectable attribute is required but seems to be missing on the following type ${e.handler}`;if(this._alreadyRegisterHandlerType.indexOf(e.typeId)>-1)throw`Action Handler > Already exist action handler with type id ${e.typeId}`;this._alreadyRegisterHandlerType.push(e.typeId);const a=e.typeId.toString();this._resolveActionHandlers[a]||(this._resolveActionHandlers[a]=new r.Future(null)),this._resolveActionHandlers[a].resolve(e.handler)}getActionHandler(e){const a=e.toString();return this._resolveActionHandlers[a]||(this._resolveActionHandlers[a]=new r.Future(null),this.ready().then((()=>{this._actionHandlerManifests[a]?(n.ManifestResourceLoader.loadResources(this._actionHandlerManifests[a]),setTimeout((()=>{this._resolveActionHandlers[a].resolved||console.error(`<<Action Handler>> Waiting after 10s to register action handler type ${a} -> from manifest id ${this._actionHandlerManifests[a].resourceId} \n                                        with service id ${this._actionHandlerManifests[a].omniaServiceId}.`)}),1e4)):(console.error(`<<Action Handler>> Not found extend api manifest with ActionHandlerRegistrationId ${e}`),this._resolveActionHandlers[a].reject("not found extend api manifest"))}))),this._resolveActionHandlers[a]}ready(){return this._ready||(this._ready=new r.Future(null),i.ApiHelper.getExtendApiConfiguration((e=>e.fx.ux.actions.handlers)).then((e=>{e.forEach((e=>{this._actionHandlerManifests[e.configuration.toString()]=e.manifest})),this._ready.resolve()}))),this._ready}}(0,i.registerApi)((e=>e.fx.ux.actions.registrations),(e=>e(new b))),(0,i.registerApi)((e=>e.fx.ux.actions.handlers),(e=>e(new o)))},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,a,t)=>{e.exports=t("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,a,t)=>{e.exports=t("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"ff061abc-7f0e-444b-b2b9-7ff71c5842c5":(e,a,t)=>{e.exports=t("dll-reference md9")("ff061abc-7f0e-444b-b2b9-7ff71c5842c5")},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["1bdafb1a-1dca-4647-b988-c77736e17785"])throw new Error("Error, already loaded manifest 1bdafb1a-1dca-4647-b988-c77736e17785 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["1bdafb1a-1dca-4647-b988-c77736e17785"]=t;var a={};function t(r){var i=a[r];if(void 0!==i)return i.exports;var n=a[r]={exports:{}};return e[r](n,n.exports,t),n.exports}t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};t("./client/fx/ux/actionhandler/apis/actionhandlerapi.js")})()};