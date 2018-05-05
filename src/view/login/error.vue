<template>
    <div class="error-container" @click="toLogin">
        请登录
    </div>
</template>

<script>
export default{
    methods: {
        toLogin() {
            this.$router.push('/overview/login')
        }
    }
}
</script>