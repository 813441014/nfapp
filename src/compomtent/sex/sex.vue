

<template>
    <div class="type_div">
        <div class="header">
            <div class="goBack" @click.stop="dismiss()">
                取消
            </div>
            <p>请选择</p>
            <span class="btn" @click="sure()">确定</span>
        </div>
        <div class="uli">
            <div class="list"  @click="tap(0)" :class="active_index == 0?'active':''">
                <p>女</p>
            </div>
            <div class="list"  @click="tap(1)" :class="active_index == 1?'active':''">
                <p>男</p>
            </div>






        </div>
    </div>

</template>

<script>
    export default {
        name: "type",
        props:["item","typeTit"],
        data(){
            return{
                active_index:0,
                obj:{},
                data_item:this.item
            }
        },
        created(){
            console.log(this.data_item)
        },
        watch:{
            item(newValue,oldValue){
                this.data_item = newValue
            }
        },
        methods:{
            tap(index){
                this.active_index = index;


            },
            sure(){


                this.$emit("chotype",this.active_index)
            },
            dismiss(){
                this.$emit("dismiss")
            }
        }
    }
</script>

<style scoped>
    .type_div{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: #f5f5f5;
        z-index:100;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
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
        font-size: 0.26rem;
        background: #f5f5f5;
    }
    body{
        background:#f5f5f5;
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
        font-size: 0.4rem;
    }
    .btn{
        padding: 0.2rem 0.4rem;
        background: #70ba2f;
        color: #ffffff;
        position: absolute;
        right: 0.24rem;
        border-radius: 0.2rem;
        font-size: 0.4rem;
    }
    .uli{
        padding-top: 1.17rem;
    }
    .uli .list{
        background: #ffffff;
        margin-bottom: 0.21rem;
        line-height: 1.33rem;
        font-size: 0.37rem;
        padding: 0 0.58rem;
    }
    .active{
        position: relative;
    }
    .active:after{
        position: absolute;
        content: "\e624";
        right: 0.26rem;
        top: 0;
        color: #70ba2f;

    }
    .active{
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
    }

</style>