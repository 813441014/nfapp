(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6303c37c"],{"0662":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"header"},[e("div",{staticClass:"goBack",on:{click:function(i){return t.Back()}}},[e("span",{staticClass:"iconfont icon-fanhui1"})]),e("p",[t._v("通知")])]),e("div",{staticClass:"boxItems"},[0==t.initData.length?e("noData"):t._e(),t._l(t.initData,function(i,s){return e("div",{key:s,staticClass:"uli",on:{click:function(e){return t.details(i.goods_style,s)}}},[e("div",{staticClass:"recommend_items"},[e("p",{staticClass:"name"},[t._v(t._s(i.title))]),e("div",{staticClass:"imgUrl"},[e("div",{staticClass:"overflow_div"},t._l(i.img,function(i,n){return e("img",{key:n,attrs:{src:i.complete_url,alt:""},on:{click:function(i){return t.prew(s,n)}}})}),0)]),e("div",{staticClass:"details"},[e("p",[t._v(t._s(i.create_time)+" 发布")])])])])})],2),t.show?e("van-loading",{attrs:{size:"24px",vertical:""}},[t._v("加载中...")]):t._e()],1)},n=[],o=(e("cadf"),e("551c"),e("f751"),e("097d"),e("a06f")),a=e("28a2"),c={name:"news",components:{noData:o["a"]},data:function(){return{user_type:"",userId:"",initData:[],show:!0}},created:function(){this.user_type=localStorage.getItem("type"),this.userId=localStorage.getItem("userId"),this.init()},methods:{init:function(){var t=this;this.ajax.post(this.mainUrl+"home/Home/notice",this.qs.stringify({user_id:this.userId,user_type:this.user_type}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(i){0==i.data.code?(t.show=!1,t.initData=i.data.data):Dialog({message:i.data.msg,confirmButtonColor:"#1bb339"})}).catch(function(){})},Back:function(){this.$router.go(-1)},prew:function(t,i){for(var e=this.initData[t].img,s=[],n=0;n<e.length;n++)s[n]=e[n].complete_url;Object(a["a"])({images:s,startPosition:i})}}},r=c,h=(e("0769"),e("2877")),u=Object(h["a"])(r,s,n,!1,null,"3af49394",null);i["default"]=u.exports},"0769":function(t,i,e){"use strict";var s=e("6a63"),n=e.n(s);n.a},"28a2":function(t,i,e){"use strict";var s=e("c31d"),n=e("2b0e"),o=e("d282"),a=e("482d"),c=e("1325"),r=e("6605"),h=e("3875"),u=e("44bf"),l=e("543e"),f=e("5fbe"),d=e("4598"),v=Object(o["a"])("swipe"),m=v[0],p=v[1],g=m({mixins:[h["a"],Object(f["a"])(function(t,i){t(window,"resize",this.resize,!0),i?this.initialize():this.clear()})],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},resize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(c["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count;return t?this.loop?Object(a["a"])(i+t,-1,e):Object(a["a"])(i+t,0,e-1):i},getTargetOffset:function(t,i){var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var s=Math.round(i-e);return this.loop||(s=Object(a["a"])(s,this.minOffset,0)),s},move:function(t){var i=t.pace,e=void 0===i?0:i,s=t.offset,n=void 0===s?0:s,o=t.emitChange,a=this.loop,c=this.count,r=this.active,h=this.swipes,u=this.trackSize,l=this.minOffset;if(!(c<=1)){var f=this.getTargetActive(e),d=this.getTargetOffset(f,n);if(a){if(h[0]){var v=d<l;h[0].offset=v?u:0}if(h[c-1]){var m=d>0;h[c-1].offset=m?-u:0}}this.active=f,this.offset=d,o&&f!==r&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(d["a"])(function(){var s;s=e.loop&&t===e.count?0===e.active?0:t:t%e.count,e.move({pace:s-e.active,emitChange:!0}),i.immediate?Object(d["a"])(function(){e.swiping=!1}):e.swiping=!1})},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(d["a"])(function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()})},i))},genIndicator:function(){var t=this,i=this.$createElement,e=this.count,s=this.activeIndicator,n=this.slots("indicator");return n||(this.showIndicators&&e>1?i("div",{class:p("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map(function(e,n){return i("i",{class:p("indicator",{active:n===s}),style:n===s?t.indicatorStyle:null})})]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:p()},[t("div",{ref:"track",style:this.trackStyle,class:p("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.genIndicator()])}}),w=Object(o["a"])("swipe-item"),y=w[0],b=w[1],C=y({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(){var t=arguments[0],i=this.$parent,e=i.vertical,n=i.computedWidth,o=i.computedHeight,a={width:n+"px",height:e?o+"px":"100%",transform:"translate"+(e?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:b(),style:a,on:Object(s["a"])({},this.$listeners)},[this.slots()])}}),T=Object(o["a"])("image-preview"),x=T[0],S=T[1];function I(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var O,M=x({mixins:[r["a"],h["a"]],props:{className:null,lazyLoad:Boolean,asyncClose:Boolean,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},swipeDuration:{type:Number,default:500},overlay:{type:Boolean,default:!0},showIndex:{type:Boolean,default:!0},startPosition:{type:Number,default:0},minZoom:{type:Number,default:1/3},maxZoom:{type:Number,default:3},overlayClass:{type:String,default:S("overlay")}},data:function(){return{scale:1,moveX:0,moveY:0,active:0,moving:!1,zooming:!1,doubleClickTimer:null}},computed:{imageStyle:function(){var t=this.scale,i={transitionDuration:this.zooming||this.moving?"0s":".3s"};return 1!==t&&(i.transform="scale3d("+t+", "+t+", 1) translate("+this.moveX/t+"px, "+this.moveY/t+"px)"),i}},watch:{value:function(){this.setActive(this.startPosition)},startPosition:function(t){this.setActive(t)}},methods:{onWrapperTouchStart:function(){this.touchStartTime=new Date},onWrapperTouchEnd:function(t){var i=this;Object(c["c"])(t);var e=new Date-this.touchStartTime,s=this.$refs.swipe||{},n=s.offsetX,o=void 0===n?0:n,a=s.offsetY,r=void 0===a?0:a;e<300&&o<10&&r<10&&(this.doubleClickTimer?(clearTimeout(this.doubleClickTimer),this.doubleClickTimer=null,this.toggleScale()):this.doubleClickTimer=setTimeout(function(){var t=i.active;i.$emit("close",{index:t,url:i.images[t]}),i.asyncClose||i.$emit("input",!1),i.doubleClickTimer=null},300))},startMove:function(t){var i=t.currentTarget,e=i.getBoundingClientRect(),s=window.innerWidth,n=window.innerHeight;this.touchStart(t),this.moving=!0,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.maxMoveX=Math.max(0,(e.width-s)/2),this.maxMoveY=Math.max(0,(e.height-n)/2)},startZoom:function(t){this.moving=!1,this.zooming=!0,this.startScale=this.scale,this.startDistance=I(t.touches)},onImageTouchStart:function(t){var i=t.touches,e=this.$refs.swipe||{},s=e.offsetX,n=void 0===s?0:s;1===i.length&&1!==this.scale?this.startMove(t):2!==i.length||n||this.startZoom(t)},onImageTouchMove:function(t){var i=t.touches;if((this.moving||this.zooming)&&Object(c["c"])(t,!0),this.moving){this.touchMove(t);var e=this.deltaX+this.startMoveX,s=this.deltaY+this.startMoveY;this.moveX=Object(a["a"])(e,-this.maxMoveX,this.maxMoveX),this.moveY=Object(a["a"])(s,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===i.length){var n=I(i),o=this.startScale*n/this.startDistance;this.scale=Object(a["a"])(o,this.minZoom,this.maxZoom)}},onImageTouchEnd:function(t){if(this.moving||this.zooming){var i=!0;this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(i=!1),t.touches.length||(this.moving=!1,this.zooming=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale()),i&&Object(c["c"])(t,!0)}},setActive:function(t){this.resetScale(),t!==this.active&&(this.active=t,this.$emit("change",t))},resetScale:function(){this.scale=1,this.moveX=0,this.moveY=0},toggleScale:function(){var t=this.scale>1?1:2;this.scale=t,this.moveX=0,this.moveY=0},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:S("index")},[this.slots("index")||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,i=this.slots("cover");if(i)return t("div",{class:S("cover")},[i])},genImages:function(){var t=this,i=this.$createElement,e={loading:function(){return i(l["a"],{attrs:{type:"spinner"}})}};return i(g,{ref:"swipe",attrs:{loop:this.loop,indicatorColor:"white",duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators},class:S("swipe"),on:{change:this.setActive},nativeOn:{touchstart:this.onWrapperTouchStart,touchMove:c["c"],touchend:this.onWrapperTouchEnd,touchcancel:this.onWrapperTouchEnd}},[this.images.map(function(s,n){return i(C,[i(u["a"],{attrs:{src:s,fit:"contain",lazyLoad:t.lazyLoad},class:S("image"),scopedSlots:e,style:n===t.active?t.imageStyle:null,nativeOn:{touchstart:t.onImageTouchStart,touchmove:t.onImageTouchMove,touchend:t.onImageTouchEnd,touchcancel:t.onImageTouchEnd}})])})])}},render:function(){var t=arguments[0];if(this.value)return t("transition",{attrs:{name:"van-fade"}},[t("div",{class:[S(),this.className]},[this.genImages(),this.genIndex(),this.genCover()])])}}),_=e("a142"),z={loop:!0,images:[],value:!0,minZoom:1/3,maxZoom:3,className:"",onClose:null,onChange:null,lazyLoad:!1,showIndex:!0,asyncClose:!1,startPosition:0,swipeDuration:500,showIndicators:!1,closeOnPopstate:!1},$=function(){O=new(n["a"].extend(M))({el:document.createElement("div")}),document.body.appendChild(O.$el),O.$on("change",function(t){O.onChange&&O.onChange(t)})},k=function(t,i){if(void 0===i&&(i=0),!_["d"]){O||$();var e=Array.isArray(t)?{images:t,startPosition:i}:t;return Object(s["a"])(O,z,e),O.$once("input",function(t){O.value=t}),e.onClose&&O.$once("close",e.onClose),O}};k.install=function(){n["a"].use(M)};i["a"]=k},3033:function(t,i,e){},"41b3":function(t,i,e){"use strict";var s=e("3033"),n=e.n(s);n.a},4598:function(t,i,e){"use strict";(function(t){e.d(i,"a",function(){return h});var s=e("a142"),n=Date.now();function o(t){var i=Date.now(),e=Math.max(0,16-(i-n)),s=setTimeout(t,e);return n=i+e,s}var a=s["d"]?t:window,c=a.requestAnimationFrame||o;a.cancelAnimationFrame||a.clearTimeout;function r(t){return c.call(a,t)}function h(t){r(function(){r(t)})}}).call(this,e("c8ba"))},"6a63":function(t,i,e){},a06f:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"nodata"},[e("p",[t._v("暂无数据")])])}],o={name:"no_data"},a=o,c=(e("41b3"),e("2877")),r=Object(c["a"])(a,s,n,!1,null,"2718f33f",null);i["a"]=r.exports}}]);
//# sourceMappingURL=chunk-6303c37c.e7358a09.js.map