/*
@license
Webix Query Builder v.5.1.3
This software is covered by Webix Trial License.
Usage without proper license is prohibited.
(c) XB Software Ltd.
*/
!function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/codebase/",t(t.s=7)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.locale={or:"or",and:"and",delete_rule:"Delete rule",add_rule:"Add rule",add_group:"Add group",less:"less",less_or_equal:"less or equal",greater:"greater",greater_or_equal:"greater or equal",between:"between",not_between:"not between",begins_with:"begins with",not_begins_with:"not begins with",contains:"contains",not_contains:"not contains",ends_with:"ends with",not_ends_with:"not ends with",is_empty:"is empty",is_not_empty:"is not empty",equal:"equal",not_equal:"not equal",is_null:"is null",is_not_null:"is not null",default_option:"---",cancel:"Cancel",filter:"Filter",sort:"Sort"}},function(e,t){},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i(1);var n=i(0);i(3);var r=i(4),l=i(5);i(6),webix.i18n.querybuilder=n.locale;var s={name:"querybuilder",defaults:{type:"space",fields:[],sorting:!1,filtering:!0,columnMode:!1,maxLevel:999,inputMaxWidth:210,inputWidth:!1,borderless:!0},$init:function(){this.$view.className+=" webix_querybuilder_wrap";var e={glue:"and",rules:[]};this.config.value=e,this.config.glue="and",this.$ready.unshift(this._setLayout)},_filters:[{id:"less",name:n.locale.less,fn:function(e,t){return e<t},type:"number"},{id:"less_or_equal",name:n.locale.less_or_equal,fn:function(e,t){return e<=t},type:"number"},{id:"greater",name:n.locale.greater,fn:function(e,t){return e>t},type:"number"},{id:"greater_or_equal",name:n.locale.greater_or_equal,fn:function(e,t){return e>=t},type:"number"},{id:"between",name:n.locale.between,fn:function(e,t,i){return(!t||e>t)&&(!i||e<i)},type:"number"},{id:"not_between",name:n.locale.not_between,fn:function(e,t,i){return!t||e<=t||!i||e>=i},type:"number"},{id:"begins_with",name:n.locale.begins_with,fn:function(e,t){return 0===e.lastIndexOf(t,0)},type:"string"},{id:"not_begins_with",name:n.locale.not_begins_with,fn:function(e,t){return 0!==e.lastIndexOf(t,0)},type:"string"},{id:"contains",name:n.locale.contains,fn:function(e,t){return e.indexOf(t)!==-1},type:"string"},{id:"not_contains",name:n.locale.not_contains,fn:function(e,t){return t.indexOf(e)===-1},type:"string"},{id:"ends_with",name:n.locale.ends_with,fn:function(e,t){return e.indexOf(t,e.length-t.length)!==-1},type:"string"},{id:"not_ends_with",name:n.locale.not_ends_with,fn:function(e,t){return e.indexOf(t,e.length-t.length)===-1},type:"string"},{id:"is_empty",name:n.locale.is_empty,fn:function(e){return 0===e.length},type:"string"},{id:"is_not_empty",name:n.locale.is_not_empty,fn:function(e){return e.length>0},type:"string"},{id:"equal",name:n.locale.equal,fn:function(e,t){return e===t},type:"any"},{id:"not_equal",name:n.locale.not_equal,fn:function(e,t){return e!==t},type:"any"},{id:"is_null",name:n.locale.is_null,fn:function(e){return null===e},type:"any"},{id:"is_not_null",name:n.locale.is_not_null,fn:function(e){return null!==e},type:"any"}],_deleteRow:function(e){var t=this.queryView({css:"webix_qb_section"});if(t.removeView(e),this._callChangeMethod(),t.getChildViews().length<=1){var i=this._masterQuery;i&&i._deleteRow(this.config.id)}},_addRow:function(e){var t=this.queryView({css:"webix_qb_section"});return t.addView(e,t.getChildViews().length-1)},_addRule:function(){var e=this._addRow({view:"querybuilderline",inputWidth:this.config.inputWidth,inputMaxWidth:this.config.inputMaxWidth,fields:this.config.fields,filters:this._filters,columnMode:this.config.columnMode});return webix.$$(e)._masterQuery=this,e},_addGroup:function(e){var t=this._addRow({view:"querybuilder",inputWidth:this.config.inputWidth,inputMaxWidth:this.config.inputMaxWidth,maxLevel:this.config.maxLevel-1,fields:this.config.fields,columnMode:this.config.columnMode});return webix.$$(t)._masterQuery=this,e&&webix.$$(t)._addRule(),t},_getTopQuery:function(){var e=this.getParentView();return this._masterQuery&&this._masterQuery._getTopQuery?(e=e.getParentView(),e._getTopQuery?e._getTopQuery():e):this},_callChangeMethod:function(){this._getTopQuery().callEvent("onChange",[])},_setLayout:function(){var e=this,t=this.config.maxLevel>1,i=[{template:'<div class="webix_querybuilder_ifbuttons">\n\t\t\t\t<button class="webix_querybuilder_and webix_active">'+n.locale.and+'</button>\n\t\t\t\t<button class="webix_querybuilder_or">'+n.locale.or+"</button>\n\t\t\t</div>",onClick:{webix_querybuilder_or:function(t){e.config.glue="or",e._setActiveButtons(e.$view)},webix_querybuilder_and:function(t){e.config.glue="and",e._setActiveButtons(e.$view,"and")}},height:34,width:87},{css:"webix_qb_section",rows:[{template:'<div class="webix_querybuilder_buttons">\n\t\t\t\t\t'+(t?'<button class="webixbutton webix_querybuilder_group">+ '+n.locale.add_group+"</button>":"")+'\n\t\t\t\t\t<button class="webixbutton webix_querybuilder_rule">+ '+n.locale.add_rule+"</button>\n\t\t\t\t</div>",onClick:{webix_querybuilder_rule:function(t){return e._addRule()},webix_querybuilder_group:function(t){return e._addGroup(!0)}},height:14,minWidth:220}],margin:5}];this.config.sorting&&(this.$view.innerHTML="<div class='webix_querybuilder_sorting'></div>",webix.ui(this._sortMultiselect={view:"multiselect",label:"Sort by",container:this.$view.childNodes[0],suggest:{body:{data:this.config.fields}},align:"right",width:300,inputHeight:38,labelWidth:57,on:{onChange:function(){e._callChangeMethod()}}}),webix.ui(this._sortSelect={view:"select",container:this.$view.childNodes[0],options:["asc","desc"],width:60,inputHeight:38,height:38,on:{onChange:function(){e._getSortingValues().sortBy&&e._callChangeMethod()}}}),webix.extend(this,r.qbsorting)),this.config.filtering===!1?(this.config.padding=0,this.cols_setter([{height:1}])):this.cols_setter(i)},$getSize:function(e,t){return this.config.sorting&&(t+=50),webix.ui.layout.prototype.$getSize.call(this,e,t)},_checkItemRules:function(e){var t=this;this.queryView({css:"webix_qb_section"});e.glue&&"and"===e.glue?this._setActiveButtons(this.$view,"and"):e.glue&&"or"===e.glue&&this._setActiveButtons(this.$view),e.rules&&e.rules.forEach(function(e){var i;i=e.glue?t._addGroup():t._addRule(),webix.$$(i).setValue(e)})},_setActiveButtons:function(e,t,i){var n=e.querySelector(".webix_querybuilder_and"),r=e.querySelector(".webix_querybuilder_or");n&&(n.classList.remove("webix_active"),t?(r.classList.remove("webix_active"),n.className+=" webix_active"):(n.classList.remove("webix_active"),r.className+=" webix_active")),this._callChangeMethod()},_eachLine:function(e){for(var t=this.queryView({css:"webix_qb_section"}),i=t.getChildViews(),n=0;n<i.length;n++)i[n].setFilters&&e(i[n])},setFilters:function(e){this._filters=e,this._eachLine(function(t){return t.setFilters(e)})},validate:function(){this._eachLine(function(e){return e.validate()})},getFilters:function(){return this._filters},_getValue:function(){var e=[];return this._eachLine(function(t){t._getValue(e)&&e.push(t._getValue(e))}),e.length?{glue:this.config.glue,rules:e}:null},getValue:function(){return[this._getValue(),this.config.fields]},setValue:function(e){var t,i=e[0];if(e[1]?(t=i,this.config.fields=e[1],this.reconstruct()):e[0]?Array.isArray(i)?(this.config.fields=i,this.reconstruct()):t=i:t=e,t&&(this.config.glue=t.glue,this._checkItemRules(t)),this.config.sorting){var n=[].concat(this.config.fields).map(function(e){return e.value}),r=this.getSortingElements()[0].getPopup().getList();r.clearAll(),r.parse(n)}},focus:function(){var e=this.$view.querySelector(".webix_active");e&&e.focus()},getFilterHelper:function(){var e,t=[],i=this.config.glue;this._eachLine(function(e){return t.push(e.getFilterHelper())});var n=function(n){return!t.length||("and"===i?(e=!0,t.forEach(function(t){t(n)||(e=!1)})):(e=!1,t.forEach(function(t){t(n)&&(e=!0)})),e)};return n}};webix.protoUI(s,l.qbsql,webix.ui.layout,webix.EventSystem)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i(1);var n=i(0);webix.ui.datafilter.queryBuilder=webix.extend({getValue:function(){var e=[];return e.push.apply(e,this._qb.getValue()),this._qb._getSortingValues&&e.push(this._qb._getSortingValues()),e},setValue:function(e,t){t&&(this._qb.setValue(t),this._qb.config.sorting&&(this._qb._setSortingValues(t[2]),this._master.sort(this._qb.getSortingHelper())))},refresh:function(e,t,i){var n=this;t.component=e.config.id,e.registerFilter(t,i,this),t._comp_id=e.config.id,i.value&&JSON.stringify(this.getValue(i)[0])!==JSON.stringify(i.value[0])&&(this.setValue(t,i.value),this._qb.config.sorting||this._master.filterByAll()),webix.event(t,"click",function(){return n._filterShow(t)})},compare:function(e,t,i){return this._qb.getFilterHelper()(i)},render:function(e,t){var i=this;t.css="webix_ss_filter",t.compare=function(e,t,n){return i.compare(e,t,n)};var r={},l={view:"querybuilder",fields:t.fields||[],sorting:t.sorting||!1,filtering:t.filtering!==!1,columnMode:t.columnMode||!1,maxLevel:t.maxLevel||999,inputMaxWidth:t.inputMaxWidth||210,inputWidth:t.inputWidth||!1,borderless:t.borderless!==!1},s=this._buttonCreate(n.locale.filter,function(){if(i._qb){var t=i._qb.getFilterHelper();e.filter(t,void 0,void 0),i._popup.hide()}});t.sorting&&(r=this._buttonCreate(n.locale.sort,function(){i._qb&&(e.sort(i._qb.getSortingHelper()),i._popup.hide())}));var u=this._buttonCreate(n.locale.cancel,function(){i._popup.hide()}),a={margin:5,rows:[l,{cols:[s,u,{},r]}]},o={view:"popup",width:1280,body:a};return t.popupConfig&&webix.extend(o,t.popupConfig,!0),this._popup=webix.ui(o),this._qb=this._popup.getBody().getChildViews()[0],e.attachEvent("onDestruct",function(){i._popup.destructor()}),this._master=e,'<div class="webix_qb_filter"><i class="fa fa-filter" aria-hidden="true"></i></div>'+(t.label||"")},_filterShow:function(e){this._popup.show(e.querySelector(".webix_qb_filter .fa"))},_buttonCreate:function(e,t){return{view:"button",value:e,align:"right",width:120,click:t}}},webix.EventSystem)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.qbsorting={_getSortingValues:function(){var e=this.getSortingElements()[0].getValue(),t=this.getSortingElements()[1].getValue();return{sortBy:e,sortAs:t}},_setSortingValues:function(e){this.getSortingElements()[0].setValue(e.sortBy),this.getSortingElements()[1].setValue(e.sortAs)},getSortingElements:function(){var e=webix.$$(this._sortMultiselect.id),t=webix.$$(this._sortSelect.id);return[e,t]},getSortingHelper:function(){for(var e=this,t=this._getSortingValues().sortBy.split(","),i=[],n=0;n<t.length;n++)for(var r=0;r<this.config.fields.length;r++)this.config.fields[r].id===t[n]&&i.push(this.config.fields[r]);this._i=0;var l=function(t,n){return 0===e._i&&i.length?e._getValueSort(t,n,i):e._sortingValue&&!i.length?e._getValueSort(t,n):void 0};return l},_getValueSort:function(e,t,i){var n,r=this._getSortingValues().sortAs;return n="asc"!==r&&r?this._getsorted(e,t,i)*-1:this._getsorted(e,t,i)},_getsorted:function(e,t,i){var n,r;i?(r=i[this._i],this._sortingValue={id:r.id,type:r.type}):r=this._sortingValue;var l=e[r.id],s=t[r.id];if("number"===r.type)n=l>s?1:l<s?-1:0;else if("date"===r.type)l-=0,s-=0,n=l>s?1:l<s?-1:0;else{if(!s)return 1;if(!l)return-1;l=l.toString().toLowerCase(),s=s.toString().toLowerCase(),n=l>s?1:l<s?-1:0}return i&&i[this._i+1]&&l===s?(this._i+=1,n=this._getValueSort(e,t,i)):this._i=0,n}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.qbsql={$init:function(){this.config.sqlDateFormat=this.config.sqlDateFormat||webix.Date.dateToStr("%Y-%m-%d %H:%i:%s",!1)},sqlOperators:{equal:{op:"= ?"},not_equal:{op:"!= ?"},less:{op:"< ?"},less_or_equal:{op:"<= ?"},greater:{op:"> ?"},greater_or_equal:{op:">= ?"},between:{op:"BETWEEN ?",sep:" AND "},not_between:{op:"NOT BETWEEN ?",sep:" AND "},begins_with:{op:"LIKE(?)",mod:"{0}%"},not_begins_with:{op:"NOT LIKE(?)",mod:"{0}%"},contains:{op:"LIKE(?)",mod:"%{0}%"},not_contains:{op:"NOT LIKE(?)",mod:"%{0}%"},ends_with:{op:"LIKE(?)",mod:"%{0}"},not_ends_with:{op:"NOT LIKE(?)",mod:"%{0}"},is_empty:{op:'= ""',no_val:!0},is_not_empty:{op:'!= ""',no_val:!0},is_null:{op:"IS NULL",no_val:!0},is_not_null:{op:"IS NOT NULL",no_val:!0}},toSQL:function(e,t){t=t||this.getValue()[0],e=e||{placeholders:!1};var i=[],n=this._getSqlString(t,i,e);return{code:n,values:i}},_getSqlString:function(e,t,i,n){var r=this;if(!e)return"";if(e.glue){var l="";return e.rules.forEach(function(n,s,u){l+=s<u.length-1?r._getSqlString(n,t,i,e.glue.toUpperCase()):r._getSqlString(n,t,i,"last")}),n?this._putBrackets(l,n):l}return this._convertValueToSql(e,t),"last"!==n?e.key+" "+this._convertRuleToSql(e,i)+" "+n+" ":e.key+" "+this._convertRuleToSql(e,i)},_putBrackets:function(e,t){return"last"!==t?"( "+e+" ) "+t.toUpperCase()+" ":"( "+e+" )"},_convertValueToSql:function(e,t){var i=this.config.sqlDateFormat;for(var n in this.sqlOperators)if(n===e.rule){var r=this.sqlOperators[n],l=void 0;if(r.no_val)return;if(r.mod)l=r.mod.replace("{0}",""+e.value);else{if(Array.isArray(e.value)){for(var s=0;s<e.value.length;s++)Array.isArray(e.value[s])&&(e.value=e.value[0]),t.push(e.value[s]);return}if("[object Date]"===Object.prototype.toString.call(e.value)||e.value.start){if(e.value.start&&e.value.start.getFullYear){for(var u=[e.value.start,e.value.end].map(function(e){return i(e)}),s=0;s<u.length;s++)t.push(u[s]);return}"[object Date]"===Object.prototype.toString.call(e.value)&&(e.value=i(e.value))}l=e.value}t.push(l)}},_convertRuleToSql:function(e,t){var i=this.config.sqlDateFormat;for(var n in this.sqlOperators)if(n===e.rule){var r=this.sqlOperators[n],l=this.sqlOperators[n].op;return t.placeholders?r.sep&&(l=l.replace("?","?"+r.sep+"?")):r.mod?l=l.replace("?",'"'+r.mod.replace("{0}",""+e.value)+'"'):r.sep?Array.isArray(e.value)?l=l.replace("?",""+e.value[0]+r.sep+e.value[1]):e.value.start&&(l=l.replace("?",'"'+i(e.value.start)+'"'+r.sep+'"'+i(e.value.end)+'"')):l=l.replace("?","string"==typeof e.value?'"'+e.value+'"':""+e.value),l}}}},function(e,t,i){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++){t=arguments[i];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};Object.defineProperty(t,"__esModule",{value:!0}),i(1);var r=i(0);webix.i18n.querybuilder=r.locale,webix.protoUI({name:"querybuilderline",defaults:{height:36,padding:0,margin:0,borderless:!0},$init:function(){this.$view.className+=" webix_querybuilder_line",this.$ready.unshift(this._setqueryline),this.$ready.push(this._setForm)},setFilters:function(e){this.config.filters=e,this._setRuleSelect(this.config.value,this.config.fields,!0)},_setqueryline:function(){var e=this,t={view:"richselect",minWidth:100,maxWidth:this.config.inputMaxWidth,inputWidth:this.config.inputWidth,width:this.config.inputWidth,height:38,inputHeight:38,maxHeight:38,inputPadding:0,options:[],css:"",name:""};this.cols_setter([n({},t,{css:"webix_querybuilder_value_select",name:"key"}),n({},t,{css:"webix_querybuilder_rule_select",name:"rule",hidden:!0}),{view:"button",type:"htmlbutton",css:"webix_querybuilder_close",width:20,inputWidth:20,name:"close",label:'<span class="fa fa-trash-o" title="'+r.locale.delete_rule+'"></sapn>',click:function(){e._masterQuery._deleteRow(e)}},{gravity:.001}])},_setForm:function(){this._valueSelect=this.elements.key,this._ruleSelect=this.elements.rule,this.config.columnMode?this.$view.classList.contains("webix_column_qb")||(this.define({height:150,margin:0,rows:[]}),webix.html.addCss(this.$view,"webix_column_qb"),this.elements.close.getNode().style.display="block"):this.$view.classList.contains("webix_column_qb")&&(webix.html.removeCss(this.$view,"webix_column_qb"),this.define({height:38,margin:10,cols:[]}),this.elements.close.getNode().style.display="inline-block"),this._setKeySelect()},_setPreselectedKeys:function(e){this._setKeySelect(e),this._setRuleSelect(e,this.config.fields)},_setKeySelect:function(e){var t=this,i=[{id:"not_selected",value:r.locale.default_option,type:"string"}].concat(this.config.fields),n={};this._valueSelect.getList().parse(i),e?(this._valueSelect.setValue(e.key),this._updateRules(e)):e=n,this.eventSelEl&&webix.eventRemove(this.eventSelEl),this.eventSelEl=webix.event(this._valueSelect,"change",function(n){return e.key=t._valueSelect.getValue(),"not_selected"===e.key?(t._changeRule("not_sel"),t._ruleSelect&&t._ruleSelect.hide(),t._ruleInput&&t._ruleInput.hide(),void t._getTopQuery().callEvent("onKeySelect",[t])):(e.rule=void 0,e.value=null,t._updateRules(e),t._setRuleSelect(e,i),void t._getTopQuery().callEvent("onKeySelect",[t]))})},_setRuleSelect:function(e,t,i){var n=this;if(this._ruleSelect.getList().clearAll(),"not_selected"!==e.key){var l=this._setFilterRule(e.key,t),s=[];l.forEach(function(e,t,i){for(var l in r.locale)l===e.id&&s.push({id:e.id,value:r.locale[l]});n._ruleSelect.getList().parse(s)}),e.rule||(e.rule=l[0].id,e.value=null),this._ruleSelect.show(),this._ruleSelect.$view.style.display="",this._ruleSelect.setValue(e.rule),i||this._setRuleEl(e),this._updateRules(e)}i||(this.eventSelRule&&webix.eventRemove(this.eventSelRule),this.eventSelRule=webix.event(this._ruleSelect,"change",function(i){n.config.filters.forEach(function(t){for(var i in r.locale)i===t.id&&r.locale[i]===n._ruleSelect.getList().data.pull[n._ruleSelect.getValue()].value&&(e.rule=t.id)}),n._setRuleEl(e,t),n._updateRules(e),(e.value||0===e.value)&&n._callChangeMethod()}))},_setFilterRule:function(e,t){var i=[];for(var n in t)t[n].id===e&&(this._ruleType=t[n].type);for(var r in this.config.filters)"date"===this._ruleType&&"number"===this.config.filters[r].type&&i.push(this.config.filters[r]),this.config.filters[r].type!==this._ruleType&&"any"!==this.config.filters[r].type||i.push(this.config.filters[r]);return i},_updateRules:function(e){if("not_sel"===e)return void(this.config.value=null);var t={};return this.config.value||(this.config.value=t),e&&(this.config.value={key:e.key,rule:e.rule,value:e.value}),this.config.value},_getTopQuery:function(){var e=this._masterQuery;return e._getTopQuery?e._getTopQuery():e},_callChangeMethod:function(){this._getTopQuery().callEvent("onChange",[])},_changeRule:function(e){this._updateRules(e),this._callChangeMethod()},_setRuleEl:function(e){var t=this,i=this.config.value.value,n=[this._datepicker,this._datepickerRange,this._slider,this._inputText];return n.forEach(function(e){e&&e.hide()}),"is_null"===e.rule||"is_not_null"===e.rule?(e.value=null,void this._changeRule(e)):"is_not_empty"===e.rule||"is_empty"===e.rule?(e.value="",void this._changeRule(e)):(this.config.value=e=this._setCustomRuleEl(e,i),this._ruleInput&&this._ruleInput.show(),this.config.fields.forEach(function(i,n,r){i.validate&&i.id===e.key?(t._ruleInput.define("validate",i.validate),t._ruleInput.refresh()):i.validate||i.id!==e.key||t.markInvalid(t._ruleInput.config.name,!1)}),void this._handleEvents(e))},_setCustomRuleEl:function(e,t){var i={minWidth:100,maxWidth:this.config.inputMaxWidth,width:this.config.inputWidth,inputWidth:this.config.inputWidth,height:38,inputHeight:38,maxHeight:38,name:"value"};if(e&&e.rule){if(!e.key)return;if("date"===this._ruleType&&"is_null"!==e.rule&&"is_not_null"!==e.rule?(t&&"object"==typeof t&&t.length?t="":this.config.value.value||(t=new Date),"between"===e.rule||"not_between"===e.rule?(this._datepickerRange?this._datepickerRange&&(e.value&&e.value.start?t=t:e.value&&""===e.value.start||!e.value?t={start:new Date,end:new Date}:e.value&&(t={start:e.value,end:e.value})):((t&&!t.start||t&&!t.end)&&(t={start:t,end:t}),this._datepickerRange=webix.$$(this.addView(n({},i,{view:"daterangepicker",value:t}),this.queryView({},"all").length-2))),this._ruleInput=this._datepickerRange):"between"!==e.rule&&"not_between"!==e.rule&&(t&&t.end?t=t.start:t&&!Array.isArray(e.value)||(t=new Date),this._datepicker?this._datepicker&&(e.value&&e.value.start?t=e.value.start:e.value&&""===e.value.start||!e.value?t=new Date:e.value&&(t=e.value)):this._datepicker=webix.$$(this.addView(n({},i,{view:"datepicker",value:t}),this.queryView({},"all").length-2)),this._ruleInput=this._datepicker)):"between"!==e.rule&&"not_between"!==e.rule||"date"===this._ruleType?(this._inputText||(this._inputText=webix.$$(this.addView(n({},i,{view:"text",css:"webix_querybuilder_rule_input",type:"string"}),this.queryView({},"all").length-2)),t=this._setInputType(t,e)),t=this._setInputType(t,e,!0),this._ruleInput=this._inputText):(this._slider?this._slider&&(0!==e.value&&(!e.value||e.value.length)&&e.value&&e.value[1]||(t=[[0,0],[this._slider.config.min,this._slider.config.max]]),this._slider.define({min:t[1][0],max:t[1][1]})):(t&&t.length?"undefined"==typeof t[1][0]&&(t=[t,[0,100]]):t=[[0,0],[0,100]],this._slider=webix.$$(this.addView(n({},i,{view:"rangeslider",value:t[0],min:t[1][0],max:t[1][1],title:function(e){var t=e.value[0].length?e.value[0]:e.value;return t[0]===t[1]?t[0]:t[0]+" - "+t[1]}}),this.queryView({},"all").length-2))),this._ruleInput=this._slider),e.value=t,this._updateRules(e),Array.isArray(t))return this._ruleInput.setValue(t[0]),e;this._ruleInput.setValue(t)}return e},_setInputType:function(e,t,i){return"number"===this._ruleType?("number"==typeof t.value&&i||(e=0),this._inputText.define("type","number")):("string"==typeof t.value&&i||(e=""),this._inputText.define("type","string")),this._inputText.refresh(),e},_handleEvents:function(e){var t,i=this;this.attachEvent("onDestruct",function(){return i._ruleInput.destructor()}),this._ruleInput&&(this.eventObjInput&&this._ruleInput.detachEvent(this.eventObjInput),this.eventObjPress&&this._ruleInput.detachEvent(this.eventObjPress),this.eventObjInput=this._ruleInput.attachEvent("onChange",function(t){"number"!==i._ruleType||Array.isArray(t)||(t=Number(t)),i.config.value.value!==t&&(Array.isArray(t)&&(t=[t,[i._slider.config.min,i._slider.config.max]]),e.value=t,i._changeRule(e))}),"webix_querybuilder_rule_input"===this._ruleInput.config.css&&(this.eventObjPress=this._ruleInput.attachEvent("onKeyPress",function(n){t&&clearTimeout(t),t=setTimeout(function(){"number"===i._ruleType?e.value=Number(i._inputText.getValue()):e.value=i._inputText.getValue(),i._changeRule(e)},250)})))},_getValue:function(){return this.config.value},setValue:function(e){this.config.value=e,this._setPreselectedKeys(this.config.value)},getFilterHelper:function(){var e,t=this,i=this.config.value,n=this.config.filters,r=function(r){if(!i)return!0;for(var l in n)if(n[l].id===i.rule)if(null===i.value)e=n[l].fn(r[i.key],i.value);else if("date"===t._ruleType){var s=r[i.key]?r[i.key].getTime():r[i.key],u=i.value;if("object"==typeof u&&u.start){var a=u.start,o=u.end;a=a?a.getTime():a,o=o?o.getTime():o,e=n[l].fn(s,a,o)}else"string"==typeof u&&(u=webix.i18n.parseFormatDate(u)),u=u.getTime(),e=n[l].fn(s,u)}else e="string"==typeof i.value&&"string"==typeof r[i.key]?n[l].fn(r[i.key].toLowerCase(),i.value.toLowerCase()):"number"!==t._ruleType||"number"!=typeof r[i.key]||Array.isArray(i.value)?n[l].fn(r[i.key],i.value[0][0],i.value[0][1]):n[l].fn(r[i.key],Number(i.value));return e};return r}},webix.ui.form,webix.EventSystem)},function(e,t,i){e.exports=i(2)}]);