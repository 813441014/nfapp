<template>
    <div >
        <div class="header">
            <div class="goBack" @click="goback()">
                <span class="iconfont icon-fanhui1"></span>
            </div>
            <p>个人资料</p>
            <span class="btn" @click="edit">修改 </span>
        </div>
        <div class="contentUli">
            <p class="title">
                身份信息编辑以完善{{integrity}}%
            </p>
            <div class="name">
                基础信息
            </div>
            <div class="mainFlex navorFlex">
                <p>我的头像</p>
                <div class="navor">
                    <img :src="head_navor" alt="">
                    <input type="file"  @change="upLoad($event)">
                </div>
            </div>
            <div class="mainFlex">
                <p>我的姓名</p>
                <div class="flexEnd">
                    <input type="text"  v-model="userName">

                </div>
            </div>

            <div class="name">
                行业信息
            </div>
            <div class="mainFlex">
                <p>我的身份</p>
                <div class="flexEnd">
                    <!--                <input type="text" id='city-picker' value="浙江 杭州 拱墅区" />-->
                    <div >{{user_type == 2?'农户':'商家'}}</div>
                </div>
            </div>
            <div class="mainFlex">
                <p>位置</p>
                <div class="flexEnd">
                    <!--                <input type="text" id='city-picker' value="浙江 杭州 拱墅区" />-->
                    <div >{{province_name}}{{city_name}}{{area_name}}</div>
                </div>
            </div>
            <div class="mainFlex">
                <p>地址</p>
                <div class="flexEnd">
                    <!--                <input type="text" id='city-picker' value="浙江 杭州 拱墅区" />-->
                    <div id="">{{address}}</div>
                </div>
            </div>
            <div class="name">
                其他信息
            </div>
            <div class="mainFlex" @click="editPass()">
                <p>修改密码</p>

            </div>
        </div>

    </div>
</template>

<script>
    import { Dialog } from 'vant';
    import { Toast } from 'vant';
    export default {
        name: "person_edit",
        data(){
            return{
                province_name:"",
                city_name:"",
                area_name:"",
                address:"",
                userName:"",
                head_pic:"",
                user_type:"",
                head_navor:"",
                navor01: require("../../assets/image/navor01.png"),
                navor02: require("../../assets/image/navor02.png"),
                integrity:"",
                userId:"",
                src:""

            }
        },
        created(){

           this.province_name =  localStorage.getItem("province_name");
            this.city_name = localStorage.getItem("city_name");
            this.area_name = localStorage.getItem("area_name");
            this.address = localStorage.getItem("address");
            this.userName = localStorage.getItem("userName");
            this.head_pic = localStorage.getItem("head_pic");
            this.user_type = localStorage.getItem("type");
            this.integrity = localStorage.getItem("integrity");
            this.userId = localStorage.getItem("userId");

            if(this.head_pic){
                this.head_navor = this.head_pic
            }else{
                if(this.user_type == 2){
                    this.head_navor =  this.navor01
                }else{
                    this.head_navor =   this.navor02
                }

            }
        },
        methods:{

            goback(){
                this.$router.go(-1)
            },
            upLoad(e){
                var _this = this;
                var reader = new FileReader();
                reader.onload = (function () {
                    return function () {
                        // console.info(this.result); //这个就是base64的数据了
                        _this.Load(this.result);
                        // var sss=$("#showImage");
                        // $("#showImage")[0].src=this.result;
                    };
                })(e.target.files[0]);

                reader.readAsDataURL(e.target.files[0]);
            },
            Load(imgUrl){
                var _this = this;
                this.ajax.post(this.mainUrl+ "upload/Upload/base64_image_upload",
                    this.qs.stringify({
                        base64:imgUrl
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((result)=>{

                    if(result.data.code == 0) {
                        localStorage.setItem("head_pic",result.data.data.imageSrc);
                        _this.head_navor = result.data.data.imageSrc;
                        _this.src = result.data.data.imageSrc;
                    }else{
                        Dialog({ message: result.data.msg,confirmButtonColor:"#1bb339" });
                    }

                }).catch(()=>{
                    // console.log(response)
                })

            },
            edit(){
                var _this= this;
                if(this.userName == ""){
                    Dialog({ message: "请输入用户名",confirmButtonColor:"#1bb339" });
                    return false
                }
                this.ajax.post(this.mainUrl+ "user/Login/updateUser",
                    this.qs.stringify({
                        user_id:this.userId,
                        user_name:this.userName,
                        head_pic:this.src
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((result)=>{

                    if(result.data.code == 0) {

                        Toast.success('发布成功');
                        setTimeout(function(){
                            _this.$router.go(-1)
                            },1000

                        )

                    }else{
                        Dialog({ message: result.data.msg,confirmButtonColor:"#1bb339" });
                    }

                }).catch(()=>{
                    // console.log(response)
                })
            },
            editPass(){
                this.$router.push("/edit_pass")
            }

        }
    }
</script>

<style scoped>

    .header{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        height: 1.17rem;
        padding: 0 0.53rem;
        background: #ffffff;
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
    .contentUli{
        padding-top: 1.17rem;
        background: #ffffff;
    }
    .name{
        color: #818181;
        font-size: 0.29rem;
        background: #f4f4f4;
        line-height: 1rem;
        padding: 0 0.48rem;
    }
    .mainFlex{
        height: 1.46rem;
        display: flex;
        align-items: center;
        font-size: 0.34rem;
        border-top: 1px solid #f4f4f4;
        padding: 0 0.48rem;
    }
    .main{

        font-size: 0.34rem;
        border-top: 1px solid #f4f4f4;
        padding: 0 0.48rem;
    }
    .main>p{
        height: 1.46rem;
        line-height: 1.46rem;
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
    }
    .addImg p{
        color: #d8d8d8;
    }
    .type{
        display: none;
    }
    .type02{
        display: flex;
    }
    .imgtype02{
        display: block;
    }
    .addImg input{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0;
    }
    .title{
        background: #c8edd4;
        color: #00ab2c;
        font-size: 0.29rem;
        padding: 0 0.48rem;
        line-height: 0.73rem;
    }
    .navorFlex{
        height: 2.18rem;
    }
    .navor{
        position: relative;
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }
    .navor img{
        width: 1.33rem;
        height: 1.33rem;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
    }
    .navor input{
        position: absolute;
        width: 1.33rem;
        height: 1.33rem;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        opacity: 0;
        border: none;

    }
    .flexEnd{
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }
    .mainFlex input{
        border: none;
        text-align: right;
        height: 1.46rem;
        line-height: 1.46rem;
    }
    .toolbar, .toolbar .title{
        font-size: 0.34rem;
        line-height: 2rem;
    }
    .weui-picker-modal .picker-item{
        font-size: 0.29rem;
    }
    .toolbar .toolbar-inner{
        height: 2rem;
    }
    .toolbar .picker-button{
        height:2rem;
        line-height: 2rem;
    }
    .weui-picker-modal .picker-modal-inner {
        position: relative;
        height: 7.8rem;
    }
    .weui-picker-modal{
        height:10rem;
    }
.btn{
    padding: 0.2rem;
    background: #70ba2f;
    color: #ffffff;
    position: absolute;
    right: 0.24rem;
    border-radius: 0.2rem;
    font-size: 0.4rem;}
</style>
