<template>
    <div>
        <div class="header">
            <div class="goBack" @click="goBack()">
                <span class="iconfont icon-fanhui1"></span>
            </div>
            <p>{{title}}</p>

            <span class="btn" @click="sure()">保存</span>
        </div>
        <div class="container">
            <div class="mainFlex">
                <p class="title">性别</p>
                <div @click="toSex">
                    <input type="text" placeholder="请选择" v-model="selSex.name" readonly="readonly">
                    <span class="iconfont icon-xiayibu" ></span>
                </div>
                <span class="leftIcon">*</span>
            </div>
            <div class="mainFlex">
                <p class="title">年龄</p>
                <div>
                    <input type="number" placeholder="请输入" v-model="age">
                </div>
                 <span class="leftIcon">*</span>
            </div>
            <div class="mainFlex">
                <p class="title">工作内容</p>
                <div>
                    <input type="text" placeholder="请输入您的具体工作内容要求，有助于达成合作" v-model="goods_content">
                    <!--                <span class="iconfont icon-xiayibu"></span>-->
                </div>
                <span class="leftIcon">*</span>
            </div>
            <div class="main">
                <p>图片</p>
                <div class="imgUli">
                    <div class="imgLi" v-for="(items,index) in image" :key="index">
                        <img :src="items" alt="">
                    </div>
                    <div class="addImg">
                        <span class="iconfont icon-add"></span>
                        <p>添加图片</p>
                        <input type="file" @change="zzUrl($event)">
                    </div>

                </div>

            </div>
            <div class="mainFlex">
                <p class="title">工资</p>
                <div>
                    <input type="number" placeholder="如不填写默认面议" v-model="price" readonly="readonly" @click="priceFlag = true">
                    <span>元</span>
                </div>
                <span class="leftIcon">*</span>
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
                    <textarea type="text" :placeholder="place"   v-model="description" readonly="readonly" @click="descriptionFlag = true"> </textarea>
                </div>
            </div>


        </div>
        <sexComponent v-if="flag" @chotype="chooseSex" @dismiss="dismiss"></sexComponent>
        <cityCompontents v-if="show" :location="location" @confirmSure="confirmSure" @alertMiss="alertMiss"></cityCompontents>
        <inp :title="price" type="number" v-if="priceFlag" @dismiss="dismissInp" @sureValue="sureValueprice"></inp>
        <inp :title="phone"type="number"  v-if="phoneFlag" @dismiss="dismissInp" @sureValue="sureValuephone"></inp>
        <inp :title="addressName" type="text" v-if="addressFlag" @dismiss="dismissInp" @sureValue="sureValueaddr"></inp>
        <text_inp :title="description"  v-if="descriptionFlag" @dismiss="dismissInp" @sureValue="sureValuedescription"></text_inp>
    </div>
</template>

