<template>
  <div id="remark-warp" class="remark-wrap">
    <div class="page-header">
      <el-button type="text" @click="$router.back()" class="el-icon-d-arrow-left"><span class="goBack">返回</span></el-button>
      <el-button type="text" v-show="taskStatus === 2 || taskStatus === 0"  @click="save"><span class="icon-check"></span></el-button>
    </div>
    <mt-field label="创建时间" v-model="createTime"></mt-field>
    <mt-field label="标题" placeholder="请输入任务标题" v-model="task.title"></mt-field>
    <!-- <mt-field label="提醒日期" placeholder="选择创建日期" @click.native="openPicker" v-model="remindTime"></mt-field>
    <mt-datetime-picker ref="picker" type="datetime"  @confirm="handleConfirm" v-model="task.remindTime"></mt-datetime-picker> -->
    <mt-field label="任务内容" class="content" placeholder="请输入详情" type="textarea" rows="4" v-model="task.content"></mt-field>
    <mt-field label="是否完成"><mt-switch v-model="task.isFinished"></mt-switch></mt-field>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
import eventBus from '../../eventBus'
import { mapState, mapMutations, mapActions } from 'vuex'
import util from '../../util/util'

export default {
  data () {
    return {
      createTime: '',
      remindTime: ''
    }
  },
  components: {
  },
  watch: {
    taskStatus(newVal) {
      console.log(newVal)
    }
  },
  mounted () {
    switch (this.taskStatus) {
      case 0:
        this.createTime = util.dateFormat(new Date());
        break;
      case 1:
        this.createTime = util.dateFormat(new Date());
        break;
      case 2:
        this.createTime = util.dateFormat(new Date(this.task.createdAt));
        this.remindTime = util.dateFormat(new Date(this.task.remindTime));
      default:
        break;
    }
  },
  computed: {
    ...mapState(['task', 'taskStatus'])
  },
  methods: {
    ...mapMutations([
      'updateTask',
    ]),
    openPicker () {
      this.$refs.picker.open()
    },
    /**
     * 选择日期
     */
    handleConfirm (time) {
      this.remindTime = util.dateFormat(new Date(time))
    },
    /**
     * 保存
     */
    save() {
      if (this.taskStatus === 0) {
        this.saveRemark();
      } else {
        this.updateRemark();
      }
    },
    /**
     * 新建备忘录
     */
    saveRemark () {
      // const data = JSON.stringify(params)
      axios.post('/task', this.task).then(res => {
        this.$message({
          type: 'success',
          message: '添加成功!'
        });
        this.$router.push({ name: 'overview_home'});
      })
    },
    updateRemark() {
      axios.put('/task/' +  this.task.id, this.task).then(res => {
        this.$message({
          type: 'success',
          message: '编辑成功!'
        });
        this.$router.push({ name: 'overview_home'});
      })
    }
  }
}
</script>

<style scoped>
.remark-wrap {
  padding: 0 0.6rem;
}
.icon-check {
  display: inline-block;
  height: 24px;
  width: 24px;
  background-image: url(../../assets/images/icon-check.png);
  background-size: cover;
}
.page-header {
  display: flex;
  justify-content: space-between;
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
.content {
  resize: none;
}
</style>
