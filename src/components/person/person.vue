<template>
    <div class="container">
    <div class="header">
        <img src="../../assets/image/personBac.png" alt="" class="personBac">
        <div class="headerNav">
            <img :src="head_pic == ''?navor:head_pic" alt="">
            <div class="headCont">
                <div class="headTit">
                    <p>{{name}}</p>
                    <span>完整度{{integrity}}%</span>
                </div>
                <div class="iphone">
{{phone}}                </div>
            </div>
            <div class="headEdit" @click="edit()">
                <p>编辑资料</p>
                <span class="iconfont icon-xiayibu"></span>
            </div>
        </div>
    </div>
    <div class="personList">
        <div class="uli" @click="edit()">
            <span class="iconfont icon-wode"></span>
            <p>个人信息</p>
            <span class="iconfont icon-xiayibu"></span>
        </div>
        <div class="uli" @click="my_publish()">
            <span class="iconfont icon-fabu2"></span>
            <p>我的发布</p>
            <span class="iconfont icon-xiayibu"></span>
        </div>
        <div class="uli" @click="my_collect()">
            <span class="iconfont icon-xing1"></span>
            <p>我的收藏</p>
            <span class="iconfont icon-xiayibu"></span>
        </div>
        <div class="uli" @click="toNews()">
            <span class="iconfont icon-tongzhi"></span>
            <p>通知消息 <span v-if="unread && unread != 0 && unread != 'undefined'" class="redBtn">{{unread}}</span></p>
            <span class="iconfont icon-xiayibu"></span>
        </div>
        <div class="uli" @click="loginOut">
            <span class="iconfont icon-tuichu"></span>
            <p>退出</p>
            <span class="iconfont icon-xiayibu"></span>
        </div>
    </div>
    <div class="nDiv" @click="toUrl" v-if="type != 2">
        农户
    </div>
    <div class="fixDiv">
        <a href="tel:15048335348">
        <span class="iconfont icon-dianhua"></span>
        <p>联系我们</p>
            </a>
    </div>
    <div class="footer">
        <div onclick="popUp()">
            <span class="iconfont icon-fabu"></span>
            <p>发布</p>
        </div>
        <ul class="bottom">
            <li index="1" onclick="toIndex()">
                <span class="iconfont icon-shouye1"></span>
                <p>首页</p>
            </li>
            <li index="2" class="active">
                <span class="iconfont icon-icon-test"></span>
                <p>我的</p>
            </li>
        </ul>
    </div>

    </div>
</template>

<script>

    export default {
        name: "person",
        data(){
            return{
                name:"",
                phone:"",
                integrity:80,
                unread: localStorage.getItem("unreadCount"),
                head_pic:"",
                type: localStorage.getItem("type"),
                navor:require("../../assets/image/navor.png")
            }
        },
        created(){
            this.phone =  localStorage.getItem("phone");
            this.name =  localStorage.getItem("userName");
            this.integrity =  localStorage.getItem("integrity");
            this.head_pic= localStorage.getItem("head_pic");

        },

        methods:{
            toUrl(){
                localStorage.setItem("type",2);
                this.$router.push({
                    path:"/mainroute",
                    query:{
                        type:2
                    }
                })
            },
            my_publish(){
                this.$router.push({
                    path:"/my_publish"
                })
            },
            loginOut(){
                localStorage.clear();
            this.$router.replace({
            path:"/login"
            })
            },
            my_collect(){
                this.$router.push({
                    path:"/collect"
                })
            },
            edit(){
                this.$router.push({
                    path:"/person_edit"
                })
            },
            toNews(){
                localStorage.setItem("unreadCount",0);
                this.unread = 0;
                this.$router.push({
                    path:"/news"
                })
            }
        }
    }
</script>

