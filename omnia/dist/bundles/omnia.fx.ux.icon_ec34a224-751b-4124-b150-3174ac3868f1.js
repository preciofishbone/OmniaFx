if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["ec34a224-751b-4124-b150-3174ac3868f1"])throw new Error("Error, already loaded manifest ec34a224-751b-4124-b150-3174ac3868f1 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["ec34a224-751b-4124-b150-3174ac3868f1"]=function(){(()=>{var e={"./client/fx/ux/icon/icon.tsx":(e,o,s)=>{"use strict";s.r(o),s.d(o,{Icon:()=>y});var t=s("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),r=s("./node_modules/vue/dist/vue.esm.js"),n=s("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),a=s("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),d=s("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","ec34a224-751b-4124-b150-3174ac3868f1"),b=s("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),i=s("./node_modules/typestyle/umd/typestyle.js"),l=s("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","ec34a224-751b-4124-b150-3174ac3868f1"),c=s("./client/fx/ux/models/index.js");l.StyleFlow.define(c.IconWrapperStyles,{container:{},imgSize:e=>({maxWidth:e?e+"px":"auto"}),img:{},i:{fontSize:"inherit",$nest:{"&.ms-Icon":{fontSize:"larger"}}}},"omfx-icon");var p=s("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),m=Object.defineProperty,u=Object.getOwnPropertyDescriptor,f=(e,o,s,t)=>{for(var r,n=t>1?void 0:t?u(o,s):o,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(t?r(o,s,n):r(n))||n);return t&&n&&m(o,s,n),n};let y=class extends r.default{constructor(){super(...arguments),this.iconClasses=l.StyleFlow.use(c.IconWrapperStyles),this.classKeys={IFontAwesomeIcon:"faClass",IFabricIcon:"fabClass",IFlagIcon:"flagClass"}}created(){this.iconClasses=l.StyleFlow.use(c.IconWrapperStyles,this.styles)}mounted(){d.WebComponentBootstrapper.registerElementInstance(this,this.$el)}renderFontIcon(e){const o=e[this.classKeys[e.iconType]];return d.Utils.isNullOrEmpty(o)?null:(0,t.h)("v-icon",{attrs:{...this.iconAttrs},class:(0,i.classes)(this.iconClasses.i),domProps:{role:e.role}},[o])}renderCustomIcon(e){const o=e,s=this.iconAttrs?this.iconAttrs.size:null,r=o.customValue,n=r&&r.omniaImageId?this.mediaPickerService.getImageUrl(r):o.customValue,a=r&&r.altText?r.altText:"";return!d.Utils.isNullOrEmpty(n)&&(0,t.h)("img",{attrs:{src:n,alt:a},class:[this.iconClasses.imgSize(s),this.iconClasses.img],domProps:{role:e.role}})}renderSVGIcon(e){const o=this.iconAttrs?this.iconAttrs.size:null;return(0,t.h)("div",{domProps:{innerHTML:e.svg,role:e.role},class:[this.iconClasses.imgSize(o),this.iconClasses.img]})}render(){return(0,t.h)("span",{class:(0,i.classes)(this.iconClasses.container)},[this.valueBind?this.valueBind.iconType==b.IconTypes.Custom?this.renderCustomIcon(this.valueBind):this.valueBind.iconType==b.IconTypes.SVG?this.renderSVGIcon(this.valueBind):this.renderFontIcon(this.valueBind):null])}};f([(0,d.Localize)("Omnia.Ux")],y.prototype,"uxLoc",2),f([(0,d.Inject)(p.MediaPickerService)],y.prototype,"mediaPickerService",2),f([(0,a.Prop)({default:{iconType:b.IconTypes.FontAwesome,faClass:""}})],y.prototype,"valueBind",2),f([(0,a.Prop)()],y.prototype,"styles",2),f([(0,a.Prop)()],y.prototype,"iconAttrs",2),y=f([n.default],y),d.WebComponentBootstrapper.registerElement((e=>{(0,d.vueCustomElement)(e.elementName,y)}))},"./client/fx/ux/models/index.js":(e,o,s)=>{e.exports=s("dll-reference md66")("./client/fx/ux/models/index.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,o,s)=>{e.exports=s("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/typestyle/umd/typestyle.js":(e,o,s)=>{e.exports=s("dll-reference md2")("./node_modules/typestyle/umd/typestyle.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,o,s)=>{e.exports=s("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,o,s)=>{e.exports=s("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"./node_modules/vue/dist/vue.esm.js":(e,o,s)=>{e.exports=s("dll-reference md2")("./node_modules/vue/dist/vue.esm.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,o,s)=>{e.exports=s("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,o,s)=>{e.exports=s("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,o,s)=>{e.exports=s("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(e,o,s)=>{e.exports=s("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["ec34a224-751b-4124-b150-3174ac3868f1"])throw new Error("Error, already loaded manifest ec34a224-751b-4124-b150-3174ac3868f1 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["ec34a224-751b-4124-b150-3174ac3868f1"]=s;var o={};function s(t){var r=o[t];if(void 0!==r)return r.exports;var n=o[t]={exports:{}};return e[t](n,n.exports,s),n.exports}s.d=(e,o)=>{for(var t in o)s.o(o,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},s.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};s("./client/fx/ux/icon/icon.tsx")})()};