<template>
    <div class="alertBtn">
        <van-overlay :show="show" @click="show = false">
            <div class="wrapper" @click.stop>
                <div class="inp_div">
                    <textarea name="" id="" cols="30" rows="10" v-model="val" placeholder="请输入"></textarea>
                </div>
                <div class="mainFlex">
                    <p @click="dismiss">取消</p>
                    <p @click="sure">确定</p>
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
    // import { Overlay } from 'vant';

    export default {
        name: "inp",
        props:["title"],
        data(){
            return{
                show:true,
                val:this.title
            }
        },
        watch:{
            title(oldValue,newValue){
                this.val = oldValue
            }
        },
        methods:{
            sure(){
                console.log(122)
                this.$emit("sureValue",this.val)
            },
            dismiss(){
                console.log(122)
                this.$emit("dismiss")
            }

        }
    }
</script>

<style scoped>
    .alertBtn{
        position: relative;
    }
    .wrapper{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 8rem;
        background: #ffffff;
        /*height: 8rem;*/
        /*padding: 0.4rem 0.4rem;*/
    }
    .wrapper input{
        width: 100%;
        border: none;
        font-size: 0.4rem;
        text-align: center;
        line-height: 1rem;
        height: 1rem;
    }
    .inp_div{
        padding: 0.2rem 0.6rem;
        /*margin-bottom: 0.2rem;*/
        margin-top: 0.2rem;
    }
    .mainFlex{
        display: flex;
        font-size: 0.4rem;
        border-top: 1px solid #f3f3f3;
    }
    .mainFlex p{
        width: 50%;
        text-align: center;
        line-height: 2rem;
    }
    .mainFlex p:nth-of-type(2){
        color: #1bb339;
    }
    textarea{
        resize: none;
        border: none;
        width: 100%;
        height: 1.2rem;
        line-height: 0.6rem;
        font-size: 0.4rem;
        text-align: center;

    }
</style>