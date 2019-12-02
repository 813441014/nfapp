<template>
    <div>
        <div class="header">
            <div class="goBack" @click="goBack()">
                <span class="iconfont icon-fanhui1"></span>
            </div>
            <p>服务信息</p>
        </div>
        <div class="recommend" id="tjfw">
        <div class="recommend_list">
            <div class="recommend_box recommend_box01" v-for="(items,index) in serveList" :key="index" :class="items.display == '1'?'recommend_box02':'recommend_box01'" :onerror="defaultImg" @click="toDetails(items.article_id)">
                <p class="redbtn" v-if="items.display != '1'">优选</p>
                <img src="image/banner.png" alt="" v-else :onerror="defaultImg">
                <div class="recommend_items">
                    <p class="name"><span class="redbtn" v-if="items.display == '1'">优选</span>{{items.title}}</p>
                    <p class="details">{{items.description}}</p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "service",
        data(){
            return{
                serveList:[],
                defaultImg:'this.src="'+ require('../../assets/image/banner.png')+'"',
            }
        },
        created() {
            this.initData()
        },
        methods:{
            initData(){
                var _this =this;

                this.ajax.post(this.mainUrl+ "home/Home/homePage",{

                    },
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    // console.log(response.data)
                    if(res.data.code == 0){
                        // alert("1")

                        _this.serveList = res.data.data.article.tjfw;

                    }else{
                        Dialog({ message: res.data.msg,confirmButtonColor:"#1bb339" });
                    }


                }).catch(()=>{
                    // console.log(response)
                })
            },
            goBack(){
                this.$router.back()
            },
            toDetails(id){
                this.$router.push({
                    path:"/index_details",
                    query:{
                        id:id
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .recommend{
        background: #f5f5f5;
        padding-top:1.17rem;
    }
    .recommend .title{
        background: #ffffff;
        padding: 0 0.32rem;
        height: 0.9rem;
        display: flex;
        align-items: center;
        font-size: 0.29rem;
        border-bottom: 1px solid #f5f5f5;
        color: #ff9716;
    }
    .recommend .title img{
        width: 0.38rem;
        height: 0.38rem;
        margin-right: 0.1rem;

    }
    .recommend .content{
        background: #ffffff;
    }
    .recommend .title p{
        flex: 1;
    }
    .recommend .recommend_list{
        padding: 0 0.32rem;
        background: #ffffff;
    }
    .redbtn{
        background: #ed5252;
        color: #ffffff;
        font-size: 0.26rem;
        display: inline-block;
        line-height: 0.4rem;
        height: 0.4rem;
        padding: 0 0.26rem;
        border-radius: 0.4rem;
    }
    .recommend_items .name{
        font-size: 0.34rem;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 0.6rem;

    }
    .recommend_items .details{
        font-size: 0.29rem;
        color: #888888;
    }
    .recommend_box01{
        display: flex;
    }
    .recommend_box01 .redbtn{
        margin-right: 0.24rem;
    }
    .recommend_box {
        border-bottom: 1px solid #f1f1f1;
        padding: 0.37rem 0;
    }
    .recommend_box02{
        display: flex;
        align-items: center;
    }
    .recommend_box02 img{
        width: 2.26rem;
        height: 1.73rem;
        margin-right: 0.26rem;
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
</style>