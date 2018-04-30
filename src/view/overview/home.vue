<template>
    <div class="home-container">
        <header class="header">
            <div class="part-title">备忘录</div>
        </header>

        <div class="search-area">
            <el-input v-model="searchKey" placeholder="请输入关键字"></el-input>
            <span @click="search" class="search el-icon-search"></span>
        </div>
        <div class="todoList">
            <div v-if="filterList.length > 0">
                <li v-for="(item, index) in filterList" :key="index" @click="getDetail(item.id, 1)">
                    <div class="td-title" v-if="item.title && item.title.length > 3">{{ item.title.slice(0, 2) }}...</div>
                    <div class="td-title" v-else>{{ item.title || '无' }}</div>
                    <div class="td-content" v-if="item.content && item.content.length > 8">{{ item.content.slice(0, 8) }}...</div>
                    <div class="td-content" v-else>{{ item.content || '无' }}</div>
                    <div class="td-operation">
                        <el-button type="text" class="td-detail" @click.stop="getDetail(item.id, 2)">编辑</el-button>
                        <el-button @click.stop="deleteTask(item.id)" type="text" class="td-del">删除</el-button>
                    </div>
                </li>
            </div>
            <div v-else>暂无备忘录</div>
        </div>

        <div @click="addRemark" class="create-todos">
            <span class="el-icon-plus"></span>
            <span>新建</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import eventBus from '../../eventBus'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data () {
        return {
            searched: false,
            searchKey: '',
            todoList: [],
            filterList: []
        }
  },
  created () {
        this.getList()
  },
  computed: {
    ...mapState({
        taskStatus: state => state.taskStatus
    })
  },
    methods: {
        ...mapMutations([
            'updateTask',
            'showCreateTime'
        ]),
    addRemark: function () {
        this.$router.push('/overview/addRemark')
        this.showCreateTime(0);
        this.updateTask({})
    },
    getList () {
        axios.get('/task').then(res => {
            this.filterList = res.data
            this.todoList = res.data
        })
    },
    deleteTask (taskId) {
        this.$confirm('删除本条备忘录, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(res => {
            axios.delete('/task/' + taskId).then(res => {
                this.getList()
                this.$message({
                    type: 'success',
                    message: '删除成功'
                })
            })
        })
    },
    /**
     * 查看备忘录详情
     */
    getDetail (taskId, status) {
        this.showCreateTime(status)
        axios.get('/task/' + taskId).then(res => {
            this.updateTask(res.data)
            this.$router.push('/overview/addRemark')
        })
    },
    search() {
        // axios.get('/task/?title=' + this.searchKey).then(res => {
        //     console.log(res.data);
        // })
        this.filterList = []
        this.todoList.map(item => {
            if (item.title.indexOf(this.searchKey) !== -1) {
                this.filterList.push(item)
            }
        })
    }
  }
}
</script>

<style>
@import '../../style/css/common.css';
.todoList{
    margin-top: 1rem;
}
.todoList li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 34px;
}
.todoList li div {
    display: inline-block;
    text-align: left;
}
.todoList li div span {
    color: #409EFF;
}
.todoList li div.td-title {
    width: 15%;
}
.todoList li div.td-content {
    width: 45%;
}
.create-todos {
    position: fixed;
    bottom: 20%;
    right: 2rem;
    background-color: antiquewhite;
    padding: 0.4rem 0.6rem;
    border-radius: 1rem;
    box-shadow: 1px 1px 1px #888888;
    z-index: 98;
}
.header {
    display: flex;
    justify-content: space-between;
}
.search {
    align-self: flex-end;
   position: absolute;
   top: 7px;
   right: 1rem;
}
.search-area {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    position: relative;
}
.search-area input.el-input__inner {
    height: 27px;
    width: 20rem;
    line-height: 36px;
    border-radius: 18px;
    width: 99%;
}
</style>
