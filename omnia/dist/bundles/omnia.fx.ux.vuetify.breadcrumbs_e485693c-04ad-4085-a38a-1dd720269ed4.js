if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["e485693c-04ad-4085-a38a-1dd720269ed4"])throw new Error("Error, already loaded manifest e485693c-04ad-4085-a38a-1dd720269ed4 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["e485693c-04ad-4085-a38a-1dd720269ed4"]=function(){(()=>{var e={"./wwwroot/scripts/vuetify/vuetify.breadcrumbs_26f2c5cd-f99c-4661-b7e6-9bfea144a414.css":(e,b,a)=>{"use strict";a.r(b)},"./wwwroot/scripts/vuetify/vuetify.breadcrumbs_26f2c5cd-f99c-4661-b7e6-9bfea144a414.js":function(e,b){if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["26f2c5cd-f99c-4661-b7e6-9bfea144a414"])throw new Error("Error, already loaded manifest 26f2c5cd-f99c-4661-b7e6-9bfea144a414 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["26f2c5cd-f99c-4661-b7e6-9bfea144a414"]=function(){(()=>{var e={"./client/fx/ux/vuetify/breadcrumbs/vbreadcrumbs.bundle.js":(e,b,a)=>{"use strict";a.r(b);var i=a("./node_modules/vuetify/lib/mixins/routable/index.js"),o=a.n(i),t=a("./node_modules/vuetify/lib/util/mixins.js"),r=a.n(t);const s=r()(o()).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(e){const{tag:b,data:a}=this.generateRouteLink();return e("li",[e(b,{...a,attrs:{...a.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}});const d=(0,a("./node_modules/vuetify/lib/util/helpers.js").createSimpleFunctional)("v-breadcrumbs__divider","li");var n=a("./node_modules/vuetify/lib/mixins/themeable/index.js"),c=a.n(n);const l=r()(c()).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(d,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const e=[],b=!!this.$scopedSlots.item,a=[];for(let i=0;i<this.items.length;i++){const o=this.items[i];a.push(o.text),b?e.push(this.$scopedSlots.item({item:o})):e.push(this.$createElement(s,{key:a.join("."),props:o},[o.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render(e){const b=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},b)}});var f=a("fe6d45fc-8977-4e32-bff4-e93cc636390e"),u=a("9affb03a-b09d-49d2-8d18-df53485f8eda");f.VuetifyComponentLoader.registerToVue({components:{VBreadcrumbs:l,VBreadcrumbsItem:s}}),f.VuetifyComponentLoader.componentAvailable(u.VBreadcrumbsTag,l),f.VuetifyComponentLoader.componentAvailable(u.VBreadcrumbsItemTag,s)},"./node_modules/vuetify/lib/mixins/routable/index.js":(e,b,a)=>{e.exports=a("dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['dee030cc-4ab3-4158-bb06-8049f5c67542']")("./node_modules/vuetify/lib/mixins/routable/index.js")},"./node_modules/vuetify/lib/mixins/themeable/index.js":(e,b,a)=>{e.exports=a("dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['dee030cc-4ab3-4158-bb06-8049f5c67542']")("./node_modules/vuetify/lib/mixins/themeable/index.js")},"./node_modules/vuetify/lib/util/helpers.js":(e,b,a)=>{e.exports=a("dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['dee030cc-4ab3-4158-bb06-8049f5c67542']")("./node_modules/vuetify/lib/util/helpers.js")},"./node_modules/vuetify/lib/util/mixins.js":(e,b,a)=>{e.exports=a("dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['dee030cc-4ab3-4158-bb06-8049f5c67542']")("./node_modules/vuetify/lib/util/mixins.js")},"9affb03a-b09d-49d2-8d18-df53485f8eda":(e,b,a)=>{e.exports=a("dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['dee030cc-4ab3-4158-bb06-8049f5c67542']")("9affb03a-b09d-49d2-8d18-df53485f8eda")},"fe6d45fc-8977-4e32-bff4-e93cc636390e":(e,b,a)=>{e.exports=a("dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['dee030cc-4ab3-4158-bb06-8049f5c67542']")("fe6d45fc-8977-4e32-bff4-e93cc636390e")},"dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['dee030cc-4ab3-4158-bb06-8049f5c67542']":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["26f2c5cd-f99c-4661-b7e6-9bfea144a414"])throw new Error("Error, already loaded manifest 26f2c5cd-f99c-4661-b7e6-9bfea144a414 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["26f2c5cd-f99c-4661-b7e6-9bfea144a414"]=a;var b={};function a(i){var o=b[i];if(void 0!==o)return o.exports;var t=b[i]={exports:{}};return e[i](t,t.exports,a),t.exports}a.n=e=>{var b=e&&e.__esModule?()=>e.default:()=>e;return a.d(b,{a:b}),b},a.d=(e,b)=>{for(var i in b)a.o(b,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:b[i]})},a.o=(e,b)=>Object.prototype.hasOwnProperty.call(e,b),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};a("./client/fx/ux/vuetify/breadcrumbs/vbreadcrumbs.bundle.js")})()}}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["e485693c-04ad-4085-a38a-1dd720269ed4"])throw new Error("Error, already loaded manifest e485693c-04ad-4085-a38a-1dd720269ed4 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["e485693c-04ad-4085-a38a-1dd720269ed4"]=a;var b={};function a(i){var o=b[i];if(void 0!==o)return o.exports;var t=b[i]={exports:{}};return e[i].call(t.exports,t,t.exports,a),t.exports}a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a("./wwwroot/scripts/vuetify/vuetify.breadcrumbs_26f2c5cd-f99c-4661-b7e6-9bfea144a414.js");a("./wwwroot/scripts/vuetify/vuetify.breadcrumbs_26f2c5cd-f99c-4661-b7e6-9bfea144a414.css")})()};