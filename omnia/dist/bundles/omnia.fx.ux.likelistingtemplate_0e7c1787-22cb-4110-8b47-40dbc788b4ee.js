if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["0e7c1787-22cb-4110-8b47-40dbc788b4ee"])throw new Error("Error, already loaded manifest 0e7c1787-22cb-4110-8b47-40dbc788b4ee with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["0e7c1787-22cb-4110-8b47-40dbc788b4ee"]=function(){(()=>{var e={"./client/fx/ux/social/templates/likelistingtemplate.tsx":(e,t,o)=>{"use strict";o.r(t),o.d(t,{LikeListingTemplate:()=>h});var s=o("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),r=o("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),a=o("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","0e7c1787-22cb-4110-8b47-40dbc788b4ee"),b=o("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),d=o("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),i=o("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","0e7c1787-22cb-4110-8b47-40dbc788b4ee"),l=o("./node_modules/typestyle/umd/typestyle.js");const n={header:(0,l.style)({borderBottom:"1px solid rgba(0,0,0,0.10)"}),body:(0,l.style)({height:"350px",overflowY:"auto",overflowX:"hidden",padding:"15px 0"}),itemStyle:(0,l.style)({padding:"15px 30px"}),avatar:(0,l.style)({borderRadius:"50%",background:"white",marginRight:"15px"}),likeUserLinkWrapper:(0,l.style)({width:"calc(100% - 48px)"}),likeUserLink:(0,l.style)({alignSelf:"center",wordWrap:"break-word",display:"inline-block",width:"100%"}),underlineWhenHover:(0,l.style)({textDecoration:"none",$nest:{"&:hover":{textDecoration:"underline"}}}),dialogWidth:(0,l.style)({width:"50% !important",maxWidth:"600px",$nest:{"@media screen and (max-width: 700px)":{width:"90% !important"}}}),closeButton:(0,l.style)({float:"right",margin:"5px 5px 0px 0px"})};var c=Object.defineProperty,p=Object.getOwnPropertyDescriptor,m=(e,t,o,s)=>{for(var r,a=s>1?void 0:s?p(t,o):t,b=e.length-1;b>=0;b--)(r=e[b])&&(a=(s?r(t,o,a):r(a))||a);return s&&a&&c(t,o,a),a};let h=class extends i.VueComponentBase{constructor(){super(...arguments),this.model={visible:!0}}created(){this.localTheme=this.themeStore.getters.getThemingByTargetIdWithFallback(d.Constants.ux.themeTargetIds.layoutDialog)}mounted(){a.WebComponentBootstrapper.registerElementInstance(this,this.$el)}render(){const e=this.likes?[...this.likes]:[];return(0,s.h)("omfx-dialog",{attrs:{contentClass:n.dialogWidth+" "+this.localTheme.body.bg.css,position:i.DialogPositions.Center,valueBind:this.model,dark:this.localTheme.body.bg.dark,hideCloseButton:!0}},[(0,s.h)("div",{class:this.localTheme.body.bg.css},[(0,s.h)("div",{class:n.header},[(0,s.h)("div",{class:n.closeButton},[(0,s.h)("omfx-button",{domProps:{onClick:()=>{this.close()},preset:i.ButtonPresets.icons.close},attrs:{dark:this.localTheme.body.bg.dark}})]),(0,s.h)("div",{class:[n.itemStyle,this.localTheme.body.text.css]},[(0,s.h)("v-icon",{attrs:{dark:this.localTheme.body.bg.dark}},["thumb_up"]),"  ",e.length])]),(0,s.h)("div",{class:n.body},[e.map((e=>e.createdByUser?(0,s.h)("v-layout",{class:n.itemStyle},[(0,s.h)("v-img",{class:n.avatar,attrs:{width:"48px",height:"48px",src:e.createdByUser.avatar}}),(0,s.h)("div",{class:[n.likeUserLinkWrapper,"align-self-center"]},[(0,s.h)("omfx-profilecard",{domProps:{userName:e.createdByUser.uid},attrs:{target:"_blank",href:e.createdByUser.profileUrl,contentClass:[n.likeUserLink,this.localTheme.body.text.css,"d-inline-block","text-left"]},scopedSlots:{renderChildren:()=>(0,s.h)("span",{class:n.underlineWhenHover},[e.createdByUser.displayName])}})])]):(0,s.h)("v-layout",{class:n.itemStyle},[(0,s.h)("v-icon",{class:n.avatar},["fa-question"]),(0,s.h)("div",{class:n.likeUserLinkWrapper},[(0,s.h)("span",{class:n.likeUserLink},[e.createdBy])])])))])])])}};m([(0,b.Prop)()],h.prototype,"likes",2),m([(0,b.Prop)()],h.prototype,"close",2),m([(0,a.Inject)(i.ThemeStore)],h.prototype,"themeStore",2),h=m([r.default],h),a.WebComponentBootstrapper.registerElement((e=>{(0,a.vueCustomElement)(e.elementName,h)}))},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/typestyle/umd/typestyle.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/typestyle/umd/typestyle.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,o)=>{e.exports=o("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,o)=>{e.exports=o("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,o)=>{e.exports=o("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["0e7c1787-22cb-4110-8b47-40dbc788b4ee"])throw new Error("Error, already loaded manifest 0e7c1787-22cb-4110-8b47-40dbc788b4ee with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["0e7c1787-22cb-4110-8b47-40dbc788b4ee"]=o;var t={};function o(s){var r=t[s];if(void 0!==r)return r.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};o("./client/fx/ux/social/templates/likelistingtemplate.tsx")})()};