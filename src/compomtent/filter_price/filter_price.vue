<template>
    <div class="moleDiv" id="moleDiv" @click="miss()">
        <div class="alertBtn">
           <div class="flex_price">
               <div class="main_price">
                 <p>最低价格</p>
                   <input type="number" placeholder="请输入最低价格" v-model="min_num" @click.stop="kong()">
               </div>
               <div>
                   <p>请输入</p>
                   ——
               </div>
               <div class="main_price">
                   <p>最高价格</p>
                   <input type="number" placeholder="请输入最高价格" v-model="max_num" @click.stop="kong()">
               </div>
           </div>
            <div class="sure_btn" @click.stop="sureBtn()">确定</div>
        </div>
    </div>

</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "filter_name",
        props:["min_price","max_price"],
        data(){
            return {
                min_num:this.min_price,
                max_num:this.max_price
            }
        },
        created(){
            console.log(this.selDate)
        },
        methods:{
            kong(){

            },
            miss(){
                this.$emit("dismiss")
            },
            tap(index){
                this.index = index;
                this.$emit("sure",index)
            },
            sureBtn(){
                if(this.max_num != '' ||this.min_num != ''){
                    if(this.max_num > this.min_num ){
                        var obj = {
                            min_price:this.min_num,
                            max_price:this.max_num
                        }
                        this.$emit("sure",obj)
                    }else{
                        Dialog({ message:"输入不正确",confirmButtonColor:"#1bb339" });
                    }
                }else{
                    var obj = {
                        min_price:this.min_num,
                        max_price:this.max_num
                    }
                    this.$emit("sure",obj)
                }



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
        padding: 0.2rem 0;
    }
    .flex_price{
        display: flex;
        align-items: center;
        padding: 0 0.2rem ;
    }
    .main_price{
        flex: 1;
    }
    .main_price input{
        width: 100%;
        border: none;
        font-size: 0.34rem;
        text-align: center;
    }
    .sure_btn{
        color: #0e974e;
        font-size: 0.4rem;
        text-align: center;
    }
</style>