<template>
  <view class="warp">
    <image class="bg" src="/static/images/guide/whitecircleBg@2x.png" />
    <image class="circle" src="/static/images/guide/whitecircle@2x.png" />
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
  .circle {
    position: absolute;
    width: 536upx;
    height: 560upx;
    top: 244upx;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);;
    transform: translate(-50%, 0);
  }
}
</style>