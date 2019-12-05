<template>
    <div>
    <div class="header">
        <div class="goBack" @click="Back()">
            <span class="iconfont icon-fanhui1"></span>
        </div>
        <p>通知</p>
    </div>
        <div class="boxItems">
            <noData v-if="initData.length == 0"></noData>
            <div class="uli" v-for="(items,index) in initData" :key="index" @click="details(items.goods_style,index)">
                <div class="recommend_items">
                    <p class="name">{{items.title}}</p>
                    <div class="imgUrl">
                        <div class="overflow_div">
                            <img v-for="(itemsImg,key) in items.img" :key="key" :src="itemsImg.complete_url" alt=""  @click="prew(index,key)">
                        </div>

                    </div>
                    <div class="details">
                        <p>{{items.create_time}} 发布</p>
                    </div>
                </div>
            </div>
    </div>
        <van-loading size="24px" vertical v-if="show">加载中...</van-loading>
    </div>
</template>

<script>
    import noData from "../../compomtent/no_data/no_data";
    import { ImagePreview } from 'vant';
    export default {
        name: "news",
        components:{
            noData
        },
        data(){
            return{
                user_type:"",
                userId:"",
                initData:[],
                show:true
            }
        },
        created() {

            this.user_type = localStorage.getItem("type");
            this.userId = localStorage.getItem("userId");
            this.init()
        },
        methods:{
            init(){
                var _this = this;
                this.ajax.post(this.mainUrl+ "home/Home/notice",
                    this.qs.stringify({
                        user_id:this.userId,
                        user_type:this.user_type
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((result)=>{

                    if(result.data.code == 0) {
                        _this.show = false
                       _this.initData = result.data.data

                    }else{
                        Dialog({ message: result.data.msg,confirmButtonColor:"#1bb339" });
                    }

                }).catch(()=>{
                    // console.log(response)
                })
            },
            Back(){
                this.$router.go(-1)
            },
            prew(key,index){
                var arr = this.initData[key].img;
                var image = [];
                for(var i =0;i<arr.length;i++){
                    image[i] = arr[i].complete_url
                }
                ImagePreview({
                    images: image,
                    startPosition: index,
                });
            }
        }
    }
</script>

<style scoped>

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
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.29rem;
        color: #70838f;
        height: 0.4rem;
    }
    .recommend_items .content{
        font-size: 0.28rem;
        line-height: 0.5rem;
        color: #70838f;
    }
    .recommend_items{
        /*display: flex;*/
    }
    .recommend_items .redbtn{
        margin-right: 0.24rem;
    }
    input{
        font-size: 0.4rem;
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
    .uli{
        padding: 0.32rem;
        background:#fff;
        margin-top:  0.12rem;
        border-bottom: 1px solid #f3f3f3;
    }
    .imgUrl{
        /*overflow-x:scroll;*/
    }
    .imgUrl div{
        overflow: hidden;

        margin: 0.18rem 0;
    }
    .imgUrl img{
        width: 3rem;
        height: 3rem;
        margin: 0.09rem 0;
        margin-right: 0.18rem;
        display: block;
        float: left;
    }
    .imgUrl img:nth-of-type(3n){
        margin-right: 0;
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
    .boxItems{
        padding-top: 1.17rem;
    }
</style>