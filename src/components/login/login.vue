<template>
    <div>
        <div class="main_bac"></div>
    <div class="header">
        <div class="goBack" @click="goBack()">
            <span class="iconfont icon-fanhui1"></span>
        </div>
        <p>登录</p>
    </div>
    <div class="box_content">
        <div class="nav">
            <div class="navItems" data-index="0" :class="data_index == 1?'active':''" @click="switchTabs(1)">
                手机验证码登录
            </div>
            <div class="navItems" data-index="1" :class="data_index == 2?'active':''" @click="switchTabs(2)">
                密码登录
            </div>
        </div>
        <div class="boxContent">
            <div class="boxCont" v-if="data_index == 1">
                <div class="mainFlex">
                    <div class="inp_div">
                        <input type="text" placeholder="点击输入您的手机号" id="codePhone" v-model="phone">
                    </div>
                </div>
                <div class="mainFlex">
                    <div class="inp_div">
                        <input type="text" placeholder="点击输入验证码" id="codeNum" v-model="codeNum">
                    </div>
                    <p class="codeNum" @click="getCode()">{{code.codeText}}</p>

                </div>
            </div>
            <div  class="boxCont"  v-if="data_index == 2">
                <div class="mainFlex">
                    <div class="inp_div" >
                        <input type="text" placeholder="点击输入您的手机号" id="phone" v-model="phone">
                    </div>

                </div>
                <div class="mainFlex">
                    <div class="inp_div" >
                        <input type="password" placeholder="点击输入您的密码" id="password" v-model="password">
                    </div>

                </div>
            </div>
        </div>

        <div class="navCenter">
            <div @click="toIndex()">登录</div>
            <div @click="register()">新用户注册</div>
        </div>
        <div class="navBottom">
            <p>
                登录即表示已经同意 <span @click="toUrl()">《登录即表示已经同意》</span>
            </p>
            <p>如有疑问，请点击 <a href="tel:15048335348">联系我们</a></p>
        </div>
    </div>

    </div>
</template>

