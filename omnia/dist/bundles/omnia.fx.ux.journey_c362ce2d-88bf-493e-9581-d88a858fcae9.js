if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["c362ce2d-88bf-493e-9581-d88a858fcae9"])throw new Error("Error, already loaded manifest c362ce2d-88bf-493e-9581-d88a858fcae9 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["c362ce2d-88bf-493e-9581-d88a858fcae9"]=function(){(()=>{var e={"./client/fx/ux/journey/journey.tsx":(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>f});var i=t("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),a=t("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),d=t("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","c362ce2d-88bf-493e-9581-d88a858fcae9"),l=t("./node_modules/typestyle/umd/typestyle.js");const o={container:(0,l.style)({display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"space-between",background:"#eee"}),blade:(0,l.style)({display:"flex",backgroundColor:"#212121",position:"relative",height:"100%"}),bladeBorder:(0,l.style)({}),bladeDisabled:(0,l.style)({opacity:.5}),bladeDisabledMask:(0,l.style)({position:"absolute",left:0,right:0,top:0,bottom:0})};var n=t("./client/fx/ux/omniatheming.js"),r=t("8610c059-395a-45c2-804a-8c236f4d60d9"),b=t("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),c=t("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","c362ce2d-88bf-493e-9581-d88a858fcae9"),h=Object.defineProperty,p=Object.getOwnPropertyDescriptor,u=(e,s,t,i)=>{for(var a,d=i>1?void 0:i?p(s,t):s,l=e.length-1;l>=0;l--)(a=e[l])&&(d=(i?a(s,t,d):a(d))||d);return i&&d&&h(s,t,d),d};let f=class extends r.VueComponentBase{constructor(){super(...arguments),this.lastTravel=[],this.innerWidth=window.innerWidth,this.visibleBlades=[]}created(){this.journeyContext.journeyInstance=this}mounted(){d.WebComponentBootstrapper.registerElementInstance(this,this.$el),this.onInstanceCreated&&this.onInstanceCreated(this),this.subscriptionHandler.add(this.omniaTheming.onThemingChanged().subscribe((()=>{this.$forceUpdate()}))),Zepto(window).resize((()=>{this.innerWidth=window.innerWidth,this.scrollToVisibleBlade(this.visibleBlades[this.visibleBlades.length-1]?.id)}))}beforeDestroy(){this.subscriptionHandler&&this.subscriptionHandler.unsubscribe()}addOrUpdateBlade(e){if(!e.id)throw"The blade is missing an id";const s=this.blades.find((s=>s.id==e.id));s?(s.content=e.content,s.size=e.size,s.disabled=e.disabled,s.isSubJourney=e.isSubJourney):this.blades.push(e)}removeBlade(e){const s=this.blades.findIndex((s=>s.id===e));s>=0&&this.blades.splice(s,1);const t=this.visibleBlades.findIndex((s=>s.id===e));t>=0&&this.visibleBlades.splice(t,1)}hasBlade(e){return!!this.blades.find((s=>s.id===e))}travelTo(e){let s=0;const t=[];let i=!1;if(e.forEach((e=>{const a=this.blades.find((s=>s.id==e));if(!a)throw`Cant find a blade with id: ${e}`;if(0===this.lastTravel.length)this.visibleBlades.push(a),t.push(a.id);else{this.lastTravel[s]!==a.id?(i||(this.visibleBlades=this.visibleBlades.slice(0,s),i=!0),this.visibleBlades.push(a),t.push(a.id)):t.push(a.id)}s++})),this.lastTravel=t,this.lastTravel.length>0){const e=this.lastTravel[this.lastTravel.length-1];this.$nextTick((()=>{const s=this.$refs[`blade${e}`];s&&s.scrollIntoView({block:"start",behavior:"smooth",inline:"end"})}))}else this.visibleBlades=[]}travelBackTo(e){if(0===this.visibleBlades.length)return;let s=0;this.visibleBlades.some((t=>{if(s++,t.id===e)return!0})),this.visibleBlades=this.visibleBlades.slice(0,s),this.lastTravel=this.lastTravel.slice(0,s)}travelBack(){0!==this.visibleBlades.length&&(this.lastTravel=this.lastTravel.slice(0,this.visibleBlades.length-1),this.visibleBlades=this.visibleBlades.slice(0,this.visibleBlades.length-1))}travelBackToFirstBlade(){0!==this.visibleBlades.length&&(this.lastTravel=this.lastTravel.slice(0,1),this.visibleBlades=this.visibleBlades.slice(0,1))}travelToNext(e){const s=this.blades.find((s=>s.id==e));if(!s)throw`Cant find a blade with id: ${e}`;0!==this.lastTravel.length&&this.lastTravel[this.lastTravel.length-1]===e||(this.lastTravel.push(s.id),this.visibleBlades.push(s)),this.lastTravel.length>0&&this.lastTravel[this.lastTravel.length-1]===e?(this.visibleBlades=this.visibleBlades.slice(0,this.visibleBlades.length-1),this.$nextTick((()=>{this.visibleBlades.push(s),this.moveToTextView(s)}))):this.moveToTextView(s)}moveToTextView(e){this.$nextTick((()=>{const s=this.$refs[`blade${e.id}`];s&&s.scrollIntoView({block:"start",behavior:"smooth",inline:"end"})}))}scrollToVisibleBlade(e){const s=this.visibleBlades.find((s=>s.id==e));s&&this.$nextTick((()=>{const e=this.$refs[`blade${s.id}`];e&&e.scrollIntoView({block:"start",behavior:"smooth",inline:"end"})}))}closeJourney(){this.lastTravel=[],this.visibleBlades=[],this.onInstanceClosed&&this.onInstanceClosed()}getBladeWidth(e){switch(e){case b.BladeSizes.small:return"300px";case b.BladeSizes.medium:return"600px";case b.BladeSizes.extramedium:return"800px";case b.BladeSizes.large:return"1200px";case b.BladeSizes.full:return this.innerWidth>1200?`${this.innerWidth}px`:"1200px";case b.BladeSizes.fillBesidesSmall:return this.innerWidth-300+"px"}}render(){return(0,i.h)("div",{class:o.container},[this.visibleBlades.map((e=>(0,i.h)("div",{class:[o.blade,e.size&&!e.isSubJourney?o.bladeBorder:"",e.disabled?o.bladeDisabled:""],attrs:{id:`blade${e.id}`},ref:`blade${e.id}`,style:{width:e.size?this.getBladeWidth(e.size):""}},[(0,i.h)("v-layout",{attrs:{width:"100%"}},[(0,i.h)("v-card",{attrs:{dark:this.omniaTheming.promoted.body.dark,width:"100%"},class:this.omniaTheming.promoted.body.class},[e.content instanceof Function?e.content():e.content])]),e.disabled&&(0,i.h)("div",{class:o.bladeDisabledMask})])))])}};u([(0,a.Prop)({default:[]})],f.prototype,"blades",2),u([(0,a.Prop)()],f.prototype,"onInstanceCreated",2),u([(0,a.Prop)()],f.prototype,"onInstanceClosed",2),u([(0,d.Inject)(n.OmniaTheming)],f.prototype,"omniaTheming",2),u([(0,d.Inject)(d.SubscriptionHandler)],f.prototype,"subscriptionHandler",2),u([(0,d.Provide)(c.JourneyContext)],f.prototype,"journeyContext",2),f=u([a.Component],f),d.WebComponentBootstrapper.registerElement((e=>{(0,d.vueCustomElement)(e.elementName,f)}))},"./client/fx/ux/omniatheming.js":(e,s,t)=>{e.exports=t("dll-reference md66")("./client/fx/ux/omniatheming.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,s,t)=>{e.exports=t("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/typestyle/umd/typestyle.js":(e,s,t)=>{e.exports=t("dll-reference md2")("./node_modules/typestyle/umd/typestyle.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,s,t)=>{e.exports=t("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,s,t)=>{e.exports=t("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"8610c059-395a-45c2-804a-8c236f4d60d9":(e,s,t)=>{e.exports=t("dll-reference md66")("8610c059-395a-45c2-804a-8c236f4d60d9")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,s,t)=>{e.exports=t("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,s,t)=>{e.exports=t("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["c362ce2d-88bf-493e-9581-d88a858fcae9"])throw new Error("Error, already loaded manifest c362ce2d-88bf-493e-9581-d88a858fcae9 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["c362ce2d-88bf-493e-9581-d88a858fcae9"]=t;var s={};function t(i){var a=s[i];if(void 0!==a)return a.exports;var d=s[i]={exports:{}};return e[i](d,d.exports,t),d.exports}t.d=(e,s)=>{for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},t.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};t("./client/fx/ux/journey/journey.tsx")})()};