<script>
    import sexComponent from "../../compomtent/sex/sex";
    import { Toast } from 'vant';
    import { Dialog } from 'vant';
    import cityCompontents from '../../compomtent/city/city';
    import inp from '../../compomtent/inp/inp';
    import text_inp from '../../compomtent/inp/text';
    export default {
        name: "publish_person_edit",
        components:{
            sexComponent,
            cityCompontents,
            inp,
            text_inp
        },
        data(){
            return {
                flag:false,
                sex:"",
                age:"",
                image:[],
                goods_content:[],
                price:"",
                phone:"",
                selSex:{

                },
                type_choose:"",
                userId:"",
                goods_style:"",
                address:{
                    province_id:"",
                    city_id:"",
                    area_id:"",
                    addr:"",
                    longitude:"",
                    latitude:""

                },
                description:"",
                place:"请输入描述",
                sureFalg:true,
                goods_id:"",
                 selId:{

                },
                selCity:"",
                addressName:"",
                 location:{

                },
                show:false,
                priceFlag:false,
                phoneFlag:false,
                addressFlag:false,
                descriptionFlag:false,

            }
        },
        created(){
            var address_name = localStorage.getItem("address_name");
            var province_name = localStorage.getItem("province_name");
            var city_name = localStorage.getItem("city_name");
            var area_name = localStorage.getItem("area_name");
            this.$set(this.location, 'address', address_name);
            this.$set(this.location, 'province', province_name);
            this.$set(this.location, 'city',  city_name);
            this.$set(this.location, 'area', area_name);
        this.$set(this.selId, 'province', localStorage.getItem("province_id"));
         this.$set(this.selId, 'city', localStorage.getItem("city_id"));
         this.$set(this.selId, 'area', localStorage.getItem("area_id"));
            this.selCity =  this.$route.query.province_name + this.$route.query.city_name +this.$route.query.area_name;
            this.$set(this.selId, 'province', this.$route.query.province_id);
            this.$set(this.selId, 'city',this.$route.query.city_id);
            this.$set(this.selId, 'area', this.$route.query.area_id);
            this.addressName   =   this.$route.query.addr;

            console.log(this.$route.query);
            this.type_choose = this.$route.query.goods_style;
            this.creat_time = (new Date()).getTime();
            console.log(localStorage.getItem("type"));
            this.goods_style = localStorage.getItem("type");
            this.userId = localStorage.getItem("userId");
            if(this.$route.query.sex ==  0){
                this.$set(this.selSex,"index",0);
                this.$set(this.selSex,"name","女")
            }else{
                this.$set(this.selSex,"index",1);
                this.$set(this.selSex,"name","男")
            }
            this.age = this.$route.query.age;
            this.description = this.$route.query.description;
            this.goods_content = this.$route.query.goods_name;
            this.image = this.$route.query.image;
            console.log(typeof(this.image));
            this.price = this.$route.query.price;
            this.phone = this.$route.query.phone;
            this.goods_id = this.$route.query.goods_id;

            if(this.type_choose  == 6){
                this.title = "打工信息发布";

            }else{
                this.title = "用工信息发布";
            }
        },
        methods:{
        	 alertMiss(){
               this.show = false
            },
            dismissInp(){
                this.priceFlag = false;
                this.phoneFlag = false;
                this.addressFlag = false;
                this.descriptionFlag = false;

            },
            sureValueprice(val){
                this.priceFlag = false;
                this.phoneFlag = false;
                this.addressFlag = false;
                this.descriptionFlag = false;
                this.price = val;
            },
            sureValueaddr(val){
                this.priceFlag = false;
                this.phoneFlag = false;
                this.addressFlag = false;
                this.descriptionFlag = false;
                this.addressName = val;
            },
            sureValuephone(val){
                this.priceFlag = false;
                this.phoneFlag = false;
                this.addressFlag = false;
                this.descriptionFlag = false;
                this.phone = val;
            },
            sureValuedescription(val){
                this.priceFlag = false;
                this.phoneFlag = false;
                this.addressFlag = false;
                this.descriptionFlag = false;
                this.description = val;
            },
            gain(){
                this.show = true
            },
        confirmSure(obj){
                this.show = false;
                this.$set(this.selId,"province",obj.province);
                this.$set(this.selId,"city",obj.city);
                this.$set(this.selId,"area",obj.area);
                this.selCity =obj.address
            },
            goBack(){
                this.$router.go(-1)
            },
            toSex(){
                this.flag = true
            },
            dismiss(){
                this.flag = false
            },
            chooseSex(index){
                if(index == 0){
                    this.$set(this.selSex,"index",0);
                    this.$set(this.selSex,"name","女")
                }else{
                    this.$set(this.selSex,"index",1);
                    this.$set(this.selSex,"name","男")
                }
                console.log(this.selSex);
                this.flag = false
            },
            //    发布
            //发布信息
            sure(){
                var _this = this;
                if(this.selSex.name && this.selSex.name != ""){


                }else{
                    Dialog({ message: '请选择性别',confirmButtonColor:"#1bb339" });
                    return false;
                }
                if(this.age == ""){
                    Dialog({ message: '请输入年龄',confirmButtonColor:"#1bb339" });
                    return false;

                }
                if(this.goods_content == ""){
                    Dialog({ message: '请输入工作内容',confirmButtonColor:"#1bb339" });
                    return false;

                }
                if(this.price == ""){
                    Dialog({ message: '请输入工资',confirmButtonColor:"#1bb339" });
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

                this.ajax.post(this.mainUrl+ "goods/Goods/releaseUpdate", this.qs.stringify({
                        goods_name:this.goods_content,
                        goods_style_xi:"",
                        transa_id:"",
                        image:this.image.join(","),
                        unit:"",
                        num:"",
                        price:this.price,
                        phone:this.phone,
                        province_id:this.selId.province,
                        city_id:this.selId.city,
                        area_id:this.selId.area,
                        addr:this.addressName,
                        longitude:this.address.longitude,
                        latitude:this.address.longitude,
                        description:this.description,
                        release_style:this.goods_style == 1?2:1,
                        goods_style:this.type_choose,
                        user_id:this.userId,
                        creat_time:this.creat_time,
                        sex:this.selSex.name,
                        age:this.age,
                        goods_id:this.goods_id
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    // console.log(response.data)
                    this.sureFalg = true;
                    if(res.data.code == 0){
                        // alert("1")

                        Toast.success('发布成功');
                        setTimeout(function(){
                                _this.$router.back()
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
                    alert(result);

                    if(result.data.code == 0) {
                        _this.$set(_this.image,_this.image.length, result.data.data.imageSrc)


                    }else{
                        Dialog({ message: result.data.msg,confirmButtonColor:"#1bb339" });
                    }

                }).catch(()=>{
                    // console.log(response)
                })

            },
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
        width:100%
    }
    .leftIcon{
    position:absolute;
    left:0.2rem;
    color:red;
    }
</style>
