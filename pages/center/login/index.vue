<template>
  <view class="uni-container">
    <view>
      <image class="loginpic" src="/static/images/center/loginPic@2x.png" />
    </view>

    <view class="coreWarp">
      <view>
        <input class="uni-input" type="number" placeholder="请输入手机号码" />
      </view>
      <view class="btn">获取验证码</view>
      <view class="afreshGet">
        没收到？
        <span>重新获取</span>
      </view>
    </view>
    <view class="otherLogin">
      <span class="line">使用社交账号登录</span>
    </view>
  </view>
</template>

<script>
export default {
  computed: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped="scoped">
.uni-container {
  text-align: center;
  height: 100%;
  background: #fff;
  position: relative;
}
.loginpic {
  width: 144upx;
  height: 200upx;
  margin: 82upx 0 56upx;
}
.coreWarp {
  .uni-input {
    width: 622upx;
    height: 108upx;
    margin: 0 auto 64upx;
    border-bottom: 1upx solid #eee;
    padding: 0;
  }
  .btn {
    width: 630upx;
    height: 88upx;
    margin: 0 auto;
    line-height: 88upx;
    background: rgba(204, 204, 204, 1);
    border-radius: 200upx;
    font-size: 32upx;
    font-family: PingFangSC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
  .afreshGet {
    text-align: left;
    padding-top: 24upx;
    padding-left: 104upx;
    font-size: 24upx;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    span {
      color: rgba(197, 53, 53, 1);
    }
  }
}
.otherLogin {
    position: fixed;
    bottom: 0;
    height: 356upx;
    width: 100%;
    
    .line {
      position: relative;
      font-size: 22upx;
      color: #999999;
      text-align: center;

      &:before {
        content: "";
        display: block;
        width: 122upx;
        height: 1upx;
        background: #eaeaea;
        position: absolute;
        right: 200upx;
        top: 14upx;
      }

      &:after {
        content: "";
        display: block;
        width: 122upx;
        height: 1upx;
        background: #eaeaea;
        position: absolute;
        left: 200upx;
        top: 14upx;
      }
    }
  }
</style>
