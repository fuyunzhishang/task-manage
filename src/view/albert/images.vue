<template>
    <div class="images-container">
        <div class="page-header">
            <el-button type="text" @click="goBack" class="el-icon-d-arrow-left"><span class="goBack">返回</span></el-button>
        </div>
        <ul>
            <li v-for="item in imageList">
                <img v-lazy="item.imgUrl">
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState([
            'imageList',
            'albertStatus',
            'selected'
        ])
    },
    methods:{
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        goBack() {
            this.$router.push({ name: 'albert_manage', query: { selected: this.selected}})
        }
    }
}
</script>

<style lang="scss">.images-container {
    li {
        text-align: center;
    }
    img {
        width: 80%;
        margin-top: 10px;
    }
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
}

</style>