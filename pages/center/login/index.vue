<template>
  <view class="uni-container">
    <view class="tips" v-if="isSend">短信验证码已发至{{telNumSecret}}，请查收</view>

    <view>
      <image class="loginpic" src="/static/images/center/loginPic@2x.png" />
    </view>

    <view class="coreWarp">
      <view v-if="isPhoneTag" class="telphoneWarp">
        <input v-model="telphone" class="uni-input" type="number" placeholder="请输入手机号码" />
        <image
          v-if="telphone"
          @click="clearPhone"
          class="empty"
          src="/static/images/center/loginEmpty@2x.png"
        />
      </view>
      <view v-else class="codeWarp clearfix">
        <input
          v-for="(item,key) in code"
          :key="key"
          v-model="code[key]"
          class="uni-input codeinput"
          type="number"
          maxlength="1"
          @keyup="nextFocus($event,key)"
          @keydown="changeValue(key)"
        />
      </view>
      <view class="btnsWarp">
        <view v-if="isPhoneTag" class="btn" :class="telphone?'btnRed':''" @click="getcode">获取验证码</view>
        <view v-else class="btn btnRed" @click="gologin">登录</view>
        <view v-if="iscodeError" class="codeError">验证码输入错误</view>
      </view>
      <view v-if="!isPhoneTag" class="afreshGet">
        没收到？
        <span>重新获取</span>
      </view>
    </view>
    <view class="otherLogin">
      <span class="line">使用社交账号登录</span>
      <view class="loginwqWarp">
        <image class="loginwq" src="/static/images/center/loginWx@2x.png" />
        <image class="loginwq qqsty" src="/static/images/center/loginqq@2x.png" />
      </view>
      <image class="loginBg" src="/static/images/center/IoginBG@2x.png" />
    </view>
  </view>
</template>

<script>
export default {
  computed: {
    // 格式化电话号码
    telNumSecret() {
      let reg = /^(\d{3})\d{4}(\d{4})$/;
      return this.telphone.replace(reg, "$1****$2");
    }
  },
  data() {
    return {
      telphone: "", //电话号码
      code: ["3", "", "", "", "", ""], //验证码
      isPhoneTag: true, //输电话还是输验证码
      isSend: false, //是否发送验证码
      iscodeError: false //验证码输入是否错误
    };
  },
  methods: {
    getcode() {
      let vm=this
      if (!this.telphone) return; //不可点击获取
      this.isPhoneTag = false;
      this.isSend = true;
      setTimeout(function() {
        vm.isSend = false;
      }, 2000);
    },
    gologin() {
      let vm=this
      this.iscodeError = true;
      setTimeout(function() {
        vm.iscodeError = false;
      }, 3000);
    },
    clearPhone() {
      this.telphone = "";
    },
    nextFocus(el, index) {
      var dom = document.getElementsByClassName("codeinput"),
        currInput = dom[index],
        nextInput = dom[index + 1],
        lastInput = dom[index - 1];
      if (index < this.code.length - 1) {
        nextInput.focus();
      } else {
        currInput.blur();
      }
    },
    /*当键盘按下的时候清空原有的数*/
    changeValue(index) {
      this.$set(this.code, index, "");
    }
  },
  watch: {
    code(value) {
      console.log(value);
    }
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
.tips {
  width: 100%;
  height: 72upx;
  text-align: center;
  line-height: 72upx;
  position: absolute;
  top: 0;
  background: rgba(250, 251, 251, 1);
  font-size: 26upx;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(130, 137, 148, 1);
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
  .telphoneWarp {
    position: relative;
    .empty {
      height: 32upx;
      width: 32upx;
      position: absolute;
      right: 64upx;
      top: 50%;
      margin-top: -16upx;
    }
  }
  .codeWarp {
    padding: 0 50upx;
    .uni-input {
      width: 96upx;
      height: 108upx;
      float: left;
      border: 1upx solid #eee;
      font-size: 72upx;
      font-family: SFUIDisplay;
      font-weight: 400;
      margin: 0 6upx 64upx;
    }
  }
  .btnsWarp {
    position: relative;
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
      &.btnRed {
        background: linear-gradient(
          135deg,
          rgba(239, 81, 81, 1) 0%,
          rgba(197, 53, 53, 1) 100%
        );
        box-shadow: 0px 6px 6px 0px rgba(197, 53, 53, 0.2);
      }
    }
    .codeError {
      position: absolute;
      width: 628upx;
      height: 128upx;
      background: rgba(0, 0, 0, 1);
      border-radius: 16px;
      opacity: 0.7;
      left: 50%;
      margin-left: -314upx;
      text-align: center;
      line-height: 128upx;
      bottom: 0;
      font-size: 32upx;
      font-family: PingFangSC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
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
  .loginwqWarp {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 180upx;
    z-index: 1000;
    .loginwq {
      height: 72upx;
      width: 72upx;
      &.qqsty {
        margin-left: 160upx;
      }
    }
  }
  .loginBg {
    height: 240upx;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
