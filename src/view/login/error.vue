<template>
    <div class="error-container">
        <div class="logo">
            <img src="../../assets/logo.png" alt="">
        </div>
        <p>您暂无使用该功能的权限</p>
        <p>请先<span @click="toLogin">登录</span></p>
    </div>
</template>

<script>
export default {
    methods: {
        toLogin() {
            this.$router.push({ name: 'login' });
        }
    }
}
</script>
<style lang="scss" scoped>
.error-container {
    padding: 2rem;
    text-align: center;
    p {
        margin-top: 2rem;
        span {
            color: #409EFF;
            font-weight: bold;
        }
    }
}
</style>
