<template>
    <div>
        <div class="header">
            <div class="goBack" @click="goBack()">
                <span class="iconfont icon-fanhui1"></span>
            </div>
            <p>设置密码</p>
        </div>
        <div class="uli">
            <div class="mainFlex">
                <p>密码</p>
                <div>
                    <input type="password" placeholder="请输入密码" id="oldPass" v-model="pass1">
                </div>
            </div>
            <div class="mainFlex">
                <p>确认密码</p>
                <div>
                    <input type="password" placeholder="请再次输入密码" id="newPass" v-model="pass2">
                </div>
            </div>
            <div class="fixDiv" @click="toLogin()">
                <p>注册并登录</p>
            </div>
            <!--        <div  onclick="b()">111</div>-->
        </div>

    </div>
</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "register_pass",
        data(){
          return {
              pass2:"",
              pass1:""
          }
        },
        methods:{
            //返回上一页
            goBack(){
                this.$router.go(-1)
            },
            toLogin(){
                var type = this.$route.query.type;
                var _this = this;
                if(_this.pass1 == ""){
                    // $.toast("请输入密码", "forbidden");
                    Dialog({ message: '请输入密码',confirmButtonColor:"#1bb339" });
                    return false
                }else{
                    if(!(/^[0-9a-zA-Z]*$/g.test(_this.pass1))){
                        // $.toast("请输入正确的密码", "forbidden");
                        Dialog({ message: '请输入正确的密码',confirmButtonColor:"#1bb339" });
                        return false;
                    }
                }
                if(_this.pass2 == _this.pass1){
                    // $.toast("请输入确认密码", "forbidden");

                }else{
                    Dialog({ message: '两次密码输入不一致',confirmButtonColor:"#1bb339" });
                    return false
                }
                this.ajax.post(this.mainUrl+ "user/Register/register",this.qs.stringify({
                        phone:_this.$route.query.phone,
                        user_type:type,
                        user_name:_this.$route.query.name,
                        photo_type:_this.$route.query.photo_type,
                        address:_this.$route.query.address,
                        photo_number_sf:_this.$route.query.cardNum,
                        photo_number_yy:_this.$route.query.photo_number,
                        photo_pic_sf:_this.$route.query.cardUrl.join(","),
                        photo_pic_yy:_this.$route.query.zzImg.join(","),
                        code:_this.$route.query.codeNum,
                        password:_this.pass2,
                        province_id:_this.$route.query.province_id,
                        city_id:_this.$route.query.city_id,
                        area_id:_this.$route.query.area_id,
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    // console.log(response.data)
                    if(res.data.code == 0){
                        this.$router.go(-3)
                    }else{
                        Dialog({ message: res.data.msg,confirmButtonColor:"#1bb339" });
                    }



                }).catch(()=>{
                    // console.log(response)
                })
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
        background: #f5f5f5;
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
    body{
        background: #f5f5f5;
    }
    .uli{
        padding-top: 1.16rem;
    }
    .mainFlex{
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.42rem;
        font-size: 0.34rem;
    }
    .mainFlex:nth-of-type(1){
        position: relative;
    }
    .mainFlex:nth-of-type(1):after{
        position:absolute;
        content: '';
        bottom: 0;
        height: 1px;
        left: 0;
        right: 0;
        background: #f5f5f5;
    }
    .mainFlex div{
        flex: 1;
    }
    .mainFlex input{
        border: none;
        text-align: right;
        height: 1.46rem;
        line-height: 1.46rem;
        font-size: 0.34rem;
        width: 100%;
    }
    .fixDiv{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #1bb339;
        color: #ffffff;
        height: 1.3rem;
        font-size: 0.34rem;
        line-height: 1.3rem;
    }
    .fixDiv p{
        text-align: center;
    }

</style>