<template>
	<div id="app">
		<div class="container">
			<div class="bgcolor"></div>
			<div id="nav">

				<div class="headernav">
					<img :src="user.header ? user.header : require('./img/perImg.png')" alt="" class="navor">
					<img src="./img/uploadHeader.png" alt="" class="upfile" v-if="!user.header">
					<!--@change="referenceUpload"-->
					<input type="file" ref="chooseId" id="chooseId" accept="image/*" @change="addImg($event)" class="chooseFile" name="headPic" />
					<!--<input type="file"  @change="referenceUpload()" name="files" ref="chooseId" accept="image/jpeg,image/jpg,image/png"/>-->
				</div>

				<!--<p class="nickname"><input type="text" v-model="user.name" /></p>-->
				<p class="tabtaps">业主</p>
				<!--<div class="iphonenum" v-on:click="editPhone">
				<p>{{ $store.state.userTel || user.phone}}</p>
				<p><img src="./img/editphone.png" alt=""> <span>修改</span></p>
			</div>-->
				<!--<p class="address">{{ user.address }} →</p>-->
				<p @click="deliquesce()" class="removeBtn">退出登陆</p>
			</div>
			<div class="personUli">
				<div class="mainFlex redColor">
					<p class="redSpan">*</p>
					<img src="./img/userName.png" alt="" />
					<p class="navLeft">姓名</p>
					<div class="navRight">
						<input type="text" placeholder="请输入姓名" v-model="user.name" name="name" />
						<!--<div>修改</div>-->
					</div>
				</div>
				<div class="mainFlex redColor">
					<p class="redSpan">*</p>
					<img src="./img/phoneNum.png" alt="" />
					<p class="navLeft">手机号</p>
					<div class="navRight">
						<input type="text" placeholder="请输入手机号" v-model="user.tel" name="phone" />
						<!--<div>修改</div>-->
					</div>
				</div>
				<!--<div class="mainFlex">
				<img src="./img/codeNum.png" alt="" />
				<p class="navLeft">验证码</p>
				<div class="navRight">
					<input type="text" placeholder="请输入验证码"/>
				</div>
			</div>-->
				<div class="mainFlex">
					<img src="./img/address.png" alt="" />
					<p class="navLeft">所在地区</p>
					<div class="navRight" @click="areaCity">
						<p v-if="selProvince != '' || selCity != ''">{{selProvince}}{{selCity}}</p>
						<p v-else>请选择</p>
					</div>
				</div>
				<div class="mainFlex">
					<img src="./img/idCard.png" alt="" />
					<p class="navLeft">身份证号</p>
					<div class="navRight">
						<input type="text" placeholder="请输入身份证号" v-model="user.cardNum" />
					</div>
				</div>
				<div class="mainFlex">
					<img src="./img/birth.png" alt="" />
					<p class="navLeft">出生日期</p>
					<div class="navRight">
						<p @click="toBirth">
							{{user.birthday == ''?'请选择':user.birthday}}
						</p>

					</div>
					<input type="hidden" :value="user.birthday" name="birthday" />
				</div>
				<div class="mainFlex">
					<img src="./img/qqNum.png" alt="" />
					<p class="navLeft">QQ号</p>
					<div class="navRight">
						<input type="text" placeholder="请输入QQ号" v-model="user.qqNum" />
					</div>
					<input type="hidden" :value="user.qqNum" name="QQcard" />
				</div>
				<div class="mainFlex">
					<img src="./img/weixin.png" alt="" />
					<p class="navLeft">微信号</p>
					<div class="navRight">
						<input type="text" placeholder="请输入微信号" v-model="user.wxNum" />
					</div>
					<input type="hidden" :value="user.wxNum" name="wx" />
				</div>
				<div class="mainFlex">
					<img src="./img/job.png" alt="" />
					<p class="navLeft">职业</p>
					<div class="navRight">
						<p @click="toSeljob">{{selJob == ''?'请选择':selJob}}</p>
					</div>
					<input type="hidden" :value="selJob" name="career" />
				</div>
				<div class="mainFlex">
					<img src="./img/record.png" alt="" />
					<p class="navLeft">学历</p>
					<div class="navRight">
						<p @click="toSel">{{selCard == ''?'请选择':selCard}}</p>
					</div>
					<input type="hidden" :value="selCard" name="education" />
				</div>
				<div class="aboDiv">
					<p @click="uoloapSubmit()">保存</p>
				</div>
			</div>
			<!--<div class="mole" v-show="molestatus" @click="dismiss">
				<div class="molealert">
					<p class="moletitle border-1px-bottom">上传方式选择</p>
					<div class="moleflex">
						<p>手机相册</p>
						<input type="file" ref="chooseId" id="choose" accept="image/*" @change="addImg($event)" class="chooseFile" />
						<input type="file" ref="chooseId" id="choose" accept="image/*" @change="addImg($event)" class="chooseFile" />
					</div>
					<div class="moleflex">
						<p>相机拍照</p>
						<input type="file" ref="chooseId" id="choose" capture=camera accept="image/*" @change="addImg($event)" class="chooseFile" />
					</div>
					<div class="moleflex">
						<p>取消</p>
					</div>
				</div>
			</div>-->
			<transition :name="transitionName">
				<router-view class="refresh"></router-view>
			</transition>
		</div>
	</div>
