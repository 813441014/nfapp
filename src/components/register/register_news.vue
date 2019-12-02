<template>
    <div >
        <div class="header">
            <div class="goBack" @click="goBack()">
                <span class="iconfont icon-fanhui1"></span>
            </div>
            <p>注册信息</p>
        </div>
        <div class="contentUli">
            <div class="mainFlex">
                <p>真实姓名</p>
                <div class="flexEnd">
                    <input type="text" value="" placeholder="请输入真实姓名" id="realName" v-model="realName">
                </div>
            </div>
            <div class="mainFlex">
                <p>证件类型</p>
                <div class="radioFlex" id="radio_main">
                    <div class="" data-index="0" :class="selIndex==0?'radio_active':''" @click="selRedio(0)">
                        <p>身份证</p>
                    </div>
                    <div data-index="1" :class="selIndex==1?'radio_active':''" @click="selRedio(1)">
                        <p>营业执照</p>
                    </div>
                </div>
            </div>
            <div class="mainFlex addCard" v-if="selIndex == 0" >
                <p>证件号码</p>
                <div class="flexEnd">
                    <input type="text" placeholder="请输入证件号码" id="cardNum" v-model="cardNum">
                </div>
            </div>
            <div class="mainFlex addFiles" v-if="selIndex == 1">
                <p>营业执照</p>
                <div class="flexEnd">
                    <input type="text" placeholder="请输入营业执照" id="photo_number" v-model="photo_number" @change="zzUrl($event)">
                </div>
            </div>
            <div class="main imgtype" id="addCard" v-if="selIndex == 0">
                <p>选填</p>
                <div class="imgUli"  id="cardImg">
                    <div v-for="items in cardUrl" class="imgLi" :key="items">
                        <img :src="items" alt="">
                    </div>
                    <div class="addImg" id="addCardimg" v-if="cardUrl.length <4 ">
                        <span class="iconfont icon-add"></span>
                        <p>添加图片</p>
                        <input type="file" id="cardId" @change="cardUrlup($event)"/>
                    </div>

                </div>
            </div>

            <div class="main imgtype" id="addFiles" v-if="selIndex == 1">
                <p>上传营业资质/证照</p>
                <div class="imgUli" id="yyImg">
                                    <div v-for="items in zzImg" class="imgLi" :key="items">
                                        <img :src="items" :index="index" alt="">
                                    </div>

                                    <div class="addImg" id="addZz">
                                        <span class="iconfont icon-add"></span>
                                        <p>添加图片</p>
                                        <input type="file"  id="zzId" />
                                    </div>

                </div>
            </div>

            <div class="mainFlex">
                <p>位置</p>
                <div class="flexEnd">
                    <!--                <input type="text" id='city-picker' value="浙江 杭州 拱墅区" />-->
                    <div id="cityPicker" @click="gain()">{{selCity == ""?'请选择':selCity}}</div>
                </div>
            </div>
            <div class="mainFlex">
                <p>详细地址</p>
                <div class="flexEnd">
                    <!--                <input type="text" id='city-picker' value="浙江 杭州 拱墅区" />-->
                    <input type="text"  placeholder="请输入详细地址" v-model="address">
                </div>
            </div>
            <div class="mainFlex matginTop">
                <p>手机号</p>
                <div class="flexEnd">
                    <input type="text"  placeholder="请输入手机号" id="phone" v-model="phone">
                </div>
            </div>
            <div class="mainFlex">
                <p>验证码</p>
                <div class="flexEnd">
                    <div class="endInput">
                        <input type="text"  placeholder="请输入验证码" id="codeNum" v-model="codeNum">
                    </div>

                    <button class="rightDiv" @click="getCode()" id="codeName">
                        {{code.codeText}}
                    </button>
                </div>
            </div>

            <div class="fixP">
                <p @click="nextStep()">下一步</p>
            </div>
        </div>
        <div id="allmap"></div>
        <div>
<!--            fg {{result}}-->
        </div>
            <cityCompontents :show="show" :location="location" @confirmSure="confirmSure"></cityCompontents>


