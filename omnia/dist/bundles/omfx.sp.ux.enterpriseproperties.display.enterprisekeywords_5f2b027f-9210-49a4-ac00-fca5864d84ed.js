if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["5f2b027f-9210-49a4-ac00-fca5864d84ed"])throw new Error("Error, already loaded manifest 5f2b027f-9210-49a4-ac00-fca5864d84ed with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["5f2b027f-9210-49a4-ac00-fca5864d84ed"]=function(){(()=>{var e={"./client/fx/sp/ux/enterpriseproperties/display/enterprisekeywordsfield/enterprisekeywordsfielddisplay.tsx":(e,t,r)=>{"use strict";r.r(t),r.d(t,{EnterpriseKeywordsFieldDisplayComponent:()=>f});var s=r("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),o=r("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),i=r("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),a=r("eff19cad-5557-434b-a477-1e1e2a70a2a0"),n=r("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","5f2b027f-9210-49a4-ac00-fca5864d84ed"),d=r("./node_modules/csx/lib.es2015/index.js"),b=r("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","5f2b027f-9210-49a4-ac00-fca5864d84ed"),l=r("bf86b3f8-7274-47e4-9e27-87ae1cf65a23");b.StyleFlow.define(l.EnterpriseKeywordDisplayStyles,{itemwrapper:(e,t)=>{const r=e.body.bg.dark?"rgba(1,1,1,0.15)":"rgba(0,0,0,0.15)";return{display:"flex",flexWrap:"wrap",$nest:{"& > div > .divider":{display:"inline-block"},"& > :not(:last-child)":{$nest:{"& > .divider":{borderLeft:"|"===t?.separator?"1px solid "+r:null,marginLeft:"3px",height:"14px",position:"relative",top:"2px",marginRight:"3px"},"& > .separatorCharacter":{display:(0,d.important)("inline-block")}}}}}}});var p=Object.defineProperty,c=Object.getOwnPropertyDescriptor,m=(e,t,r,s)=>{for(var o,i=s>1?void 0:s?c(t,r):t,a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&p(t,r,i),i};let f=class extends b.VueComponentBase{constructor(){super(...arguments),this.enterpriseKeywordDisplayClasses=b.StyleFlow.use(a.EnterpriseKeywordDisplayStyles),this.showOverlay=!1,this.terms=[]}onValueBindChanged(e,t){e?.length===t?.length&&null==e?.find((e=>null==t?.find((t=>t==e))))&&null==t?.find((t=>null==e?.find((e=>e==t))))||this.init()}created(){this.init(),this.styles&&(this.enterpriseKeywordDisplayClasses=b.StyleFlow.use(a.EnterpriseKeywordDisplayStyles,this.styles))}mounted(){n.WebComponentBootstrapper.registerElementInstance(this,this.$el)}init(){this.termStore.actions.ensurekeywordTermSet.dispatch().then((e=>{this.termStore.actions.ensureTermByIds.dispatch(e.id,this.valueBind,this.lcid).then((e=>{this.terms=e,this.$forceUpdate()}))}))}renderText(e){const t="|"===this.settings.separator?null:this.settings.separator;return(0,s.h)("div",[this.termStore.getters.getTermDisplayTitle(e,this.lang,this.lcid),(0,s.h)("span",{class:"separatorCharacter",style:"display:none"},[t]),(0,s.h)("div",{class:"divider"})])}renderContent(){if(!n.Utils.isArrayNullOrEmpty(this.terms)){const e=new Array;return this.terms.map(((t,r)=>{if(this.settings?.textOnly)e.push(this.renderText(t));else{let o=this.styles;0!=r&&r!=this.terms.length-1||(o=Object.assign({chip:{}},this.styles),r==this.terms.length-1&&(o.chip.marginRight="0px")),e.push((0,s.h)("omfx-sp-term-item",{attrs:{term:t,languageOption:{lcid:this.lcid,lang:this.lang},termUISettings:this.settings?.contentColor?.trim()?{colorSettings:{backgroundColor:this.settings.contentColor.trim(),textColor:null}}:null,styles:o}}))}})),this.appendedElement&&e.push(this.appendedElement),(0,s.h)("div",{class:this.enterpriseKeywordDisplayClasses.itemwrapper(this.theming,this.settings)},[e,this.showOverlay&&(0,s.h)("v-overlay",{model:{value:this.showOverlay,callback:e=>{this.showOverlay=e}}},[(0,s.h)("v-progress-circular",{attrs:{indeterminate:!0,size:"64"}})])])}return null}render(){return n.Utils.isFunction(this.wrapWithParentContent)&&this.property?this.wrapWithParentContent(this.property.internalName,this.renderContent()):this.renderContent()}};m([(0,i.Prop)()],f.prototype,"valueBind",2),m([(0,i.Prop)()],f.prototype,"settings",2),m([(0,i.Prop)()],f.prototype,"property",2),m([(0,i.Prop)()],f.prototype,"wrapWithParentContent",2),m([(0,i.Prop)({default:1033})],f.prototype,"lcid",2),m([(0,i.Prop)({default:"en-us"})],f.prototype,"lang",2),m([(0,i.Prop)()],f.prototype,"appendedElement",2),m([(0,i.Prop)()],f.prototype,"styles",2),m([(0,n.Inject)(a.TermStore)],f.prototype,"termStore",2),m([(0,n.Inject)(a.SharePointTaxonomyGlossaryStore)],f.prototype,"sharePointTaxonomyGlossaryStore",2),m([(0,i.Watch)("valueBind",{deep:!0})],f.prototype,"onValueBindChanged",1),f=m([o.default],f),n.WebComponentBootstrapper.registerElement((e=>{(0,n.vueCustomElement)(e.elementName,f)}))},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,r)=>{e.exports=r("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/csx/lib.es2015/index.js":(e,t,r)=>{e.exports=r("dll-reference md2")("./node_modules/csx/lib.es2015/index.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,r)=>{e.exports=r("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,r)=>{e.exports=r("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,r)=>{e.exports=r("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"bf86b3f8-7274-47e4-9e27-87ae1cf65a23":(e,t,r)=>{e.exports=r("dll-reference md19")("bf86b3f8-7274-47e4-9e27-87ae1cf65a23")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,r)=>{e.exports=r("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"eff19cad-5557-434b-a477-1e1e2a70a2a0":(e,t,r)=>{e.exports=r("dll-reference md20")("eff19cad-5557-434b-a477-1e1e2a70a2a0")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md19":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["93b0c582-b7e3-4b47-9b22-4412bd7df9e5"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]},"dll-reference md20":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["fa502cf2-bcf9-4dc0-b4f9-13dc63c04bfc"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["5f2b027f-9210-49a4-ac00-fca5864d84ed"])throw new Error("Error, already loaded manifest 5f2b027f-9210-49a4-ac00-fca5864d84ed with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["5f2b027f-9210-49a4-ac00-fca5864d84ed"]=r;var t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};r("./client/fx/sp/ux/enterpriseproperties/display/enterprisekeywordsfield/enterprisekeywordsfielddisplay.tsx")})()};