<style scoped>
    .personList{
    background:#fff;
    }
    .footer{
        background:url("../../assets/image/bar.png") 0 0 no-repeat ;
        background-size:100% 100%;
        height: 2.08rem;
        display: flex;
        align-items: center;
        position: relative;
        position: fixed;
        left:0;
        right: 0;
        bottom: 0;
    }
    .footer li{
        list-style: none;
    }
    .footer ul{
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 0.5rem;
        overflow: hidden;
        position: absolute;
        height: 1.44rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ffffff;
    }
    .footer ul li{
        flex: 1;
        text-align: center;
        font-size: 0.29rem;
    }
    .footer ul li p{
        line-height: 0.6rem;
        font-size: 0.29rem;
    }
    .footer div{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        font-size: 0.29rem;
        z-index: 1;
    }
    .footer .iconfont{
        font-size: 0.6rem;
    }
    .footer  .icon-fabu{
        font-size: 1rem;
        color: #25d050;
    }
    .footer ul .active{
        color: #25d050;
    }
    .header{
        position: relative;
    }
    .personBac{
        width: 100%;
        height: auto;
        display: block;
    }
    .headerNav{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        padding: 0 0.9rem;
    }
    .headCont{
        flex: 1;
        color: #ffffff;
    }
    .iphone{
        font-size: 0.37rem;
        color: #ffffff;
        line-height: 0.8rem;
    }
    .headTit{
        display: flex;
        align-items: center;
        font-size: 0.37rem;
        color: #ffffff;
    }
    .headTit p{
        margin-right: 0.1rem;
        font-size: 0.37rem;
    }
    .headTit span{
        font-size: 0.29rem;
    }
    .headEdit{
        display: flex;
        align-items: center;
    }
    .headEdit p{
        background: #0e974e;
        color: #ffffff;
        font-size: 0.24rem;
        border-radius: 0.3rem;
        margin-right: 0.1rem;
        padding: 0 0.2rem;
    }
    .headerNav img{
        width: 1.41rem;
        height: 1.41rem;
        border-radius: 100%;
        margin-right: 0.2rem;
    }
    .uli{
        line-height: 1.33rem;
        font-size:0.34rem;
        display: flex;
        align-items: center;
        height: 1.33rem;
        border-bottom: 1px solid #dcdcdc;
        padding: 0 0.53rem;
    }
    .uli p{
        line-height: 1.33rem;
        font-size:0.34rem;
        flex: 1;
        margin-left: 0.2rem;
    }
    .fixDiv{
        position: fixed;
        right: 0.2rem;
        bottom: 2rem;
        width:1.6rem;
        height: 1.6rem;
        border-radius:100%;
        background: #1dd245;
        text-align: center;
    }
    .fixDiv span{
        height: 0.9rem;
        line-height: 0.9rem;
        color: #ffffff;
        display: block;
        text-align: center;
        font-size: 0.54rem;
    }
    .fixDiv p{
        line-height: 0.4rem;
        font-size: 0.24rem;
        color: #ffffff;
    }
    .popUli{
        overflow: hidden;
        padding: 0.93rem 0;
    }
    .popLi{
        float: left;
        width: 33.3%;
        text-align: center;
        margin-bottom: 0.93rem;
    }
    .popLi img{
        width: 1rem;
        height: 1rem;
    }
    .popLi p{
        font-size: 0.32rem;
        line-height: 0.6rem;
    }

    .icon-wode{
        color: #00cf5b;
    }
    .icon-fabu2{
        color: #f7aa58;
    }
    .icon-xing1{
        color: #34a2ff;
    }
    .icon-tongzhi {
        color: #ec6bbd;
    }
    .icon-tuichu {
        color: #b9b9b9;
    }
    .redBtn{
        background: red;
        color: #ffffff;
        border-radius: 100%;
        padding: 0.1rem 0.2rem;
    }
    .nDiv{
        position: fixed;
        right: 0.2rem;
        bottom: 4rem;
        width: 1.6rem;
        height: 1.6rem;
        line-height: 1.6rem;
        border-radius: 100%;
        background: #1dd245;
        text-align: center;
        font-size: 0.24rem;
        color: #ffffff;
    }
</style>