<!--        <van-popup  position="bottom"  :style="{ height: '60%' }">-->
<!--            <div class="nowLocation">-->
<!--                <p class="leftdiv">当前位置</p>-->
<!--                <p class="nowarea">{{location.address == ""?"正在获取...":location.address}} </p>-->
<!--                <p class="right_sure" @click="confirm()">确定</p>-->

<!--            </div>-->
<!--            <van-picker :columns="columns" @change="onChange" />-->
<!--        </van-popup>-->
    </div>
</template>

<script>
    import { Dialog } from 'vant';
    import cityCompontents from '../../compomtent/city/city';
    export default {
        name: "register_news",
        components:{
            cityCompontents
        },
        data(){
            return {
                realName:"",
                selIndex:0,
                cardNum:"",
                photo_number:"",
                phone:"",
                codeNum:"",
                area:"",
                zzImg:[],
                cardUrl:[],
                flag:true,
                show:false,
                code: {
                    // 验证码倒计时。
                    countDown: 60,
                    // 验证码点击状态
                    spanStatus: 1,
                    codeText: '获取验证码'
                },
                columns:[
                    {
                        values:["沈阳","北京"],
                        className:"name1"
                    },
                    {
                        values:["沈阳","北京"],
                        className:"name1"
                    }
                ],
                province_list:[],
                city_list:{

                },
                county_list:{

                },
                columns_province:[],
                columns_city:[],
                columns_couny:[],
                id01:"",
                selVal:[0,0,0],
                selCity:"",
                location:{
                    address:""

                },
                id01:"",
                id02:"",
                id03:"",
                index01:"",
                index02:"",
                index03:"",
                selId:{

                },
                address:""

            }
        },
        created(){
          // this.city();

        },
        mounted(){
           console.log("http://api.map.baidu.com/location/ip?ak=QM4toBaah8yEvGTKoTd7mHa06vBjGrSw");
           this.getLocation()

            // var map = new window.BMap.Map("allmap");
            // console.log(map)
            // var point = new BMap.Point(116.331398,39.897445);
            // map.centerAndZoom(point,12);
           // var _this= this;
           //  var geolocation = new BMap.Geolocation();
           //
           //  var myGeo = new BMap.Geocoder();
           //  geolocation.getCurrentPosition(function(r){
           //      myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lng), function(result){
           //          if (result){
           //              console.log(result)
           //              _this.result = result;
           //              // console.log(result);
           //          }
           //      });
                // if(this.getStatus() == "BMAP_STATUS_SUCCESS"){
                //     alert('您的位置：'+r.point.lng+','+r.point.lat);
                // }
                // else {
                //     alert('failed'+this.getStatus());
                // }
            // });
        },
        methods:{
            comparison(){

                var province = this.location.province;
                var city = this.location.city;
                var area = this.location.area;
                this.city(province,city,area)

            },
            confirmSure(obj){
                this.show = false;
                this.$set(this.selId,"province",obj.province);
                this.$set(this.selId,"city",obj.city);
                this.$set(this.selId,"area",obj.area);
                this.selCity =obj.address
            },
            confirm(){
                  this.show = false;
                  this.$set(this.selId,"province",this.id01);
                this.$set(this.selId,"city",this.id02);
                this.$set(this.selId,"area",this.id03);
                this.selCity = this.province_list[this.index01].region_name + this.city_list[this.id01][this.index02].region_name +this.county_list[this.id02][this.index03].region_name
            },
            //百度接口 获取经纬度
            getLocation() {
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
                    console.log(rs.addressComponents)
                    _this.$set(_this.location, 'address', addressdetails);
                    _this.$set(_this.location, 'province', addComp.province);
                    _this.$set(_this.location, 'city', addComp.city);
                    _this.$set(_this.location, 'area', addComp.district);
                    _this.selCity = addressdetails;
                    _this.comparison()
                });

            },
            onChange(picker, values) {

                // picker.setColumnValues(1, citys[values[0]]);
                var selIndex = picker.getIndexes();
                this.selVal = selIndex;
                // var selId = selIndex.spilt(",");
                console.log(selIndex[1]);
                console.log(this.city_list);
                this.id01 = this.province_list[selIndex[0]].region_id;
                var id02 = this.city_list[this.id01][selIndex[1]].region_id;
                console.log(this.city_list);
                console.log(this.county_list[id02][selIndex[2]].region_id)
                this.id02 = id02;
                this.id03 = this.county_list[id02][selIndex[2]].region_id;
                this.index01 = selIndex[0];
                this.index02 = selIndex[1];
                this.index03 = selIndex[2];

                // this.id02 = this.province_list[selId[]].region_id;
                this.pickIndex(id02);



            },
            //获取城市
            cityN(){
                var  _this = this;
                this.ajax.post(this.mainUrl+ "message/Code/region",{},
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    var province_list = [];
                    var city_list  = {};
                    var county_list = {};
                    var id01 = "";
                    var columns_province = [];
                    for(var i =0;i<res.data.data.length;i++){
                         //遍历出省的数据
                         if(res.data.data[i].region_type == 1){
                             var provinceObj = {
                                 region_id:res.data.data[i].region_id,
                                 region_name:res.data.data[i].region_name
                             }
                             if(columns_province.length == 0){
                                 id01 = res.data.data[i].region_id;
                                 _this.id01 = id01;
                             }
                             columns_province.push(res.data.data[i].region_name);
                             province_list.push(provinceObj)

                         }
                         //遍历出城市的数据
                         if(res.data.data[i].region_type == 2){
                             var city_obj = [];
                             if(res.data.data[i].parent_id in city_list){
                                 var cityObj = {
                                     region_id:res.data.data[i].region_id,
                                     region_name:res.data.data[i].region_name
                                 }
                                 city_list[res.data.data[i].parent_id].push(cityObj);
                             }else{
                                 city_obj.push({
                                     region_id:res.data.data[i].region_id,
                                     region_name:res.data.data[i].region_name
                                 })
                                 city_list[res.data.data[i].parent_id] = city_obj
                             }

                        }
                        // 遍历出区的数据
                        if(res.data.data[i].region_type == 3){
                            var country_obj = [];
                            if(res.data.data[i].parent_id in county_list){
                                var countryObj = {
                                    region_id:res.data.data[i].region_id,
                                    region_name:res.data.data[i].region_name
                                }
                                county_list[res.data.data[i].parent_id].push(countryObj);
                            }else{
                                country_obj.push({
                                    region_id:res.data.data[i].region_id,
                                    region_name:res.data.data[i].region_name
                                })
                                county_list[res.data.data[i].parent_id] = country_obj
                            }

                        }
                    }


                    _this.province_list = province_list;
                    _this.city_list = city_list;
                    _this.county_list = county_list;
                    _this.columns_province = columns_province;
                    console.log(JSON.stringify(columns_province));
                    _this.id01 = id01;
                    console.log(id01)
                    _this.index01 = 0;
                    _this.index02 = 0;
                    _this.index03 = 0;

                    _this.pickIndex()

                }).catch(()=>{
                    // console.log(response)
                })
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
                        if(res.data.data[i].region_name == province){
                              _this.id01 = res.data.data[i].region_id

                        }
                        if(res.data.data[i].region_name == city){
                            _this.id02 = res.data.data[i].region_id
                        }
                        if(res.data.data[i].region_name == area){
                            _this.id03 = res.data.data[i].region_id
                        }
                    }
                    _this.$set(_this.selId,"province",_this.id01);
                    _this.$set(_this.selId,"city",_this.id02);
                    _this.$set(_this.selId,"area",_this.id03);
                    console.log(this.id01)



                }).catch(()=>{
                    // console.log(response)
                })
            },
            pickIndex(id){
                var id01 = this.id01;
                var id02= "";
                var columns_city= [];
                var columns_couny=[];
                var _cityLenth = this.city_list[id01];
                for(let i=0;i<_cityLenth.length;i++){
                    columns_city.push(_cityLenth[i].region_name)
                }
                console.log(id)
                if(id){
                    id02=id
                }else{
                    id02=_cityLenth[0].region_id;
                    this.id02 = id02;
                }

                this.columns_city = columns_city;
                console.log(id02);
                console.log(JSON.stringify(columns_city));
                console.log(JSON.stringify(columns_couny));
                var counyLength = this.county_list[id02];
                for(var i=0;i<counyLength.length;i++){
                    columns_couny.push(counyLength[i].region_name)
                }
                console.log(columns_couny);
                this.columns_couny = columns_couny;


                var columns = [
                    {
                        values:this.columns_province,
                        className:"name1"
                    },
                    {
                        values:this.columns_city,
                        className:"name1"
                    },
                    {
                        values:this.columns_couny,
                        className:"name1"
                    }
                ]
                this.columns = columns;
                console.log(this.columns);
                console.log(JSON.stringify(this.columns))


                // console.log(response.data)
            },
            selRedio(index){
                this.selIndex = index
            },
            //倒计时
            countDown(i){
                i = i - 1;

                if (i == 0) {
                    // $("#codeName").html("获取验证码");
                    this.code_html = "获取验证码";
                    this.flag_switch = 1;
                    i = 60;
                    this.flag = true;
                    return;
                } else {
                    // $("#codeName").html(i + "秒后重新发送");
                    this.code_html = i + '秒后重新发送';
                    setTimeout(this.countDown(i), 1000);
                }

            },
            //上传营业执照
            zzUrl(e){
                var reader = new FileReader();
                var _this = this;
                reader.onload = (function () {
                    return function () {
                        // console.info(this.result); //这个就是base64的数据了
                        _this.upLoad(this.result,2);
                        // var sss=$("#showImage");
                        // $("#showImage")[0].src=this.result;
                    };
                })(e.target.files[0]);
                reader.readAsDataURL(e.target.files[0]);
            },
            //上传身份证照片
            cardUrlup(e){
                var _this = this;
                var reader = new FileReader();
                reader.onload = (function () {
                    return function () {
                        // console.info(this.result); //这个就是base64的数据了
                        _this.upLoad(this.result,1);
                        // var sss=$("#showImage");
                        // $("#showImage")[0].src=this.result;
                    };
                })(e.target.files[0]);

                reader.readAsDataURL(e.target.files[0]);
            },
            //获取验证码
            getCode(){
                var  phone = this.phone;
                var _this = this;

                if(phone == ""){
                    // $.toast("", "forbidden");
                    Dialog({ message: '请输入手机号',confirmButtonColor:"#1bb339" });
                    return false;
                }else{
                    if(!(/^1[3456789]\d{9}$/.test(phone))){
                        Dialog({ message: '手机号码有误，请重填',confirmButtonColor:"#1bb339" });
                        // $.toast("手机号码有误，请重填", "forbidden");
                        return false;
                    }
                }
                if(!this.flag){
                    return false
                }else{
                    this.flag = false
                }
                this.ajax.post(this.mainUrl+ "message/Code/code",
                    this.qs.stringify({
                        phone,
                        type:1
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((res)=>{
                    // console.log(response.data)
                    // this.flag_switch = 1;
                    // this.countDown(60);

                    if(res.data.code == 0){
                        var time = setInterval(function() {
                            if(_this.code.countDown < 0) {
                                _this.$set(_this.code, 'codeText', '获取验证码');
                                _this.$set(_this.code, 'countDown', 60);
                                _this.$set(_this.code, 'spanStatus', 1);
                                clearInterval(time);
                                _this.flag = true;
                            } else {
                                _this.$set(_this.code, 'codeText', '重新获取' + '(' + _this.code.countDown + ')');
                                _this.code.countDown--;
                            }
                        }, 1000);
                    }


                }).catch(()=>{
                    // console.log(response)
                })
            },
            upLoad(imgUrl,num){
                var _this = this;
                this.ajax.post(this.mainUrl+ "upload/Upload/base64_image_upload",
                    this.qs.stringify({
                        base64:imgUrl
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then((result)=>{

                    if(result.data.code == 0) {
                        if(num == 1){
                            _this.$set(_this.cardUrl,_this.cardUrl.length, result.data.data.imageSrc)

                        }else{
                            _this.$set(_this.zzImg,_this.zzImg.length, result.data.data.imageSrc)
                        }
                    }else{
                        Dialog({ message: result.data.msg,confirmButtonColor:"#1bb339" });
                    }

                }).catch(()=>{
                    // console.log(response)
                })

            },
        //    身份证验证
            isCardNo(card){
// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
                var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                if(reg.test(card) === false) {
                    // alert("身份证输入不合法");

                    return false;
                }
                return true
            },
            goBack(){
                this.$router.go(-1)
            },
            //跳转下一页
            nextStep(){

                var type = this.$route.query.type;
                if(this.realName == ""){
                    // $.toast("请输入真实姓名","forbidden");
                    Dialog({ message: '请输入真实姓名',confirmButtonColor:"#1bb339" });
                    return false
                }
                if(this.phone == ""){
                    // $.toast("请输入手机号", "forbidden");
                    Dialog({ message: '请输入手机号',confirmButtonColor:"#1bb339" });
                    return false;
                }else{
                    if(!(/^1[3456789]\d{9}$/.test(this.phone))){
                        // $.toast("手机号码有误，请重填", "forbidden");
                        Dialog({ message: '请输入手机号',confirmButtonColor:"#1bb339" });
                        return false;
                    }
                }
                this.area = "beijing ";
                if(this.selCity == ""){
                    // $.toast("请选择地址", "forbidden");
                    Dialog({ message: '请选择地址',confirmButtonColor:"#1bb339" });
                    return false;
                }
                if(this.address == ""){
                    // $.toast("请选择地址", "forbidden");
                    Dialog({ message: '请输入详细地址',confirmButtonColor:"#1bb339" });
                    return false;
                }

                if(this.selIndex == 0){
                    if(this.cardNum == ""){
                        // $.toast("请输入证件号码", "forbidden");
                        Dialog({ message: '请输入证件号码',confirmButtonColor:"#1bb339" });
                        return false;
                    }else{
                        if(!this.isCardNo(this.cardNum)){
                            Dialog({ message: '请输入正确的身份证号',confirmButtonColor:"#1bb339" });
                            return false
                        }else{
                            // $.toast("请输入正确的身份证号", "forbidden");


                        }
                    }
                    // if(this.cardUrl.length == 0){
                    //     // $.toast("请选择身份证图片", "forbidden");
                    //     Dialog({ message: '请选择身份证图片',confirmButtonColor:"#1bb339" });
                    //     return false;
                    // }
                }else{
                    if(this.photo_number == ""){
                        // $.toast("请输入营业执照号码", "forbidden");
                        Dialog({ message: '请输入营业执照号码',confirmButtonColor:"#1bb339" });
                        return false;
                    }else{
                        if(!(/^[0-9a-zA-Z]*$/g.test(this.photo_number))){
                            // $.toast("请输入正确的营业执照号码", "forbidden");
                            Dialog({ message: '请输入正确的营业执照号码',confirmButtonColor:"#1bb339" });
                            return false;
                        }
                    }
                    if(this.zzImg.length == 0){
                        // $.toast("请选择营业执照图片", "forbidden");
                        Dialog({ message: '请选择营业执照图片',confirmButtonColor:"#1bb339" });
                        return false;
                    }
                }
                if(this.codeNum == ""){
                    // $.toast("请输入验证码", "forbidden");
                    Dialog({ message: '请输入验证码',confirmButtonColor:"#1bb339" });
                    return false;


                }
                this.$router.push({
                    path:'/register_pass',
                    query:{
                        type:type,
                        name:this.realName,
                        phone:this.phone,
                        photo_type:this.selIndex,
                        address:this.address,
                        cardNum:this.cardNum,
                        cardUrl:this.cardUrl,
                        photo_number:this.photo_number,
                        zzImg:this.zzImg,
                        codeNum:this.codeNum,
                        province_id:this.selId.province,
                        city_id:this.selId.city,
                        area_id:this.selId.area

                    }
                })

            },
        //    获取位置
            gain(){
  this.show = true

            }
        }
    }
</script>

<style scoped>

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
    body{
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
    .contentUli{
        padding-top: 1.17rem;
        padding-bottom: 1.3rem;
    }
    .name{
        color: #818181;
        font-size: 0.29rem;
        background: #f4f4f4;
        line-height: 1rem;
        padding: 0 0.48rem;
    }
    .mainFlex{
        height: 1.46rem;
        display: flex;
        align-items: center;
        font-size: 0.34rem;
        border-top: 1px solid #f4f4f4;
        padding: 0 0.48rem;
        background: #fff;
    }
    .radioFlex{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex: 1;

    }
    .radioFlex div{
        padding-left: 0.5rem;
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
    }
    .radioFlex .radio_active{
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;

    }
    .radioFlex div:before{
        position: absolute;
        content: '';
        left: 0;
        top: 0rem;
        bottom: 0;
        width: 0.4rem;
        height: 0.4rem;
        border: 1px solid #1bb339;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        z-index: 1;
    }
    .radioFlex .radio_active:after{
        position: absolute;
        content: '';
        /*left: 0.08rem;*/
        left: calc(0.05rem + 1px);
        top: calc(0.05rem + 1px);
        bottom: 0.1rem;
        width: 0.3rem;
        height: 0.3rem;
        background: #1bb339;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        z-index: 1;
    }
    .main{
        background: #fff;
        font-size: 0.34rem;
        border-top: 1px solid #f4f4f4;
        padding: 0 0.48rem;
    }
    .main>p{
        height: 1.46rem;
        line-height: 1.46rem;
    }
    .imgUli{
        overflow: hidden;
    }
    .imgLi{
        width: 2.34rem;
        height: 2.34rem;
        margin-right: 0.2rem;
        float: left;
    }
    .imgLi img{
        width: 100%;
        height: 100%;
    }
    .addImg{
        position: relative;
        border: 1px dashed #d8d8d8;
        width: 2.34rem;
        float: left;
        height: 2.34rem;
        text-align: center;
    }
    .addImg span{
        font-size: 1rem;
        color: #d8d8d8;
        line-height: 1.5rem;
    }
    .addImg p{
        color: #d8d8d8;
    }
    .type{
        display: none;
    }
    .type02{
        display: flex;
    }
    .imgtype02{
        display: block;
    }
    .addImg input{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0;
        font-size: 0.34rem;
    }
    .title{
        background: #c8edd4;
        color: #00ab2c;
        font-size: 0.29rem;
        padding: 0 0.48rem;
        line-height: 0.73rem;
    }
    .navorFlex{
        height: 2.18rem;
    }
    .navor{
        position: relative;
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }
    .navor img{
        width: 1.33rem;
        height: 1.33rem;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
    }
    .navor input{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        opacity: 0;
        border: none;

    }
    .flexEnd{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .mainFlex input{
        border: none;
        text-align: right;
        height: 1.46rem;
        line-height: 1.46rem;
    }
    .toolbar, .toolbar .title{
        font-size: 0.34rem;
        line-height: 2rem;
    }
    .weui-picker-modal .picker-item{
        font-size: 0.29rem;
    }
    .toolbar .toolbar-inner{
        height: 2rem;
    }
    .toolbar .picker-button{
        height:2rem;
        line-height: 2rem;
    }
    .weui-picker-modal .picker-modal-inner {
        position: relative;
        height: 7.8rem;
    }
    .weui-picker-modal{
        height:10rem;
    }
    .matginTop{
        margin-top: 0.24rem;
    }
    .rightDiv{
        background: #1bb339;
        border: none;
        color: #ffffff;
        padding: 0.2rem 0.4rem;
        -webkit-border-radius: 0.2rem;
        -moz-border-radius: 0.2rem;
        border-radius: 0.2rem;
    }
    .fixP{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #1bb339;
        line-height: 1.33rem;
        text-align: center;
        font-size: 0.34rem;color: #ffffff;
    }
    /*#addFiles{*/
    /*    display: none;*/
    /*}*/
    .endInput{
        flex: 1;
    }
    .endInput input{
        width: 100%;
        margin-right: 0.2rem;
    }
    /*.addFiles{*/
    /*    display: none;*/
    /*}*/

</style>