import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    task: {}
  },
  mutations: {
    updateTask (state, task) {
      state.task = task
    }
  },
  actions: {

  }
})
export default store
