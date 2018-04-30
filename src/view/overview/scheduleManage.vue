<template>
    <div class="home-container">
        <header class="header">
            <div class="part-title">约会管理</div>
        </header>
        <div class="todoList">
            <div v-if="scheduleList.length > 0">
                <li v-for="(item, index) in scheduleList" :key="index" @click="getDetail(item._id, 1)">
                    <div class="td-title" v-if="item.title && item.title.length > 3">{{ item.title.slice(0, 2) }}...</div>
                    <div class="td-title" v-else>{{ item.title || '无' }}</div>
                    <div class="td-content" v-if="item.event && item.event.length > 8">{{ item.event.slice(0, 8) }}...</div>
                    <div class="td-content" v-else>{{ item.event || '无' }}</div>
                    <div class="td-operation">
                        <el-button type="text" class="td-detail" @click.stop="getDetail(item._id, 2)">编辑</el-button>
                        <el-button @click="deleteSchedule(item._id)" type="text" class="td-del">删除</el-button>
                    </div>
                </li>
            </div>
            <div v-else>暂无约会</div>
        </div>

        <div @click="addSchedule" class="create-todos">
            <span class="el-icon-plus"></span>
            <span>新建</span>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import eventBus from "../../eventBus";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    data() {
        return {
            searched: false,
            scheduleList: []
        };
    },
    created() {
        this.getList();
    },
    computed: {
        ...mapState(['scheduleStatus'])
    },
    methods: {
        ...mapMutations(['modifyScheStatus', 'updateSchedule']),
        addSchedule() {
            this.$router.push({ name: 'add_dating' });
            this.modifyScheStatus(0);
            this.updateSchedule({});
        },
        getList() {
            axios.get("/dateManage").then(res => {
                this.scheduleList = res.data;
            });
        },
        deleteSchedule(scheId) {
            this.$confirm("删除该日程, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(res => {
                axios.delete("/dateManage/" + scheId).then(res => {
                    this.getList();
                    this.$message({
                        type: "success",
                        message: "删除成功"
                    });
                });
            });
        },
        /**
         * 查看备忘录详情
         */
        getDetail(scheId, status) {
            this.modifyScheStatus(status);
            axios.get("/dateManage/" + scheId).then(res => {
                this.updateSchedule(res.data);
                this.$router.push({ name: 'add_dating' });
            });
        }
    }
};
</script>

<style>
@import "../../style/css/common.css";
.todoList {
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
  color: #409eff;
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
