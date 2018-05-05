<template>
    <footer class="footerbar">
        <router-link :class="{ active: routerName === 'overview_home' }" :to="loginStatus === 1? { name: 'overview_home', params: {} } : {name: 'error'}" class="footerbar-item">
            <i class="footerbar-item-icon home"></i>
            <p class="footerbar-item-name">首页</p>
        </router-link>
        <router-link :class="{ active: routerName === 'overview_cal' }" :to="loginStatus === 1 ? { name: 'overview_cal', params: {} } : {name: 'error'}" class="footerbar-item">
            <i class="footerbar-item-icon cal"></i>
            <p class="footerbar-item-name">计算器</p>
        </router-link>
        <router-link :class="{ active: routerName === 'overview_center' }" :to=" loginStatus === 1 ? { name: 'overview_center', params: {} } : {name: 'error'}" class="footerbar-item">
            <i class="footerbar-item-icon center"></i>
            <p class="footerbar-item-name">我的</p>
        </router-link>
    </footer>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    computed: {
        routerName() {
            return this.$route.name;
        },
        ...mapState([
            'loginStatus'
        ])
    },
    mounted: function() {
        // console.log(this.$route.name);
    },
    
}
</script>


<style scoped>
    @import '../../style/css/reset.css';
    .footerbar {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        background-color: #fff;
        border-top: 1px solid #e6e6e6;
    }
    .footerbar-item {
        flex: 1;
        text-align: center;
        /* height: 1.56rem; */
        font-size: 0.31rem;
        /* color: #4ea6ee; */
        color: #999;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .footerbar-item-icon {
        width: 1.4rem;
        height: 1.4rem;
        background-size: cover;
        background-repeat: no-repeat;
        margin: 0.13rem 0;
    }
    .home {
        background-image: url(../../assets/images/home.png);
    }
    .cal {
        background-image: url(../../assets/images/cal.png);
    }
    .center {
        background-image: url(../../assets/images/center.png);
    }
    .active p {
        color: #178ce6;
    }
    .active .home {
        background-image: url(../../assets/images/home-blue.png);
    }
    .active .cal {
        background-image: url(../../assets/images/cal-blue.png);
    }
    .active .center {
        background-image: url(../../assets/images/center-blue.png);
    }
</style>