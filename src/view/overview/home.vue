<template>
    <div class="home-container">
        <header class="header">
            <div class="part-title">备忘录</div>
        </header>

        <div class="search-area">
            <el-input v-model="searchKey" placeholder="请输入关键字"></el-input>
            <span class="search el-icon-search"></span>
            <!-- <div @click="search" class="search el-icon-search">搜索</div> -->
        </div>

        <div class="todoList">
            <div v-if="todoList.length > 0">
                <li v-for="(item, index) in todoList" :key="index">
                    <div class="td-title">{{item.title}}</div>
                    <div class="td-title">{{item.content}}</div>
                    <div class="td-operation">
                        <!-- <span class="td-detail">详情</span> -->
                        <!-- <span class="td-del">删除</span> -->
                        <el-button type="text" class="td-detail" @click="getDetail(item.id)">详情</el-button>
                        <el-button @click="deleteTask(item.id)" type="text" class="td-del">删除</el-button>
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

export default {
  data () {
    return {
      searched: false,
      searchKey: '',
      todoList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    addRemark: function () {
      this.$router.push('/overview/addRemark')
    },
    getList () {
      axios.get('/task').then(res => {
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
    getDetail (taskId) {
      axios.get('/task/' + taskId).then(res => {
        eventBus.$emit('showTaskDetail', res.data)
        this.$router.push('/overview/addRemark')
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
}
.todoList li div span {
    color: #409EFF;
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
   left: 22rem;
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
