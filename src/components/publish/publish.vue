<template>
<div>
    <div class="header">
        <div class="goBack" @click="goBack()">
            <span class="iconfont icon-fanhui1"></span>
        </div>
        <p>发布信息</p>

        <span class="btn" @click="sure()">发布</span>
    </div>
    <div class="container">
        <div class="mainFlex"  v-if="goods_style_falg">
            <p class="title">交易类型</p>
            <div @click="todeal()">
                <input type="text" placeholder="请选择交易类型" readonly="readonly" :value="selDeal.name">
                <span class="iconfont icon-xiayibu" ></span>
            </div>
            <span class="leftIcon">*</span>
        </div>
        <div class="mainFlex">
            <p class="title">{{typeName}}</p>
            <div @click="toType()">
                <input type="text" :placeholder="typePlace" readonly="readonly" :value="selType.name">
                <span class="iconfont icon-xiayibu" ></span>
            </div>
             <span class="leftIcon">*</span>
        </div>
        <div class="mainFlex">
            <p class="title">标题</p>
            <div>
                <input type="text" placeholder="请输入信息要点，20字以内" v-model="goods_name">
<!--                <span class="iconfont icon-xiayibu"></span>-->
            </div>
             <span class="leftIcon">*</span>
        </div>
        <div class="main">
            <p>商品图片</p>
            <div class="imgUli">
                <div class="imgLi" v-for="(items,index) in image" :key="index">
                    <img :src="items" alt="">
                </div>
                <div class="addImg" v-if="image.length < 10">
                    <span class="iconfont icon-add"></span>
                    <p>添加图片</p>
                    <input type="file" @change="zzUrl($event)">
                </div>

            </div>
        </div>
        <div class="mainFlex">
            <p class="title">单位</p>
            <div>
<!--                <input type="text" placeholder="请输入信息要点" readonly="readonly" :value="selUnit.name" >-->
                <span>{{selUnit.name}}</span>
                <span class="iconfont icon-xiayibu" @click="toUnit()"></span>
            </div>
             <span class="leftIcon">*</span>
        </div>
        <div class="mainFlex">
            <p class="title">数量</p>
            <div>
                <input type="number" placeholder="请输入数量" v-model="num" readonly="readonly" @click="numFlag = true">
                <span>{{selUnit.name}}</span>
            </div>
             <span class="leftIcon">*</span>
        </div>
        <div class="mainFlex">
            <p class="title">价格</p>
            <div>
                <input type="number" placeholder="如不填写默认面议" v-model="price" readonly="readonly" @click="priceFlag = true">
                <span>元/{{selUnit.name}}</span>
            </div>
        </div>
        <div class="mainFlex">
            <p class="title">联系电话</p>
            <div>
                <input type="text" placeholder="请输入电话" v-model="phone" readonly="readonly" @click="phoneFlag = true">
            </div>
            <span class="leftIcon">*</span>
        </div>
        <div class="mainFlex">
            <p class="title">位置</p>
            <div>
               <div @click="gain()">
                   {{selCity == ""?'请选择':selCity}}
               </div>
            </div>
            <span class="leftIcon">*</span>
        </div>

        <div class="mainFlex">
            <p class="title">详细地址</p>
            <div>
                <input type="text" placeholder="请输入详细地址" v-model="addressName" readonly="readonly" @click="addressFlag = true">
            </div>
            <span class="leftIcon">*</span>
        </div>
        <div class="main">
            <p class="title">描述</p>
            <div>
                <textarea type="text" :placeholder="place"  v-model="description" readonly="readonly" @click="descriptionFlag = true">
                </textarea>
            </div>
        </div>
    </div>
        <chooseType v-if="choose_flag" :item="goodsType01" @chotype="chotype" @dismiss="dismiss" :typeTit="typeName"></chooseType>
        <chooseUnit v-if="unit_flag" :item="unitType01" @chotype="chouni" @dismiss="dismiss"></chooseUnit>
        <chooseDeal v-if="deal_flag" :item="goods_style_arr" @chotype="chodeal" @dismiss="dismiss"></chooseDeal>
        <cityCompontents v-if="show" :location="location" @confirmSure="confirmSure" @alertMiss="alertMiss"></cityCompontents>

    <inp :title="num"  type="number" v-if="numFlag" @dismiss="dismissInp" @sureValue="sureValuenum"></inp>
    <inp :title="price" type="number" v-if="priceFlag" @dismiss="dismissInp" @sureValue="sureValueprice"></inp>
    <inp :title="phone" type="number" v-if="phoneFlag" @dismiss="dismissInp" @sureValue="sureValuephone"></inp>
    <inp :title="addressName" type="text" v-if="addressFlag" @dismiss="dismissInp" @sureValue="sureValueaddr"></inp>
    <text_inp :title="description"  v-if="descriptionFlag" @dismiss="dismissInp" @sureValue="sureValuedescription"></text_inp>

    </div>
