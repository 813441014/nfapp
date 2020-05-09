<template>
    <div>
    <div class="header">
        <div class="goBack" @click="goBack()">
            <span class="iconfont icon-fanhui1"></span>
        </div>
        <p>免费注册</p>
    </div>
    <div class="uli">
        <div class="mainFlex">
            <div class="itemsBox " :class="selIndex == 2?'active':''" data-index="2" @click="switchTabs(2)">
                <p class="name">农户</p>
                <div class="labelImg">
                    <img src="../../assets/image/navor01.png" alt="">
                    <div>
                        <p>农民／种植大户</p>
                        <p>家庭农场主</p>
                        <p>种养专业合作社</p>
                        <p>其它</p>
                    </div>
                </div>
                <div class="rightIcon">

                </div>

            </div>
            <div class="itemsBox"  :class="selIndex == 1?'active':''" data-index="1" @click="switchTabs(1)">
                <p class="name">商家</p>

                <div class="labelImg">
                    <img src="../../assets/image/navor02.png" alt="">
                    <div>
                        <p>农业企业／农机具厂商</p>
                        <p>农资厂商</p>
                        <p>合作社／个人</p>
                        <p>其它</p>
                    </div>
                </div>
                <div class="rightIcon">

                </div>
            </div>

        </div>

<!--        <div @click="toPage()" class="pageCenter">-->
<!--            <p>用户协议</p>-->
<!--            <p>隐私协议</p>-->
<!--        </div>-->


    </div>


        <div class="moleDiv" v-if="displayBlock">
            <div class="moleAlert">

                <p class="alertTitle">服务协议和隐私政策</p>
                <div>
                    请你务必审慎阅读、充分理解“服务协议”和“隐私政策”
                    各条款，包括但不限于：为了向你提供即时通讯、内容分享等
                    服务，我们服务收集你的设备信息、操作日志等个人信息。
                    你可以在“设置”中查看、变更、删除个人信息并管理你的侵权。
                    你可阅读 <span @click="serveLink">《服务协议》</span>和 <span @click="prelink">《隐私政策》</span>了解详细信息。如你同意，
                    请点击“同意”开始接受我们的服务。
                </div>
                <div class="flexDiv">
                    <p @click="agreeNo">暂不使用</p>
                    <p @click="aggreeWith">同意</p>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "register",
        data(){
            return{

                selIndex:2,
                register_flag:false,
                displayBlock:true
            }
        },
        created(){

            if(this.$route.query){
                this.register_flag = this.$route.query.flag
            }

        },
        methods:{

            //返回上一页
            goBack(){
                this.$router.go(-1)
            },
            switchTabs(index){
                this.selIndex = index;

                if(this.register_flag){
                    this.$router.push({
                        path:"/register_news",
                        query:{
                            type:index
                        }
                    })
                }else{
                    //1 商家 2 农户
                    if(index == localStorage.getItem("type")){
                        localStorage.setItem("type",index);
                    }else{
                        localStorage.clear();
                        localStorage.setItem("type",index);
                    }


                    this.$router.push({
                        path:"/mainroute",
                        query:{
                            type:index
                        }
                    })
                }

            },
            toPage(){
                window.location.href='s.html'
            },
            serveLink(){
                window.location.href='s.html'
            },
            prelink(){
                window.location.href='pre.html'
            },
            aggreeWith(){
               this.displayBlock = false
            },
            agreeNo(){
                uexWidgetOne.exit(0);
            }
        }
    }
</script>

<style scoped>
    .moleDiv{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        z-index: 100;
    }
    .moleAlert{
        width: 80%;
        /*height: 400px;*/
        font-size: 0.26rem;
        transform: translate(-50%,-50%);
        position: absolute;
        top: 50%;
        left: 50%;
        background: #ffffff;
        z-index: 101;
        -webkit-border-radius: 0.2rem;
        -moz-border-radius: 0.2rem;
        border-radius: 0.2rem;
    }
    .moleAlert div{
        padding: 0 0.2rem;
        font-size: 0.24rem;
        line-height: 0.5rem;
    }
    .moleAlert div span{
        color: #70ba2f;
    }
    .alertTitle{
        font-size: 0.4rem;
        text-align: center;
        line-height: 1.6rem;
    }
    .flexDiv{
        display: flex;
        align-items: center;
        border-top: 1px solid #f3f3f3;
        margin-top: 0.3rem;
    }
    .flexDiv p{
        width: 50%;
        text-align: center;
        line-height: 1.2rem;

    }
    .flexDiv p:nth-of-type(2){
        color: #70ba2f;
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
    .uli{
        padding-top: 1.16rem;
    }
    .mainFlex{
        display: flex;
        margin-top: 1rem;
    }
    .mainFlex>div{
        flex: 1;
        text-align: center;
        padding: 1rem 0;
    }
    .labelImg img{
        width: 2.18rem;
    }
    .name{
        line-height: 3rem;
    }
    .active{
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
    }
    .active .rightIcon{
        background: #00a950;
        width: 0.6rem;
        height: 0.6rem;
        margin: auto;
        margin-top: 0.4rem;
        position: relative;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        font-size: 0.24rem;
        line-height: 0.6rem;
    }
    .active .rightIcon:before{
        position: absolute;
        content: "\e624";
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        color: #fff;
    }
    .itemsBox{
        font-size: 0.4rem;
    }
    .itemsBox .rightIcon{
        display: none;
    }
    .active .rightIcon{
        display: block;
    }
    .pageCenter{
        font-size: 0.4rem;
        font-weight: initial;
        display:flex;
        align-items: center;
        justify-items: center;
        justify-content: center;
        height: 4rem;


        color: #70ba2f;
    }
</style>
