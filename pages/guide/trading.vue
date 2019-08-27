<template>
  <view class="warp">
    <image class="bg" src="/static/images/guide/cuoheBg@2x.png" />
    <view class="content">
      <image class="sousuo" src="/static/images/guide/cuohe@2x.png" />
      <image class="sousuoText" src="/static/images/guide/sousuoText@2x.png" />
      <image class="countryMess" src="/static/images/guide/resouce@2x.png" />
      <image class="btnlist" src="/static/images/guide/btnlist2@2x.png" />
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.warp {
  height: 100%;
  position: relative;
  .bg {
    height: 100%;
    width: 100%;
  }
  .content {
    text-align: center;
    position: absolute;
    bottom: 128upx;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    .sousuo {
      height: 200upx;
      width: 200upx;
    }
    .sousuoText {
      height: 64upx;
      width: 294upx;
      margin-top:200upx;
      margin-bottom: 32upx;
    }
    .countryMess {
      height: 36upx;
      width: 294upx;
      margin-bottom: 188upx;
    }
    .btnlist {
      height: 22upx;
      width: 142upx;
    }
  }
}
</style>