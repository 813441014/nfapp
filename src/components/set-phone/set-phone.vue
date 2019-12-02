<template>
	<div class="setPhone">
		<div v-wechat-title="$route.meta.title"></div>
		<div class="content">
			<div class="headerNav">
				<img src="./img/perImg.png" alt="" />
				<p class="phoneTitle" v-if="status.isShow == 0">会员登录</p>
				<p class="phoneTitle" v-if="status.isShow == 1">修改手机号</p>
			</div>
			<div class="phoneMole">
				<!--<p class="phoneTitle" v-if="status.isShow == 0">会员登录</p>
            <p class="phoneTitle" v-if="status.isShow == 1">修改手机号</p>-->
				<div class="phoneContent">
					<div class="phoneFlex">
						<!--<img src="./img/telIcon.png" alt="">-->
						<input type="text" placeholder="请输入手机号" v-model.trim="user.userPhone">
					</div>
					<div class="phoneFlex">
						<input type="text" placeholder="请输入验证码" v-model.trim="user.userPass">
						<span @click="_getCode">{{ code.codeText }}</span>
					</div>
					<div class="phoneFlex" v-if="status.isMore">
						<input type="text" placeholder="请输入姓名" v-model.trim="user.userName">
					</div>
					<div class="phoneFlex" v-if="status.isMore">
						<input type="text" placeholder="请输入邀请码" v-model.trim="user.userCode">
						<span class="grayColor">可不输</span>
					</div>
					<div class="remark" v-if="status.isShow == 1">注：手机号修改后，原手机号将在系统内作废，无法继续使用！</div>
				</div>
				<div class="more" @click="more">第一次登录</div>
				<div class="phoneDiv">
					<p @click="_cancel">X</p>
					<p @click="_binding" v-if="status.isShow == 0">立即登录</p>
					<p @click="_edit" v-if="status.isShow == 1">立即修改</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import requestInfo from 'static/js/request';
	import resultInfo from 'static/js/result';
	export default {
		name: "set-phone",
		data() {
			return {
				transitionName: 'slide-left',
				user: {
					userPhone: '',
					userPass: '',
					userName: '',
					userCode: ''
				},
				code: {
					// 验证码倒计时。
					countDown: 60,
					// 验证码点击状态
					spanStatus: 1,
					codeText: '获取验证码'
				},
				// isShow=0: 代表绑定页面。 isShow=1: 代表修改页面。
				status: {
					isShow: 0,
					isMore: false
				}
			}
		},
		created() {
			console.log('修改手机页面');
			this.$nextTick(function() {
				this.$set(this.status, 'isShow', this.status.isShow);
				console.log(this.status.isShow);
			});
		},
		methods: {
			// 点击获取验证码。
			_getCode: async function() {
				var _self = this;
				// 判断当前验证码按钮的状态是否已点击。0：已点击。1：未点击。
				if(this.code.spanStatus != 1) {
					return;
				}
				_self.$set(_self.code, 'spanStatus', 0);
				var phoneTest = /^1(3|4|5|7|8)\d{9}$/;
				if(!this.user.userPhone) {
					weui.alert("请输入手机号！");
					return false
				} else if(!phoneTest.test(this.user.userPhone)) {
					weui.alert("手机号输入错误！");
					return false
				} else {
					// 创建计时器setInterval。
					var time = setInterval(function() {
						if(_self.code.countDown < 0) {
							_self.$set(_self.code, 'codeText', '获取验证码');
							_self.$set(_self.code, 'countDown', 60);
							_self.$set(_self.code, 'spanStatus', 1);
							clearInterval(time);
						} else {
							_self.$set(_self.code, 'codeText', '重新获取' + '(' + _self.code.countDown + ')');
							_self.code.countDown--;
						}
					}, 1000);
					let params = {
						phone: this.user.userPhone,
						type: this.status.isShow === 0 ? 1 : 2
					};
					console.log(params);
					let request = await requestInfo(
						'/lyjlogin/index/getVerificationCode',
						'post',
						params,
						'application/x-www-form-urlencoded'
					);
					console.log(request);
					let result = resultInfo(request);
					if(!result) return;
					console.log(result);
				}
			},
			more() {
				this.status.isMore = !this.status.isMore;
				if(this.status.isMore === false) {
					this.$set(this.status, 'userName', '');
					this.$set(this.status, 'userCode', '');
				}
			},
			// 点击取消按钮。
			_cancel() {
				if(this.status.isShow == 1) {
					this.$router.go(-1);
				} else {
					this.$router.go(-2);
				}
			},
			// 立即绑定
			_binding: async function() {
				if(!this.user.userPhone) {
					weui.alert("请输入手机号！");
					return false;
				} else {
					var phoneTest = /^1(1|2|3|4|5|6|7|8|9)\d{9}$/;
					if(!phoneTest.test(this.user.userPhone)) {
						weui.alert("手机号输入错误！");
						return false;
					}
				}
				if(!this.user.userPass) {
					weui.alert("请输入验证码！");
					return false
				}
				var loading = weui.loading('loading', {
					className: 'custom-classname'
				});
				let params = {
					phone: this.user.userPhone,
					openId: this.$store.state.openId,
					code: this.user.userPass,
					name: this.user.userName,
					invitation: this.user.userCode
				};
				console.log(params);
				let request = await requestInfo(
					'/lyjlogin/index/phone',
					'post',
					params,
					'application/x-www-form-urlencoded'
				);
				console.log(request);
				loading.hide();
				let result = resultInfo(request);
				console.log(result);
				if(!result) return;
				// 存储到localStorage中 userId、sessionId、addressId。
				localStorage.setItem('userId', result.userId);
				localStorage.setItem('sessionId', result.sessionId);
				localStorage.setItem('projectId', result.addressId);
				// 存储到store.js中 userId、sessionId、addressId。
				let items = {
					userId: result.userId,
					sessionId: result.sessionId,
					projectId: result.addressId
				};
				this.$store.commit('setRegister', items);
				console.log(this.$store.state.bindStatus);
				// 跳转到首页。
				this.$router.push({
					path: '/'
				});
			},
			// 立即修改。
			_edit: async function() {
				console.log('true');
				// 修改手机号业务逻辑代码...
				var phoneTest = /^1(1|2|3|4|5|6|7|8|9)\d{9}$/;
				if(!this.user.userPhone) {
					weui.alert("请输入手机号！");
					return;
				}
				if(!phoneTest.test(this.user.userPhone)) {
					weui.alert("手机号输入错误！");
					return;
				}
				if(this.user.userPhone == this.$store.state.userTel) {
					weui.alert("修改的手机号不能和当前手机号相同！");
					return;
				}
				if(!this.user.userPass) {
					weui.alert("请输入验证码！");
					return false
				}
				var loading = weui.loading('loading', {
					className: 'custom-classname'
				});
				var params = {
					id: this.$store.state.userId,
					phone: this.user.userPhone,
					code: this.user.userPass
				};
				console.log(params);
				var edit_request = await requestInfo(
					'/decorate/login/DoLogin/updatePersonalInformation',
					'post',
					params,
					'application/x-www-form-urlencoded'
				);
				loading.hide();
				console.log(edit_request);
				var edit_result = resultInfo(edit_request);
				if(!edit_result) return;
				console.log(edit_request);
				this.$store.commit('editTel', this.user.userPhone);
				weui.toast('修改成功！', 2000);
				this.$router.go(-1);
			},
		},
		// 监听当前页面的URL在router.js中配置的name值。
		beforeRouteEnter(to, from, next) {
			next(vm => {
				if(to.name == 'setPhone') {
					vm.status.isShow = 0;
				} else if(to.name == 'editPhone') {
					vm.status.isShow = 1;
				}
			});
		}
	}
