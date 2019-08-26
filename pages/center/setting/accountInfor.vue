<template>
  <view class="uni-container">
    <form @submit="formSubmit" @reset="formReset">
      <view class="uni-form-item uni-column">
        <view class="labelsty">头像</view>
        <view class="inputSty">
          <input />
        </view>
      </view>
      <view class="uni-form-item uni-column">
        <view class="labelsty">昵称</view>
        <view class="inputSty">
          <input />
        </view>
      </view>
      <view class="uni-form-item uni-column">
        <view class="labelsty">联系方式</view>
        <view class="inputSty">
          <input />
        </view>
      </view>
    </form>
  </view>
</template>
<script>
export default {
  formSubmit() {},
  formReset() {}
};
</script>
<style lang="scss" scoped>
.uni-container {
  height: 100%;
  margin-top: 10px;
  background: #fff;
  /deep/ .uni-form-item {
    padding: 0;
    height: 130upx;
    margin-left: 32upx;
    line-height: 130upx;
    .labelsty {
      float: left;
      width: 50%;
    }
    .inputSty {
      float: left;
      width: 50%;
    }
  }
}
</style>