<template>
    <div>
        <header>
            <el-button @click="isShowMenu = true" size="small" type="default"><i class="topbar-icon menu"></i></el-button>
            <div class="efficiency">EFFICIENCY</div>
        </header>

        <!-- 菜单 -->
        <div class="mask" @click="isShowMenu = false" v-if="isShowMenu"></div>
        <div class="side-menu" v-if="isShowMenu">
            <div class="avator-area">
                <img class="avator" src="../../assets/images/avator.jpg" alt="头像">
                <span>{{username}}，你好</span>
            </div>
            <div class="menu-list">
                <ul>
                    <li class="first-menu" v-for="item in menu" :key="item.value">
                        <router-link to="#">
                            {{ item.title }}
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
export default {
    data() {
        return {
            isShowMenu: false,
            username: '',
            menu: [
                {
                    title: '备忘录管理',
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
                    value: 1
                },
                {
                    title: '约会管理',
                    value: 2
                },
                {
                    title: '计算器',
                    value: 3
                }
            ]
        }
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
    /* margin: 0.13rem 0; */
}
.menu {
    background-image: url(../../assets/images/menu.png);
}
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
</style>