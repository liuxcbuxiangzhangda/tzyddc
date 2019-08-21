<template>
	<view style="float: left;">
		<view class="top" :style="{backgroundImage:`url(${images.indexTopBg})`}">
			<image class="top-search" :src="images.iconSeach"></image>
			<image class="top-log" :src="images.logo"></image>
			<input class="top-input"  placeholder="请输入关键词" />
			<text  class="top-address">温江区</text>
			<image class="top-adress-more" :src="images.moreBottom"></image>
		</view>
		<view class="big-image">
			<image class="big-image-image" :src="images.bigImage"></image>
		</view>
		<view class="title-bar">
			<ul class="title-bar-ul">
				<li class="title-bar-li" v-for="(titleBar,tabIndex) in titleBars" :key="tabIndex">
					<image class="title-bar-image" :src="titleBar.image"></image>
					<text class="title-bar-text">{{titleBar.title}}</text>
				</li>
			</ul>
		</view>
		
		<view class="resource-info">
			<text class="survey">区域资源概况</text>
			<text class="info">规划详情</text>
		</view>
		
		<view class="resource-map">
			<image class="resource-map-image" :src="images.indexBgMap"></image>
		</view>
		
		<view class="resource-survey-red">
			<view class="resource-survey-red-content">
				<text class="number">{{resourceSurvey.bare}}</text>
				<text class="title">裸资源</text>
			</view>
			<view class="resource-survey-red-content">
				<text class="number">{{resourceSurvey.wait}}</text>
				<text class="title">待开发</text>
			</view>
			<view class="resource-survey-red-content">
				<text class="number">{{resourceSurvey.ongoing}}</text>
				<text class="title">已开发</text>
			</view>
			<view class="resource-survey-red-content">
				<text class="number">{{resourceSurvey.completed}}</text>
				<text class="title">开发中</text>
			</view>
		</view>
		
		<view>
			
		</view>
		
		
		
		<text>
			加载本地图片作为背景图加载本地图片作为背景图加载本地图片作为背
			景图加载本地图片作为背景图加载本地图片作为背景图加载本地图片作
			为背景图加载本地图片作为背景图加载本地图片作为背景图加载本地图
			片作为背景图加载本地图片作为背景图加载本地图片作为背景图加载本
			地图片作为背景图加载本地图片作为背景图加载本地图片作为背景图加
			载本地图片作为背景图加载本地图片作为背景图
			加载本地图片作为背景图加载本地图片作为背景图加载本地图片作为背
			景图加载本地图片作为背景图加载本地图片作为背景图加载本地图片作
			为背景图加载本地图片作为背景图加载本地图片作为背景图加载本地图
			片作为背景图加载本地图片作为背景图加载本地图片作为背景图加载本
			地图片作为背景图加载本地图片作为背景图加载本地图片作为背景图加
			载本地图片作为背景图加载本地图片作为背景图
			加载本地图片作为背景图加载本地图片作为背景图加载本地图片作为背
			景图加载本地图片作为背景图加载本地图片作为背景图加载本地图片作
			为背景图加载本地图片作为背景图加载本地图片作为背景图加载本地图
			片作为背景图加载本地图片作为背景图加载本地图片作为背景图加载本
			地图片作为背景图加载本地图片作为背景图加载本地图片作为背景图加
			载本地图片作为背景图加载本地图片作为背景图
			加载本地图片作为背景图加载本地图片作为背景图加载本地图片作为背
			景图加载本地图片作为背景图加载本地图片作为背景图加载本地图片作
			为背景图加载本地图片作为背景图加载本地图片作为背景图加载本地图
			片作为背景图加载本地图片作为背景图加载本地图片作为背景图加载本
			地图片作为背景图加载本地图片作为背景图加载本地图片作为背景图加
			载本地图片作为背景图加载本地图片作为背景图
		</text>
	</view>
</template>
<script>
	//加载本地图片作为背景图
	import indexTopBg from "@/static/images/index-top-bg@2x.png"
	export default {
		data() {
			return {
				//图片资源
				images:{
					indexTopBg:indexTopBg,
					logo:'/static/images/LOGO@2x.png',
					iconSeach:'/static/images/icon-search@2x.png',
					moreBottom:'/static/images/icon-more-bottom@2x.png',
					bigImage:'/static/images/tainzuoyun-ptbg@2x.png',
					titleBarImage:'/static/images/title-bar-image-1.png',
					indexBgMap:'/static/images/index-bg-map@2x.png',
					
				},
				titleBars: [
					{
						image:'/static/images/title-bar-image-1.png',
						title:'当地产业'
					},
					{
						image:'/static/images/title-bar-image-1.png',
						title:'乡村人才'
					},
					{
						image:'/static/images/title-bar-image-1.png',
						title:'民俗文化'
					}
				],
				resourceSurvey: {
					bare:802,
					wait:705,
					ongoing:402,
					completed:245,
					population:200,
					land:200,
					building:1000,
					forest:1000,
					rivers:3
				}
			};
		}
	}
