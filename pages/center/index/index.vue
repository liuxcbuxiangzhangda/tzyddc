<template>
	<view class="uni-container">
		<!-- 已登录 -->
		<view class="loginlogtitle" v-if="islogin">
			<view class="headWarp">
				<image class="headpic" src="/static/images/center/head@2x.png" />
				<view class="headInfor">
					<view class="num">
						{{telNumSecret}}
					</view>
					<view class="tags">
						<!-- 已认证 -->
						<view class="tagWarp" v-if="iscertification">
							{{certificationTag}}

						</view>
						<!-- 未认证 -->
						<view class="tagWarp" v-else>


						</view>

					</view>

				</view>

			</view>

		</view>
		<!-- 未登录 -->
		<view v-else class="logtitle">
			<image class="imgpic" src="/static/images/center/centerlogo@2x.png" />
			<view class="loginBtn">立即登录</view>
		</view>

		<view class="listWarp">
			<uni-list>
				<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="消息通知" />
				<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="我的发布" />
				<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="草稿箱" />
			</uni-list>
			<uni-list>
				<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="我的收藏" />
				<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="设置" />
			</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		computed: {
			// 格式化电话号码
			telNumSecret() {
				let reg = /^(\d{3})\d{4}(\d{4})$/;
				return this.telNum.replace(reg, "$1****$2");
			}
		},
		data() {
			return {
				extraIcon1: {
					color: '#007aff',
					size: '22',
					type: 'settings'
				},
				islogin: true, //是否已登录
				iscertification: false, //是否已认证
				certificationTag: '村民认证', //认证标识
				telNum: '13654425566'
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.loginlogtitle {
		height: 320upx;
		background: linear-gradient(135deg, rgba(253, 99, 70, 1) 0%, rgba(197, 53, 53, 1) 100%);

		.headWarp {
			height: 96upx;
			padding-left: 30upx;
			margin-top: 90upx;

			.headpic {
				height: 100%;
				width: 98upx;
				display: inline-block;

			}

			.headInfor {
				height: 100%;
				display: inline-block;

				.num {}

				.tags {
					.tagWarp {}
				}
			}
		}
	}

	.logtitle {
		height: 408upx;
		background: linear-gradient(135deg, rgba(253, 99, 70, 1) 0%, rgba(197, 53, 53, 1) 100%);
		text-align: center;



		.imgpic {
			width: 448upx;
			height: 114upx;
			margin: 80upx 0 60upx;
		}

		.loginBtn {
			margin: auto;
			width: 340upx;
			height: 88upx;
			text-align: center;
			box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.1);
			border-radius: 48upx;
			border: 1px solid rgba(255, 255, 255, 1);
			font-size: 36upx;
			font-family: PingFangSC;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
			line-height: 88upx;

		}
	}

	.listWarp {
		margin-top: 20upx;

		.uni-list-item__content-title {
			font-size: 30upx;

		}
	}
</style>