</template>

<script>
    import chooseType from "../../compomtent/type/type";
    import chooseUnit from "../../compomtent/unit/unit"
    import chooseDeal from "../../compomtent/deal/deal";
    import { Toast } from 'vant';
    import { Dialog } from 'vant';
    import cityCompontents from '../../compomtent/city/city';
    import inp from '../../compomtent/inp/inp';
    import text_inp from '../../compomtent/inp/text';

    export default {
        name: "publish",
        components:{
            chooseType,
            chooseUnit,
            chooseDeal,
            cityCompontents,
            inp,
            text_inp
        },
        data(){
            return {
                numFlag:false,
                priceFlag:false,
                phoneFlag:false,
                addressFlag:false,
                descriptionFlag:false,
                show:false,
                choose_flag:false,
                unit_flag:false,
                deal_flag:false,
                goodsType01:[], //土地类型
                unitType01:[], //单位
                selType:{

                }, //选择类型
                selUnit:{

                },//选择单位
                selDeal:{

                },
                goods_name:"",
                image:[],
                goods_style:1,
                userId:"",
                creat_time:"",
                sex:"",
                age:"",
                description:"",
                type_choose:"",
                addr:"",  //详细地址
                goods_style_xi:"", //交易类型
                goods_style_arr:[], //交易类型
                goods_style_falg:false, //是否显示
                title:"",
                num:"", //数量
                phone:"",
                price:"",
                typeName:"", //类型
                typePlace:"", //类型
                place:"",//place
                address:{
                    province_id:"",
                    city_id:"",
                    area_id:"",
                    addr:"",
                    longitude:"",
                    latitude:""

                },
                sureFalg:true,
                selId:{

                },
                selCity:"",
                addressName:"",
                location:{

                }



            }
        },
        created(){

         this.$set(this.selId, 'province', localStorage.getItem("province_id"));
         this.$set(this.selId, 'city', localStorage.getItem("city_id"));
         this.$set(this.selId, 'area', localStorage.getItem("area_id"));
         var address_name = localStorage.getItem("address_name");
         var province_name = localStorage.getItem("province_name");
         var city_name = localStorage.getItem("city_name");
         var area_name = localStorage.getItem("area_name");
          this.$set(this.location, 'address', address_name);
        this.$set(this.location, 'province', province_name);
        this.$set(this.location, 'city',  city_name);
        this.$set(this.location, 'area', area_name);
        console.log(province_name)
         this.selCity = province_name + city_name + area_name ;
        //    单位
            this.unit();
           this.type_choose = this.$route.query.id;
           this.creat_time = (new Date()).getTime();
           console.log(this.creat_time)
           console.log(localStorage.getItem("type"));
           this.goods_style = localStorage.getItem("type");
           this.userId = localStorage.getItem("userId");
           var goods_style_arr = [];
           var type = 1;
           console.log(this.type_choose);
           if(this.type_choose  == 1){
               this.goods_style_arr =[
                   {
                       id:1,
                       name:"土地出租"
                   },
                   {
                       id:2,
                       name:"土地出让"
                   }
               ]
               this.goods_style_falg = true;
               this.title = "土地出租/出让信息发布";
               this.typeName="土地类型";
               this.place="描述您土地等级及相关配套设施信息，有助于提供精准服务达成合作";
               this.typePlace="请选择土地类型";
               type = 1;

           }else if(this.type_choose  == 2){
               this.goods_style_arr =[
                   {
                       id:3,
                       name:"求租"
                   },
                   {
                       id:4,
                       name:"购买"
                   }
               ]
               this.goods_style_falg = true;
               this.title = "农机具求租/购买信息发布";
               this.typeName="农机具类型";
               this.place="描述您求租或购买农机具品牌、参数及其他服务要求，有助于达成合作";
               type = 2;
               this.typePlace="请选择农机具类型";

           }else if(this.type_choose  == 3){
               this.title = "农副产品销售信息发布";
               this.typeName="农副产品类型";
               this.place="描述您销售产品的详细名称、种类、质量等内容，有助于达成合作"
               this.typePlace="请选择农副产品类型";
               type = 3;

           }else if(this.type_choose  == 4){
               this.title = "求购农资信息发布";
               this.typeName="农资类型";
               this.place="描述您求购农资的详细名称、种类、质量、参数及其他服务要求，有助于达成合作"
               this.typePlace="请选择农资类型";
               type = 4;

           }else if(this.type_choose  == 5){
               this.title = "订单种植信息发布";
               this.typeName="订单种植类型";
               this.place="详细描述您订单种植意向，有助于达成合作";
               this.typePlace="请选择订单种植类型";
               type = 3;

           }else if(this.type_choose  == 6){


           }else if(this.type_choose  == 11){
               this.goods_style_arr =[
                   {
                       id:11,
                       name:"承包"
                   },
                   {
                       id:12,
                       name:"流转"
                   }
               ]
               this.goods_style_falg = true;
               this.title = "土地承包/流转信息发布";
               this.typeName="土地类型";
               this.place="描述您承包或流转土地等级和要求及相关配套设施信息，有助于达成合作";
               this.typePlace="请选择土地类型";
               type = 1;

           }else if(this.type_choose  == 12){
               this.goods_style_arr =[
                   {
                       id:13,
                       name:"出租"
                   },
                   {
                       id:14,
                       name:"销售"
                   }
               ]
               this.goods_style_falg = true;
               this.title = "农机具出租/销售信息发布";
               this.typeName="农机具类型";
               this.place="描述您出租或销售农机具品牌、参数及其他服务内容，有助于达成合作";
               this.typePlace="请选择农机具类型";
               type = 2;

           }else if(this.type_choose  == 13){
               this.title = "农副产品收购信息发布";
               this.typeName="农副产品类型";
               this.place="描述您收购产品详细名称、种类、质量及要求等内容，有助于达成合作";
               this.typePlace="请选择农副产品类型";
               type = 3;

           }else if(this.type_choose  == 14){
               this.title = "销售农资信息发布";
               this.typeName="农资类型";
               this.place="描述您销售农资的详细名称、种类、质量、参数及其他服务，有助于达成合作";
               this.typePlace="请选择农资类型";
               type = 4;

           }else if(this.type_choose  == 15){
               this.title = "订单回购信息发布";
               this.typeName="订单回购类型";
               this.place="详细描述您订单回购产品种类、质量及其他要求，有助于达成合作";
               this.typePlace="请选择订单回购类型";
               type = 3;

           }else if(this.type_choose  == 16){


           }
            // 土地类型
            this.type(type);
             console.log(localStorage.getItem("province_name"));

        },
        mounted(){
            console.log(localStorage.getItem("province_name"));

        },
        methods:{
        	 alertMiss(){
               this.show = false
            },
            dismissInp(){
                this.numFlag = false;
                this.priceFlag = false;
                    this.phoneFlag = false;
                    this.addressFlag =false;
                    this.descriptionFlag =false;
            },
            sureValuenum(val){
                this.numFlag = false;
                this.priceFlag = false;
                this.phoneFlag = false;
                this.addressFlag =false;
                this.descriptionFlag =false;
              this.num = val;
            },
            sureValueprice(val){
                this.numFlag = false;
                this.priceFlag = false;
                this.phoneFlag = false;
                this.addressFlag =false;
                this.descriptionFlag =false;
                this.price = val;
            },
            gain(){
                this.show = true
            },
            sureValuephone(val){
                this.numFlag = false;
                this.priceFlag = false;
                this.phoneFlag = false;
                this.addressFlag =false;
                this.descriptionFlag =false;
                this.phone = val;
            },
            sureValueaddr(val){
                this.numFlag = false;
                this.priceFlag = false;
                this.phoneFlag = false;
                this.addressFlag =false;
                this.descriptionFlag =false;
                this.addressName = val
            },
            sureValuedescription(val){
                this.numFlag = false;
                this.priceFlag = false;
                this.phoneFlag = false;
                this.addressFlag =false;
                this.descriptionFlag =false;
                this.description = val
            },
            confirmSure(obj){
                this.show = false;
                this.$set(this.selId,"province",obj.province);
                this.$set(this.selId,"city",obj.city);
                this.$set(this.selId,"area",obj.area);
                this.selCity =obj.address
            },
            //发布信息
            sure(){
                var _this = this;
                //交易类型
                if(this.goods_style_falg){
                //    selDeal.name
                    if(this.selDeal.id == ""){
                        Dialog({ message: '请选择交易类型',confirmButtonColor:"#1bb339" });
                        return false;
                    }
                }
                if(this.selType.id && this.selType.id !=""){


                }else{
                    Dialog({ message: '请选择'+this.typeName,confirmButtonColor:"#1bb339" });
                    return false;
                }
                if(this.goods_name == ""){
                    Dialog({ message: '请输入标题',confirmButtonColor:"#1bb339" });
                    return false;
                }
                if(this.num == ""){
                    Dialog({ message: '请输入数量',confirmButtonColor:"#1bb339" });
                    return false;
                }


                if(this.phone == ""){
                    // $.toast("", "forbidden");
                    Dialog({ message: '请输入手机号',confirmButtonColor:"#1bb339" });
                    return false;
                }else{
                    if(!(/^1[3456789]\d{9}$/.test(this.phone))){
                        Dialog({ message: '手机号码有误，请重填',confirmButtonColor:"#1bb339" });
                        // $.toast("手机号码有误，请重填", "forbidden");
                        return false;
                    }
                }
                if(this.sureFalg){
                    this.sureFalg = false;
                }else{
                    return false
                }


                this.ajax.post(this.mainUrl+ "goods/Goods/release", this.qs.stringify({
                        goods_name:this.goods_name,
                        goods_style_xi:this.selDeal.id,
                        transa_id:this.selType.id,
                        image:this.image.join(","),
                        unit:this.selUnit.id,
                        num:this.num,
                        price:this.price,
                        phone:this.phone,
                        province_id:this.selId.province,
                        city_id:this.selId.city,
                        area_id:this.selId.area,
                        addr:this.addressName,
                        longitude:"",
                        latitude:"",
                        description:this.description,
                        release_style:this.goods_style == 1?2:1,
                        goods_style:this.type_choose,
                        user_id:this.userId,
                        creat_time:this.creat_time,
                        sex:"",
                        age:""
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    // console.log(response.data)
                    _this.sureFalg = true;
                    if(res.data.code == 0){
                        // alert("1")

                        Toast.success('发布成功');
                        setTimeout(function(){
                            _this.$router.replace({
                                path:"/mainroute/index"
                            })
                            },1000

                        )


                    }else{
                        Dialog({ message: res.data.msg,confirmButtonColor:"#1bb339" });
                    }


                }).catch(()=>{
                    // console.log(response)
                })
            },
            //上传图片
            zzUrl(e){
                var reader = new FileReader();
                var _this = this;
                reader.onload = (function () {
                    return function () {
                        // console.info(this.result); //这个就是base64的数据了
                        _this.upLoad(this.result);
                        // var sss=$("#showImage");
                        // $("#showImage")[0].src=this.result;
                    };
                })(e.target.files[0]);
                reader.readAsDataURL(e.target.files[0]);
            },
            upLoad(imgUrl){
                var _this = this;
                this.ajax.post(this.mainUrl+ "upload/Upload/base64_image_upload",
                    this.qs.stringify({
                        base64:imgUrl
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((result)=>{

                    if(result.data.code == 0) {
                            _this.$set(_this.image,_this.image.length, result.data.data.imageSrc)


                    }else{
                        Dialog({ message: result.data.msg,confirmButtonColor:"#1bb339" });
                    }

                }).catch(()=>{
                    // console.log(response)
                })

            },
            //弹框取消
            dismiss(){
                this.choose_flag = false;
                this.unit_flag = false;
                this.deal_flag=false
            },
            goBack(){
                this.$router.go(-1)
            },
            //单位
            unit(){
                var _this = this;
                this.ajax.post(this.mainUrl+ "goods/Goods/goodsUnit", {
                    },
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    // console.log(response.data)
                    if(res.data.code == 0){
                        // alert("1")
                            _this.unitType01 = res.data.data
                        _this.$set(_this.selUnit,"name",res.data.data[0].unit_name);
                        _this.$set(_this.selUnit,"id",res.data.data[0].unit_id)



                    }else{
                        Dialog({ message: res.data.msg,confirmButtonColor:"#1bb339" });
                    }


                }).catch(()=>{
                    // console.log(response)
                })
            },
            //类型
            type(num){
                var _this = this;
                this.ajax.post(this.mainUrl+ "goods/Goods/goodsType", this.qs.stringify({
                        type:num
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    // console.log(response.data)
                    if(res.data.code == 0){
                        // alert("1")lse{
                            _this.goodsType01 = res.data.data



                    }else{
                        Dialog({ message: res.data.msg,confirmButtonColor:"#1bb339" });
                    }


                }).catch(()=>{
                    // console.log(response)
                })
            },
            ////去选择交易类型
            todeal(){
                this.deal_flag = true
            },
            //去选择土地
            toType(){
                this.choose_flag = true
            },
            //去选择单位
            toUnit(){
                this.unit_flag = true
            },
            //已经选择
            chotype(obj){
                this.selType = obj;
                console.log(JSON.stringify(obj));
                this.choose_flag = false
            },
        //    已经选择 单位
            chouni(obj){
                console.log("dkk")
                this.selUnit = obj;
                console.log(JSON.stringify(obj));
                this.unit_flag = false
            },
            chodeal(obj){
                this.selDeal = obj;
                console.log(JSON.stringify(obj));
                this.deal_flag = false
            }
        }
    }
</script>

<style scoped>
    .btn{
        padding: 0.2rem;
        background: #70ba2f;
        color: #ffffff;
        position: absolute;
        right: 0.24rem;
        border-radius: 0.2rem;
    }
    .imgUli{
        overflow: hidden;
    }
    .imgLi{
        width: 2.34rem;
        height: 2.34rem;
        margin-right: 0.2rem;
        float: left;
    }
    .imgLi img{
        width: 100%;
        height: 100%;
    }
    .addImg{
        position: relative;
        border: 1px dashed #d8d8d8;
        width: 2.34rem;
        float: left;
        height: 2.34rem;
        text-align: center;
    }
    .addImg span{
        font-size: 1rem;
        color: #d8d8d8;
        margin-top: 0.2rem;
        line-height: 1.6rem;
    }
    .addImg p{
        color: #d8d8d8;
    }
    .addImg input{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0;
    }
    body{
        background: #f4f4f4;
    }
    .header{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        height: 1.17rem;
        padding: 0 0.53rem;
        background: #f5f5f5;
        font-size: 0.4rem;
    }
    .goBack{
        height: 0.53rem;
        line-height: 0.53rem;
        position: absolute;
        top: 0.32rem;
        left: 0.53rem;
    }
    .goBack span{
        display: block;
        color: #999999;
        font-size: 0.53rem;
    }
    .header p{
        width: 100%;
        color: #000;
        font-size: 0.4rem;
        text-align: center;
    }
    .container{
        padding-top: 1.17rem;
    }
    .mainFlex{
        height: 1.28rem;
        display: flex;
        align-items: center;
        padding: 0 0.53rem;
        font-size: 0.37rem;
        margin-bottom: 0.26rem;
        background: #ffffff;
        border-top: 1px solid #f3f3f3;
        position: relative;
    }
    .main{
        padding: 0 0.53rem;
        font-size: 0.37rem;
        margin-bottom: 0.26rem;
        background: #ffffff;
        border-top: 1px solid #f3f3f3;
        padding-bottom: 0.26rem;
    }
    .main>p{
        line-height: 1rem;
    }
    .mainFlex .title{
        flex: 1;
    }
    .mainFlex input{
        height: 1.28rem;
        line-height: 1.28rem;
        border: none;
        text-align: right;
        width: 50vw;
    }
    textarea{
        resize:none;
        border: none;
        width: 100%;
    }
    .leftIcon{
    position:absolute;
    left:0.2rem;
    color:red;
    }
</style>