</template>
<script>
	import requestInfo from 'static/js/request';
	import resultInfo from 'static/js/result';
	import lrz from 'lrz'
	export default {
		name: "root",
		data() {
			return {
				transitionName: 'slide-left',
				user: {
					userId: '',
					name: '',
					header: '',
					tel: '',
					address: '',
					birthday: '',
					cardNum: "", //身份证号
					qqnum: "", //qq号
					wxnum: "", //微信号
					career: null, //职业 1教师   2医生  3IT工程师     4销售经理   5白领   6其他
					education: null, //学历 1小学  2高中   3专科   4本科  5研究生  6硕士   7 博士 8中学
					province: "0", //省 为0时=null
					city: "0"
				},
				cityArray: [],
				provinceArray: [],
				zotolCity: [],
				selProvince: "", //省
				selProvinceId: "",
				selCity: "", //市
				selCityId: "", //市
				selJob: "", //职业
				selJobId: "",
				selCard: "", //学历
				selCardId: "",
				phoneNum: "",
				cardNum: "",
				qqNum: "",
				wxNum: "",
				jobArray: [{
						value: "1",
						label: "教师"
					},
					{
						value: "2",
						label: "医生"
					}, {
						value: "3",
						label: "IT工程师"
					}, {
						value: "4",
						label: "销售经理"
					}, {
						value: "5",
						label: "白领"
					}, {
						value: "6",
						label: "其他"
					}
				],
				cardArray: [{
						value: "1",
						label: "小学"
					},
					{
						value: "2",
						label: "高中"
					}, {
						value: "3",
						label: "专科"
					}, {
						value: "4",
						label: "本科"
					}, {
						value: "5",
						label: "研究生"
					}, {
						value: "6",
						label: "硕士"
					}, {
						value: "7",
						label: "博士"
					}
				],
				disFlag: true,
				endTime: "",
				startTime: "",
				defaultValue: "",
				molestatus: false,
				chooseVal: "",
				fileName: "",
				baseUrl: ""

			}
		},
		async created() {
			this.endTime = new Date().getFullYear();
			this.defaultValue = ['1990', '01', '01'];
			this.startTime = "1990";
			this.phoneNum = this.$store.state.userTel;
			this.city()

		},
		mounted() {
			console.log()
			this.$refs.chooseId.value = "";
			console.log(this.$refs.chooseId.value)
		},
		methods: {
			async init() {
				var loading = weui.loading('loading', {
					className: 'custom-classname'
				});
				var params = {
					openId: this.$store.state.openId || "opcIq6LmPFvlXTVoalnLB_bM3oVc"
					// openId: 'opcIq6N08ZJno7NkMumEQFKfDtEg'
					// openId: 'opcIq6DbbI0-kYAFgEUbtRt8TRqU'
				};
				//			decorate/login/DoLogin/personalInformation
				var init_request = await requestInfo(
					'/decorate/login/DoLogin/personalInformation',
					'post',
					params,
					'application/x-www-form-urlencoded'
				);
				loading.hide();
				var init_result = resultInfo(init_request);
				if(!init_result) return;
				this.$set(this.user, 'userId', init_result.userId);
				this.$set(this.user, 'name', init_result.name);
				this.$set(this.user, 'header', init_result.headPic);
				this.$set(this.user, 'tel', init_result.phone);
				this.$set(this.user, 'address', init_result.detailAddress);
				this.$set(this.user, 'birthday', init_result.birthday);
				this.$set(this.user, 'cardNum', init_result.IdCard);
				this.$set(this.user, 'qqNum', init_result.QQcard);
				this.$set(this.user, 'wxNum', init_result.wx);

				this.$set(this.user, 'education', init_result.education);
				this.$set(this.user, 'career', init_result.career);
				this.$set(this.user, 'city', init_result.city);

				for(var i = 0; i < this.jobArray.length; i++) {
					if(this.jobArray[i].value == init_result.career) {
						//						this.$set(this.user, 'selJob',this.jobArray[i].label);
						//						this.$set(this.user, 'selJobId', init_result.career);
						this.selJob = this.jobArray[i].label;
						this.selJobId = init_result.career;
					}
				}
				for(var t = 0; t < this.cardArray.length; t++) {
					if(this.cardArray[t].value == init_result.education) {
						this.selCard = this.cardArray[t].label;
						this.selCardId = init_result.education;
					}
				}
				for(var j = 0; j < this.provinceArray.length; j++) {
					if(this.provinceArray[j].value == init_result.province) {
						this.selProvince = this.provinceArray[j].label;
						this.selProvinceId = this.provinceArray[j].value
					}
				}
				for(var k = 0; k < this.cityArray.length; k++) {
					if(this.cityArray[k].id == init_result.city) {
						this.selCity = this.cityArray[k].label;
						this.selCityId = this.cityArray[k].id
					}
				}
				var items = {
					id: init_result.userId,
					tel: init_result.phone
				};
				this.$store.commit('setUserTel', items);
			},
			async city() {
				let getProjectList = await requestInfo('/decorate/product/KnowYou/threeLinkage',
					'post', {}, 'application/x-www-form-urlencoded')
				// loading.hide()
				let info = resultInfo(getProjectList)
				// loading.hide()
				if(!info) return;
				var provinceArray = new Array();
				var cityArray = new Array();
				var zotolCity = new Array()
				for(var i = 0; i < info.length; i++) {
					if(info[i].type == 1) {
						var proObj = {
							label: info[i].name,
							value: info[i].id
						}

						provinceArray.push(proObj)
					} else if(info[i].type == 2) {
						var cityObj = {
							label: info[i].name,
							value: info[i].parentId,
							id: info[i].id

						}

						cityArray.push(cityObj);
					}
				}
				this.cityArray = cityArray;
				this.provinceArray = provinceArray
				for(var y = 0; y < provinceArray.length; y++) {
					var cityitem = []
					for(var z = 0; z < cityArray.length; z++) {
						if(cityArray[z].value == provinceArray[y].value) {
							var cityitems = {
								label: cityArray[z].label,
								value: cityArray[z].id
							}
							cityitem.push(cityitems);
						}

					}
					var toArray = {
						label: provinceArray[y].label,
						value: provinceArray[y].value,
						children: cityitem
					}
					zotolCity[y] = toArray;
				}
				this.zotolCity = zotolCity;
				this.init()
			},
			// 修改手机号
			editPhone: function() {
				this.$router.push({
					name: 'editPhone'
				})
			},
			// 上传头像
			_addHeaderImg() {
				var _self = this;
				wx.chooseImage({
					count: 1, // 默认9
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success: (res) => {
						console.log(JSON.stringify(res)); // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
						wx.getLocalImgData({
							localId: res.localIds[0],
							success: (res) => {
								var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
								var prefix = 'base64,';
								var index = localData.indexOf(prefix);
								var actData = localData;
								if(index > -1) {
									actData = localData.substring(index + 7);
								}
								_self._uploadImg(actData);
							}
						});
					}
				});
			},
			async _uploadImg(basedata) {
				let loading = weui.loading('loading', {
					className: 'custom-classname'
				});
				var params = {
					base64: encodeURIComponent(basedata)
				};
				var getImgUrl_request = await requestInfo(
					'/lyjlogin/UploadImg/uploadImage',
					'post',
					params,
					'application/x-www-form-urlencoded'
				);
				var getImgUrl_result = resultInfo(getImgUrl_request);
				if(!getImgUrl_result) return;
				this.$set(this.user, 'header', getImgUrl_result.imageSrc);
				//				var edit_params = {
				//					id: this.user.userId,
				//					headPic: this.user.header
				//				};
				//				var uploadImg_request = await requestInfo(
				//					'/decorate/login/DoLogin/updatePersonalInformation',
				//					'post',
				//					edit_params,
				//					'application/x-www-form-urlencoded'
				//				);
				//				var uploadImg_result = resultInfo(uploadImg_request);
				//				if(!uploadImg_result) return;
				//				weui.toast('头像修改成功！', 2000);
				loading.hide();
			},
			async deliquesce() {
				let loading = weui.loading('loading', {
					className: 'custom-classname'
				});
				var params = {
					openId: this.$store.state.openId
				};
				var getImgUrl_request = await requestInfo(
					'/lyjlogin/index/untied?openId=' + this.$store.state.openId,
					'get', {},
					'application/x-www-form-urlencoded'

				);
				var getImgUrl_result = resultInfo(getImgUrl_request);
				if(!getImgUrl_result) return;
				loading.hide();
				localStorage.clear();
				this.$store.commit('removeJSSDKstatus');
				this.$store.commit('removeBindStatus');
				//				location.reload()
				this.$router.replace({
					name: 'setInfo'
				})

			},
			//选择职业
			toSeljob() {
				var jobArray = [{
						value: "1",
						label: "教师"
					},
					{
						value: "2",
						label: "医生"
					}, {
						value: "3",
						label: "IT工程师"
					}, {
						value: "4",
						label: "销售经理"
					}, {
						value: "5",
						label: "白领"
					}, {
						value: "6",
						label: "其他"
					}
				];
				var _this = this;
				weui.picker(jobArray, {
					className: 'custom-classname',
					container: 'body',
					defaultValue: [0],
					onChange: function(result) {
						//						_this.selJob = result[0].label;
					},
					onConfirm: function(result) {
						_this.selJob = result[0].label;
						_this.selJobId = result[0].value;
					},
					id: 'singleLinePicker'
				});
			},
			//选择学历
			toSel() {
				var _this = this;
				var jobArray = [{
						value: "1",
						label: "小学"
					},
					{
						value: "2",
						label: "高中"
					}, {
						value: "3",
						label: "专科"
					}, {
						value: "4",
						label: "本科"
					}, {
						value: "5",
						label: "研究生"
					}, {
						value: "6",
						label: "硕士"
					}, {
						value: "7",
						label: "博士"
					}
				];

				weui.picker(jobArray, {
					className: 'custom-classname',
					container: 'body',
					defaultValue: [0],
					onChange: function(result) {
						//						_this.selCard = result[0].label;
					},
					onConfirm: function(result) {
						_this.selCard = result[0].label;
						_this.selCardId = result[0].value;
					},
					id: 'singleLinePicker'
				});
			},
			areaCity() {
				var _this = this;
				weui.picker(this.zotolCity, {
					className: 'custom-classname',
					container: 'body',
					defaultValue: [2, 2],
					onChange: function(result) {
						//								_this.selProvince = result[0].label;
						//								_this.selCity = result[0].label;
					},
					onConfirm: function(result) {
						_this.selProvince = result[0].label;
						_this.selProvinceId = result[0].value;
						_this.selCity = result[1].label;
						_this.selCityId = result[1].value;
					},

					id: 'doubleLinePicker'

				})
			},
			async toSubmit() {
				
				//				if(this.selProvince == "" && this.selCity == "") {
				//					weui.alert("请选择所在城市");
				//					return false
				//				}
				//				var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
				//				if(this.user.cardNum == "") {
				//					weui.alert("请输入身份证号");
				//					return false;
				//				} else {
				//					if(reg.test(this.user.cardNum) === false) {
				//						weui.alert("身份证输入不合法");
				//						return false;
				//					}
				//				}
				//				if(this.user.birthday == "") {
				//					weui.alert("请选择出生日期");
				//					return false;
				//				} else {
				//
				//				}
				//				var reg = /^[1-9][0-9]{4,9}$/gim;
				//				if(this.user.qqNum == "") {
				//					weui.alert("请输入QQ号");
				//					return false;
				//				} else {
				//					if(!reg.test(this.user.qqNum)) {
				//						weui.alert("QQ号码有误，请重填");
				//						return false;
				//					}
				//				}
				//				if(this.user.wxNum == "") {
				//					weui.alert("请输入微信号");
				//					return false;
				//				} else {
				//					if(!(/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(this.user.wxNum))) {
				//						weui.alert("微信号码有误，请重填");
				//						return false;
				//					}
				//				}
				//
				//				if(this.user.selJob == "") {
				//					weui.alert("请选择职业");
				//					return false
				//				}
				//				if(this.user.selCard == "") {
				//					weui.alert("请选择学历");
				//					return false
				//				}
				let loading = weui.loading('loading', {
					className: 'custom-classname'
				});
				//				console.log(this.$refs.chooseId.files[0]);
				var imageBase64 = this.baseUrl;
				//				var blob = this.dataURItoBlob(imageBase64); // 上一步中的函数
				//				var canvas = document.createElement('canvas');
				//				var dataURL = canvas.toDataURL('image/jpeg', 0.5);

				var _this = this;
				var imgUrl = URL.createObjectURL(this.$refs.chooseId.files[0], {
					quality: 0
				})
				var fileObj = document.getElementById('chooseId').files[0];
				lrz(fileObj).then(function(data) {
					
					data.formData.append("headPic", data.file);
					_this.uoloapSubmit(data.formData);
				}).catch(function(error) {
					console.log(error)               //失败时执行

					            
				}).always(async function() {

				})

				//				console.log(new File([this.chooseVal], this.fileName))

				//				var params = {
				//					id: this.user.userId,
				//					phone: this.user.tel,
				//					headPic: this.user.header,
				//					province: this.selProvinceId,
				//					city: this.selCityId,
				//					IdCard: this.user.cardNum,
				//					QQcard: this.user.qqNum,
				//					wx: this.user.wxNum,
				//					career: this.selJobId,
				//					education: this.selCardId,
				//					birthday: this.user.birthday,
				//					name: this.user.name
				//				};

			},
			toBirth() {
				var _this = this;
				weui.datePicker({
					start: _this.startTime,
					end: _this.endTime,
					defaultValue: _this.defaultValue,
					onConfirm: function(result) {
						if(result[1] < 10) {
							result[1] = '0' + result[1];
						}
						if(result[2] < 10) {
							result[2] = '0' + result[2];
						}
						var birth = result[0].value + "-" + result[1] + "-" + result[2]
						_this.$set(_this.user, 'birthday', birth);

					}
				});
			},
			referenceUpload() {},
			//添加图片
			addImg(e) {
				var _this = this;
				//				e.stopPropagation();
				console.log(e)
				// 判断是否有值
				if(!e.target.files.length) {
					layer.open({
						content: "有值",
						btn: "确定"
					});
					return false;
				}
				var loading = weui.loading('loading', {
					className: 'custom-classname'
				});
				var reader = new FileReader();
				//使用该对象读取file文件
				var file = this.$refs.chooseId.files[0];
				this.fileName = file.name;
				reader.readAsDataURL(file);
				this.imgUrl = URL.createObjectURL(file, {
					quality: 0
				});
				//读取文件成功后执行的方法函数
				reader.onload = function(e) {
					//读取成功后返回的一个参数e，整个的一个进度事件
					console.log(e);
					//选择所要显示图片的img，要赋值给img的src就是e中target下result里面
					//的base64编码格式的地址
					var prefix = 'base64,';

					_this.$set(_this.user, "header", e.target.result);

					loading.hide()
					//判断图片是否大于100K,是就直接上传，反之压缩图片  

					   
				}
				//				_this.$refs.chooseId.value = '';  

			},
			async uoloapSubmit(form) {
				if(this.user.name == "") {
					weui.alert("请输入姓名");
					return false;
				} else {

				}
				if(this.user.tel == "") {
					weui.alert("请输入手机号");
					return false;
				} else {
					if(!(/^1[3456789]\d{9}$/.test(this.user.tel))) {
						weui.alert("手机号码有误，请重填");
						return false;
					}
				}
				let loading = weui.loading('loading', {
					className: 'custom-classname'
				});
				var _this = this
				console.log(form);
				var form = new FormData();
			    form.append("headPic", this.$refs.chooseId.files[0]);
				form.append('id', _this.user.userId);
				form.append('phone', _this.user.tel);
				//				form.append('headPic', this.$refs.chooseId);
				form.append('province', _this.selProvinceId);
				form.append('city', _this.selCityId);
				form.append('IdCard', _this.user.cardNum);
				form.append('QQcard', _this.user.qqNum);
				form.append('wx', _this.user.wxNum);
				form.append('career', _this.selJobId);
				form.append('education', _this.selCardId);
				form.append('birthday', _this.user.birthday);
				form.append('name', _this.user.name);               //不管成功或失败，都会执行
				var getImgUrl_request = await requestInfo(
					'/decorate/login/DoLogin/updatePersonalInformation',
					'post', form,
					'multipart/form-data'

				);
				var getImgUrl_result = resultInfo(getImgUrl_request);
				if(!getImgUrl_result) return;
				loading.hide();
				weui.alert("修改成功")
				_this.init()
			}
			//压缩

		},
		watch: {
			'$route' (to, from) {
				var toDepth = to.path.length;
				var fromDepth = from.path.length;
				this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
			}
		}
	}
