(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46994d96"],{"02f4":function(t,n,e){var i=e("4588"),a=e("be13");t.exports=function(t){return function(n,e){var r,c,o=String(a(n)),s=i(e),u=o.length;return s<0||s>=u?t?"":void 0:(r=o.charCodeAt(s),r<55296||r>56319||s+1===u||(c=o.charCodeAt(s+1))<56320||c>57343?t?o.charAt(s):r:t?o.slice(s,s+2):c-56320+(r-55296<<10)+65536)}}},"0390":function(t,n,e){"use strict";var i=e("02f4")(!0);t.exports=function(t,n,e){return n+(e?i(t,n).length:1)}},"0bfb":function(t,n,e){"use strict";var i=e("cb7c");t.exports=function(){var t=i(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},"214f":function(t,n,e){"use strict";e("b0c5");var i=e("2aba"),a=e("32e9"),r=e("79e5"),c=e("be13"),o=e("2b4c"),s=e("520a"),u=o("species"),l=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=o(t),v=!r(function(){var n={};return n[p]=function(){return 7},7!=""[t](n)}),d=v?!r(function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[u]=function(){return e}),e[p](""),!n}):void 0;if(!v||!d||"replace"===t&&!l||"split"===t&&!f){var h=/./[p],g=e(c,p,""[t],function(t,n,e,i,a){return n.exec===s?v&&!a?{done:!0,value:h.call(n,e,i)}:{done:!0,value:t.call(e,n,i)}:{done:!1}}),x=g[0],b=g[1];i(String.prototype,t,x),a(RegExp.prototype,p,2==n?function(t,n){return b.call(t,this,n)}:function(t){return b.call(t,this)})}}},"25f2":function(t,n,e){},"520a":function(t,n,e){"use strict";var i=e("0bfb"),a=RegExp.prototype.exec,r=String.prototype.replace,c=a,o="lastIndex",s=function(){var t=/a/,n=/b*/g;return a.call(t,"a"),a.call(n,"a"),0!==t[o]||0!==n[o]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(c=function(t){var n,e,c,l,f=this;return u&&(e=new RegExp("^"+f.source+"$(?!\\s)",i.call(f))),s&&(n=f[o]),c=a.call(f,t),s&&c&&(f[o]=f.global?c.index+c[0].length:n),u&&c&&c.length>1&&r.call(c[0],e,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)}),c}),t.exports=c},"5b08":function(t,n,e){t.exports=e.p+"img/banner.8a504e26.png"},"5f1b":function(t,n,e){"use strict";var i=e("23c6"),a=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"===typeof e){var r=e.call(t,n);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,n)}},"6b9f":function(t,n,e){"use strict";var i=e("25f2"),a=e.n(i);a.a},a481:function(t,n,e){"use strict";var i=e("cb7c"),a=e("4bf8"),r=e("9def"),c=e("4588"),o=e("0390"),s=e("5f1b"),u=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};e("214f")("replace",2,function(t,n,e,h){return[function(i,a){var r=t(this),c=void 0==i?void 0:i[n];return void 0!==c?c.call(i,r,a):e.call(String(r),i,a)},function(t,n){var a=h(e,t,this,n);if(a.done)return a.value;var f=i(t),p=String(this),v="function"===typeof n;v||(n=String(n));var x=f.global;if(x){var b=f.unicode;f.lastIndex=0}var C=[];while(1){var m=s(f,p);if(null===m)break;if(C.push(m),!x)break;var _=String(m[0]);""===_&&(f.lastIndex=o(p,r(f.lastIndex),b))}for(var y="",w=0,S=0;S<C.length;S++){m=C[S];for(var $=String(m[0]),k=u(l(c(m.index),p.length),0),E=[],I=1;I<m.length;I++)E.push(d(m[I]));var R=m.groups;if(v){var A=[$].concat(E,k,p);void 0!==R&&A.push(R);var N=String(n.apply(void 0,A))}else N=g($,p,k,E,R,n);k>=w&&(y+=p.slice(w,k)+N,w=k+$.length)}return y+p.slice(w)}];function g(t,n,i,r,c,o){var s=i+t.length,u=r.length,l=v;return void 0!==c&&(c=a(c),l=p),e.call(o,l,function(e,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,i);case"'":return n.slice(s);case"<":o=c[a.slice(1,-1)];break;default:var l=+a;if(0===l)return e;if(l>u){var p=f(l/10);return 0===p?e:p<=u?void 0===r[p-1]?a.charAt(1):r[p-1]+a.charAt(1):e}o=r[l-1]}return void 0===o?"":o})}})},b0c5:function(t,n,e){"use strict";var i=e("520a");e("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},df74:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"container"},[i("div",{staticClass:"header"},[i("img",{staticClass:"personBac",attrs:{src:e("fe49"),alt:""}}),i("div",{staticClass:"headerNav"},[i("img",{attrs:{src:e("5b08"),alt:""}}),i("div",{staticClass:"headCont"},[i("div",{staticClass:"headTit"},[i("p",[t._v(t._s(t.name))]),i("span",[t._v("完整度"+t._s(t.integrity)+"%")])]),i("div",{staticClass:"iphone"},[t._v("\n"+t._s(t.phone)+"                ")])]),i("div",{staticClass:"headEdit",on:{click:function(n){return t.edit()}}},[i("p",[t._v("编辑资料")]),i("span",{staticClass:"iconfont icon-xiayibu"})])])]),i("div",{staticClass:"personList"},[i("div",{staticClass:"uli",on:{click:function(n){return t.edit()}}},[i("span",{staticClass:"iconfont icon-wode"}),i("p",[t._v("个人信息")]),i("span",{staticClass:"iconfont icon-xiayibu"})]),i("div",{staticClass:"uli",on:{click:function(n){return t.my_publish()}}},[i("span",{staticClass:"iconfont icon-fabu2"}),i("p",[t._v("我的发布")]),i("span",{staticClass:"iconfont icon-xiayibu"})]),i("div",{staticClass:"uli",on:{click:function(n){return t.my_collect()}}},[i("span",{staticClass:"iconfont icon-xing1"}),i("p",[t._v("我的收藏")]),i("span",{staticClass:"iconfont icon-xiayibu"})]),i("div",{staticClass:"uli",on:{click:function(n){return t.toNews()}}},[i("span",{staticClass:"iconfont icon-tongzhi"}),i("p",[t._v("通知消息 "),t.unread&&0!=t.unread?i("span",{staticClass:"redBtn"},[t._v(t._s(t.unread))]):t._e()]),i("span",{staticClass:"iconfont icon-xiayibu"})]),i("div",{staticClass:"uli",on:{click:t.loginOut}},[i("span",{staticClass:"iconfont icon-tuichu"}),i("p",[t._v("退出")]),i("span",{staticClass:"iconfont icon-xiayibu"})])]),i("div",{staticClass:"nDiv",on:{click:t.toUrl}},[t._v("\n        农户\n    ")]),t._m(0),t._m(1)])},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fixDiv"},[e("a",{attrs:{href:"tel:15048335348"}},[e("span",{staticClass:"iconfont icon-dianhua"}),e("p",[t._v("联系我们")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer"},[e("div",{attrs:{onclick:"popUp()"}},[e("span",{staticClass:"iconfont icon-fabu"}),e("p",[t._v("发布")])]),e("ul",{staticClass:"bottom"},[e("li",{attrs:{index:"1",onclick:"toIndex()"}},[e("span",{staticClass:"iconfont icon-shouye1"}),e("p",[t._v("首页")])]),e("li",{staticClass:"active",attrs:{index:"2"}},[e("span",{staticClass:"iconfont icon-icon-test"}),e("p",[t._v("我的")])])])])}],r=(e("a481"),{name:"person",data:function(){return{name:"",phone:"",integrity:80,unread:localStorage.getItem("unreadCount")}},created:function(){this.phone=localStorage.getItem("phone"),this.name=localStorage.getItem("userName"),this.integrity=localStorage.getItem("integrity")},methods:{toUrl:function(){localStorage.setItem("type",2),this.$router.push({path:"/mainroute/index",query:{type:2}})},my_publish:function(){this.$router.push({path:"/my_publish"})},loginOut:function(){localStorage.clear(),this.$router.replace({path:"/login"})},my_collect:function(){this.$router.push({path:"/collect"})},edit:function(){this.$router.push({path:"/person_edit"})},toNews:function(){localStorage.setItem("unreadCount",0),this.unread=0,this.$router.push({path:"/news"})}}}),c=r,o=(e("6b9f"),e("2877")),s=Object(o["a"])(c,i,a,!1,null,"5ee09fce",null);n["default"]=s.exports},fe49:function(t,n,e){t.exports=e.p+"img/personBac.e8e7ebf5.png"}}]);
//# sourceMappingURL=chunk-46994d96.2e041690.js.map