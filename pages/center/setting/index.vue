<template>
  <view class="listWarp">
    <uni-list>
      <uni-list-item @click="gotoNext('setting/accountInfor')" title="账户信息" />
      <uni-list-item @click="gotoNext('myRelease/index')" title="显示文字调整" />
      <uni-list-item @click="gotoNext('setting/aboutUs')" title="关于我们" />
    </uni-list>
    <view class="layout">退出登录</view>
  </view>
</template>
<script>
export default {
  methods: {
    gotoNext(url) {
      uni.navigateTo({
        url: `/pages/center/${url}`
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.listWarp {
  margin-top: 20upx;
  /deep/ .uni-list {
    &:before {
      background: #fff;
    }
    &:after {
      background: #fff;
    }
    .uni-list-item {
      .uni-list-item__container {
        &::after {
          background: #f8f8f8;
        }
        padding: 38upx 30upx;
        .uni-list-item__content-title {
          font-size: 32upx;
          font-family: PingFang-SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 32upx;
        }
        .uni-list-item__extra {
          .uni-icon-arrowright {
            color: #eee !important;
          }
        }
      }
    }
  }
  .layout {
    height: 88upx;
    text-align: center;
    line-height: 88upx;
    background: #fff;
    font-size: 32upx;
    font-family: PingFang-SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    margin-top: 20upx;
  }
}
</style>