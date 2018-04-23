import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        task: {},
        taskStatus: 0, // 0 - 新建，1 - 详情，2 - 编辑,
        // 相册列表
        albertList: {
            ordinary: [],
            multi: [],
            tourism: [],
            family: []
        },
        // 相册状态
        albertStatus: 0,
        imageList: []
    },
    mutations: {
        updateTask(state, task) {
            state.task = task
        },
        showCreateTime(state, taskStatus) {
            state.taskStatus = taskStatus
        },
        updatealbertList(state, list) {
            state.albertList = list;
        },
        changeAlbertStatus(state, status) {
            state.albertStatus = status;
        },
        updateImageList(state, list) {
            state.imageList = list;
        }
    },
    actions: {
        getAlbertList(store, commit) {
            axios.get('/albert').then(res => {
                store.state.albertList = {
                    ordinary: [],
                    multi: [],
                    tourism: [],
                    family: []
                }
                let list = res.data;
                list.forEach(item => {
                    if (item.category === 5) {
                        store.state.albertList.ordinary.push(item);
                    } else if (item.category === 6) {
                        store.state.albertList.multi.push(item);
                    } else if (item.category === 7) {
                        store.state.albertList.tourism.push(item);
                    } else if (item.category === 8) {
                        store.state.albertList.family.push(item);
                    }
                })
            })
        }
    }
})
export default store
