import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    task: {},
    taskStatus: 0,  // 0 - 新建，1 - 详情，2 - 编辑,
    imageList: {
    ordinary: [],
    multi: [],
    tourism: [],
    family: []
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
            store.state.imageList.ordinary.push(item);
          } else if (item.category === 6) {
            store.state.imageList.multi.push(item);
          } else if (item.category === 7) {
            store.state.imageList.tourism.push(item);
          } else if (item.category === 8) {
            store.state.imageList.family.push(item);
          }
        })
      })
    }
  }
})
export default store
