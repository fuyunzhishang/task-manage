// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import store from './store/index.js'
import { install } from 'vuex'
// install(store)

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWMwZWNiZjVhMzQwYTI2MDQyYjk3NmMiLCJpYXQiOjE1MjYxODE5NDksImV4cCI6MTUyODc3Mzk0OX0.4yTyLN_LALRK-5DonXcwSJ_G7hBGsnWbY6xNtfcBT7g'
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
axios.defaults.baseURL = 'http://localhost:1337'

Vue.config.productionTip = false
 Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
