if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["48342859-6356-4938-a31a-1ac1dfb1b5d8"])throw new Error("Error, already loaded manifest 48342859-6356-4938-a31a-1ac1dfb1b5d8 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["48342859-6356-4938-a31a-1ac1dfb1b5d8"]=function(){(()=>{var e={"./client/fx/ux/layoutcanvas/editor/blockplaceholder/blockplaceholder.tsx":(e,t,o)=>{"use strict";o.r(t),o.d(t,{BlockPlaceholderComponent:()=>m});var r=o("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),s=o("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","48342859-6356-4938-a31a-1ac1dfb1b5d8"),i=o("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),a=o("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","48342859-6356-4938-a31a-1ac1dfb1b5d8"),b=o("./node_modules/typestyle/umd/typestyle.js"),n=o("./node_modules/vuetify/lib/util/colors.js"),l=o.n(n),d=o("./node_modules/csx/lib.es2015/index.js");const p={textColorDark:(0,b.style)({color:"rgba(256,256,256,0.75)!important"}),textColorDark_Lighter:(0,b.style)({color:"rgba(256,256,256,0.55)!important"}),container:(0,b.style)({textAlign:"left",width:"100%",maxWidth:"300px",paddingLeft:"5px",paddingRight:"5px"}),wrapper:(0,b.style)({alignItems:"center",display:"flex",minHeight:"120px",justifyContent:"center"}),titleArea:{wrapper:(0,b.style)({display:"flex"}),title:(0,b.style)({overflow:"hidden",textOverflow:"ellipsis",width:"245px"}),icon:(0,b.style)({position:"relative",top:"-4px",width:"50px",marginTop:"2px",alignItems:(0,d.important)("initial")})},text:(0,b.style)({marginTop:"10px",color:l().grey.darken1})};var c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h=(e,t,o,r)=>{for(var s,i=r>1?void 0:r?u(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r?s(t,o,i):s(i))||i);return r&&i&&c(t,o,i),i};let m=class extends s.VueComponentBase{constructor(){super(...arguments),this.characterCount=0,this.isPageEditMode=!1,this.isDefaultTheme=!0}created(){}mounted(){a.WebComponentBootstrapper.registerElementInstance(this,this.$el),this.characterCount=this.getLongestWordCharacterCount()}getLongestWordCharacterCount(){let e=0,t=0;if(this.title){e=this.title.split(" ").sort((function(e,t){return t.length-e.length}))[0].length}if(this.text){t=this.text.split(" ").sort((function(e,t){return t.length-e.length}))[0].length}return t>e?t:e}getFontClass(){return this.characterCount>20?"subtitle-1":this.characterCount>14?"headline":"display-1"}getTextColorClasses(e){return this.dark?e?p.textColorDark_Lighter:p.textColorDark:e?this.theming.body.text.csslighter5:this.theming.body.text.csslighter1}render(){return(0,r.h)("div",{class:["py-4",p.wrapper]},[(0,r.h)("div",{class:p.container},[(0,r.h)("div",{class:[this.getFontClass(),p.titleArea.wrapper]},[(0,r.h)("v-icon",{class:[p.titleArea.icon,this.getTextColorClasses(!0)],attrs:{"x-large":!0}},[this.icon]),(0,r.h)("div",{class:["font-weight-thin pl-2",p.titleArea.title,this.getTextColorClasses(!1)]},[this.title?this.title:"",this.text?this.text:""])]),(0,r.h)("div",{class:["subheading font-weight-light",p.text,this.getTextColorClasses(!0)]},[this.description?this.description:""]),(0,r.h)("div",[(0,r.h)(a.VueWebComponentSlot,{attrs:{providedBy:this}})])])])}};h([(0,i.Prop)()],m.prototype,"icon",2),h([(0,i.Prop)()],m.prototype,"title",2),h([(0,i.Prop)()],m.prototype,"text",2),h([(0,i.Prop)()],m.prototype,"description",2),h([(0,i.Prop)()],m.prototype,"dark",2),h([(0,a.Inject)(a.SubscriptionHandler)],m.prototype,"subscriptionHandler",2),m=h([i.Component],m),a.WebComponentBootstrapper.registerElement((e=>{(0,a.vueCustomElement)(e.elementName,m)}))},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/csx/lib.es2015/index.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/csx/lib.es2015/index.js")},"./node_modules/typestyle/umd/typestyle.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/typestyle/umd/typestyle.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"./node_modules/vuetify/lib/util/colors.js":(e,t,o)=>{e.exports=o("dll-reference md66")("./node_modules/vuetify/lib/util/colors.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,o)=>{e.exports=o("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,o)=>{e.exports=o("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["48342859-6356-4938-a31a-1ac1dfb1b5d8"])throw new Error("Error, already loaded manifest 48342859-6356-4938-a31a-1ac1dfb1b5d8 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["48342859-6356-4938-a31a-1ac1dfb1b5d8"]=o;var t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};o("./client/fx/ux/layoutcanvas/editor/blockplaceholder/blockplaceholder.tsx")})()};