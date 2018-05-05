<template>  
    <!-- <div class="Login">
        <div class="login-wrap" v-show="showLogin">
			<h3>登录</h3>
			<p v-show="showTishi">{{tishi}}</p>
            <el-input type="text" placeholder="请输入用户名" v-model="loginData.username"></el-input>
            <el-input type="password" placeholder="请输入密码" v-model="loginData.psw"></el-input>
            <el-button size="medium" @click="login" type="primary">登录</el-button>
			<div @click="toRegister">没有账号？马上注册</div>
		</div>

		<div class="register-wrap" v-show="showRegister">
			<h3>注册</h3>
			<p v-show="showTishi">{{tishi}}</p>
			<el-input type="text" placeholder="请输入用户名" v-model="regData.username"></el-input>
			<el-input type="password" placeholder="请输入密码" v-model="regData.psw"></el-input>
            <el-input type="password" placeholder="确认密码" v-model="regData.tpsw"></el-input>
			<el-button size="medium" @click="register">注册</el-button>
			<div @click="toLogin">已有账号？马上登录</div>
		</div>
    </div> -->
  <div class="login-container">
    <!-- logo -->
    <div class="logo" v-show="showLogin">
      <img src="../../assets/logo.png" alt="">
    </div>
    <!-- logo end -->
    <!-- form for login -->
    <el-form class="login-from" v-show="showLogin" label-position="right" :model="loginData">
      <h3 class="title">登录</h3>
      <el-form-item>
        <el-input placeholder="请输入手机号" :maxlength="11" v-model="loginData.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="请输入密码" v-model="loginData.psw"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" size="medium" @click="login" type="primary">登录</el-button>
      </el-form-item>
      <el-form-item>
        <div class="to-register">没有账号？马上<span @click="goToRegister">注册</span></div>
      </el-form-item>
    </el-form>
    <!-- form for login end -->
    <!-- form for register -->
    <el-form class="register-from" v-show="showRegister" label-position="right" :model="regData">
      <h3 class="title">注册</h3>
      <el-form-item>
        <el-input placeholder="请输入手机号(必填)" v-model="regData.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="请输入密码" v-model="regData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="确认密码" v-model="regData.tpsw"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入用户名" v-model="regData.userName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入邮箱地址" v-model="regData.email"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="regData.gender" label="0">男</el-radio>
        <el-radio v-model="regData.gender" label="1">女</el-radio>
      </el-form-item>
      <el-form-item label="生日">
        <el-date-picker v-model="regData.birthDate" value-format="yyyy-MM-dd" type="date" placeholder="请选择生日"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button class="register-btn" size="medium" @click="register" type="primary">注册</el-button>
      </el-form-item>
      <el-form-item>
        <div class="to-login">已有账号？马上<span @click="goToLogin">登录</span></div>
      </el-form-item>
    </el-form>
    <!-- form for register end -->
  </div>
</template>
<script type="text/javascript">
import { mapState, mapMutations, mapActions } from "vuex";
import axios from 'axios';
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
  computed: {
    ...mapState([
      'loginStatus'
    ])
  },
  watch: {
    loginStatus(newVal) {
      if (newVal === 1) {
        this.$router.push('/overview/home')
      }
    }
  },
  methods: {
    ...mapActions([
      'getUser'
    ]),
    ...mapMutations([
      'updateLoginStatus'
    ]),
    login() {
      this.getUser(this.loginData).then(res => {
        if (res.data.length) {
          if (res.data[0].password == this.loginData.psw) {
            this.updateLoginStatus(1)
          } else {
            this.updateLoginStatus(2)
            this.showError()
          }
        } else {
          this.updateLoginStatus(2)
          this.showError()
        }
      })
    },
    showError() {
      this.$message({
        type: 'error',
        message: '用户名或密码错误'
      })
    },
    register() {
      if (!this.regData.phone) {
        this.$message({
            type: 'warninig',
            message: '手机号不能为空！'
          }
        );
      } else if (!(/^\d{11}$/.test(this.regData.phone))) {
        this.$message({
            type: 'warninig',
            message: '请输入正确的手机号！'
          }
        );
      } else if (!this.regData.password) {
        this.$message({
            type: 'warninig',
            message: '密码不能为空！'
          }
        );
      } else if (!this.regData.tpsw) {
        this.$message({
            type: 'warninig',
            message: '请确认密码！'
          }
        );
      } else if (this.regData.password !== this.regData.tpsw) {
        this.$message({
            type: 'warninig',
            message: '两次密码不一致！'
          }
        );
      } else {
        const params = this.regData;
        axios.post('/users', params).then(res => {
          this.$message({
            type: 'success',
            message: '注册成功！请登录'
          });
          this.showRegister = false;
          this.showLogin = true;
        })
      }
    },
    goToLogin() {
      this.showLogin = true;
      this.showRegister = false;
    },
    goToRegister() {
      this.showLogin = false;
      this.showRegister = true;
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
.to-login, .to-register {
  span {
    color:#409EFF;
    font-weight: bold;
  }
}
</style>
