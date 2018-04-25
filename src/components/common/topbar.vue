<template>
    <div>
        <header>
            <el-button @click="isShowMenu = !isShowMenu" size="small" type="default"><i class="topbar-icon menu"></i></el-button>
            <div class="efficiency">EFFICIENCY</div>
        </header>
        <!-- 菜单 -->
        <ec-menu :visible="isShowMenu"></ec-menu>
    </div>
</template>

<script>
import ecMenu from './menu'
export default {
    data() {
        return {
            isShowMenu: false,
            username: '略略略',
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
                    title: '日程管理',
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
            ]
        }
    },
    components: {
        ecMenu
    }
}
</script>

<style scoped>
header {
    display: flex;
    align-items: center;
    background-color: antiquewhite;
    height: 4rem;
    padding-left: 2rem;
}
header >>> .el-button--small {
    padding: 4px 10px;
}
.efficiency {
    margin-left: 1rem;
    font-size: 1.2rem;
    color: #000;
}
.topbar-icon {
    display: inline-block;
    width: 1.4rem;
    height: 1.4rem;
    background-size: cover;
    background-repeat: no-repeat;
}
.menu {
    background-image: url(../../assets/images/menu.png);
}
</style>