(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e6e563c"],{1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.thisPage(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",attrs:{pages:e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return t.thisPage(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.thisPage(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},n=[],i={props:{pages:{type:Object}},methods:{thisPage:function(t){this.$emit("getThisPage",t)}}},r=i,c=a("2877"),l=Object(c["a"])(r,s,n,!1,null,null,null);e["a"]=l.exports},"71ba":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.orders,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(t._f("date")(e.create_at)))]),a("td",{staticClass:"d-none d-md-block"},[t._v(t._s(e.user.email))]),a("td",[a("ul",{staticClass:"list-unstyled"},t._l(e.products,function(e,s){return a("li",{key:s},[t._v("\n              "+t._s(e.product.title)+" — "+t._s(e.qty)+" / "+t._s(e.product.unit)+"\n            ")])}),0)]),a("td",[t._v(t._s(t._f("currency")(e.total)))]),a("td",[e.is_paid?a("span",{staticClass:"text-success"},[t._v("已完成付款")]):a("span",{staticClass:"text-danger"},[t._v("尚未付款")])])])}),0)]),t.pagination.total_pages>1?a("Pagination",{staticClass:"d-flex justify-content-center",attrs:{pages:t.pagination},on:{getThisPage:t.getOrders}}):t._e()],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("購買時間")]),a("th",{staticClass:"d-none d-md-block"},[t._v("Email")]),a("th",[t._v("購買品項")]),a("th",[t._v("應付金額")]),a("th",[t._v("是否付款")])])])}],i=a("cebc"),r=a("2f62"),c=a("1799"),l={methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$store.dispatch("backstageModule/getOrders",t)}},created:function(){this.getOrders()},computed:Object(i["a"])({},Object(r["c"])("backstageModule",["pagination","orders"])),components:{Pagination:c["a"]}},o=l,u=a("2877"),d=Object(u["a"])(o,s,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-7e6e563c.9555b3c1.js.map