(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e6de77c"],{1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.thisPage(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",attrs:{pages:e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return t.thisPage(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.thisPage(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},o=[],n={props:{pages:{type:Object}},methods:{thisPage:function(t){this.$emit("getThisPage",t)}}},i=n,l=a("2877"),r=Object(l["a"])(i,s,o,!1,null,null,null);e["a"]=r.exports},6450:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openCouponModal(!0)}}},[t._v("建立新優惠卷")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.coupons,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.percent)+" %")]),a("td",[t._v(t._s(e.due_date))]),a("td",[1===e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm mr-1",on:{click:function(a){return t.openCouponModal(!1,e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.openDelModal(e)}}},[t._v("刪除")])])])}),0)]),a("Pagination",{staticClass:"d-flex justify-content-center",attrs:{pages:t.pagination},on:{getThisPage:t.getCoupons}}),a("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-md",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-12"},[a("label",{attrs:{for:"origin_price"}},[t._v("優惠劵名稱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入優惠劵名稱"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("折扣數")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"percent",placeholder:"請輸入折價數"},domProps:{value:t.tempCoupon.percent},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"percent",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("到期日")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.due_date,expression:"tempCoupon.due_date"}],staticClass:"form-control",attrs:{type:"date",id:"due_date"},domProps:{value:t.tempCoupon.due_date},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"due_date",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-12"},[a("label",{attrs:{for:"origin_price"}},[t._v("折價卷代碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"code",placeholder:"請輸入折價卷代碼"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(e){var a=t.tempCoupon.is_enabled,s=e.target,o=s.checked?1:0;if(Array.isArray(a)){var n=null,i=t._i(a,n);s.checked?i<0&&t.$set(t.tempCoupon,"is_enabled",a.concat([n])):i>-1&&t.$set(t.tempCoupon,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempCoupon,"is_enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateCoupon}},[t._v("確定")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delCoupontModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除\n          "),a("strong",{staticClass:"text-danger"},[t._v(t._s(this.tempCoupon.title))]),t._v(" 優惠劵(刪除後將無法恢復)。\n        ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.delCoupon}},[t._v("確認刪除")])])])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("優惠劵名稱")]),a("th",[t._v("折扣百分比")]),a("th",[t._v("到期日")]),a("th",{attrs:{width:"100"}},[t._v("是否啟用")]),a("th",{attrs:{width:"120"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header text-dark"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("優惠劵細節")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除優惠劵")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=a("cebc"),i=a("2f62"),l=a("1799"),r={data:function(){return{tempCoupon:{}}},methods:Object(n["a"])({getCoupons:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$store.dispatch("backstageModule/getCoupons",t)},openCouponModal:function(t,e){var a=this;a.tempCoupon=Object.assign({},e),this.$store.dispatch("backstageModule/openCouponModal",{isNew:t,item:e})},openDelModal:function(t){var e=this;e.tempCoupon=Object.assign({},t),this.$store.dispatch("backstageModule/openCouponDelModal",t)},updateCoupon:function(){var t=this;this.$store.dispatch("backstageModule/updateCoupon",t.tempCoupon)}},Object(i["b"])("backstageModule",["delCoupon"])),created:function(){this.getCoupons()},computed:Object(n["a"])({},Object(i["c"])("backstageModule",["pagination","coupons","isNew"])),components:{Pagination:l["a"]}},d=r,c=a("2877"),p=Object(c["a"])(d,s,o,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-7e6de77c.ab6372c0.js.map