if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["65c3c7b9-916e-4243-b564-36166f2c94ae"])throw new Error("Error, already loaded manifest 65c3c7b9-916e-4243-b564-36166f2c94ae with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["65c3c7b9-916e-4243-b564-36166f2c94ae"]=function(){(()=>{var e={"./client/fx/ux/enterpriseproperties/edit/tagsproperty/tagspropertyedit.tsx":(e,t,s)=>{"use strict";s.r(t),s.d(t,{TagsPropertyEditComponent:()=>g});var i=s("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js"),a=s.n(i),r=s("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),o=s("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),n=s("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),l=s("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","65c3c7b9-916e-4243-b564-36166f2c94ae"),d=s("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","65c3c7b9-916e-4243-b564-36166f2c94ae"),p=s("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),b=s("./node_modules/csx/lib.es2015/index.js");const u={inputLabel:(0,s("./node_modules/typestyle/umd/typestyle.js").style)({$nest:{".v-input__control":{$nest:{".v-text-field__details":{marginBottom:(0,b.important)("0px"),paddingLeft:(0,b.important)("0px")}}}}})};var c=s("5e618f4d-d014-414e-a681-89e34cbeda0f"),h=Object.defineProperty,m=Object.getOwnPropertyDescriptor,f=(e,t,s,i)=>{for(var a,r=i>1?void 0:i?m(t,s):t,o=e.length-1;o>=0;o--)(a=e[o])&&(r=(i?a(t,s,r):a(r))||r);return i&&r&&h(t,s,r),r};let g=class extends d.VueComponentBase{constructor(){super(...arguments),this.tags=[],this.selectedItem=null,this.isSearching=!1,this.searchInput=null,this.required=!1,this.multiple=!0}mounted(){l.WebComponentBootstrapper.registerElementInstance(this,this.$el),this.useValidator&&this.useValidator.register(this)}created(){this.settings&&(this.required=this.settings.required,this.multiple=this.settings.allowMultipleValues);const e=this.valueBind[this.property.internalName];if(e)if(this.multiple){this.selectedItem||(this.selectedItem=[]);const t=[];e.forEach((e=>{t.push({name:this.applyUiTagRules(e.name)})})),this.selectedItem=t}else e.length>=1&&(this.selectedItem={name:this.applyUiTagRules(e[0].name)});else n.Vue.set(this.valueBind,this.property.internalName,[])}async search(e){if(e=e&&e.trimLeft())if(e.endsWith(" ")){if(Array.isArray(this.selectedItem)){const t=[];t.push(...this.selectedItem),t.push({name:e}),await this.onInput(t)}else await this.onInput(e.trim());this.fixVuetityLazySearchBug()}else{this.isSearching=!0;const t=await this.tagsService.findTags(e);t.forEach((e=>{e.name=`#${e.name}`})),this.tags=t,this.isSearching=!1}}onBlur(){if(this.valueBind[this.property.internalName]){const e=[];this.valueBind[this.property.internalName].forEach((t=>{t.name&&""!==t.name&&e.push(t.name)})),this.tagsService.ensureTags(e)}}fixVuetityLazySearchBug(){this.$refs.selectField.lazySearch=""}async onInput(e){if(e){const t=new Array,s=new Array;if("string"==typeof e){this.resolveMultiTagsInString(e).forEach((e=>{t.push({name:this.applyUiTagRules(e)}),s.push({name:this.applyDataTagRules(e)})}))}else Array.isArray(e)?e.map((e=>{if("string"==typeof e){this.resolveMultiTagsInString(e).forEach((e=>{t.push({name:this.applyUiTagRules(e)}),s.push({name:this.applyDataTagRules(e)})}))}else{const i=e;t.push({name:this.applyUiTagRules(i.name)}),s.push({name:this.applyDataTagRules(i.name)})}})):(t.push({name:this.applyUiTagRules(e.name)}),s.push({name:this.applyDataTagRules(e.name)}));this.valueBind[this.property.internalName]=s,this.tags=t,this.selectedItem=this.multiple?t:t.length>0?t[0]:[],this.onValueChanged&&this.onValueChanged(s)}else this.valueBind[this.property.internalName]=new Array,this.tags=new Array,this.selectedItem=null,this.onValueChanged&&this.onValueChanged(new Array);this.fixVuetityLazySearchBug()}resolveMultiTagsInString(e){let t=[];return(e=e.trim()).indexOf(" ")?t=e.split(" "):t.push(e),t}applyUiTagRules(e){return e=`#${e=this.applyDataTagRules(e)}`}applyDataTagRules(e){return e=(e=(e=e.trim()).replace(/[`~!@#$%^&*()|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"")).replace(/ /g,"")}render(){const e={on:{"update:search-input":this.search,blur:this.onBlur}};let t=[];this.required&&(t=!0===this.multiple?(new d.FieldValueValidation).IsArrayRequired(this.required).getRules():(new d.FieldValueValidation).IsRequired(this.required).getRules());const s=l.EnterprisePropertyHandler.ensureEnterprisePropertiesLabel(this.property.multilingualTitle,this.required,this.settings.showLabel,this.settings.customLabel);return(0,r.h)("div",{class:u.inputLabel},[(0,r.h)("v-combobox",a()([{attrs:{filled:!0,dark:this.theming.body.bg.dark,readonly:this.disabled,loading:this.isSearching,label:s,items:this.tags,"item-text":"name","item-value":"name",multiple:this.multiple,chips:!0,disabled:this.disabled,"no-data-text":"No Tags","hide-selected":!0,"hide-details":"auto","persistent-hint":!0},ref:"selectField",on:{input:this.onInput}},this.transformVSlot({selection:e=>this.renderSelectedItems(e)}),{},e,{model:{value:this.selectedItem,callback:e=>{this.selectedItem=e}}}])),(0,r.h)("omfx-helptext",{attrs:{isHidden:!1,content:this.multilingualStore.getters.stringValue(this.settings.description)}}),(0,r.h)("div",{class:["v-text-field__details"],style:{minHeight:"24px"}},[(0,r.h)("omfx-field-validation",{domProps:{useValidator:this.useValidator,checkValue:this.valueBind[this.property.internalName],rules:t}})])])}renderSelectedItems(e){return(0,r.h)("v-chip",[(0,r.h)("span",[e.item.name])])}renderNoData(e){return[(0,r.h)("v-list-item",[(0,r.h)("v-list-item-content",[(0,r.h)("v-list-item-title",['No results matching "',(0,r.h)("strong",[{search:e}]),'". Press ',(0,r.h)("kbd",["enter"])," to create a new one"])])])]}};f([(0,n.Prop)()],g.prototype,"valueBind",2),f([(0,n.Prop)()],g.prototype,"onValueChanged",2),f([(0,n.Prop)()],g.prototype,"property",2),f([(0,n.Prop)()],g.prototype,"disabled",2),f([(0,n.Prop)({default:null})],g.prototype,"settings",2),f([(0,l.Inject)(p.TagsService)],g.prototype,"tagsService",2),f([(0,l.Inject)(c.MultilingualStore)],g.prototype,"multilingualStore",2),f([(0,l.Localize)("Omnia.Ux")],g.prototype,"uxLoc",2),g=f([o.default],g),l.WebComponentBootstrapper.registerElement((e=>{(0,l.vueCustomElement)(e.elementName,g)}))},"./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/csx/lib.es2015/index.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/csx/lib.es2015/index.js")},"./node_modules/typestyle/umd/typestyle.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/typestyle/umd/typestyle.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,s)=>{e.exports=s("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,s)=>{e.exports=s("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,s)=>{e.exports=s("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(e,t,s)=>{e.exports=s("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["65c3c7b9-916e-4243-b564-36166f2c94ae"])throw new Error("Error, already loaded manifest 65c3c7b9-916e-4243-b564-36166f2c94ae with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["65c3c7b9-916e-4243-b564-36166f2c94ae"]=s;var t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};s("./client/fx/ux/enterpriseproperties/edit/tagsproperty/tagspropertyedit.tsx")})()};