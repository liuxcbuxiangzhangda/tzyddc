<template>
  <view class="uni-container">
    <uni-swipe-action :options="options1" v-for="(item,index) in listData" :key="index">
      <view></view>
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
            backgroundColor: "#007aff"
          }
        }
      ],
      listData: [
        { title: "关注得模式", date: "2017-06-15 16:20" },
        {
          title: "发多少个大概梵蒂冈梵蒂冈梵蒂冈梵蒂冈的",
          date: "2017-06-15 16:20"
        },
        { title: "股份回购股份", date: "2017-06-15 16:20" },
        { title: "黑风洞和规范化广泛的很过分的", date: "2017-06-15 16:20" },
        { title: "活动和规范的后果发挥", date: "2017-06-15 16:20" },
        { title: "很感动很过分的话官方电话", date: "2017-06-15 16:20" },
        { title: "好好管管", date: "2017-06-15 16:20" },
        {
          title: "个drew热太热特日日日日日日日日日日日日",
          date: "2017-06-15 16:20"
        },
        { title: "高浮雕高浮雕高浮雕高浮雕高浮雕", date: "2017-06-15 16:20" },
        { title: "高浮雕高浮雕高浮雕高浮雕高浮雕", date: "2017-06-15 16:20" },
        { title: "高浮雕高浮雕高浮雕高浮雕高浮雕", date: "2017-06-15 16:20" }
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
  /deep/ .uni-list-item__container {
    padding: 40upx 30upx;
    &:after {
      left: 0;
      color: #eee;
    }
    .uni-list-item__content-title {
      font-size: 32upx;
      font-family: PingFangSC;
      font-weight: 400;
      color: rgba(30, 30, 30, 1);
    }
    .uni-list-item__content-note {
      font-size: 22upx;
      font-family: PingFangSC;
      font-weight: 400;
      color: rgba(131, 131, 131, 1);
      margin-top: 24upx;
    }
  }
}
</style>
