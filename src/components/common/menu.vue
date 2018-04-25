<template>
  <div class="menu-wrap" v-show="showMenu">
        <div class="mask" @click="showMenu=false"></div>
        <div class="side-menu">
            <div class="avator-area">
                <img class="avator" src="../../assets/images/avator.jpg" alt="头像">
                <span>{{ userInfo.userName }}，你好</span>
            </div>
            <div class="menu-list">
                <ul>
                    <li v-for="item in menu" :key="item.value" @click="showMenu=false">
                        <router-link class="first-menu" :to="{ path: item.routerName }">
                            <img class="icon" :src="item.imgUrl"></img>
                            <span>{{ item.title }}</span>
                        </router-link>
                        <ul v-if="item.children">
                            <li class="second-menu" v-for="child in item.children" :key="child.value">
                                <router-link to="#">
                                    {{ child.title }}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            menu: [
                {
                    title: '备忘录管理',
                    imgUrl: '../../../static/icon/icon_task.png',
                    routerName: '/overview/home',
                    value: 0,
                    children: [
                        {
                            title: '工作',
                            value: 0
                        },
                        {
                            title: '学习',
                            value: 1
                        },
                        {
                            title: '生活',
                            value: 2
                        },
                        {
                            title: '其他',
                            value: 3
                        }
                    ]
                },
                {
                    title: '相册管理',
                    imgUrl: '../../../static/icon/icon_albert.png',
                    routerName: '/overview/albertManage',
                    value: 1,
                    children: [
                        {
                            title: '普通',
                            value: 0
                        },
                        {
                            title: '多人',
                            value: 1
                        },
                        {
                            title: '旅游',
                            value: 2
                        },
                        {
                            title: '亲子',
                            value: 3
                        }
                    ]
                },
                {
                    title: '约会管理',
                    imgUrl: '../../../static/icon/icon_dating.png',
                    routerName: '/overview/scheduleManage',
                    value: 2
                },
                {
                    title: '计算器',
                    imgUrl: '../../../static/icon/icon_cal.png',
                    routerName: '/overview/cal',
                    value: 3
                },
                {
                    title: '退出登录',
                    value: 4
                }
            ],
            showMenu: this.visible
        }
    },
    watch: {
        visible() {
            this.showMenu = this.visible
        }
    },
    created() {
        this.getUserInfo();
    },
    computed: {
        ...mapState(['userInfo'])
    },
    methods: {
        ...mapActions(['getUserInfo'])
    }
}
</script>
<style scoped>
.avator-area {
    height: 140px;
    border-bottom: 1px solid #fcfcfc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;
}
.avator-area > span {
    font-size: 12px;
    margin-top: 0.6rem;;
}
.avator {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
.menu-list ul li {
    padding: 0.6rem 0 0 0.2rem;
    background-color: #fcfcfc;
}
.first-menu {
    color: #444444;
}
.first-menu > span {
    position: relative;
    top: -0.4rem;
}
.menu-list ul li ul li {
    display: flex;
    height: 2rem;
    padding-left: 2rem;
    background-color: #ffffff;
}
.icon {
    width: 1.6rem;
    height: auto;
}
</style>

