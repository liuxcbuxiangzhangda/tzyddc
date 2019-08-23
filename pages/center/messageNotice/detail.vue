<template>
  <view class="uni-container">
    <view class="title">系统更新公告</view>
    <view class="date">2019-01-01</view>
    <view class="content">尊敬的用户，我们将于2019年07月26日02:00进行系统维护升级，如有不便，敬请谅解</view>
  </view>
</template>

<script>
export default {
  computed: {},
  onLoad() {
    console.log(666);
    uni.showTabBar();
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped="scoped">
.uni-container {
  height: 100%;
  background: #fff;
  padding: 0 30upx;
  .title {
    font-size: 36upx;
    font-family: PingFangSC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    padding:20upx 0;
  }
  .date {
    font-size: 22upx;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }
  .content {
    font-size: 26upx;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 48upx;
    margin-top:32upx;
  }
}
</style>
