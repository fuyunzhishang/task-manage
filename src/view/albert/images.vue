<template>
    <div class="images-container">
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
            'albertStatus'
        ])
    },
    methods:{
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