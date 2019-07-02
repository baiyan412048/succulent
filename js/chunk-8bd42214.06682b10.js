(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8bd42214"],{"0093":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"mobile-cart bg-warning d-flex d-md-none justify-content-center align-items-center",on:{click:function(s){t.showMobileCart=!t.showMobileCart}}},[a("i",{staticClass:"fas fa-shopping-cart"}),a("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.cartList.carts.length))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showMobileCart,expression:"showMobileCart"}],staticClass:"cartlist bg-white m-3 px-4 py-5"},[a("button",{staticClass:"btn mr-auto",attrs:{type:"button"},on:{click:function(s){t.showMobileCart=!t.showMobileCart}}},[a("i",{staticClass:"fas fa-times"})]),a("p",{staticClass:"h4 font-letter mb-5 text-center"},[t._v("購物車列表")]),a("ul",{staticClass:"d-flex flex-column meun p-0"},[t.cartList.total<1?a("li",{staticClass:"text-dark px-3 py-2 h6"},[t._v("您尚未選購商品！")]):t._e(),t._l(t.cartList.carts,function(s){return a("li",{key:s.id,staticClass:"meun-list text-dark px-3 py-2 h6 row no-gutters"},[a("div",{staticClass:"col-3 cart-img banner",style:{backgroundImage:"url('"+s.product.imageUrl+"')"}}),a("div",{staticClass:"col-8 d-flex flex-column justify-content-center"},[a("div",{staticClass:"ml-3 mb-2"},[t._v("\n            "+t._s(s.product.title)+"\n            "),a("i",{staticClass:"fas fa-times"}),t._v("\n            "+t._s(s.qty)+"\n          ")]),a("div",{staticClass:"ml-3"},[a("span",{staticClass:"small"},[t._v("小計")]),t._v("\n            "+t._s(t._f("currency")(s.final_total))+"\n          ")])]),a("div",{staticClass:"col-1 d-flex align-items-center"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return a.preventDefault(),t.removeCart(s.id)}}},[a("i",{staticClass:"fas fa-trash-alt"})])])])})],2),0!==t.cartList.total?a("div",{staticClass:"row no-gutters align-items-end mb-4"},[a("div",{staticClass:"col-7 h4 mb-0 text-dark"},[a("small",[t._v("總計")]),t._v("\n        "+t._s(t._f("currency")(t.cartList.final_total))+"\n      ")]),a("div",{staticClass:"col-5"},[a("router-link",{staticClass:"btn btn-block btn-success text-white",attrs:{to:"/checkout_1"}},[t._v("結帳去～")])],1)]):t._e()])])},c=[],i=a("cebc"),n=a("2f62"),r={data:function(){return{productId:"",showMobileCart:!1}},methods:Object(i["a"])({previousPage:function(){window.history.back()},addtoCart:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("cartsModule/addtoCart",{id:t,qty:s})},removeCart:function(t){this.$store.dispatch("cartsModule/removeCart",t)}},Object(n["b"])("cartsModule",["getCart"])),computed:Object(i["a"])({},Object(n["c"])("cartsModule",["cartList"])),created:function(){this.getCart()}},l=r,o=(a("3fe2"),a("2877")),d=Object(o["a"])(l,e,c,!1,null,"637ed7d8",null);s["a"]=d.exports},2923:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Alert"),a("div",{staticClass:"container"},[a("Mobilecart"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-md-5 mb-4",class:{"col-md-3":t.cartList.total<1,"col-md-4 ":t.cartList.total>0}},[a("div",{staticClass:"p-4 bg-info meun-box font-letter"},[a("h6",{staticClass:"text-dark mb-3 mt-4 font-weight-bold text-center text-md-left",on:{click:function(s){t.showCart=!t.showCart}}},[t._v("\n            購物車清單\n            "),a("span",{staticClass:"badge badge-danger mr-2"},[t._v(t._s(t.cartList.carts.length))]),t.cartList.total>1?a("i",{staticClass:"fas fa-angle-down"}):t._e()]),a("ul",{staticClass:"d-none d-md-flex flex-column meun p-0",class:{"d-flex":t.showCart}},[t.cartList.total<1?a("li",{staticClass:"text-dark px-3 py-2 h6"},[t._v("您尚未選購商品！")]):t._e(),t._l(t.cartList.carts,function(s){return a("li",{key:s.id,staticClass:"meun-list text-dark px-3 py-2 h6 row no-gutters"},[a("div",{staticClass:"col-3 cart-img banner",style:{backgroundImage:"url('"+s.product.imageUrl+"')"}}),a("div",{staticClass:"col-8 d-flex flex-column justify-content-center"},[a("div",{staticClass:"ml-3 mb-2"},[t._v("\n                  "+t._s(s.product.title)+"\n                  "),a("i",{staticClass:"fas fa-times"}),t._v("\n                  "+t._s(s.qty)+"\n                ")]),a("div",{staticClass:"ml-3"},[a("span",{staticClass:"small"},[t._v("小計")]),t._v("\n                  "+t._s(t._f("currency")(s.final_total))+"\n                ")])]),a("div",{staticClass:"col-1 d-flex align-items-center"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return a.preventDefault(),t.removeCart(s.id)}}},[a("i",{staticClass:"fas fa-trash-alt"})])])])})],2),0!==t.cartList.total?a("div",{staticClass:"row no-gutters align-items-end mb-4"},[a("div",{staticClass:"col-7 h4 mb-0 text-grass"},[a("small",[t._v("總計")]),t._v("\n              "+t._s(t._f("currency")(t.cartList.final_total))+"\n            ")]),a("div",{staticClass:"col-5"},[a("router-link",{staticClass:"btn btn-block btn-grass",attrs:{to:"/checkout_1"}},[t._v("結帳去～")])],1)]):t._e()])]),a("div",{staticClass:"col"},[a("nav",{staticClass:"d-flex align-items-center mt-3 mb-4"},[a("div",{staticClass:"h4 mb-0 mr-auto text-dark"},[t._v(t._s(t.product.category))])]),a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-md-6 col-12 mb-4 mb-md-0"},[a("div",{staticClass:"banner",staticStyle:{height:"400px"},style:{backgroundImage:"url('"+t.product.imageUrl+"')"}})]),a("div",{staticClass:"col-md-6 col-12"},[a("h2",{staticClass:"h4 mb-4 text-dark"},[t._v(t._s(t.product.title))]),a("p",{staticClass:"mb-2 text-secondary"},[t._v("——")]),a("p",{staticClass:"text-secondary"},[t._v(t._s(t.product.description))]),a("div",{staticClass:"row mt-5 text-dark"},[a("div",{staticClass:"col-5 d-flex align-items-end"},[a("del",{staticClass:"h6 mb-0"},[t._v("原價 "+t._s(t._f("currency")(t.product.origin_price))+" 元")])]),a("div",{staticClass:"col-7 d-flex justify-content-end align-items-end"},[a("div",{staticClass:"h5 mb-0"},[t._v("現在只要 "+t._s(t._f("currency")(t.product.price))+" 元")])])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.counts,expression:"counts"}],staticClass:"form-control mt-3",on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){var s="_value"in t?t._value:t.value;return s});t.counts=s.target.multiple?a:a[0]}}},t._l(10,function(s){return a("option",{key:s,domProps:{value:s}},[t._v("選購 "+t._s(s)+" "+t._s(t.product.unit))])}),0),a("div",{staticClass:"row my-3"},[a("div",{staticClass:"col-12 h5 text-right"},[a("small",[t._v("總計")]),a("strong",[t._v(t._s(t._f("currency")(t.product.price*t.counts)))])])]),a("hr"),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-outline-secondary mr-2",attrs:{type:"button"},on:{click:t.previousPage}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){return t.addtoCart(t.product.id,t.counts)}}},[t._v("加到購物車")])])])])])])],1)],1)},c=[],i=a("cebc"),n=a("2f62"),r=a("0093"),l=a("56a6"),o={data:function(){return{counts:1,productId:"",showCart:!1}},methods:Object(i["a"])({previousPage:function(){window.history.back()},getProduct:function(t){this.$store.dispatch("productsModule/getProduct",t)},addtoCart:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("cartsModule/addtoCart",{id:t,qty:s})},removeCart:function(t){this.$store.dispatch("cartsModule/removeCart",t)}},Object(n["b"])("cartsModule",["getCart"])),created:function(){var t=this;t.productId=this.$route.params.productId,this.getProduct(t.productId),this.getCart()},computed:Object(i["a"])({},Object(n["c"])(["title","category"]),Object(n["c"])("cartsModule",["cartList"]),Object(n["c"])("productsModule",["product"])),components:{Mobilecart:r["a"],Alert:l["a"]}},d=o,u=(a("6bd6"),a("2877")),m=Object(u["a"])(d,e,c,!1,null,"4d5e9a78",null);s["default"]=m.exports},"3fe2":function(t,s,a){"use strict";var e=a("643b"),c=a.n(e);c.a},"4a2f":function(t,s,a){"use strict";var e=a("dfbe"),c=a.n(e);c.a},"56a6":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"message-alert"},t._l(t.messages,function(s,e){return a("div",{key:e,staticClass:"alert alert-dismissible",class:"alert-"+s.status},[t._v("\n    "+t._s(s.message)+"\n    "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(s){return t.removeMessage(e)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},c=[],i=a("cebc"),n=a("2f62"),r={name:"Alert",data:function(){return{}},methods:{updateMessage:function(t,s){this.$store.dispatch("updateMessage",{message:t,status:s})},removeMessage:function(t){this.$store.dispatch("removeMessages",t)}},computed:Object(i["a"])({},Object(n["c"])(["messages"]))},l=r,o=(a("4a2f"),a("2877")),d=Object(o["a"])(l,e,c,!1,null,null,null);s["a"]=d.exports},"643b":function(t,s,a){},"6bd6":function(t,s,a){"use strict";var e=a("99e5"),c=a.n(e);c.a},"99e5":function(t,s,a){},dfbe:function(t,s,a){}}]);
//# sourceMappingURL=chunk-8bd42214.06682b10.js.map