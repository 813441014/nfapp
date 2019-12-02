<template>
    <div class="container">
        <div class="header">
            <div class="bac"></div>
            <div class="address">
                <div class="navleft" @click="tap_address">
                    <span class="iconfont icon-dizhi"></span>
                    <span>{{location.area}}</span>
                    <span class="iconfont icon-xiala"></span>
                </div>
                <div class="navright">
                    <img src="../../assets/image/navor01.png" alt="">
                    <span>{{userName}}服务中心</span>
                </div>
            </div>
            <div class="search" >
                <div id="search" @click="inp_cli()">
                    <span class="iconfont icon-sousuo"></span>
                    <p>收割机</p>
                    <!--                   <input type="text" placeholder="收割机">-->
                </div>
                <div id="input_search">
                    <span class="iconfont icon-sousuo"></span>
                    <input type="text" placeholder="请输入...">
                </div>


            </div>
            <div class="swiper-container">
                <div class="swiper-wrapper" id="swiperContent">
                                               <div class="swiper-slide" v-for="items in banner " :key="items.ad_code">
                                                   <img :src="items.ad_code" alt="">
                                               </div>
                </div>
                <div class="pagination"></div>
            </div>



        </div>
        <div class="uList" >
            <div class="list" v-if="type == 1" >
                <div class="items" v-for="(items,index) in init_data" :key="index" @click="details(items.id)">
                    <img :src="items.img" alt="">
                    <div>
                        <p class="title">{{items.name}}</p>
                        <p class="content">{{items.desc}}</p>
                    </div>
                </div>
            </div>
            <div class="list" v-else >
                <div class="items"  v-for="(items,index) in init_data2" :key="index" @click="details(items.id)">
                    <img :src="items.img" alt="">
                    <div>
                        <p class="title">{{items.name}}</p>
                        <p class="content">{{items.desc}}</p>
                    </div>
                </div>
<!--                <div  class="items">-->
<!--                    <img src="../../assets/image/icon2.png" alt="">-->
<!--                    <div>-->
<!--                        <p class="title">农机具供需服务</p>-->
<!--                        <p class="content">为你提供快捷服务</p>-->
<!--                    </div>-->
<!--                </div>-->


            </div>
        </div>
        <div class="notice" id="ckkx">
                       <div class="title">
                           <img src="../../assets/image/icon7.png" alt="">
                           <p>村企快讯</p>
                           <span @click="moreNotice()">更多>></span>
                       </div>
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
<!--                           <div class="notice_list list03">-->
<!--                               <div class="boxItems">-->
<!--                                   <p class="boxTit">各乡镇农科占科技人员之一调查棉铃虫幼虫发生情况</p>-->
<!--                                   <div class="details">-->
<!--                                       <p>2019年9月10日</p>-->
<!--                                       <p>177777次浏览</p>-->
<!--                                       <div>-->
<!--                                           <span class="iconfont icon-dianzan"></span>-->
<!--                                           <p>287</p>-->
<!--                                       </div>-->
<!--                                   </div>-->
<!--                               </div>-->
<!--                           </div>-->
                       </div>
        </div>
        <div class="recommend" id="tjfw">
                       <div class="title">
                           <img src="../../assets/image/icon8.png" alt="">
                           <p>推荐服务信息</p>
                           <span @click="moreServe()">更多>></span>
                       </div>
                       <div class="recommend_list">
                           <div class="recommend_box recommend_box01" v-for="(items,index) in serveList" :key="index" :class="items.display == '1'?'recommend_box02':'recommend_box01'" :onerror="defaultImg" @click="toDetails(items.article_id)">
                               <p class="redbtn" v-if="items.display != '1'">优选</p>
                               <img src="image/banner.png" alt="" v-else :onerror="defaultImg">
                               <div class="recommend_items">
                                   <p class="name"><span class="redbtn" v-if="items.display == '1'">优选</span>{{items.title}}</p>
                                   <p class="details">{{items.description}}</p>
                               </div>
                           </div>
<!--                           <div class="recommend_box recommend_box02">-->


<!--                               <div class="recommend_items">-->
<!--                                   <p class="name">常年供应大蒜，质量有保证，收购，储存常年供应大蒜，质量有保证，收购，储存</p>-->
<!--                                   <p class="details">巴彦淖尔市 临河区 二十柳地</p>-->
<!--                               </div>-->
<!--                           </div>-->
                       </div>
        </div>
        <div id="allmap"></div>

        <cityCompontents :show="show" :location="location" @confirmSure="confirmSure"></cityCompontents>

    </div>
</template>

