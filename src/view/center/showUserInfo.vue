<template>
  <div class="userInfo-wrap">
    <div class="page-header">
      <el-button type="text" @click="$router.back()" class="el-icon-d-arrow-left"><span class="goBack">返回</span></el-button>
    </div>
    <mt-cell title="头像" :value="avator">
      <img class="avator" src="../../assets/images/avator.jpg" alt="头像">
    </mt-cell>
    <mt-cell title="用户名" :value="userInfo.userName"></mt-cell>
    <mt-cell title="E-mail" :value="userInfo.email"></mt-cell>
    <mt-cell title="手机号" :value="userInfo.phone"></mt-cell>
    <mt-cell title="性别" v-show="userInfo.gender === 0">男</mt-cell>
    <mt-cell title="性别" v-show="userInfo.gender === 1">女</mt-cell>
    <mt-cell title="生日" :value="birth"></mt-cell>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapActions } from 'vuex';
import util from '../../util/util';
export default {
  data() {
    return {
      avator: '',
      birth: ''
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  mounted() {
    this.birth = util.dateFormat(new Date(this.userInfo.birthDate)).slice(0, 10);
  },
  watch: {
    userInfo(val) {
      this.userInfo.birthDate = util.dateFormat(new Date(val.birthDate));
    }
  },
  created() {
    //this.getUserInfo();
  },
  methods: {
    ...mapActions(['getUserInfo'])
  }
}
</script>
<style scoped>
.avator {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
</style>
