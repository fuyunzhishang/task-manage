<template>
  <div id="remark-warp" class="remark-wrap">
    <div class="page-header">
      <el-button type="text" @click="$router.back()" class="el-icon-d-arrow-left"><span class="goBack">返回</span></el-button>
    </div>
    <mt-cell title="头像" :value="avator"></mt-cell>
    <mt-cell title="用户名" :value="userInfo.userName"></mt-cell>
    <mt-cell title="E-mail" :value="userInfo.email"></mt-cell>
    <mt-cell title="手机号" :value="userInfo.phone"></mt-cell>
    <mt-cell title="性别" :value="userInfo.gender"></mt-cell>
    <mt-cell title="生日" :value="userInfo.birth"></mt-cell>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      avator: ''
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    ...mapActions(['getUserInfo'])
  }
}
</script>
<style scoped>
.goBack {
  color: #409EFF;
}
</style>
