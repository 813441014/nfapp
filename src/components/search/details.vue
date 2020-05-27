<template>
    <div >
        <div class="header">
            <div class="goBack" @click="goBack()">
                <span class="iconfont icon-fanhui1"></span>
            </div>
            <p>详情</p>
            <div class="rightIcon">
                <p class="grayColor" v-if="initData.assist_type == 2"  @click="collect(1)">
                    <span class="iconfont icon-xing1"></span>
                </p>
                <p class="greenColor" v-else  @click="collect(2)">
                    <span class="iconfont icon-xing"></span>
                </p>

            </div>
        </div>
        <div class="details">
            <div class="swiper-container">
                <div class="swiper-wrapper" id="swiperContent">
                    <div class="swiper-slide" v-for="items in banner " :key="items">
                        <img :src="items" alt="">
                    </div>
                </div>
                <div class="pagination"></div>
            </div>
            <div class="desc">
                <p class="title">
                    <!-- <span class="redbtn">优选</span> -->
					<span class="redbtn" v-if="initData.goods_style_xi == 1">土地出租</span>
					<span class="redbtn" v-else-if="initData.goods_style_xi == 2">土地出让</span>
					<span class="redbtn" v-else-if="initData.goods_style_xi == 3">农机具求租</span>
					<span class="redbtn" v-else-if="initData.goods_style_xi == 4">农机具购买</span>
					<span class="redbtn" v-else-if="initData.goods_style_xi == 11">土地承包</span>
					<span class="redbtn" v-else-if="initData.goods_style_xi == 12">土地流转</span>
					<span class="redbtn" v-else-if="initData.goods_style_xi == 13">农机具出租</span>
					<span class="redbtn" v-else-if="initData.goods_style_xi == 14">农机具销售</span>
                    <span>
                     {{initData.goods_name}}
               </span>
                </p>
                <p class="descdetails">
                    {{initData.description}}
                </p>
                <div class="deta">
                    {{initData.creat_time}} 发布
                </div>
            </div>
            <div class="content">
                <div class="mainFlex" v-if="initData.transa_name != ''">
                    <p>类型</p>
                    <p>{{initData.transa_name}}</p>
                </div>
                <div class="mainFlex">
                    <p>数量</p>
                    <p>{{initData.num}}{{initData.unit_name}}</p>
                </div>
                <div class="mainFlex">
                    <p>价格</p>
                    <p>{{initData.price}}元/{{initData.unit_name}}</p>
                </div>
                <div class="mainFlex">
                    <p>位置</p>
                    <p>{{initData.province_name}}{{initData.city_name}}{{initData.area_name}}</p>
                </div>
            </div>
        </div>
        <div class="contactUs">
            <a href="tel:15048335348">
                联系我们
            </a>

        </div>

    </div>
</template>

<script>
import Swiper from 'swiper';
    export default {
        name: "search_datails",
        data(){
            return {
                initData:{


                },
                banner:[],
                userId:""
            }
        },
        created(){
            this.initData = this.$route.query;
            this.userId = localStorage.getItem("userId");
			if(this.initData.image == ""){
				return false
			}
            var banner =  this.initData.image.toString();
			console.log( this.initData)
            if(banner != ""){
                this.banner = banner.split(",");
            }else{
                this.banner = []
            }

        },
       mounted(){
         
            new Swiper ('.swiper-container', {
                              loop: true,
                              // 如果需要分页器
                              pagination: '.pagination',
                //自动播放
                autoplay:{
                    delay:2000,
                    disableOnInteraction:false
                },
                          })
        },
        methods:{
            goBack(){
                this.$router.back()
            },
            collect(index){
                var _this = this;
                this.ajax.post(this.mainUrl+ "goods/Goods/collect",
                    this.qs.stringify({
                        user_id:this.userId,
                        data_id:this.initData.goods_id,
                        status:index
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    // console.log(response.data)
                    // this.flag_switch = 1;
                    // this.countDown(60);
                    _this.$set(this.initData,"assist_type",index)



                }).catch(()=>{
                    // console.log(response)
                })
            }
        }
    }
</script>

<style scoped>
    .rightIcon {
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: flex-end;*/
        /*flex: 1;*/

    }
    .grayColor{
        /*border: 1px dashed  #3699ff;*/
        /*background:  #dcf8ff;*/
        width:0.53rem;
        height: 0.53rem;
        line-height: 0.53rem;
        text-align: center;
    }
    .grayColor span{
        /*display: block;*/
        color: #a0a0a0;
    }
    .rightIcon .greenColor{
        /*border: 1px dashed  #3699ff;*/
        /*background:  #dcf8ff;*/
        /*width:0.53rem;*/
        /*height: 0.53rem;*/
        /*line-height: 0.53rem;*/
        /*text-align: center;*/
    }
    .rightIcon .greenColor span{
        /*display: block;*/
        color: #1bb339;
    }


    body{
        background: #f5f5f5;
    }
    .uli{
        background: #ffffff;
    }

    .uli{
        padding: 0 0.32rem;
    }
    .boxItems .boxTit{
        font-size: 0.34rem;
        line-height: 0.50rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .boxItems .details{
        font-size: 0.29rem;
        display: flex;
        align-items: center;
        color: #70838f;
    }
    .boxItems .details>p{
        flex: 1;
    }
    .boxItems .details div{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
    }
    .boxItems .details div span{
        margin-right: 0.1rem;
    }
    .list01 img{
        width: 100%;
    }
    .list02 {
        display: flex;
        align-items: center;
    }
    .list02 img{
        width: 2.26rem;
        height: 1.73rem;
        margin-right: 0.26rem;
    }
    .notice_list{
        padding: 0.26rem 0;
        border-bottom: 1px solid #f5f5f5;
    }
    .boxItems{
        flex: 1;
    }

    .details{
        padding-top: 1.17rem;
        padding-bottom: 1.26rem;
    }
    .header{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
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
    .desc{
        padding: 0 0.53rem;
    }
    .details img{
        width: 100%;
        height: auto;
    }


    .desc{
        font-size: 0.34rem;
        line-height: 0.6rem;
        background: #ffffff;
        padding-top: 0.2rem;
    }
    .descdetails{
        font-size: 0.28rem;
        line-height: 0.6rem;
        padding: 0.2rem 0;
        color: #70838f;
    }
    .desc .redbtn {
        margin-right: 0.24rem;
    }
    .redbtn {
        background: #ed5252;
        color: #ffffff;
        font-size: 0.26rem;
        display: inline-block;
        line-height: 0.4rem;
        height: 0.4rem;
        padding: 0 0.26rem;
        border-radius: 0.4rem;
    }
    .deta{
        color: #70838f;
        line-height: 0.8rem;
    }
    .content{
        background: #ffffff;
        padding: 0 0.53rem;
    }
    .content .mainFlex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.34rem;
        height: 1.29rem;
        border-top: 1px solid #e5e5e5;
    }
    .contactUs{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #1bb339;
        height: 1.26rem;
        line-height: 1.26rem;
        font-size: 0.4rem;
        color: #ffffff;
        text-align: center;
    }
    .contactUs a{
        color: #ffffff;
    }
    #swiperContent div{
        height:6rem;

    }
#swiperContent div img{
    width:100%;
    height:100%;
    object-fit:cover
}
</style>