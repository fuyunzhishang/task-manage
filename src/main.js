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

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWMwZWNiZjVhMzQwYTI2MDQyYjk3NmMiLCJpYXQiOjE1MjM1MjA2NjgsImV4cCI6MTUyNjExMjY2OH0.ORBkNRKFvhzKEs-QtVwrmZzqf03wZcTd88OKet0SUFw'
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
