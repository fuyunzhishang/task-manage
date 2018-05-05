<template>  
  <div class="login-container">
    <!-- logo -->
    <div class="logo">
      <img src="../../assets/logo.png" alt="">
    </div>
    <!-- logo end -->
    <!-- form for login -->
    <el-form class="login-from" v-show="showLogin" label-position="right" :model="loginData">
      <h3 class="title">登录</h3>
      <el-form-item>
        <el-input placeholder="请输入手机号" v-model="loginData.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" v-model="loginData.psw"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" size="medium" @click="login" type="primary">登录</el-button>
      </el-form-item>
      <el-form-item>
        <div class="to-register" @click="toRegister">没有账号？马上<strong class="emphasize">注册</strong></div>
      </el-form-item>
    </el-form>
    <!-- form for login end -->
    <!-- form for register -->
    <el-form class="register-from" v-show="showRegister" label-position="right" :model="regData">
      <h3 class="title">注册</h3>
      <el-form-item>
        <el-input placeholder="请输入手机号" v-model="regData.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" v-model="regData.psw"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="确认密码" v-model="regData.tpsw"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="register-btn" size="medium" @click="register" type="primary">注册</el-button>
      </el-form-item>
      <el-form-item>
        <div class="to-login" @click="toLogin">已有账号？马上<strong class="emphasize">登录</strong></div>
      </el-form-item>
    </el-form>
    <!-- form for register end -->
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      showLogin: true,
      showRegister: false,
      loginData: {},
      regData: {},
      showTishi: ''
    };
  },
  methods: {
    /**
     * already registered and go to login
     */
    toLogin: function() {
      this.showLogin = true;
      this.showRegister = false;
    },
    /**
     * no account and go to register
     */
    toRegister: function() {
      this.showLogin = false;
      this.showRegister = true;
    },
    /**
     * login
     */
    login: function() {
      console.log(this.loginData);
      var url = '/api/login';
      this.$http.post(
          url,
          {
            username: this.loginData.username,
            userpsw: this.loginData.psw
          },
          {}
        ).then(
          function(data) {
            console.log('请求成功！', data.body);
            var content = data.body;
            if (content.length != 0) {
              this.$message({
                type: 'success',
                message: '登录成功！'
              });
            } else {
              this.$message.error('账户密码错误！');
            }
          },
          function(response) {
            console.log(response);
          }
        );
    },
    /**
     * register
     */
    register: function() {
      var reg_name = this.regData.username;
      var reg_psw = this.regData.psw;
      if (reg_psw !== this.regData.tpsw) {
        this.$message({
          type: 'warning',
          message: '两次输入密码不一致！请重新输入'
        });
        // this.regData.username = '';
        this.regData.psw = '';
        this.regData.tpsw = '';
      } else {
        var url = '/api/addUser';
        this.$http
          .post(
            url,
            {
              username: this.regData.username,
              userpsw: this.regData.psw
            },
            {}
          )
          .then(
            function(data) {
              console.log('注册请求成功！ ', data.body);
              if (data.body.affectedRows > 0) {
                this.$message({
                  type: 'success',
                  message: '注册成功！'
                });
              }
            },
            function(response) {
              console.log(response);
            }
          );
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.login-btn, .register-btn {
  width: 100%;
  /deep/ span {
    color: #ffffff;
  }
}
.logo {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.login-from, .register-from {
  padding: 0 2rem;
  .title {
    margin: 1rem 0;
    display: flex;
    justify-content: center;
  }
  .emphasize {
    color: #409EFF;
  }
}
</style>
