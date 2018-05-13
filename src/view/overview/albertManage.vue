<template>
<div id="albert-container">
    <mt-navbar v-model="selected">
        <mt-tab-item :id="1">普通</mt-tab-item>
        <mt-tab-item :id="2">多人</mt-tab-item>
        <mt-tab-item :id="3">旅游</mt-tab-item>
        <mt-tab-item :id="4">亲子</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
        <mt-tab-container-item :id="1">
            <mt-cell v-for="(n, idx) in albertList.ordinary" :title="n.title" :key="idx">
                <el-button type="text" class="albert-edit" @click="editAlbert(n)">编辑</el-button>
                <el-button type="text" class="albert-del" @click.stop="delAlbert(idx)">删除</el-button>
            </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item :id="2">
            <mt-cell v-for="(n, idx) in albertList.multi" :title="n.title" :key="idx" />
        </mt-tab-container-item>
        <mt-tab-container-item :id="3">
            <mt-cell v-for="(n, idx) in albertList.tourism" :title="n.title" :key="idx" />
        </mt-tab-container-item>
        <mt-tab-container-item :id="4">
            <mt-cell v-for="(n, idx) in albertList.family" :title="n.title" :key="idx" />
        </mt-tab-container-item>
    </mt-tab-container>
    <div @click="addAlbert" class="create-albert">
        <span class="el-icon-plus"></span>
        <span>新建</span>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import {
    Toast
} from 'mint-ui'
import eventBus from '../../eventBus'
import {
    mapState,
    mapMutations,
    mapActions
} from 'vuex'
import util from '../../util/util'

export default {
    data() {
        return {
            selected: 1
        }
    },
    created() {
        this.getAlbertList()
    },
    computed: {
        ...mapState([
            'albertList'
        ])
    },
    create() {
        this.updateList
    },
    mounted() {
        this.selected = this.$route.query.selected
    },
    watch: {
        '$route'(to, form) {
            this.selected = this.$route.query.selected
        }
    },
    methods: {
        ...mapActions([
            'getAlbertList'
        ]),
        ...mapMutations([
            'changeAlbertStatus',
            'updateImageList'
        ]),
        editAlbert(albert) {
            this.changeAlbertStatus(2);
            this.updateImageList(albert.imageList)
            this.$router.push('/overview/images');
        },
        delAlbert(id) {
            
        },
        showList() {
            // console.log('list ss');
        },
        addAlbert() {
            this.$router.push('/overview/addImage')
        }
    }
}
</script>

<style>
.mint-tab-container {
    margin-top: 16px;
}

.albert-edit span,
.albert-del span {
    color: #409EFF;
}

.create-albert {
    position: fixed;
    bottom: 20%;
    right: 2rem;
    background-color: antiquewhite;
    padding: 0.4rem 0.6rem;
    border-radius: 1rem;
    box-shadow: 1px 1px 1px #888888;
    z-index: 98;
}
</style>