<script>

    import { Dialog } from 'vant';
    export default {
        name: "login",
        data() {
            return {
                phone:"",
                codeNum:"",
                password:"",
                data_index:1,
                flag:true,
                show:false,
                code_html: {
                    name:"获取验证码"
                },
                code: {
                    // 验证码倒计时。
                    countDown: 60,
                    // 验证码点击状态
                    spanStatus: 1,
                    codeText: '获取验证码'
                },
                html:"",
                flag_switch:1,
                timer:""
            }
        },
        created() {
        },

        methods:{
            goBack(){
            this.$router.go(-1)
            },
            //切换
            switchTabs(index){
                this.data_index = index;
            },
            //倒计时
            countDown(i){
                i = i - 1;

                if (i == 0) {
                    // $("#codeName").html("获取验证码");
                    this.$set(this.code_html,"name",'获取验证码');
                    this.flag_switch = 1;
                    i = 60;
                    this.flag = true;
                    return;
                } else {
                    this.$set(this.code_html,"name",i + "秒后重新发送");
                    this.djs(i)
                }

            },
            djs(i){
                console.log(i)
                setTimeout(this.countDown(i), 1000);
            },
            //获取验证码
            getCode(){
                var  phone = this.phone;
                var _this = this;
                if(phone == ""){
                    // $.toast("", "forbidden");
                    Dialog({ message: '请输入手机号',confirmButtonColor:"#1bb339" });
                    return false;
                }else{
                    if(!(/^1[3456789]\d{9}$/.test(phone))){
                        Dialog({ message: '手机号码有误，请重填',confirmButtonColor:"#1bb339" });
                        // $.toast("手机号码有误，请重填", "forbidden");
                        return false;
                    }
                }
                if(!this.flag){
                    return false
                }else{
                    this.flag = false
                }
                this.ajax.post(this.mainUrl+ "message/Code/code",
                    this.qs.stringify({
                        phone,
                        type:2
                   }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    // console.log(response.data)

                    if(res.data.code== 0){
                        _this.flag_switch = 0;
                        _this.flag = true
                        // _this.countDown(60);
                        var time = setInterval(function() {
                            if(_this.code.countDown < 0) {
                                _this.$set(_this.code_html, 'codeText', '获取验证码');
                                _this.$set(_this.code, 'countDown', 60);
                                _this.$set(_this.code, 'spanStatus', 1);
                                clearInterval(time);
                                  _this.flag = true;
                            } else {
                                _this.$set(_this.code, 'codeText', '重新获取' + '(' + _this.code.countDown + ')');
                                _this.code.countDown--;
                            }
                        }, 1000);
                    }else{
                        _this.flag = true
                        Dialog({ message: res.data.msg,confirmButtonColor:"#1bb339" });
                    }



                }).catch(()=>{
                    _this.flag = true
                    // console.log(response)
                })
            },
            //登录
            toIndex(){
                var phone = this.phone;
                var password = this.password;
                var code = this.codeNum;
                var _this = this;
                if(this.data_index == 1){
                    if(phone == ""){
                        // $.toast("请输入手机号", "forbidden");
                        Dialog({ message: '请输入手机号',confirmButtonColor:"#1bb339" });
                        return false
                    }else{
                        if(!(/^1[3456789]\d{9}$/.test(phone))){
                            Dialog({ message: '手机号码有误，请重填',confirmButtonColor:"#1bb339" });
                            // $.toast("手机号码有误，请重填", "forbidden");
                            return false;
                        }
                    }
                    if(code == ""){
                        // $.toast("请输入验证码", "forbidden");
                        Dialog({ message: '请输入验证码',confirmButtonColor:"#1bb339" });
                        return false
                    }
                }else{
                    if(phone == ""){
                        Dialog({ message: '请输入手机号',confirmButtonColor:"#1bb339" });
                        return false
                    }else{
                        if(!(/^1[3456789]\d{9}$/.test(phone))){
                            Dialog({ message: '手机号码有误，请重填',confirmButtonColor:"#1bb339" });
                            return false;
                        }
                    }
                    if(password == ""){
                        Dialog({ message: '请输入密码',confirmButtonColor:"#1bb339" });
                        return false
                    }

                }

                this.ajax.post(this.mainUrl+ "user/Login/login",
                    this.qs.stringify({
                        phone,
                        password,
                        code,
                        type:this.data_index
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((result)=>{

                    if(result.data.code == 0) {
                        localStorage.setItem("userId",result.data.data.user_id);
                        localStorage.setItem("userName",result.data.data.user_name);
                        localStorage.setItem("userName",result.data.data.user_name);
                        localStorage.setItem("address",result.data.data.address);
                        localStorage.setItem("phone",result.data.data.phone);
                        localStorage.setItem("integrity",result.data.data.integrity);
                        localStorage.setItem("province_id",result.data.data.province_id);
                        localStorage.setItem("city_id",result.data.data.city_id);
                        localStorage.setItem("area_id",result.data.data.area_id);
                        localStorage.setItem("type",result.data.data.user_type);
                        localStorage.setItem("user_type",result.data.data.user_type);
                        localStorage.setItem("head_pic",result.data.data.head_pic);
                        localStorage.setItem("unreadCount",result.data.data.unreadCount);



                             _this.$router.replace("/mainroute/index")




                    }else{
                        Dialog({ message: result.data.msg,confirmButtonColor:"#1bb339" });
                    }

                }).catch(()=>{
                    // console.log(response)
                })

            },
        //    注册
            register(){
                // if(localStorage.getItem("type")){
                //     this.$router.push("/register_news")
                // }else{
                //
                //     this.$router.push({
                //         path:"/register",
                //         query:{
                //             flag:true
                //         }
                //     })
                //
                // }
                this.$router.push({
                    path:"/register",
                    query:{
                        flag:true
                    }
                })

            },
            toUrl(){
                var type = localStorage.getItem("type");
                if(type == 2){
                    window.location.href='n.html'
                }else{
                    window.location.href='s.html'
                }

            }

        }
    }
</script>

<style scoped>
    .main_bac{
        position: absolute;
        top: 0;
        left: 0;
        right:0;
        bottom: 0;
        z-index:-1;
        background: #ffffff;
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
    .box_content{
        padding-top: 1.16rem;
        background: #ffffff;
    }
    .nav{
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 0.34rem;
        height: 1.2rem;
        line-height: 1.2rem;
        border-bottom: 1px solid #f5f5f5;
    }
    .nav .active{
        position: relative;
    }
    .nav .active:after{
        position: absolute;
        content: '';
        bottom: 0;
        height: 2px;
        left: 0;
        width: 100%;
        background: #1bb339;
    }
    .boxCont{
        border-bottom: 1px solid #f5f5f5;
    }
    /*.boxContent > div{*/
    /*    display: none;*/
    /*}*/

    /*.boxContent > .disDiv{*/
    /*    display: block;*/
    /*}*/
    .mainFlex{
        padding: 0 0.8rem;
        display: flex;
        align-items: center;

    }
    .mainFlex:nth-of-type(1) > div{
        line-height: 1.52rem;
        border-bottom: 1px solid #f5f5f5;
    }
    .mainFlex input{
        border: none;
        font-size: 0.34rem;
    }
    .inp_div{
        flex: 1;
    }
    .inp_div input{
        width: 100%;
        line-height: 1.52rem;
    }
    .codeNum{
        color: #fff;
        -webkit-border-radius: 0.4rem;
        -moz-border-radius: 0.4rem;
        border-radius: 0.4rem;
        background: #1bb339;
        font-size: 0.34rem;
        padding: 0.2rem 0.4rem;
    }
    .navCenter{
        padding: 0 0.8rem;
        font-size: 0.34rem;
    }
    .navCenter div{
        width: 100%;
        height: 1.17rem;
        line-height: 1.17rem;
        text-align: center;
        -webkit-border-radius: 0.6rem;
        -moz-border-radius: 0.6rem;
        border-radius: 0.6rem;
        margin-top: 0.5rem;
    }
    .navCenter div:nth-of-type(1){
        background: #1bb339;
        color: #ffffff;
    }

    .navCenter div:nth-of-type(2){
        background: #ffffff;
        border: 1px solid #1bb339;
        color: #1bb339;
    }
    .navBottom{

        font-size: 0.34rem;
        line-height: 1rem;
        margin-top: 3rem;
    }
    .navBottom p{
        text-align: center;
        color: #a8a8a8;
        font-size: 0.34rem;
    }
    .navBottom p a,.navBottom p span{
        color: #1bb339;
        font-size: 0.34rem;
    }

</style>
