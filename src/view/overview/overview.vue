<template>
    <div class="index-container">
        <topbar></topbar>
        <router-view></router-view>
        <footbar></footbar>
    </div>
</template>

<style scoped>

</style>

<script>
import topbar from '@/components/common/topbar.vue'
import footbar from '@/components/common/footbar.vue'
export default {
    components: {
        topbar,
        footbar
    }
}
</script>
