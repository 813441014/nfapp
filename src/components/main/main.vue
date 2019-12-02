<template>
    <div>

        <router-view></router-view>
        <div class="footer">
            <div @click="popUp()">
                <span class="iconfont icon-fabu"></span>
                <p>发布</p>

            </div>
            <ul class="bottom">
                <li index="1" class="active" >
                    <router-link to="/mainroute/index">
                        <span class="iconfont icon-shouye1"></span>
                        <p>首页</p>
                    </router-link>

                </li>
                <li index="2">
                    <router-link to="/mainroute/person">
                        <span class="iconfont icon-icon-test"></span>
                        <p>我的</p>
                    </router-link>

                </li>
            </ul>
        </div>
        <van-popup v-model="popUp_switch" position="bottom" :style="{ height: '60%' }">
            <div id="about" class="weui-popup__container popup-bottom">
                <div class="weui-popup__overlay"></div>
                <div class="weui-popup__modal" v-if="type == '2'">
                    <div class="popUli" >
                        <div class="popLi"  v-for="(items,index) in init_data" :key="index"  @click.stop="toPublish(items.id)">
                            <img :src="items.img" alt="">
                            <p>{{items.name}}</p>
                            <p>{{items.desc}}</p>
                        </div>
                    </div>
                </div>
                <div class="weui-popup__modal" v-else>
                    <div class="popUli" >
                        <div class="popLi"   v-for="(items,index) in init_data2" @click.stop="toPublish(items.id)" :key="index">
                            <img :src="items.img" alt="">
                            <p>{{items.name}}</p>
                            <p>{{items.desc}}</p>
                        </div>
                    </div>
                </div>
                <div class="closeBtn" @click=" popUp_switch = false">
                    <span class="iconfont icon-add"></span>
                </div>
            </div>
        </van-popup>
    </div>

</template>

<script>
    export default {
        name: "main",
        data(){
            return {
                popUp_switch:false,
                init_data:[
                    {
                        id:1,
                        name:"土地",
                        desc:"出让/出租",
                        img: require("../../assets/image/icon1.png")
                    },
                    {
                        id:2,
                        name:"农机具",
                        desc:"购买/求组",
                        img: require("../../assets/image/icon2.png")
                    },
                    {
                        id:3,
                        name:"农副产品",
                        desc:"销售",
                        img: require("../../assets/image/icon3.png")
                    },
                    {
                        id:4,
                        name:"求购农资",
                        img: require("../../assets/image/icon4.png")
                    },
                    {
                        id:5,
                        name:"订单种植",
                        img: require("../../assets/image/icon5.png")
                    },
                    {
                        id:6,
                        name:"打工",
                        img: require("../../assets/image/icon6.png")
                    }
                ],
                init_data2:[
                    {
                        id:11,
                        name:"土地",
                        desc:"承包/流转",
                        img: require("../../assets/image/icon1.png")
                    },
                    {
                        id:12,
                        name:"农机具",
                        desc:"销售/出组",
                        img: require("../../assets/image/icon2.png")
                    },
                    {
                        id:13,
                        name:"农副产品",
                        desc:"收购",
                        img: require("../../assets/image/icon3.png")
                    },
                    {
                        id:14,
                        name:"销售农资",
                        img: require("../../assets/image/icon4.png")
                    },
                    {
                        id:15,
                        name:"订单回购",
                        img: require("../../assets/image/icon5.png")
                    },
                    {
                        id:16,
                        name:"招工",
                        img: require("../../assets/image/icon6.png")
                    }
                ],
                type:sessionStorage.getItem("type")
            }
        },
        created(){
            this.type = sessionStorage.getItem("type");
            console.log(this.type )
        },
        methods:{
            popUp(){
                this.popUp_switch = true
            },
            toPublish(id){
                if(id == 6 || id == 16){
                    this.$router.push({
                        path:"/publish_person",
                        query:{
                            id:id
                        }
                    })
                }else{
                    console.log(id);
                    this.$router.push({
                        path:"/publish",
                        query:{
                            id:id
                        }
                    })
                }

            }
        }
    }
</script>

<style scoped>

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
        justify-content: space-between;
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

        text-align: center;
        font-size: 0.29rem;
        width: 45%;
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
    .footer ul a{
        color: #999;
    }
    .footer ul .router-link-active{
        color: #25d050;
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
    .closeBtn{
        font-size: 0.8rem;
        text-align: center;
        transform: rotate(45deg);
        width:0.4rem;
        height:0.4rem;
        margin:auto
    }
    .closeBtn span{
        font-size:0.6rem;
        color: #999999;
    }
</style>