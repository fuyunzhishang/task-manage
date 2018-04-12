<template>
  <div id="remark-warp">
    <mt-field label="标题" placeholder="请输入任务标题" v-model="task.title"></mt-field>
    <mt-field label="提醒日期" placeholder="选择创建日期" @click.native="openPicker" v-model="task.remindTime"></mt-field>
    <mt-datetime-picker ref="picker" type="datetime"  @confirm="handleConfirm" v-model="task.remindTime"></mt-datetime-picker>
    <mt-field label="任务内容" placeholder="内容" type="textarea" rows="4" v-model="task.content"></mt-field>
    <div @click="saveRemark" class="create-todos">
            <span class="el-icon-circle-check-outline"></span>
            <span>保存</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
import eventBus from '../../eventBus'

export default {
  data () {
    return {
      task: {}
    }
  },
  components: {
  },
  mounted () {
    let _this = this
    eventBus.$on('showTaskDetail', (data) => {
      console.log(data)
      console.log(_this.task)
      _this.task = data
      console.log(_this.task)
    })
  },
  methods: {
    openPicker () {
      this.$refs.picker.open()
    },
    handleConfirm (time) {
      this.remindTime = time.toLocaleString()
    },
    saveRemark () {
      // const data = JSON.stringify(params)
      axios.post('http://localhost:1337/task', this.task).then(res => {
        this.$message({
          type: 'success',
          message: '添加成功!'
        })
      })
    }
  }
}
</script>

<style>
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
</style>
