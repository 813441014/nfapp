(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-361d54ea"],{"0acb":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"type_div"},[s("div",{staticClass:"header"},[s("div",{staticClass:"goBack",on:{click:function(e){return e.stopPropagation(),t.dismiss()}}},[t._v("\n            取消\n        ")]),s("p",[t._v("选择单位")]),s("span",{staticClass:"btn",on:{click:function(e){return t.sure()}}},[t._v("确定")])]),s("div",{staticClass:"uli"},t._l(t.item,function(e,i){return s("div",{key:i,staticClass:"list",class:t.active_index==i?"active":"",on:{click:function(e){return t.tap(i)}}},[s("p",[t._v(t._s(e.unit_name))])])}),0)])},a=[],n={name:"type",props:["item"],data:function(){return{active_index:0,obj:{}}},methods:{tap:function(t){this.active_index=t},sure:function(){this.$set(this.obj,"name",this.item[this.active_index].unit_name),this.$set(this.obj,"id",this.item[this.active_index].unit_id),this.$emit("chotype",this.obj)},dismiss:function(){this.$emit("dismiss")}}},o=n,l=(s("5f56"),s("2877")),c=Object(l["a"])(o,i,a,!1,null,"365c37aa",null);e["a"]=c.exports},"0fa9":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header"},[s("div",{staticClass:"goBack",on:{click:function(e){return t.goBack()}}},[s("span",{staticClass:"iconfont icon-fanhui1"})]),s("p",[t._v("发布信息")]),s("span",{staticClass:"btn",on:{click:function(e){return t.sure()}}},[t._v("修改")])]),s("div",{staticClass:"container"},[t.goods_style_falg?s("div",{staticClass:"mainFlex"},[s("p",{staticClass:"title"},[t._v("交易类型")]),s("div",{on:{click:function(e){return t.todeal()}}},[s("input",{attrs:{type:"text",placeholder:"请选择交易类型",readonly:"readonly"},domProps:{value:t.selDeal.name}}),s("span",{staticClass:"iconfont icon-xiayibu"})]),s("span",{staticClass:"leftIcon"},[t._v("*")])]):t._e(),s("div",{staticClass:"mainFlex"},[s("p",{staticClass:"title"},[t._v(t._s(t.typeName))]),s("div",{on:{click:function(e){return t.toType()}}},[s("input",{attrs:{type:"text",placeholder:t.typePlace,readonly:"readonly"},domProps:{value:t.selType.name}}),s("span",{staticClass:"iconfont icon-xiayibu"})]),s("span",{staticClass:"leftIcon"},[t._v("*")])]),s("div",{staticClass:"mainFlex"},[s("p",{staticClass:"title"},[t._v("标题")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.goods_name,expression:"goods_name"}],attrs:{type:"text",placeholder:"请输入信息要点，20字以内"},domProps:{value:t.goods_name},on:{input:function(e){e.target.composing||(t.goods_name=e.target.value)}}})]),s("span",{staticClass:"leftIcon"},[t._v("*")])]),s("div",{staticClass:"main"},[s("p",[t._v("商品图片")]),s("div",{staticClass:"imgUli"},[t._l(t.image,function(t,e){return s("div",{key:e,staticClass:"imgLi"},[s("img",{attrs:{src:t,alt:""}})])}),t.image.length<10?s("div",{staticClass:"addImg"},[s("span",{staticClass:"iconfont icon-add"}),s("p",[t._v("添加图片")]),s("input",{attrs:{type:"file"},on:{change:function(e){return t.zzUrl(e)}}})]):t._e()],2)]),s("div",{staticClass:"mainFlex"},[s("p",{staticClass:"title"},[t._v("单位")]),s("div",[s("span",[t._v(t._s(t.selUnit.name))]),s("span",{staticClass:"iconfont icon-xiayibu",on:{click:function(e){return t.toUnit()}}})]),s("span",{staticClass:"leftIcon"},[t._v("*")])]),s("div",{staticClass:"mainFlex"},[s("p",{staticClass:"title"},[t._v("数量")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],attrs:{type:"number",placeholder:"请输入数量",readonly:"readonly"},domProps:{value:t.num},on:{click:function(e){t.numFlag=!0},input:function(e){e.target.composing||(t.num=e.target.value)}}}),s("span",[t._v(t._s(t.selUnit.name))])]),s("span",{staticClass:"leftIcon"},[t._v("*")])]),s("div",{staticClass:"mainFlex"},[s("p",{staticClass:"title"},[t._v("价格")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"number",placeholder:"如不填写默认面议",readonly:"readonly"},domProps:{value:t.price},on:{click:function(e){t.priceFlag=!0},input:function(e){e.target.composing||(t.price=e.target.value)}}}),s("span",[t._v("元/"+t._s(t.selUnit.name))])])]),s("div",{staticClass:"mainFlex"},[s("p",{staticClass:"title"},[t._v("联系电话")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入电话",readonly:"readonly"},domProps:{value:t.phone},on:{click:function(e){t.phoneFlag=!0},input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),s("div",{staticClass:"mainFlex"},[s("p",{staticClass:"title"},[t._v("位置")]),s("div",[s("div",{on:{click:function(e){return t.gain()}}},[t._v("\n               "+t._s(""==t.selCity?"请选择":t.selCity)+"\n           ")])]),s("span",{staticClass:"leftIcon"},[t._v("*")])]),s("div",{staticClass:"mainFlex"},[s("p",{staticClass:"title"},[t._v("详细地址")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.addressName,expression:"addressName"}],attrs:{type:"text",placeholder:"请输入详细地址",readonly:"readonly"},domProps:{value:t.addressName},on:{click:function(e){t.addressFlag=!0},input:function(e){e.target.composing||(t.addressName=e.target.value)}}})]),s("span",{staticClass:"leftIcon"},[t._v("*")])]),s("div",{staticClass:"main"},[s("p",{staticClass:"title"},[t._v("描述")]),s("div",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text",placeholder:t.place,readonly:"readonly"},domProps:{value:t.description},on:{click:function(e){t.descriptionFlag=!0},input:function(e){e.target.composing||(t.description=e.target.value)}}})])])]),t.choose_flag?s("chooseType",{attrs:{item:t.goodsType01,typeTit:t.typeName},on:{chotype:t.chotype,dismiss:t.dismiss}}):t._e(),t.unit_flag?s("chooseUnit",{attrs:{item:t.unitType01},on:{chotype:t.chouni,dismiss:t.dismiss}}):t._e(),t.deal_flag?s("chooseDeal",{attrs:{item:t.goods_style_arr},on:{chotype:t.chodeal,dismiss:t.dismiss}}):t._e(),s("cityCompontents",{attrs:{show:t.show,location:t.location},on:{confirmSure:t.confirmSure}}),t.numFlag?s("inp",{attrs:{title:t.num,type:"number"},on:{dismiss:t.dismissInp,sureValue:t.sureValuenum}}):t._e(),t.priceFlag?s("inp",{attrs:{title:t.price,type:"number"},on:{dismiss:t.dismissInp,sureValue:t.sureValueprice}}):t._e(),t.phoneFlag?s("inp",{attrs:{title:t.phone,type:"number"},on:{dismiss:t.dismissInp,sureValue:t.sureValuephone}}):t._e(),t.addressFlag?s("inp",{attrs:{title:t.addressName,type:"text"},on:{dismiss:t.dismissInp,sureValue:t.sureValueaddr}}):t._e(),t.descriptionFlag?s("text_inp",{attrs:{title:t.description},on:{dismiss:t.dismissInp,sureValue:t.sureValuedescription}}):t._e()],1)},a=[],n=s("f499"),o=s.n(n),l=(s("7f7f"),s("7618")),c=s("30cc"),r=s("0acb"),d=s("3ca2"),h=s("d399"),u=s("2241"),p=s("19b2"),m=s("4a8a"),_=s("0a5f");console.log(m["a"]);var g={name:"publish_edit",components:{chooseType:c["a"],chooseUnit:r["a"],chooseDeal:d["a"],cityCompontents:p["a"],inp:m["a"],text_inp:_["a"]},data:function(){return{choose_flag:!1,unit_flag:!1,deal_flag:!1,goodsType01:[],unitType01:[],selType:{},selUnit:{},selDeal:{},goods_name:"",image:[],goods_style:1,userId:"",creat_time:"",sex:"",age:"",description:"",type_choose:"",addr:"",goods_style_xi:"",goods_style_arr:[],goods_style_falg:!1,title:"",num:"",phone:"",price:"",typeName:"",typePlace:"",place:"",address:{province_id:"",city_id:"",area_id:"",addr:"",longitude:"",latitude:""},sureFalg:!0,goods_id:"",show:!1,selId:{},selCity:"",addressName:"",location:{},numFlag:!1,priceFlag:!1,phoneFlag:!1,addressFlag:!1,descriptionFlag:!1}},created:function(){var t=localStorage.getItem("address_name"),e=localStorage.getItem("province_name"),s=localStorage.getItem("city_name"),i=localStorage.getItem("area_name");this.$set(this.location,"address",t),this.$set(this.location,"province",e),this.$set(this.location,"city",s),this.$set(this.location,"area",i),this.unit(),console.log(this.$route.query),this.type_choose=this.$route.query.goods_style,this.creat_time=(new Date).getTime(),console.log(localStorage.getItem("type")),this.goods_style=localStorage.getItem("type"),this.userId=localStorage.getItem("userId");var a=1;console.log(this.type_choose),this.selCity=this.$route.query.province_name+this.$route.query.city_name+this.$route.query.area_name,this.$set(this.selId,"province",this.$route.query.province_id),this.$set(this.selId,"city",this.$route.query.city_id),this.$set(this.selId,"area",this.$route.query.area_id),this.addressName=this.$route.query.addr,this.description=this.$route.query.description,this.goods_name=this.$route.query.goods_name,this.image=this.$route.query.image,console.log(Object(l["a"])(this.image)),this.price=this.$route.query.price,this.phone=this.$route.query.phone,this.goods_id=this.$route.query.goods_id,this.num=this.$route.query.num,this.$set(this.selUnit,"name",this.$route.query.unit),this.$set(this.selUnit,"id",this.$route.query.unit_name),this.$set(this.selType,"name",this.$route.query.transa_name),this.$set(this.selType,"id",this.$route.query.transa_id),console.log(this.selDeal.name),this.$set(this.selDeal,"id",this.$route.query.goods_style_xi);var n=this.$route.query.goods_style_xi;1==n?this.$set(this.selDeal,"name","土地出租"):2==n?this.$set(this.selDeal,"name","土地出让"):3==n?this.$set(this.selDeal,"name","求租"):4==n?this.$set(this.selDeal,"name","购买"):11==n?this.$set(this.selDeal,"name","承包"):12==n?this.$set(this.selDeal,"name","流转"):13==n?this.$set(this.selDeal,"name","出租"):14==n&&this.$set(this.selDeal,"name","销售"),1==this.type_choose?(this.goods_style_arr=[{id:1,name:"土地出租"},{id:2,name:"土地出让"}],this.goods_style_falg=!0,this.title="土地出租/出让信息发布",this.typeName="土地类型",this.place="描述您土地等级及相关配套设施信息，有助于达成合作",this.typePlace="请选择土地类型",a=1):2==this.type_choose?(this.goods_style_arr=[{id:3,name:"求租"},{id:4,name:"购买"}],this.goods_style_falg=!0,this.title="农机具求租/购买信息发布",this.typeName="农机具类型",this.place="描述您求租或购买农机具品牌、参数及其他服务要求，有助于达成合作",a=2,this.typePlace="请选择农机具类型"):3==this.type_choose?(this.title="农副产品销售信息发布",this.typeName="农副产品类型",this.place="描述您销售产品的详细名称、种类、质量等内容，有助于达成合作",this.typePlace="请选择农副产品类型",a=3):4==this.type_choose?(this.title="求购农资信息发布",this.typeName="农资类型",this.place="描述您求购农资的详细名称、种类、质量、参数及其他服务要求，有助于达成合作",this.typePlace="请选择农资类型",a=4):5==this.type_choose?(this.title="订单种植信息发布",this.typeName="订单种植类型",this.place="详细描述您订单种植意向，有助于达成合作",this.typePlace="请选择订单种植类型",a=3):6==this.type_choose||(11==this.type_choose?(this.goods_style_arr=[{id:11,name:"承包"},{id:12,name:"流转"}],this.goods_style_falg=!0,this.title="土地承包/流转信息发布",this.typeName="土地类型",this.place="描述您承包或流转土地等级和要求及相关配套设施信息，有助于达成合作",this.typePlace="请选择土地类型",a=1):12==this.type_choose?(this.goods_style_arr=[{id:13,name:"出租"},{id:14,name:"销售"}],this.goods_style_falg=!0,this.title="农机具出租/销售信息发布",this.typeName="农机具类型",this.place="描述您出租或销售农机具品牌、参数及其他服务内容，有助于达成合作",this.typePlace="请选择农机具类型",a=2):13==this.type_choose?(this.title="农副产品收购信息发布",this.typeName="农副产品类型",this.place="描述您收购产品详细名称、种类、质量及要求等内容，有助于达成合作",this.typePlace="请选择农副产品类型",a=3):14==this.type_choose?(this.title="销售农资信息发布",this.typeName="农资类型",this.place="描述您销售农资的详细名称、种类、质量、参数及其他服务，有助于达成合作",this.typePlace="请选择农资类型",a=4):15==this.type_choose?(this.title="订单回购信息发布",this.typeName="订单回购类型",this.place="详细描述您订单回购产品种类、质量及其他要求，有助于达成合作",this.typePlace="请选择订单回购类型",a=3):this.type_choose),this.type(a)},methods:{dismissInp:function(){this.numFlag=!1,this.priceFlag=!1,this.phoneFlag=!1,this.addressFlag=!1,this.descriptionFlag=!1},sureValuenum:function(t){this.numFlag=!1,this.priceFlag=!1,this.phoneFlag=!1,this.addressFlag=!1,this.descriptionFlag=!1,this.num=t},sureValueprice:function(t){this.numFlag=!1,this.priceFlag=!1,this.phoneFlag=!1,this.addressFlag=!1,this.descriptionFlag=!1,this.price=t},gain:function(){this.show=!0},sureValuephone:function(t){this.numFlag=!1,this.priceFlag=!1,this.phoneFlag=!1,this.addressFlag=!1,this.descriptionFlag=!1,this.phone=t},sureValueaddr:function(t){this.numFlag=!1,this.priceFlag=!1,this.phoneFlag=!1,this.addressFlag=!1,this.descriptionFlag=!1,this.addressName=t},sureValuedescription:function(t){this.numFlag=!1,this.priceFlag=!1,this.phoneFlag=!1,this.addressFlag=!1,this.descriptionFlag=!1,this.description=t},confirmSure:function(t){this.show=!1,this.$set(this.selId,"province",t.province),this.$set(this.selId,"city",t.city),this.$set(this.selId,"area",t.area),this.selCity=t.address},sure:function(){var t=this;return this.goods_style_falg&&""==this.selDeal.id?(Object(u["a"])({message:"请选择交易类型",confirmButtonColor:"#1bb339"}),!1):this.selType.id&&""!=this.selType.id?""==this.goods_name?(Object(u["a"])({message:"请输入标题",confirmButtonColor:"#1bb339"}),!1):""==this.num?(Object(u["a"])({message:"请输入数量",confirmButtonColor:"#1bb339"}),!1):""==this.phone?(Object(u["a"])({message:"请输入手机号",confirmButtonColor:"#1bb339"}),!1):/^1[3456789]\d{9}$/.test(this.phone)?!!this.sureFalg&&(this.sureFalg=!1,void this.ajax.post(this.mainUrl+"goods/Goods/releaseUpdate",this.qs.stringify({goods_name:this.goods_name,goods_style_xi:this.selDeal.id,transa_id:this.selType.id,image:this.image.join(","),unit:this.selUnit.id,num:this.num,price:this.price,phone:this.phone,province_id:this.selId.province_id,city_id:this.selId.city_id,area_id:this.selId.area_id,addr:this.addressName,longitude:this.address.longitude,latitude:this.address.longitude,description:this.description,release_style:this.goods_style,goods_style:this.type_choose,user_id:this.userId,creat_time:this.creat_time,sex:"",age:"",goods_id:this.goods_id}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){t.sureFalg=!0,0==e.data.code?(h["a"].success("发布成功"),setTimeout(function(){t.$router.back()},1e3)):Object(u["a"])({message:e.data.msg,confirmButtonColor:"#1bb339"})}).catch(function(){})):(Object(u["a"])({message:"手机号码有误，请重填",confirmButtonColor:"#1bb339"}),!1):(Object(u["a"])({message:"请选择"+this.typeName,confirmButtonColor:"#1bb339"}),!1)},zzUrl:function(t){var e=new FileReader,s=this;e.onload=function(){return function(){s.upLoad(this.result)}}(t.target.files[0]),e.readAsDataURL(t.target.files[0])},upLoad:function(t){var e=this;this.ajax.post(this.mainUrl+"upload/Upload/base64_image_upload",this.qs.stringify({base64:t}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){0==t.data.code?e.$set(e.image,e.image.length,t.data.data.imageSrc):Object(u["a"])({message:t.data.msg,confirmButtonColor:"#1bb339"})}).catch(function(){})},dismiss:function(){this.choose_flag=!1,this.unit_flag=!1,this.deal_flag=!1},goBack:function(){this.$router.go(-1)},unit:function(){var t=this;this.ajax.post(this.mainUrl+"goods/Goods/goodsUnit",{},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){0==e.data.code?(t.unitType01=e.data.data,t.$set(t.selUnit,"name",e.data.data[0].unit_name),t.$set(t.selUnit,"id",e.data.data[0].unit_id)):Object(u["a"])({message:e.data.msg,confirmButtonColor:"#1bb339"})}).catch(function(){})},type:function(t){var e=this;this.ajax.post(this.mainUrl+"goods/Goods/goodsType",this.qs.stringify({type:t}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){0==t.data.code?e.goodsType01=t.data.data:Object(u["a"])({message:t.data.msg,confirmButtonColor:"#1bb339"})}).catch(function(){})},todeal:function(){this.deal_flag=!0},toType:function(){this.choose_flag=!0},toUnit:function(){this.unit_flag=!0},chotype:function(t){this.selType=t,console.log(o()(t)),this.choose_flag=!1},chouni:function(t){console.log("dkk"),this.selUnit=t,console.log(o()(t)),this.unit_flag=!1},chodeal:function(t){this.selDeal=t,console.log(o()(t)),this.deal_flag=!1}}},y=g,f=(s("a667"),s("2877")),v=Object(f["a"])(y,i,a,!1,null,"6949ef4c",null);e["default"]=v.exports},"30cc":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"type_div"},[s("div",{staticClass:"header"},[s("div",{staticClass:"goBack",on:{click:function(e){return e.stopPropagation(),t.dismiss()}}},[t._v("\n         取消\n        ")]),s("p",[t._v(t._s(t.typeTit))]),s("span",{staticClass:"btn",on:{click:function(e){return t.sure()}}},[t._v("确定")])]),s("div",{staticClass:"uli"},t._l(t.data_item,function(e,i){return s("div",{key:i,staticClass:"list",class:t.active_index==i?"active":"",on:{click:function(e){return t.tap(i)}}},[s("p",[t._v(t._s(e.transa_name))])])}),0)])},a=[],n={name:"type",props:["item","typeTit"],data:function(){return{active_index:0,obj:{},data_item:this.item}},created:function(){console.log(this.data_item)},watch:{item:function(t,e){this.data_item=t}},methods:{tap:function(t){this.active_index=t},sure:function(){this.$set(this.obj,"name",this.item[this.active_index].transa_name),this.$set(this.obj,"id",this.item[this.active_index].transa_id),this.$emit("chotype",this.obj)},dismiss:function(){this.$emit("dismiss")}}},o=n,l=(s("be56"),s("2877")),c=Object(l["a"])(o,i,a,!1,null,"7f2c47f7",null);e["a"]=c.exports},"369f":function(t,e,s){},"3ca2":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"type_div"},[s("div",{staticClass:"header"},[s("div",{staticClass:"goBack",on:{click:function(e){return e.stopPropagation(),t.dismiss()}}},[t._v("\n            取消\n        ")]),s("p",[t._v("选择交易类型")]),s("span",{staticClass:"btn",on:{click:function(e){return t.sure()}}},[t._v("确定")])]),s("div",{staticClass:"uli"},t._l(t.item,function(e,i){return s("div",{key:i,staticClass:"list",class:t.active_index==i?"active":"",on:{click:function(e){return t.tap(i)}}},[s("p",[t._v(t._s(e.name))])])}),0)])},a=[],n=(s("7f7f"),{name:"type",props:["item"],data:function(){return{active_index:0,obj:{}}},methods:{tap:function(t){this.active_index=t},sure:function(){this.$set(this.obj,"name",this.item[this.active_index].name),this.$set(this.obj,"id",this.item[this.active_index].id),this.$emit("chotype",this.obj)},dismiss:function(){this.$emit("dismiss")}}}),o=n,l=(s("b63d"),s("2877")),c=Object(l["a"])(o,i,a,!1,null,"3a8929b6",null);e["a"]=c.exports},"498e":function(t,e,s){},"5f56":function(t,e,s){"use strict";var i=s("369f"),a=s.n(i);a.a},"953a":function(t,e,s){},a667:function(t,e,s){"use strict";var i=s("498e"),a=s.n(i);a.a},b63d:function(t,e,s){"use strict";var i=s("953a"),a=s.n(i);a.a},be56:function(t,e,s){"use strict";var i=s("fc00"),a=s.n(i);a.a},fc00:function(t,e,s){}}]);
//# sourceMappingURL=chunk-361d54ea.95c241b0.js.map