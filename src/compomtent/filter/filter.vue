<template>
    <div class="moleDiv" id="moleDiv" @click="miss()">
        <div class="alertBtn">
            <p :class="selDate.index == 1?'active':''" @click="tap(1,'最近一个月')">
                最近一个月
                <span class="iconfont icon-dui"></span>
            </p>
            <p :class="selDate.index == 2?'active':''" @click="tap(2,'最近三个月')">最近三个月
                <span class="iconfont icon-dui"></span></p>
            <p :class="selDate.index == 3?'active':''" @click="tap(3,'最近半年')">最近半年
                <span class="iconfont icon-dui"></span></p>
            <p :class="selDate.index == 4?'active':''" @click="tap(4,'最近一年')">最近一年
                <span class="iconfont icon-dui"></span></p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "filter_name",
        props:["selDate"],
        data(){
            return {

            }
        },
        created(){
            console.log(this.selDate)
        },
        methods:{
            miss(){
              this.$emit("dismiss")
            },
            tap(index,name){
                var obj ={
                    index:index,
                    name:name
                }
                this.$emit("sure",obj)
            }
        }
    }
</script>

<style scoped>

    .alertBtn{
        position: fixed;
        left: 0;
        right: 0;
        top: 2.5rem;

        background: #ffffff;
        z-index: 3;

    }
    .alertBtn p{
        background: #ffffff;
        line-height: 1.28rem;
        font-size: 0.29rem;
        border-top: 1px solid #f5f5f5;
        text-align: center;
        position: relative;
    }
    .alertBtn p span{
        display: none;
    }
    .alertBtn .active{
        color: #1bb339;
    }
    .alertBtn .active span{
        position: absolute;
        display: block;
        top: 0;
        right: 0.2rem;
        bottom: 0;
        line-height: 1.28rem;
        color: #1bb339;
    }
    /*.alertBtn .active{*/
    /*    color: #000;*/
    /*}*/
    .moleDiv{
        position: fixed;
        top: 0rem;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,0.2);
        /*z-index: 1;*/
    }
    .alertBtn{
        background: #ffffff;
    }
    .alertBtn div{

    }
</style>