<script>
    import Swiper from 'swiper';
    import { Dialog } from 'vant';
    import {formatTime} from "../../until/until";
    import cityCompontents from '../../compomtent/city/city';
    export default {
        name: "index",
        components:{
            cityCompontents
        },
        data(){
          return {
              banner:[],
              show:false,
              noteList:[],
              serveList:[],
              defaultImg:'this.src="'+ require('../../assets/image/banner.png')+'"',
              type:1,
              init_data:[
                  {
                      id:1,
                      name:"土地流转",
                      desc:"帮你快速定位",
                      img: require("../../assets/image/icon1.png")
                  },
                  {
                      id:2,
                      name:"农机具供需服务",
                      desc:"为你提供快捷服务",
                      img: require("../../assets/image/icon2.png")
                  },
                  {
                      id:3,
                      name:"农副产品供需",
                      desc:"快速定位问题",
                      img: require("../../assets/image/icon3.png")
                  },
                  {
                      id:4,
                      name:"农资供需",
                      desc:"贴心服务只为你",
                      img: require("../../assets/image/icon4.png")
                  },
                  {
                      id:5,
                      name:"订单种植",
                      desc:"全面解决问题",
                      img: require("../../assets/image/icon5.png")
                  },
                  {
                      id:6,
                      name:"劳务供需",
                      desc:"零距离基础",
                      img: require("../../assets/image/icon6.png")
                  }
              ],
              init_data2:[
                  {
                      id:11,
                      name:"土地承包/流转",
                      desc:"规模化 集约化",
                      img: require("../../assets/image/icon1.png")
                  },
                  {
                      id:12,
                      name:"农机具销售/出租",
                      desc:"质优 价低 精准",
                      img: require("../../assets/image/icon2.png")
                  },
                  {
                      id:13,
                      name:"农副产品收购",
                      desc:"品牌化 定效益",
                      img: require("../../assets/image/icon3.png")
                  },
                  {
                      id:14,
                      name:"农资销售",
                      desc:"团购 团销 互利",
                      img: require("../../assets/image/icon4.png")
                  },
                  {
                      id:15,
                      name:"订单回购",
                      desc:"稳增收 降成本",
                      img: require("../../assets/image/icon5.png")
                  },
                  {
                      id:16,
                      name:"招工",
                      desc:"快捷 方便 增收",
                      img: require("../../assets/image/icon6.png")
                  }
              ],
              userName:"",
              location:{
                  address:""

              },
              type:sessionStorage.getItem("type")
          }
        },
        created(){
            this.userName= sessionStorage.getItem("userName")
           this.initData()
        },
        watch:{
        },
        mounted(){
            if(sessionStorage.getItem("area_id")){
                this.comparison()
            }else{
              this.getLocation()
            }

        },
        methods:{
           comparison(){

                var province = sessionStorage.getItem("province_id");
                var city = sessionStorage.getItem("city_id");
                var area = sessionStorage.getItem("area_id");
                this.city(province,city,area)

            },
             city(province,city,area){
            console.log(province);
            console.log(city);
            console.log(area)
                var  _this = this;
                this.ajax.post(this.mainUrl+ "message/Code/region",{},
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    for(var i =0;i<res.data.data.length;i++){
                        if(res.data.data[i].region_id == province){
                              _this.id01 = res.data.data[i].region_name

                        }
                        if(res.data.data[i].region_id == city){
                            _this.id02 = res.data.data[i].region_name
                        }
                        if(res.data.data[i].region_id == area){
                            _this.id03 = res.data.data[i].region_name
                        }
                    }
                    sessionStorage.setItem("province_name",_this.id01);
                  sessionStorage.setItem("city_name",_this.id02);
                   sessionStorage.setItem("area_name",_this.id03);
                   _this.$set(_this.location,"area",_this.id03)



                }).catch(()=>{
                    // console.log(response)
                })
            },
            //更多服务
            moreServe(){
                this.$router.push({
                    path:"/service",
                    query:{
                        list:this.noteList
                    }
                })
            },
            //更多服务
            moreNotice(){
                this.$router.push({
                    path:"/notice",
                    query:{
                        list:this.serveList
                    }
                })
            },
            confirmSure(obj){

                this.$set(this.location,"area",obj.area_name);
                this.show = false;
            },
            tap_address(){
               this.show = true
            },
            //百度接口 获取经纬度
            getLocation() {
                console.log(12)
                var _this = this;
                var map = new BMap.Map("allmap");
                var point = new BMap.Point(116.331398, 39.897445);
                map.centerAndZoom(point, 12);
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function(r) {
                    if(this.getStatus() == BMAP_STATUS_SUCCESS) {
                        console.log(1)
                        console.log(1)
                        console.log(1)
                        var mk = new BMap.Marker(r.point);
                        map.addOverlay(mk);
                        map.panTo(r.point);
                        _this.analysis(r);
                    } else {
                        console.log(2)
                    }
                }, {
                    enableHighAccuracy: true
                })
            },
            //地址逆解析 经纬度获取详细信息
            analysis(e) {
                var _this = this;
                var geoc = new BMap.Geocoder();
                var pt = e.point;
                geoc.getLocation(pt, function(rs) {
                    var addComp = rs.addressComponents;
                    var addressdetails = addComp.province + "" + addComp.city + "" + addComp.district
                    // + "" + addComp.street + "" + addComp.streetNumber;

                    _this.$set(_this.location, 'address', addressdetails);
                    _this.$set(_this.location, 'province', addComp.province);
                    _this.$set(_this.location, 'city', addComp.city);
                    _this.$set(_this.location, 'area', addComp.district);

                     sessionStorage.setItem("address_name",addressdetails);

                      sessionStorage.setItem("province_name",addComp.province);
                  sessionStorage.setItem("city_name",addComp.city);
                   sessionStorage.setItem("area_name",addComp.district);
                   console.log(sessionStorage.getItem("province_name"))
                    _this.selCity = addressdetails;
                });

            },
            details(id){
                this.$router.push({
                    path:"/search",
                    query:{
                        id:id
                    }
                })
            },
            toDetails(id){
               this.$router.push({
                   path:"/index_details",
                   query:{
                       id:id
                   }
               })
            },
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
                      _this.banner = res.data.data.carousel;
                      var noteList = res.data.data.article.ckkx;
                      for(var i=0;i<noteList.length;i++){
                          noteList[i].create_time = formatTime(noteList[i].add_time)
                      }
                      _this.noteList = noteList;
                      _this.$nextTick(() =>{
                          new Swiper ('.swiper-container', {
                              loop: true,
                              // 如果需要分页器
                              pagination: '.pagination'
                          })
                      })

                  }else{
                      Dialog({ message: res.data.msg,confirmButtonColor:"#1bb339" });
                  }


                }).catch(()=>{
                    // console.log(response)
                })
            },

            inp_cli(){
                this.$router.push("/search")
            }
        }
    }
