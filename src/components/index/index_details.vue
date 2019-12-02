<template>
    <div class="container">
        <div class="header">
            <div class="goBack" @click="goBack()">
                <span class="iconfont icon-fanhui1"></span>
            </div>

            <div class="rightIcon">
                <p class="grayColor">
                    <span class="iconfont icon-dianzan"></span>
                </p>
                <p class="greenColor">
                    <span class="iconfont icon-dianzan"></span>
                </p>

            </div>
        </div>
        <div class="content">
            <p class="title" id="title">{{title}}</p>
            <div class="details">
                <p id="dataTime">{{dataTime}}</p>
                <p id="liuLan">{{browse}}次浏览</p>
                <div class="main">
                    <p class="grayColor">
                        <span class="iconfont icon-dianzan"></span>
                    </p>
                    <span id="zan">{{awesome}}</span>
                </div>
            </div>
        </div>
        <div class="htmlDiv" v-html="content"></div>
    </div>
</template>

<script>
    import {formatTime} from "../../until/until";
    export default {
        name: "index_details",
        data(){
            return {
                content: "",
                title: "",
                browse: "",
                awesome: "",
                dataTime: ""
            }
        },
        created() {
            this.init()
        },
        methods:{
            //初始化数据
            init(){
                var _this =this;

                this.ajax.post(this.mainUrl+ "home/Home/article",this.qs.stringify({
                        article_id: _this.$route.query.id
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((result)=> {
                    // console.log(response.data)
                    if (result.data.code == 0) {
                        _this.content = result.data.data.content;
                        _this.title = result.data.data.title;
                        _this.browse = result.data.data.browse;
                        _this.awesome = result.data.data.awesome;
                        _this.dataTime = formatTime(result.data.data.add_time);

                    }
                })
                },
                goBack(){
                   this.$router.go(-1)
                }

        }
    }
</script>

<style scoped>

    .header{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        height: 1.17rem;
        padding: 0 0.53rem;
        background: #ffffff;
    }

    .goBack{
        height: 0.53rem;
        line-height: 0.53rem;
    }
    .goBack span{
        display: block;
        color: #999999;
        font-size: 0.53rem;
    }

    .rightIcon {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 1;

    }
    .grayColor{
        /*border: 1px dashed  #3699ff;*/
        /*background:  #dcf8ff;*/
        width:0.53rem;
        height: 0.53rem;
        line-height: 0.53rem;
        text-align: center;
        margin-right: 0.24rem;
    }
    .grayColor span{
        display: block;
        color: #a0a0a0;
    }
    .rightIcon .greenColor{
        /*border: 1px dashed  #3699ff;*/
        /*background:  #dcf8ff;*/
        width:0.53rem;
        height: 0.53rem;
        line-height: 0.53rem;
        text-align: center;
    }
    .rightIcon .greenColor span{
        display: block;
        color: #1bb339;
    }
    .content{
        padding: 0 0.4rem;
        padding-top: 1.17rem;
        background: #ffffff;
    }

    .content .title{
        font-size: 0.53rem;
        /*font-weight: bold;*/
        line-height: 0.8rem;
        text-align: center;
    }
    .details{
        height: 1.03rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.29rem;
        padding: 0 0.4rem;
        color: #70838f;
        border-bottom: 1px solid #e5e5e5;
    }
    .main{
        display: flex;
        align-items: center;
    }

    .box{
        padding: 0.2rem 0.4rem;
    }
    .box p{
        font-size: 0.4rem;
        line-height: 0.8rem;
    }
    .box img{
        width: 80%;
        margin: 0.4rem auto;

        height: auto;
        display: block;
    }
    .htmlDiv{
        padding: 0 0.2rem;
        overflow: hidden;
        background: #ffffff;
    }
    .htmlDiv img{
        max-width: 100%;
    }
    .htmlDiv img{
        max-width:100%;
    }
</style>