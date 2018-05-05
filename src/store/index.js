import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        isShowMenu: false,
        task: {},
        taskStatus: 0, // 0 - 新建，1 - 详情，2 - 编辑
        scheduleStatus: 0, // 0 - 新建，1 - 详情，2 - 编辑
        schedule: {},
        // 相册列表
        albertList: {
            ordinary: [],
            multi: [],
            tourism: [],
            family: []
        },
        // 相册状态
        albertStatus: 0,
        imageList: [],
        userInfo: [],
        selected: 1,
        // 登录状态 0-未登录， 1-已登录, -2密码错误
        loginStatus: 0
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
        },
        modifyScheStatus(state, scheStatus) {
            state.scheduleStatus = scheStatus;
        },
        updateSchedule(state, schedule) {
            state.schedule = schedule;
        },
        controlMenuShow(state, isShow) {
            state.isShowMenu = isShow;
        },
        setSelectedStatus(state, selected) {
            state.selected = selected;
        },
        updateLoginStatus(state, status) {
            state.loginStatus = status
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
        },
        getUserInfo({
            commit,
            state
        }) {
            axios.get('/users').then(res => {
                const usInfo = res.data
                state.userInfo = usInfo[0];
            });
        },
        getUser(store, data) {
            return axios.get('/users?phone=' + data.phone)
        }
    }
})
export default store