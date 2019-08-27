<template>
  <view class="uni-container">
    <form @submit="formSubmit" @reset="formReset">
      <view class="itemWarp clearfix">
        <view class="labelsty">头像</view>
        <view class="inputSty" @click="changePhoto">
          <!-- 默认 -->
          <image class="photoPic" src="/static/images/center/head@2x.png" />
          <!-- 有头像 -->
          <!-- <image class="photoPic" :src='src'/> -->
        </view>
      </view>
      <view class="itemWarp clearfix">
        <view class="labelsty">昵称</view>
        <view class="inputSty">
          <input />
        </view>
      </view>
      <view class="itemWarp clearfix">
        <view class="labelsty">联系方式</view>
        <view class="inputSty">
          <input />
        </view>
      </view>
      <view class="uni-btn-v">
        <button formType="submit" class="saveBtn">保存</button>
        <!-- <button type="default" formType="reset">Reset</button> -->
      </view>
    </form>
  </view>
</template>
<script>
export default {
  formSubmit() {},
  formReset() {},
  changePhoto() {
    uni.chooseImage({
      count: 1, //默认9
      success: function(res) {
        console.log(JSON.stringify(res.tempFilePaths));
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.uni-container {
  height: 100%;
  margin-top: 10px;
  background: #fff;

  .itemWarp {
    margin-left: 32upx;
    border-bottom: 1upx solid #f8f8f8;
    position: relative;
  }
  .labelsty {
    float: left;
    width: 50%;
    height: 130upx;
    line-height: 130upx;
    font-size: 32upx;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(68, 68, 68, 1);
  }
  .inputSty {
    max-width: 50%;
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    transform: translate(0, -50%);
    padding-right: 30upx;
    text-align: right;
    font-size: 26upx;
    font-family: SFUIDisplay;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    .photoPic {
      width: 60upx;
      height: 60upx;
    }
  }
  .uni-btn-v {
    padding: 0;
    margin-top: 128upx;
    text-align: center;
    .saveBtn {
      margin: 0 auto;
      width: 630upx;
      height: 88upx;
      background: linear-gradient(
        135deg,
        rgba(239, 81, 81, 1) 0%,
        rgba(197, 53, 53, 1) 100%
      );
      box-shadow: 0px 6px 6px 0px rgba(197, 53, 53, 0.2);
      border-radius: 200upx;
      font-size: 32upx;
      font-family: PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>