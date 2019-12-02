<template>
    <div>
        <div class="header">
            <div class="goBack" @click="goBack()">
                <span class="iconfont icon-fanhui1"></span>
            </div>
            <p>村企快讯</p>
        </div>
        <div class="notice" id="ckkx">
            <div class="content">
                <div class="notice_list" v-for="(items ,index) in noteList" :key="index" :class="items.display == '1'?'list02':'list03'" @click="toDetails(items.article_id)">

                    <img :src="items.file_url" alt="" v-if="items.display == '1'" :onerror="defaultImg">
                    <div class="boxItems">
                        <p class="boxTit">{{items.title}}</p>
                        <div class="details">
                            <p>{{items.create_time}}</p>
                            <p>{{items.browse}}次浏览</p>
                            <div>
                                <span class="iconfont icon-dianzan"></span>
                                <p>{{items.awesome}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import { Dialog } from 'vant';
    import {formatTime} from "../../until/until";
    export default {
        name: "notice",
        data(){
            return{
                noteList:[],
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
                        var noteList = res.data.data.article.ckkx;
                        for(var i=0;i<noteList.length;i++){
                            noteList[i].create_time = formatTime(noteList[i].add_time)
                        }
                        _this.noteList = noteList;

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

    .notice{
        background: #f5f5f5;
        padding-top:1.17rem;
    }

    .notice .title{
        background: #ffffff;
        padding: 0 0.32rem;
        height: 0.9rem;
        display: flex;
        align-items: center;
        font-size: 0.29rem;
        border-bottom: 1px solid #f5f5f5;
        color: #4b8ce6;
    }
    .notice .content{
        background: #ffffff;
    }
    .notice .title p{
        flex: 1;
    }
    .notice .title img{
        width: 0.38rem;
        height: 0.38rem;
        margin-right: 0.1rem;

    }
    .notice .content{
        padding: 0 0.32rem;
    }
    .notice .content .boxItems .boxTit{
        font-size: 0.34rem;
        line-height: 0.50rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .notice .content .boxItems .details{
        font-size: 0.29rem;
        display: flex;
        align-items: center;
        color: #888888;
    }
    .notice .content .boxItems .details>p{
        flex: 1;
    }
    .notice .content .boxItems .details div{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        /*flex: 1;*/
    }
    .notice .content .boxItems .details div span{
        margin-right: 0.1rem;
    }
    .notice .list01 img{
        width: 100%;
    }
    .notice .list02 {
        display: flex;
        align-items: center;
    }
    .notice .list02 img{
        width: 2.26rem;
        height: 1.73rem;
        margin-right: 0.26rem;
    }
    .notice_list{
        padding: 0.26rem 0;
        border-bottom: 1px solid #f5f5f5;
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