</script>

<style scoped>
    .swiper-slide{
        height: 6rem;
    }
    .swiper-slide img{
        height: 100%;
        object-fit: cover;
    }

    .bac{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4.01rem;
        background: #70ba2f;
        z-index: -1;
    }
    .container{
        /*padding-bottom: 2.08rem;*/
    }
    .header{
        position: relative;
        /*background: #ffffff;*/
    }
    .address{
        display: flex;
        color: #ffffff;
        height: 0.98rem;
        align-items: center;
        font-size: 0.32rem;
        padding:0  0.4rem;
    }
    .navleft{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .navright{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .navright img{
        width: 0.64rem;
        height: 0.64rem;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        margin-right: 0.1rem;
    }
    .search{
        padding:0  0.4rem;
        margin-bottom: 0.34rem;
    }
    .search div{
        background: #ffffff;
        height: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-border-radius: 0.4rem;
        -moz-border-radius: 0.4rem;
        border-radius: 0.4rem;
    }
    .search #input_search input{
        flex: 1;
        width: auto;
        height: 0.8rem;
        line-height: 0.8rem;
    }
    .search div p{
        font-size: 0.29rem;
        color: #999999;
    }
    .search div input{
        border: none;
        width: auto;
    }

    .banner{
        padding: 0 0.13rem;
    }
    .banner .image{
        border-radius: 0.2rem;
        overflow: hidden;
    }
    .banner img{
        width: 100%;
        border: 100%;
    }
    .uList{
        padding: 0 0;
        background: #ffffff;
    }
    .uList .list{
        /*display: flex;*/
        position: relative;
        overflow: hidden;
    }
    .uList .list:after{
        position: absolute;
        content: '';
        left: 50%;
        width: 1px;
        top: 0;
        bottom: 0;
        background: #f1f1f1;
    }
    .uList .list:before{
        position: absolute;
        content: '';
        left: 50%;
        height: 1px;
        left: 0;
        right: 0;
        background: #f1f1f1;
    }
    .uList .list .items{
        width: 50%;
        display: flex;
        align-items: center;
        float: left;
        justify-content: center;
        padding: 0.42rem 0;
        border-bottom:1px solid #f3f3f3;

    }
    .uList .list .items div{
        padding: 0.1rem 0;
    }
    .uList .list .items img{
        width: 1.1rem ;
        height: 1.1rem;
        margin-right: 0.3rem;
    }
    .uList .list .items .title{
        font-size: 0.34rem;
        line-height: 0.45rem;
        width: 2.6rem;
    }
    .uList .list .items .content{
        font-size: 0.28rem;
        color: #888;
        line-height: 0.45rem;
    }

    .notice{
        background: #f5f5f5;
        padding-top:0.12rem;
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
    .recommend{
        background: #f5f5f5;
        padding-top:0.12rem;
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

    #input_search{
        display: none;
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
    .swiper-slide img{
        width: 100%;
    }
    .boxItems{
        flex: 1;
    }
</style>