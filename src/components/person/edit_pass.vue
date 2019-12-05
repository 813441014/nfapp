<template>
    <div>
        <div class="header">
            <div class="goBack" @click="goBack()">
                <span class="iconfont icon-fanhui1"></span>
            </div>
            <p>修改密码</p>
        </div>
        <div class="uli">
            <div class="mainFlex matginTop">
                <p>手机号</p>
                <div class="flexEnd">
                    <input type="text"  placeholder="请输入手机号" id="phone" v-model="phone">
                </div>
            </div>
            <div class="mainFlex">
                <p>验证码</p>
                <div class="flexEnd">
                    <div class="endInput">
                        <input type="text"  placeholder="请输入验证码" id="codeNum" v-model="codeNum">
                    </div>

                    <button class="rightDiv" @click="getCode()" id="codeName">
                        {{code.codeText}}
                    </button>
                </div>
            </div>
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
                <p>确定</p>
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
                code: {
                    // 验证码倒计时。
                    countDown: 60,
                    // 验证码点击状态
                    spanStatus: 1,
                    codeText: '获取验证码'
                },
                phone:"",
                codeNum:"",
                pass1:"",
                pass2:"",
                flag:true,
                user_id:""
            }
        },
        created(){

            this.user_id = localStorage.getItem("userId");
        },
        methods:{
            //返回上一页
            goBack(){
                this.$router.go(-1)
            },
            toLogin(){
                var _this = this;
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
                if(this.codeNum == ""){
                    // $.toast("", "forbidden");
                    Dialog({ message: '请输入验证码',confirmButtonColor:"#1bb339" });
                    return false;
                }
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
                this.ajax.post(this.mainUrl+ "user/Login/updatePassword",this.qs.stringify({
                        phone:_this.phone,
                        code:_this.codeNum,
                        password:_this.pass2,
                        user_id:_this.user_id,
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    // console.log(response.data)
                    if(res.data.code == 0){
                        this.$router.go(-1)
                    }else{
                        Dialog({ message: res.data.msg,confirmButtonColor:"#1bb339" });
                    }



                }).catch(()=>{
                    // console.log(response)
                })
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
                        type:3
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    // console.log(response.data)
                    // this.flag_switch = 1;
                    // this.countDown(60);

                    if(res.data.code == 0){
                        var time = setInterval(function() {
                            if(_this.code.countDown < 0) {
                                _this.$set(_this.code, 'codeText', '获取验证码');
                                _this.$set(_this.code, 'countDown', 60);
                                _this.$set(_this.code, 'spanStatus', 1);
                                clearInterval(time);
                                _this.flag = true;
                            } else {
                                _this.$set(_this.code, 'codeText', '重新获取' + '(' + _this.code.countDown + ')');
                                _this.code.countDown--;
                            }
                        }, 1000);
                    }


                }).catch(()=>{
                    // console.log(response)
                })
            },
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
        border-bottom: 1px solid #f3f3f3;
    }
    .mainFlex:nth-of-type(1){
        position: relative;
    }
    /*.mainFlex:nth-of-type(1):after{*/
    /*    position:absolute;*/
    /*    content: '';*/
    /*    bottom: 0;*/
    /*    height: 1px;*/
    /*    left: 0;*/
    /*    right: 0;*/
    /*    background: #f5f5f5;*/
    /*}*/
    .mainFlex input{
        border: none;
        text-align: right;
        height: 1.46rem;
        line-height: 1.46rem;
        font-size: 0.34rem;
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
    .rightDiv{
        background: #1bb339;
        border: none;
        color: #ffffff;
        padding: 0.2rem 0.4rem;
        -webkit-border-radius: 0.2rem;
        -moz-border-radius: 0.2rem;
        border-radius: 0.2rem;
    }
    .flexEnd{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

</style>