<template>
    <div>
        <div class="header" >
            <div class="goBack" @click="goBack()">
                <span class="iconfont icon-fanhui1"></span>
            </div>
            <div class="search_inp">
                <span class="iconfont icon-sousuo"></span>
                <input type="text" placeholder="玉米" v-model="search">
            </div>
        </div>

        <div class="boxItems">
            <noData v-if="initData.length == 0"></noData>
            <div class="uli" v-for="(items,index) in initData" :key="index">
                <div class="rightBtn">
<!--                    <p @click="issue(items.goods_id,1)">发布</p>-->
                    <p @click="issue(items.goods_id,0)">关闭</p>
                    <p @click="details(items.goods_id,items.goods_style,index)">编辑</p>
                    <p @click="del(items.goods_id)">删除</p>
                </div>
                <div class="recommend_items">
                    <p class="name"><span class="redbtn">优选</span>{{items.goods_name}}</p>
                    <p class="content">
                        {{items.description}}
                    </p>
                    <div class="imgUrl">
                        <div class="overflow_div">
                            <img v-for="(itemsImg,key) in items.image" :key="key" :src="itemsImg" alt="" @click="prewurl(index,key)">
                        </div>

                    </div>
                    <div class="details">
                        <p>{{items.province_name}}{{items.city_name}}{{items.area_name}}</p>
                        <p>{{items.creatTime}} 发布</p>
                    </div>
                </div>
            </div>
            <!--            <div class="uli">-->
            <!--                <div class="recommend_items">-->
            <!--                    <p class="name"><span class="redbtn">优选</span>常年供应大蒜，质量有保证，收购，储存常年供应大蒜，质量有保证，收购，储存</p>-->
            <!--                    <p class="content">-->
            <!--                        偏远地区不包邮，含新疆，内蒙古，甘肃，贵州和四川 偏远地区不包邮，含新疆，内蒙古，甘肃，贵州和四川 偏远地区不包邮，含新疆，内蒙古，甘肃，贵州和四川-->
            <!--                    </p>-->
            <!--                    <div class="imgUrl">-->
            <!--                        <div class="overflow_div">-->
            <!--                            <img src="../../assets/image/banner.png" alt="">-->
            <!--                            <img src="../../assets/image/banner.png" alt="">-->
            <!--                            <img src="../../assets/image/banner.png" alt="">-->
            <!--                        </div>-->

            <!--                    </div>-->
            <!--                    <div class="details">-->
            <!--                        <p>巴彦淖尔市 临河区 二十柳地</p>-->
            <!--                        <p>2019年九月16日 发布</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="uli">-->
            <!--                <div class="recommend_items">-->
            <!--                    <p class="name"><span class="redbtn">优选</span>常年供应大蒜，质量有保证，收购，储存常年供应大蒜，质量有保证，收购，储存</p>-->
            <!--                    <p class="content">-->
            <!--                        偏远地区不包邮，含新疆，内蒙古，甘肃，贵州和四川 偏远地区不包邮，含新疆，内蒙古，甘肃，贵州和四川 偏远地区不包邮，含新疆，内蒙古，甘肃，贵州和四川-->
            <!--                    </p>-->
            <!--                    <div class="imgUrl">-->
            <!--                        <div class="overflow_div">-->
            <!--                            <img src="../../assets/image/banner.png" alt="">-->
            <!--                            <img src="../../assets/image/banner.png" alt="">-->
            <!--                            <img src="../../assets/image/banner.png" alt="">-->
            <!--                        </div>-->

            <!--                    </div>-->
            <!--                    <div class="details">-->
            <!--                        <p>巴彦淖尔市 临河区 二十柳地</p>-->
            <!--                        <p>2019年九月16日 发布</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="uli">-->
            <!--                <div class="recommend_items">-->
            <!--                    <p class="name"><span class="redbtn">优选</span>常年供应大蒜，质量有保证，收购，储存常年供应大蒜，质量有保证，收购，储存</p>-->
            <!--                    <p class="content">-->
            <!--                        偏远地区不包邮，含新疆，内蒙古，甘肃，贵州和四川 偏远地区不包邮，含新疆，内蒙古，甘肃，贵州和四川 偏远地区不包邮，含新疆，内蒙古，甘肃，贵州和四川-->
            <!--                    </p>-->
            <!--                    <div class="imgUrl">-->
            <!--                        <div class="overflow_div">-->
            <!--                            <img src="../../assets/image/banner.png" alt="">-->
            <!--                            <img src="../../assets/image/banner.png" alt="">-->
            <!--                            <img src="../../assets/image/banner.png" alt="">-->
            <!--                        </div>-->

            <!--                    </div>-->
            <!--                    <div class="details">-->
            <!--                        <p>巴彦淖尔市 临河区 二十柳地</p>-->
            <!--                        <p>2019年九月16日 发布</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
        </div>
        <filterCompontent v-if="flag" @dismiss="dismiss" @sure="sure" :selDate="selDate"></filterCompontent>
        <filterPrice v-if="flag_filter" :max_price="max_price" :min_price="min_price" @dismiss="dismiss" @sure="sure_price"></filterPrice>

    </div>
