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
    </div>

    </div>
</template>

<script>
    export default {
        name: "register",
        data(){
            return{

                selIndex:2
            }
        },
        methods:{

            //返回上一页
            goBack(){
                this.$router.go(-1)
            },
            switchTabs(index){
                this.selIndex = index;
                //1 商家 2 农户
                localStorage.setItem("type",index);
                this.$router.push({
                    path:"/mainroute/index",
                    query:{
                        type:index
                    }
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

</style>