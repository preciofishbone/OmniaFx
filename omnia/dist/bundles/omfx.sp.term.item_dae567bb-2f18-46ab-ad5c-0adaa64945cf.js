if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["dae567bb-2f18-46ab-ad5c-0adaa64945cf"])throw new Error("Error, already loaded manifest dae567bb-2f18-46ab-ad5c-0adaa64945cf with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["dae567bb-2f18-46ab-ad5c-0adaa64945cf"]=function(){(()=>{var e={"./client/fx/sp/ux/termitem/sharepointtermitemcomponent.tsx":(e,t,r)=>{"use strict";r.r(t),r.d(t,{SharePointTermItemComponent:()=>m});var o=r("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),s=r("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),a=r("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","dae567bb-2f18-46ab-ad5c-0adaa64945cf"),n=r("eff19cad-5557-434b-a477-1e1e2a70a2a0"),i=r("5e618f4d-d014-414e-a681-89e34cbeda0f"),b=r("./client/fx/ux/enterpriseglossary/componentbase/index.js"),p=r("./node_modules/csx/lib.es2015/index.js"),d=Object.defineProperty,l=Object.getOwnPropertyDescriptor,c=(e,t,r,o)=>{for(var s,a=o>1?void 0:o?l(t,r):t,n=e.length-1;n>=0;n--)(s=e[n])&&(a=(o?s(t,r,a):s(a))||a);return o&&a&&d(t,r,a),a};let m=class extends b.EnterpriseGlossaryTermComponentBase{constructor(){super(),this.spTermEnterpriseGlossaryStore.getters.isTermMapped(this.term)&&(this.enterpriseGlossaryTermHandlerFunc=this.onEnterpriseGlossaryTermClicked),this.clickHandler&&(this.additionalClickHandler={onClick:e=>{e.stopPropagation(),this.clickHandler.onClick(this.term)},clickableIcon:this.clickHandler.clickableIcon}),this.appendMenuItems&&(this.additionalMenus=this.appendMenuItems,this.appendItems=this.appendMenuItems.filter((e=>e.termId===this.term.id))),this.onClickCloseIcon&&(this.onClickCloseIconFunc=this.onClickCloseIcon),this.validateRenderTooltip&&(this.availableToRenderTooltip=this.validateRenderTooltip)}getTerm(){return this.term}getTermTitle(){return this.termStore.getters.getTermDisplayTitle(this.term,this.languageOption?.lang,this.languageOption?.lcid)}getTermUISettings(){let e=null;const t=this.spTermEnterpriseGlossaryStore.getters.enterpriseGlossaryTermData(this.term);return t&&(e=t.uiSettings),this.termUISettings&&(e=Object.assign({},e,this.termUISettings)),e}created(){this.display===n.TermItemRendererMode.Compact&&(this.styles={chipIconWrapper:{display:"none"},chip:{margin:"0px",backgroundColor:(0,p.important)("#E9E9E9"),fontSize:(0,p.important)("inherit"),minHeight:"20px",verticalAlign:(0,p.important)("unset"),$nest:{".v-chip__content":{color:(0,p.important)("#000000")}}}}),super.created()}onEnterpriseGlossaryTermClicked(e){e.stopPropagation(),this.spTermEnterpriseGlossaryStore.actions.setTermGlossarySelected.dispatch(this.term)}mounted(){a.WebComponentBootstrapper.registerElementInstance(this,this.$el),this.spTermEnterpriseGlossaryStore.getters.isTermMapped(this.term)&&this.$el.addEventListener("mousedown",this.stopBubbleEvent)}stopBubbleEvent(e){e.stopPropagation()}render(){return this.renderEnterpriseGlossaryTerm()}};c([(0,s.Prop)()],m.prototype,"term",2),c([(0,s.Prop)()],m.prototype,"tooltip",2),c([(0,s.Prop)()],m.prototype,"languageOption",2),c([(0,s.Prop)()],m.prototype,"termUISettings",2),c([(0,s.Prop)()],m.prototype,"onClickCloseIcon",2),c([(0,s.Prop)()],m.prototype,"clickHandler",2),c([(0,s.Prop)({default:n.TermItemRendererMode.Normal})],m.prototype,"display",2),c([(0,s.Prop)()],m.prototype,"appendMenuItems",2),c([(0,s.Prop)()],m.prototype,"validateRenderTooltip",2),c([(0,a.Inject)(n.TermStore)],m.prototype,"termStore",2),c([(0,a.Inject)(n.SharePointTaxonomyGlossaryStore)],m.prototype,"spTermEnterpriseGlossaryStore",2),c([(0,a.Inject)(i.EnterpriseGlossaryStore)],m.prototype,"enterpriseGlossaryStore",2),c([(0,a.Inject)(a.OmniaContext)],m.prototype,"omniaContext",2),c([(0,a.Inject)(i.MultilingualStore)],m.prototype,"multilingualStore",2),m=c([o.default],m),a.WebComponentBootstrapper.registerElement((e=>{(0,a.vueCustomElement)(e.elementName,m)}))},"./client/fx/ux/enterpriseglossary/componentbase/index.js":(e,t,r)=>{e.exports=r("dll-reference md66")("./client/fx/ux/enterpriseglossary/componentbase/index.js")},"./node_modules/csx/lib.es2015/index.js":(e,t,r)=>{e.exports=r("dll-reference md2")("./node_modules/csx/lib.es2015/index.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,r)=>{e.exports=r("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,r)=>{e.exports=r("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,r)=>{e.exports=r("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,r)=>{e.exports=r("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"eff19cad-5557-434b-a477-1e1e2a70a2a0":(e,t,r)=>{e.exports=r("dll-reference md20")("eff19cad-5557-434b-a477-1e1e2a70a2a0")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]},"dll-reference md20":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["fa502cf2-bcf9-4dc0-b4f9-13dc63c04bfc"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dae567bb-2f18-46ab-ad5c-0adaa64945cf"])throw new Error("Error, already loaded manifest dae567bb-2f18-46ab-ad5c-0adaa64945cf with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dae567bb-2f18-46ab-ad5c-0adaa64945cf"]=r;var t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};r("./client/fx/sp/ux/termitem/sharepointtermitemcomponent.tsx")})()};