</template>

<script>
    import filterCompontent from "../../compomtent/filter/filter";
    import filterPrice from "../../compomtent/filter_price/filter_price";
    import { Dialog } from 'vant';
    import {formatTime01} from "../../until/until";
    import noData from "../../compomtent/no_data/no_data"
    import { ImagePreview } from 'vant';
    export default {
        name: "my_publish",
        components:{
            filterCompontent,
            filterPrice,
            noData
        },
        data(){
            return{
                flag:false,
                selDate:{
                    name:"最近一个月",
                    index:1
                },
                flag_filter:false,
                max_price:"",
                min_price:"",
                userId:"",
                type:"",
                search:"",
                initData:[],
                create_time:""
            }
        },
        created(){
            this.userId = localStorage.getItem("userId");
            this.creat_time = (new Date()).getTime();
            if(this.$route.query.id){
                this.type = this.$route.query.id
            }
            this.init()
        },
        methods:{
            //发布
            issue(id,num){
                var _this = this;
                this.ajax.post(this.mainUrl+ "goods/Goods/releaseUpdate", this.qs.stringify({
                        is_open:num,
                        open_time:this.creat_time,
                        goods_id:id
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    // console.log(response.data)
                    if(res.data.code == 0){

                        _this.init()


                    }else{
                        Dialog({ message: res.data.msg,confirmButtonColor:"#1bb339" });
                    }


                }).catch(()=>{
                    // console.log(response)
                })
            },
            //修改详情
            details(id,style,index){
                if(style == 6 || style == 16){
                    this.$router.push({
                        path:"/publish_person_edit",
                        query:this.initData[index]
                        // id:id,
                        // goods_name,
                        // goods_style_xi,
                        // transa_id,
                        // image,
                        // unit,
                        // num,
                        // price,
                        // phone,
                        // province_id,
                        // city_id,
                        // area_id,
                        // addr,
                        // longitude,
                        // latitude,
                        // description,
                        // release_style,
                        // goods_style,
                        // user_id,
                        // sex,
                        // age,
                        // goods_id

                    })
                }else{
                    this.$router.push({
                        path:"/publish_edit",
                        query:this.initData[index]
                    })
                }

            },
            del(id){
                var _this = this;
                Dialog.confirm({
                    title: '提示',
                    message: '确定要删除吗'
                }).then(() => {
                    // on close
                    _this.delData(id)
                });
            },
            delData(id){
                var _this = this;
                this.ajax.post(this.mainUrl+ "goods/Goods/releaseUpdate", this.qs.stringify({
                        is_detele:0,
                        goods_id:id
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    // console.log(response.data)
                    if(res.data.code == 0){

                        _this.init()


                    }else{
                        Dialog({ message: res.data.msg,confirmButtonColor:"#1bb339" });
                    }


                }).catch(()=>{
                    // console.log(response)
                })
            },
            //初始化
            init(){
                var _this =this;
                this.ajax.post(this.mainUrl+ "goods/Goods/releaseList", this.qs.stringify({
                        type:this.type,
                        search:this.search,
                        time_type:"",
                        start_money:this.min_price,
                        end_money:this.max_price,
                        user_id:this.userId
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    // console.log(response.data)
                    if(res.data.code == 0){
                        // alert("1")
                        for(var i=0;i<res.data.data.length;i++){
                            if( res.data.data[i].image  != ''){
                                res.data.data[i].image =  res.data.data[i].image.split(",");
                            }else{
                                res.data.data[i].image = []
                            }

                            res.data.data[i].creatTime = formatTime01(res.data.data[i].creat_time);
                            console.log(  res.data.data[i].image)
                        }

                        _this.initData = res.data.data;



                    }else{
                        Dialog({ message: res.data.msg,confirmButtonColor:"#1bb339" });
                    }


                }).catch(()=>{
                    // console.log(response)
                })
            },
            //显示弹窗
            pop(){
                this.flag = true
            },
            //弹窗
            dismiss(){
                this.flag = false;
                this.flag_filter = false
            },
            //确定
            sure(index){
                this.selDate = index;
                this.flag = false;
            },
            //返回
            goBack(){
                this.$router.go(-1)
            },
            //确定价格
            sure_price(){

            },
            price_pop(){
                this.flag_filter = true
            },
            sure_price(obj){
                this.max_price = obj.max_price;
                this.min_price = obj.min_price;
                this.flag_filter = false

            },
            prewurl(key,index){
                var image = this.initData[key].image;
                ImagePreview({
                    images: image,
                    startPosition: index,
                });
            }
        }
    }
</script>

<style scoped>

    body{
        background: #f5f5f5;
    }
    #moleDiv{

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
        padding: 0.2rem 0;

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
        /*border-bottom: 1px solid #f3f3f3;*/
        margin-bottom: 0.24rem;
    }
    .rightBtn{
        font-size: 0.26rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-bottom: 1px solid #f3f3f3;
        padding: 0.2rem 0;
    }
    .rightBtn p{
        margin-left: 0.2rem;
        background: #1dd245;
        color: #ffffff;
        padding: 0.1rem 0.2rem;
        border-radius: 0.2rem;
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
        margin-right: 0rem;
    }

    .header{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
        height: 1.17rem;
        padding: 0 0.53rem;
        background: #f5f5f5;
        z-index: 1;
    }
    .filter{

    }
    .search_inp{
        background: #fff;
        flex: 1;
        height: 0.8rem;
        line-height: 0.8rem;
        -webkit-border-radius: 0.4rem;
        -moz-border-radius:0.4rem;
        border-radius: 0.4rem;
        border: 1px solid #dcdcdc;
        display: flex;
        align-items: center;
        overflow: hidden;

        margin-left: 0.2rem;
    }
    .search_inp span{
        margin: 0 0.2rem;
    }
    .search_inp input{
        line-height: 0.8rem;
        border: none;
        flex: 1;
    }
    .goBack{
        height: 0.53rem;
        line-height: 0.53rem;
    }
    .searchIcon{
        height: 0.53rem;
        line-height: 0.53rem;
        width: 0.53rem;
        position: absolute;
        top: 0.32rem;
        right: 0.53rem;
        border: 1px dashed  #3699ff;
        background:  #dcf8ff;
    }
    .searchIcon span{
        display: block;
        color: #999999;
        font-size: 0.53rem;
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

    .filter{
        position: fixed;
        top: 1.17rem;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        background: #ffffff;
        padding: 0.45rem 0;
        z-index: 1;

        border-bottom: 1px solid #f5f5f5;
    }
    .filter div{
        flex: 1;
        font-size: 0.37rem;
        color: #222222;
        text-align: center;
    }
    .filter div span{
        color: #a7a7a7;
    }
    .boxItems{
        padding-top: 1.17rem;
    }


</style>