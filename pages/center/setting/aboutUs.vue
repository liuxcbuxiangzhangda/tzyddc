<template>
  <view class="uni-container">
    <view class="top">
      <image class="imgStyPic" src="/static/images/center/aboutUs@2x.png" />
      <div class="title">天作云App</div>
    </view>
    <view
      class="center"
    >这是一个促成乡村资源传播和交易的平台，与地方村集体/政府合作，使乡村资源在线化，革新乡村资源传播和交易方式。以达到产业振兴、人才振兴、文化振兴、生态振兴和组织振兴的五大要求。</view>
    <view class="version">版本v_1.0.2</view>
  </view>
</template>
<style lang="scss" scoped>
.uni-container {
  background: #f8f8fa;
  position: relative;
  height: 100%;
  .top {
    //   height: 324upx;
    background: #fff;
    padding: 64upx;
    text-align: center;
    .imgStyPic {
      width: 128upx;
      height: 128upx;
    }
    .title {
      font-size: 36upx;
      font-family: PingFangSC;
      font-weight: 500;
      color: rgba(68, 68, 68, 1);
    }
  }
  .center {
    padding: 30upx;
    background: #fff;
    font-size: 28upx;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 44upx;
    margin-top: 20upx;
  }
  .version {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 40upx;
    font-size: 22upx;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }
}
</style>