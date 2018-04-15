import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    task: {},
    taskStatus: 0,  // 0 - 新建，1 - 详情，2 - 编辑
  },
  mutations: {
    updateTask (state, task) {
      state.task = task
    },
    showCreateTime (state, taskStatus) {
      state.taskStatus = taskStatus
    }
  },
  actions: {
    // setTaskStatus() {

    // }
  }
})
export default store