</script>

<style>
	.top{
		width: 750upx;
		height: 360upx;
		backgroundSize:cover;
		position: relative;
	}
	.top-search{
		position: absolute;
		width: 28upx;
		height: 28upx;
		left:278upx;
		top:74upx;
	}
	.top-log{
		width: 122upx;
		height: 36upx;
		margin-left: 24upx;
		margin-top: 70upx;
		float: left;
	}
	.top-input{
		background:#F7F7F7 ;
		margin-left: 28upx;
		margin-top: 56upx;
		width: 400upx;
		height: 64upx;
		text-indent: 140upx;
		border-radius: 32upx;
		font-size: 13upx;
		float: left;
	}
	.top-address{
		display: block;
		color: #ffffff;
		font-size: 13upx;
		height: 26upx;
		line-height: 20upx;
		text-align: right;
		width: 120upx;
		margin-top: 76upx;
		float: left;
		overflow: hidden;
	}
	.top-adress-more{
		width: 32upx;
		height: 32upx;
		margin-left: 0upx;
		margin-top: 72upx;
		float: left;
		transform:rotate(90deg);
		-ms-transform:rotate(90deg); 	/* IE 9 */
		-moz-transform:rotate(90deg); 	/* Firefox */
		-webkit-transform:rotate(90deg); /* Safari 和 Chrome */
		-o-transform:rotate(90deg); 	/* Opera */
	}
	
	.big-image{
		margin-left: 30upx;
		top: 152upx;
		width: 690upx;
		height: 328upx;
		border-radius: 12upx;
		position: absolute;
		
	}
	.big-image .big-image-image{
		width: 690upx;
		height: 328upx;
		border-radius: 12upx;
	}
	.title-bar{
		width: 750upx;
		height: 214upx;
		margin-top: 152upx;
	}
	.title-bar-ul{
		width: 750upx;
		height: 214 upx;
		list-style:none;
		margin:0upx;
		padding: 0upx;
	}
	.title-bar-li{
		width: 210upx;
		height: 188upx;
		float: left;
		margin-left: 30upx;
	}
	.title-bar-image{
		width: 210upx;
		height: 128upx;
	}
	.title-bar-text{
		display: block;
		width: 210upx;
		text-align: center;
		height: 40upx;
		line-height: 15upx;
		margin-top: 20upx;
		font-size: 14upx;
	}
	.resource-info{
		width: 748upx;
		height: 98upx;
		border: 1upx #999999 dashed;
		margin-top: 16upx;
	}
	.resource-info .survey{
		display: block;
		color: #333333;
		width: 216upx;
		height: 36upx;
		font-size: 36upx;
		line-height: 36upx;
		font-weight: bold;
		margin-top: 46upx;
		margin-left:30upx;
		float: left;
	}
	.resource-info .info{
		display: block;
		color: #C53535;
		width: 112upx;
		height: 28upx;
		font-size: 28upx;
		line-height: 28upx;
		margin-top: 50upx;
		float: right;
		margin-right:30upx;
	}
	
	.resource-map{
		width: 750upx;
		height: 430upx;
		margin-top: 30upx;
	}
	.resource-map-image{
		width: 484upx;
		height: 430upx;
		margin-left: 132upx;
		border: 1upx #999999 dashed;
	}
	.resource-survey-red{
		width: 688upx;
		height:128upx;
		margin-top:46upx;
		border:1upx #DDDDDD solid;
		border-radius: 8upx;
		margin-left: 30upx;
	}
	.resource-survey-red-content{
		width: 171upx;
		height: 72upx;
		border-right: 1upx #DDDDDD solid;
		float: left;
		margin-top: 30upx;
	}
	.resource-survey-red .number{
		display: block;
		width: 100%upx;
		height: 34upx;
		text-align: center;
		color: #C53535;
		font-size: 34upx;
		line-height: 34upx;
	}
	.resource-survey-red .title{
		display: block;
		width: 100%upx;
		text-align: center;
		height: 24upx;
		color: #C53535;
		font-size: 24upx;
		line-height: 24upx;
		margin-top: 16upx;
	}
	
</style>
