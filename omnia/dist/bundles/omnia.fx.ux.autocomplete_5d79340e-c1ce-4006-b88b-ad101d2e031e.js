if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["5d79340e-c1ce-4006-b88b-ad101d2e031e"])throw new Error("Error, already loaded manifest 5d79340e-c1ce-4006-b88b-ad101d2e031e with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["5d79340e-c1ce-4006-b88b-ad101d2e031e"]=function(){(()=>{var e={"./wwwroot/scripts/vuetify/vuetify.autocomplete_f2c41761-64bd-467b-9250-e84d6d5b2376.css":(e,t,s)=>{"use strict";s.r(t)},"./wwwroot/scripts/vuetify/vuetify.autocomplete_f2c41761-64bd-467b-9250-e84d6d5b2376.js":function(e,t){if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["f2c41761-64bd-467b-9250-e84d6d5b2376"])throw new Error("Error, already loaded manifest f2c41761-64bd-467b-9250-e84d6d5b2376 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["f2c41761-64bd-467b-9250-e84d6d5b2376"]=function(){(()=>{var e={"./client/fx/ux/vuetify/autocomplete/vautocomplete.bundle.js":(e,t,s)=>{"use strict";s.r(t);var i=s("./node_modules/vuetify/lib/components/vautocomplete/vautocomplete.js"),o=s("fe6d45fc-8977-4e32-bff4-e93cc636390e"),n=s("9affb03a-b09d-49d2-8d18-df53485f8eda");o.VuetifyComponentLoader.registerToVue({components:[i.default]}),o.VuetifyComponentLoader.componentAvailable(n.VAutocompleteTag,i.default)},"./node_modules/vuetify/src/components/vautocomplete/vautocomplete.sass":(e,t,s)=>{"use strict";s.r(t)},"./node_modules/vuetify/lib/components/vautocomplete/vautocomplete.js":(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});s("./node_modules/vuetify/src/components/vautocomplete/vautocomplete.sass");var i=s("./node_modules/vuetify/lib/components/vselect/vselect.js"),o=s.n(i),n=s("./node_modules/vuetify/lib/components/vtextfield/vtextfield.js"),a=s.n(n),b=s("./node_modules/vuetify/lib/util/mergedata.js"),l=s.n(b),d=s("./node_modules/vuetify/lib/util/helpers.js");const r={...i.defaultMenuProps,offsetY:!0,offsetOverflow:!0,transition:!1},c=o().extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:o().options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String,default:void 0}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...o().options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((e=>this.getValue(e)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((e=>!this.hasItem(e))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((e=>{const t=(0,d.getPropertyFromItem)(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)}))},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch=e,this.$emit("update:search-input",e)}},isAnyValueAllowed:()=>!1,isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=o().options.computed.$_menuProps.call(this);return e.contentClass=`v-autocomplete__content ${e.contentClass||""}`.trim(),{...r,...e}},searchIsDirty(){return null!=this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue))))},listData(){const e=o().options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=void 0)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){e!==t&&(this.setMenuIndex(-1),this.$nextTick((()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))})))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===d.keyCodes.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.keyCodes.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.keyCodes.backspace&&e!==d.keyCodes.delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[i]?this.selectItem(t):this.setValue(this.multiple?[]:void 0),this.selectedIndex=i},clearableCallback(){this.internalSearch=void 0,o().options.methods.clearableCallback.call(this)},genInput(){const e=a().options.methods.genInput.call(this);return e.data=l()(e.data,{attrs:{"aria-activedescendant":(0,d.getObjectValueByPath)(this.$refs.menu,"activeTile.id"),autocomplete:(0,d.getObjectValueByPath)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=o().options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?o().options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;o().options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){o().options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){o().options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){o().options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],o=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",o),null==(s=e.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}})},"./node_modules/vuetify/lib/components/vselect/vselect.js":(e,t,s)=>{e.exports=s("dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['b0fda097-a41d-4f5a-b302-9daeb6804df1']")("./node_modules/vuetify/lib/components/vselect/vselect.js")},"./node_modules/vuetify/lib/components/vtextfield/vtextfield.js":(e,t,s)=>{e.exports=s("dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['b6298f56-5ed9-473c-bd40-295a91ee9ec3']")("./node_modules/vuetify/lib/components/vtextfield/vtextfield.js")},"./node_modules/vuetify/lib/util/helpers.js":(e,t,s)=>{e.exports=s("dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['dee030cc-4ab3-4158-bb06-8049f5c67542']")("./node_modules/vuetify/lib/util/helpers.js")},"./node_modules/vuetify/lib/util/mergedata.js":(e,t,s)=>{e.exports=s("dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['dee030cc-4ab3-4158-bb06-8049f5c67542']")("./node_modules/vuetify/lib/util/mergedata.js")},"9affb03a-b09d-49d2-8d18-df53485f8eda":(e,t,s)=>{e.exports=s("dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['dee030cc-4ab3-4158-bb06-8049f5c67542']")("9affb03a-b09d-49d2-8d18-df53485f8eda")},"fe6d45fc-8977-4e32-bff4-e93cc636390e":(e,t,s)=>{e.exports=s("dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['dee030cc-4ab3-4158-bb06-8049f5c67542']")("fe6d45fc-8977-4e32-bff4-e93cc636390e")},"dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['b0fda097-a41d-4f5a-b302-9daeb6804df1']":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["b0fda097-a41d-4f5a-b302-9daeb6804df1"]},"dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['b6298f56-5ed9-473c-bd40-295a91ee9ec3']":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["b6298f56-5ed9-473c-bd40-295a91ee9ec3"]},"dll-reference omniawebpackjsonp['bb000000-0000-bbbb-0000-0000000000bb']['dee030cc-4ab3-4158-bb06-8049f5c67542']":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["f2c41761-64bd-467b-9250-e84d6d5b2376"])throw new Error("Error, already loaded manifest f2c41761-64bd-467b-9250-e84d6d5b2376 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["f2c41761-64bd-467b-9250-e84d6d5b2376"]=s;var t={};function s(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s("./client/fx/ux/vuetify/autocomplete/vautocomplete.bundle.js"),s("./node_modules/vuetify/lib/components/vautocomplete/vautocomplete.js");s("./node_modules/vuetify/src/components/vautocomplete/vautocomplete.sass")})()}}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["5d79340e-c1ce-4006-b88b-ad101d2e031e"])throw new Error("Error, already loaded manifest 5d79340e-c1ce-4006-b88b-ad101d2e031e with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["5d79340e-c1ce-4006-b88b-ad101d2e031e"]=s;var t={};function s(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,s),n.exports}s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s("./wwwroot/scripts/vuetify/vuetify.autocomplete_f2c41761-64bd-467b-9250-e84d6d5b2376.js");s("./wwwroot/scripts/vuetify/vuetify.autocomplete_f2c41761-64bd-467b-9250-e84d6d5b2376.css")})()};