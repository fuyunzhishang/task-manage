<template>
    <div class="presonal-center">
        <div class="avator-area">
            <img class="avator" src="../../assets/images/avator.jpg" alt="头像">
            <span>{{ username }}</span>
        </div>
        <mt-cell title="个人资料" is-link to="/overview/showUserInfo">
            <img slot="icon" src="../../../static/icon/icon_user_info.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="设置" is-link to="/overview/setting">
            <img slot="icon" src="../../../static/icon/icon_setting.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="关于" is-link to="/overview/aboutUs">
            <img slot="icon" src="../../../static/icon/icon_about.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="联系我们" is-link to="/overview/contact">
            <img slot="icon" src="../../../static/icon/icon_contact.png" width="24" height="24">
        </mt-cell>
    </div>
</template>
<script>
export default {
  data() {
      return {
          username: '略略略'
      }
  }
}
</script>
<style scoped>
.avator-area {
    height: 140px;
    border-bottom: 1px solid #fcfcfc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;
}
.avator-area > span {
    font-size: 12px;
    margin-top: 0.6rem;;
}
.avator {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
</style>


