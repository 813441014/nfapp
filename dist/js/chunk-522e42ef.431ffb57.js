(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-522e42ef"],{"176a":function(t,a,s){},"2f7a":function(t,a,s){t.exports=s.p+"img/navor01.0154a744.png"},"7bab":function(t,a,s){"use strict";var e=s("176a"),i=s.n(e);i.a},a37a:function(t,a,s){t.exports=s.p+"img/navor02.ea0aff9b.png"},ea78:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"header"},[s("div",{staticClass:"goBack",on:{click:function(a){return t.goBack()}}},[s("span",{staticClass:"iconfont icon-fanhui1"})]),s("p",[t._v("免费注册")])]),s("div",{staticClass:"uli"},[s("div",{staticClass:"mainFlex"},[s("div",{staticClass:"itemsBox ",class:2==t.selIndex?"active":"",attrs:{"data-index":"2"},on:{click:function(a){return t.switchTabs(2)}}},[s("p",{staticClass:"name"},[t._v("农户")]),t._m(0),s("div",{staticClass:"rightIcon"})]),s("div",{staticClass:"itemsBox",class:1==t.selIndex?"active":"",attrs:{"data-index":"1"},on:{click:function(a){return t.switchTabs(1)}}},[s("p",{staticClass:"name"},[t._v("商家")]),t._m(1),s("div",{staticClass:"rightIcon"})])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"labelImg"},[e("img",{attrs:{src:s("2f7a"),alt:""}}),e("div",[e("p",[t._v("农民／种植大户")]),e("p",[t._v("家庭农场主")]),e("p",[t._v("种养专业合作社")]),e("p",[t._v("其它")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"labelImg"},[e("img",{attrs:{src:s("a37a"),alt:""}}),e("div",[e("p",[t._v("农业企业／农机具厂商")]),e("p",[t._v("农资厂商")]),e("p",[t._v("合作社／个人")]),e("p",[t._v("其它")])])])}],n={name:"register",data:function(){return{selIndex:2,register_flag:!1}},created:function(){this.$route.query&&(this.register_flag=this.$route.query.flag)},methods:{goBack:function(){this.$router.go(-1)},switchTabs:function(t){this.selIndex=t,localStorage.setItem("type",t),this.register_flag?this.$router.push({path:"/register_news",query:{type:t}}):this.$router.push({path:"/mainroute",query:{type:t}})}}},c=n,r=(s("7bab"),s("2877")),l=Object(r["a"])(c,e,i,!1,null,"676e932c",null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-522e42ef.431ffb57.js.map