import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    task: {},
    taskStatus: 0,  // 0 - 新建，1 - 详情，2 - 编辑,
    imageList: {
      5: [],
      6: [],
      7: [],
      8: []
    } //相册列表
  },
  mutations: {
    updateTask (state, task) {
      state.task = task
    },
    showCreateTime (state, taskStatus) {
      state.taskStatus = taskStatus
    },
    updateImageList(state, list) {
      state.imageList = list;
    }
  },
  actions: {
    getImageList(store, commit) {
      axios.get('/albert').then(res => {
        let list = res.data;
        list.forEach(item => {
          if (item.category === 5) {
            store.state.imageList['5'].push(item);
          } else if (item.category === 6) {
            store.state.imageList['6'].push(item);
          } else if (item.category === 7) {
            store.state.imageList['7'].push(item);
          } else if (item.category === 8) {
            store.state.imageList['8'].push(item);
          }
        })
      })
    }
  }
})
export default store