</script>

<style scoped lang="less">
	@import "~static/css/minxin.less";
	.setPhone {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: #fff;
		z-index: 1000;
		.content{
			margin-top: 60rem/@rootFontSize;
			.headerNav{
				text-align: center;
				img{
					width: 120rem/@rootFontSize;
					height: 120rem/@rootFontSize;
					margin: auto;
				}
				p{
					height: 100rem/@rootFontSize;
					line-height: 100rem/@rootFontSize;
					.font-dpr(14px);
					font-weight: bold;
				}
			}
		}
		.phoneMole {
			/*position: absolute;
            left: 50%;
            top: 50%;
            width: 640rem/@rootFontSize;
            transform: translate(-50%,-50%);
            z-index: 1001;
            background: #fff;
            -webkit-border-radius: 10rem/@rootFontSize;
            -moz-border-radius: 10rem/@rootFontSize;
            border-radius: 10rem/@rootFontSize;*/
           margin-top: 40rem/@rootFontSize;;
			.phoneTitle {
				line-height: 100rem/@rootFontSize;
				.font-dpr(16px);
				color: #000;
				position: relative;
				.border-bottom(#e5e6e7);
				text-align: center;
			}
			.phoneContent {
				padding: 0 20rem/@rootFontSize;
				position: relative;
				/*.border-bottom(#e5e6e7);*/
				overflow: hidden;
				.phoneFlex {
					display: flex;
					height: 80rem/@rootFontSize;
					align-items: center;
					position: relative;
					.border-bottom(#e5e6e7);
					margin-top: 30rem/@rootFontSize;
					img {
						width: 50rem/@rootFontSize;
						height: 50rem/@rootFontSize;
						margin-right: 20rem/@rootFontSize;
					}
					input {
						flex: 1;
						border: none;
						line-height: 80rem/@rootFontSize;
					}
					span {
						display: block;
						color: #d9bb93;
					}
					.grayColor{
						color:#999
					}
				}
				.remark {
					line-height: 40rem/@rootFontSize;
					.font-dpr(10px);
					margin-top: 40rem/@rootFontSize;
					margin-bottom: 40rem/@rootFontSize;
					text-align: left;
				}
			}
			.more {
				height: 80rem / @rootFontSize;
				color: #7e8187;
				display: flex;
				align-items: flex-end;
				justify-content: center;
				margin: 20rem/@rootFontSize 0;
			}
			.phoneDiv {
				/*display: flex;
				align-items: center;
				position: relative;*/
				
				overflow: hidden;
				width: 420rem/@rootFontSize;
				margin:auto;
				margin-top: 40rem/@rootFontSize;
				p {
					/*width: 50%;
					line-height: 120rem/@rootFontSize;
					text-align: center;*/
					float: left;
						.font-dpr(16px);
					&:nth-of-type(2) {
						color: #fff;
						background: #79d097;
						width: 300rem/@rootFontSize;
						line-height: 60rem/@rootFontSize;
						border-radius: 20rem/@rootFontSize;
						text-align: center;
					}
					&:nth-of-type(1) {
						color: #fff;
						background: #e5e5e5;
						width: 100rem/@rootFontSize;
						line-height: 60rem/@rootFontSize;
						border-radius: 40rem/@rootFontSize;
						text-align: center;
						margin-right: 20rem/@rootFontSize;
					}
				}
			}
		}
	}
</style>