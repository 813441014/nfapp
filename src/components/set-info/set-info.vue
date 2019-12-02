<template>
	<div class="setInfo">
		<div v-wechat-title="$route.meta.title"></div>
		<div class="infoSet">
			<div class="header">
				<img src="./img/navor.png" alt="" />
				<div class="headerDiv" @click="toSet">
					<p class="headerTitle">点击登录</p>
					<p class="headerContent">登录更精彩</p>
				</div>
			</div>
			<div class="divCenter">
				<div class="centerDiv">
					<div>
						<img src="./img/collect.png" alt="" />
						<span>收藏</span>
					</div>
					<div>
						<img src="./img/order.png" alt="" />
						<span>订单</span>
					</div>
					<div>
						<img src="./img/news.png" alt="" />
						<span>通知</span>
					</div>
				</div>
			</div>
			<div class="uli">
				<div>
					<p>浏览记录</p>
					<img src="./img/list.png" alt="" class="imgIcon" />
					<img src="./img/nextstep.png" alt="" />
				</div>
				<div>
					<p>我的特权</p>
					<img src="./img/myinfo.png" alt="" class="imgIcon" />
					<img src="./img/nextstep.png" alt="" />
				</div>
				<div>
					<p>为你推荐</p>
					<img src="./img/hert.png" alt="" class="imgIcon" />
					<img src="./img/nextstep.png" alt="" />
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

			}
		},
		created() {

		},
		methods: {
			toSet() {
				this.$router.replace({
					name: 'setPhone'
				});
			}
		}
	}
</script>

<style scoped lang="less">
	@import "~static/css/minxin.less";
	.setInfo {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		/*background-color: #f8f9fa;*/
		z-index: 1000;
		.infoSet {
			width: 100%;
			height: 100%;
			overflow-y: scroll;
			-webkit-overflow-scrolling: touch;
			.header {
				padding: 1rem 0.26rem;
				display: flex;
				img {
					width: 1.4rem;
					height: 1.4rem;
					margin-right: 0.4rem;
				}
				.headerDiv {
					.headerTitle {
						font-size: 0.4rem;
						color: #000;
						font-weight: bold;
						line-height: 0.7rem;
					}
					.headerContent {
						font-size: 0.33rem;
						color: #999;
						line-height: 0.7rem;
					}
				}
			}
			.divCenter {
				padding: 0 0.26rem;
				.centerDiv {
					/*width: 100%;*/
					/*margin: auto;*/
					padding: 0.6rem 0.6rem;
					display: flex;
					align-items: center;
					background: #efefef;
					border-radius: 0.8rem;
					div {
						position: relative;
						flex: 1;
						text-align: center;
						justify-content: center;
						&:after {
							position: absolute;
							top: 0.2rem;
							bottom: 0.2rem;
							width: 1px;
							background: #fff;
							content: "";
							right: 0;
						}
						&:nth-last-of-type(1) {
							&:after {
								display: none;
							}
						}
						img {
							width: 0.6rem;
							/*height: 0.8rem;*/
							vertical-align: middle;
							margin-right: 0.1rem;
						}
						p {
							font-size: 0.33rem;
						}
					}
				}
			}
			.uli {
				list-style: none;
				padding: 0 0.26rem;
				margin-top: 0.6rem;
				div {
					display: flex;
					align-items: center;
					height: 1.4rem;
					border-bottom: 1px solid #f3f3f3;
					p {
						font-size: 0.33rem;
						flex: 1;
					}
					img {
						width: .3rem;
						vertical-align: middle;
					}
					.imgIcon {
						width: 0.6rem;
						margin-right: 0.4rem;
					}
					&:nth-last-of-type(1) {
						border: none;
					}
				}
			}
		}
	}
</style>