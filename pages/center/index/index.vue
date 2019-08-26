<template>
  <view class="uni-container">
    <!-- 已登录 -->
    <view class="loginlogtitle" v-if="islogin">
      <view class="headWarp">
        <image class="headpic" src="/static/images/center/head@2x.png" />
        <view class="headInfor">
          <view class="num">{{telNumSecret}}</view>
          <view>
            <!-- 已认证 -->
            <view class="tagWarp" v-if="iscertification">{{certificationTag}}</view>
            <!-- 未认证 -->
            <view class="tagWarp" v-else>
              <p>去认证</p>
              <image class="path15" src="/static/images/center/path15@2x.png" />
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 未登录 -->
    <view v-else class="logtitle">
      <image class="imgpic" src="/static/images/center/centerlogo@2x.png" />
      <view class="loginBtn" @click="gotoNext('login/index')">立即登录</view>
    </view>

    <view class="listWarp">
      <!-- 已认证 -->
      <view v-if="iscertification">
        <uni-list>
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="extraIcon1"
            @click="gotoNext('messageNotice/index')"
            title="消息通知"
          />
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="extraIcon1"
            @click="gotoNext('myRelease/index')"
            title="我的发布"
          />
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="extraIcon1"
            @click="gotoNext('draft/index')"
            title="草稿箱"
          />
        </uni-list>
        <uni-list class="item">
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="extraIcon1"
            @click="gotoNext('collection/index')"
            title="我的收藏"
          />
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="extraIcon1"
            @click="gotoNext('setting/index')"
            title="设置"
          />
        </uni-list>
      </view>
      <!-- 未认证 -->
      <uni-list v-else>
        <uni-list-item
          :show-extra-icon="true"
          :extra-icon="extraIcon1"
          @click="gotoNext('messageNotice/index')"
          title="消息通知"
        />
        <uni-list-item
          :show-extra-icon="true"
          :extra-icon="extraIcon1"
          @click="gotoNext('collection/index')"
          title="我的收藏"
        />
        <uni-list-item
          :show-extra-icon="true"
          :extra-icon="extraIcon1"
          @click="gotoNext('setting/index')"
          title="设置"
        />
      </uni-list>
    </view>
  </view>
</template>

<script>
export default {
  computed: {
    // 格式化电话号码
    telNumSecret() {
      let reg = /^(\d{3})\d{4}(\d{4})$/;
      return this.telNum.replace(reg, "$1****$2");
    }
  },
  data() {
    return {
      extraIcon1: {
        color: "#007aff",
        size: "22",
        type: "settings"
      },
      islogin: false, //是否已登录
      iscertification: false, //是否已认证
      certificationTag: "村民认证", //认证标识
      telNum: "13654425566"
    };
  },
  methods: {
    gotoNext(url) {
      uni.navigateTo({
        url: `/pages/center/${url}`
      });
    }
  }
};
</script>

<style lang="scss" scoped="scoped">
.loginlogtitle:before {
  content: " ";
  display: table;
}

.loginlogtitle {
  height: 320upx;
  background: linear-gradient(
    135deg,
    rgba(253, 99, 70, 1) 0%,
    rgba(197, 53, 53, 1) 100%
  );

  .headWarp {
    height: 96upx;
    padding-left: 30upx;
    margin-top: 112upx;

    .headpic {
      height: 100%;
      width: 98upx;
      float: left;
    }

    .headInfor {
      height: 100%;
      float: left;
      margin-left: 32upx;
      position: relative;

      .num {
        font-size: 30upx;
        font-family: PingFang-SC;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 30upx;
      }

      .tagWarp {
        width: 128upx;
        height: 40upx;
        border-radius: 4px;
        border: 1px solid rgba(255, 217, 0, 1);
        position: absolute;
        bottom: 0;
        text-align: center;
        font-size: 22upx;
        font-family: PingFangSC;
        font-weight: 500;
        color: rgba(255, 217, 0, 1);
        p {
          display: inline-block;
          vertical-align: middle;
        }
        .path15 {
          width: 14upx;
          height: 24upx;
          margin-left: 10upx;
          vertical-align: middle;
        }
      }
    }
  }
}

.logtitle {
  height: 408upx;
  background: linear-gradient(
    135deg,
    rgba(253, 99, 70, 1) 0%,
    rgba(197, 53, 53, 1) 100%
  );
  text-align: center;

  .imgpic {
    width: 448upx;
    height: 114upx;
    margin: 80upx 0 60upx;
  }

  .loginBtn {
    margin: auto;
    width: 340upx;
    height: 88upx;
    text-align: center;
    box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.1);
    border-radius: 48upx;
    border: 1px solid rgba(255, 255, 255, 1);
    font-size: 36upx;
    font-family: PingFangSC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 88upx;
  }
}

.listWarp {
  margin-top: 20upx;
  .item {
    margin-top: 20upx;
  }

  /deep/ .uni-list-item__content-title {
    font-size: 30upx;
    font-family: PingFang-SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
}
</style>
