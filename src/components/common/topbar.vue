<template>
    <div>
        <header>
            <el-button @click="isShowMenu = true" size="small" type="default"><i class="topbar-icon menu"></i></el-button>
            <div class="efficiency">EFFICIENCY</div>
        </header>
        <!-- 菜单 -->
        <div class="mask" @click="isShowMenu = false" v-if="isShowMenu"></div>
        <ec-menu :visible="isShowMenu"></ec-menu>
    </div>
</template>

<script>
import ecMenu from './menu'
export default {
    data() {
        return {
            isShowMenu: false,
            username: '略略略'
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