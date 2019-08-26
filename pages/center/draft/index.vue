<template>
  <view class="uni-container">
    <uni-swipe-action :options="options1" v-for="(item,index) in listData" :key="index">
      <view class="itemWarp">
        <image class="itemImg" :src="item.src" />
        <view class="itemRight">
          <view class="title">{{item.title}}</view>
          <view class="date">{{item.date}}</view>
        </view>
      </view>
    </uni-swipe-action>
  </view>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      options1: [
        {
          text: "删除",
          style: {
            backgroundColor: "rgba(254,59,48,1)",
            fontSize: "36upx"
          }
        }
      ],
      listData: [
        {
          src: "/static/images/center/loginPic@2x.png",
          title: "成都市温江区促进全域旅游发展若干政策措施解读当当单反单电",
          date: "#政策 / 2019-07-09"
        },
        {
          src: "/static/images/center/loginPic@2x.png",
          title: "村乡村建设10周年",
          date: "#新闻 / 2019-07-09"
        },
        {
          src: "/static/images/center/loginPic@2x.png",
          title: "70周年特别报道:美丽乡村,记住乡愁留住人才",
          date: "#生活 / 2019-07-09"
        },
        {
          src: "/static/images/center/loginPic@2x.png",
          title: "成都市温江区促进全域旅游发展若干政策措施解读",
          date: "#生活 / 2019-07-09"
        },
        {
          src: "/static/images/center/loginPic@2x.png",
          title: "成都市温江区促进全域旅游发展若干政策措施解读",
          date: "2017-06-15 16:20"
        }
      ]
    };
  },
  onPullDownRefresh() {},
  methods: {
    gotoDetail() {
      uni.navigateTo({
        url: "/pages/center/messageNotice/detail"
      });
    }
  }
};
</script>

<style lang="scss" scoped="scoped">
.uni-container {
  background: #fff;
  height: 100%;
  .itemWarp {
    margin-left: 30upx;
    padding: 32upx 0;
    border-bottom: 1upx solid #eee;
    position: relative;
    .itemImg {
      width: 322upx;
      height: 186upx;
      background: rgba(216, 216, 216, 1);
      border-radius: 8upx;
      opacity: 0.55;
      position: absolute;
      top: 32upx;
      left: 0;
    }
    .itemRight {
      height: 186upx;
      width: 100%;
      padding: 24upx 30upx 0 348upx;
      box-sizing: border-box;
      position: relative;
      .title {
        font-size: 28upx;
        font-family: PingFangSC;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
        line-height: 38upx;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
      }
      .date {
        font-size: 24upx;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 24upx;
        position: absolute;
        bottom: 24upx;
      }
    }
  }
}
</style>