</script>
<style lang="less">
	@import "~static/css/minxin.less";
	@import "~static/css/transition.less";
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		background: #f3f3f3;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		.container {
			width: 100%;
			height: calc(100%);
			overflow: scroll;
			-webkit-overflow-scrolling: touch;
		}
	}
	
	.bgcolor {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 240rem/@rootFontSize;
		background: #e6a551;
	}
	
	#nav {
		width: 684rem/@rootFontSize;
		margin: auto;
		margin-top: 100rem/@rootFontSize;
		background: #fff;
		position: relative;
		-webkit-border-radius: 20rem/@rootFontSize;
		-moz-border-radius: 20rem/@rootFontSize;
		border-radius: 20rem/@rootFontSize;
		padding-top: 86rem/@rootFontSize;
		padding-bottom: 20rem/@rootFontSize;
		box-shadow: 0 0 20rem/@rootFontSize #d7d7d7;
		position: relative;
		.headernav {
			position: absolute;
			width: 152rem/@rootFontSize;
			height: 152rem/@rootFontSize;
			top: -76rem/@rootFontSize;
			left: 266rem/@rootFontSize;
			-webkit-border-radius: 100%;
			-moz-border-radius: 100%;
			border-radius: 100%;
			.navor {
				width: 100%;
				height: 100%;
				overflow: hidden;
				border-radius: 100%;
			}
			.upfile {
				position: absolute;
				top: 0rem/@rootFontSize;
				right: 0rem/@rootFontSize;
				width: 152rem/@rootFontSize;
				height: 152rem/@rootFontSize;
				opacity: 0.5;
			}
			input {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: 1000;
				width: 152rem/@rootFontSize;
				opacity: 0;
			}
		}
		p {
			.font-dpr(12px);
			line-height: 50rem/@rootFontSize;
			img {
				width: 30rem/@rootFontSize;
				height: 30rem/@rootFontSize;
				vertical-align: middle;
				margin-left: 20rem/@rootFontSize;
				margin-right: 5rem/@rootFontSize;
			}
		}
		.nickname {
			.font-dpr(16px);
			line-height: 50rem/@rootFontSize;
			color: #000000;
			input {
				border: none;
				.font-dpr(16px);
				line-height: 50rem/@rootFontSize;
				color: #000000;
				text-align: center;
			}
		}
		.tabtaps {
			.font-dpr(12px);
			color: #e6a551;
			position: relative;
			width: 70rem/@rootFontSize;
			.border(#e6a551);
			line-height: 36rem/@rootFontSize;
			-webkit-border-radius: 10rem/@rootFontSize;
			-moz-border-radius: 10rem/@rootFontSize;
			border-radius: 10rem/@rootFontSize;
			margin: auto;
			margin-top: 20rem/@rootFontSize;
			margin-bottom: 20rem/@rootFontSize;
		}
		.iphonenum {
			.font-dpr(14px);
			overflow: hidden;
			white-space: nowrap;
			display: flex;
			align-items: center;
			justify-content: center;
			line-height: 50rem/@rootFontSize;
		}
		.address {
			line-height: 70rem/@rootFontSize;
		}
		.removeBtn {
			background: #e6a551;
			color: #fff;
			display: inline-block;
			padding: 0 4px;
			border-radius: 4px;
		}
	}
	
	.personUli {
		margin-top: 30rem/@rootFontSize;
		.mainFlex {
			padding: 0 30rem/@rootFontSize;
			display: flex;
			align-items: center;
			height: 90rem/@rootFontSize;
			border-bottom: 1px solid #f3f3f3;
			background: #fff;
			.font-dpr(12px);
			img {
				width: 44rem/@rootFontSize;
				margin-right: 20rem/@rootFontSize;
			}
			.navLeft {
				width: 200rem/@rootFontSize;
				line-height: 90rem/@rootFontSize;
				text-align: left;
			}
			.navRight {
				flex: 1;
				display: flex;
				input {
					text-align: right;
					flex: 1;
					line-height: 70rem/@rootFontSize;
					border: none;
				}
				div {
					display: inline-block;
					line-height: 90rem/@rootFontSize;
					margin-left: 20rem/@rootFontSize;
					color: #999;
				}
				p {
					width: 100%;
					text-align: right;
					line-height: 70rem/@rootFontSize;
				}
			}
		}
		.redColor {
			position: relative;
			.redSpan {
				position: absolute;
				left: 0;
				width: 30rem/@rootFontSize;
				top: 0;
				bottom: 0;
				height: 90rem/@rootFontSize;
				display: flex;
				align-items: center;
				justify-content: center;
				color: red;
				text-align: center;
			}
		}
		.aboDiv {
			margin-top: 40rem/@rootFontSize;
			padding: 0 20rem/@rootFontSize;
			color: #fff;
			.font-dpr(14px);
			line-height: 90rem/@rootFontSize;
			margin-bottom: 20rem/@rootFontSize;
			p {
				background: #e6a551;
				border-radius: 10rem/@rootFontSize;
			}
		}
	}
</style>