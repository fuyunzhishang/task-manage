<template>
  <div id="remark-warp" class="remark-wrap">
    <div class="page-header">
      <el-button type="text" @click="$router.back()" class="el-icon-d-arrow-left"><span class="goBack">返回</span></el-button>
      <el-button type="text" v-show="scheduleStatus === 2 || scheduleStatus === 0"  @click="save"><span class="icon-check"></span></el-button>
    </div>
    <mt-field label="标题" placeholder="请输入标题" v-model="schedule.title"></mt-field>
    <mt-field label="地点" placeholder="请输入行程地点" v-model="schedule.address"></mt-field>
    <mt-field label="开始时间" placeholder="选择开始时间" @click.native="openPicker" v-model="startTime"></mt-field>
    <mt-datetime-picker ref="picker" type="datetime" @confirm="handleConfirm1" v-model="schedule.startTime"></mt-datetime-picker>
    <mt-field label="结束时间" placeholder="选择结束时间" @click.native="openPicker" v-model="endTime"></mt-field>
    <mt-datetime-picker  ref="picker" type="datetime"  @confirm="handleConfirm2" v-model="schedule.endTime"></mt-datetime-picker>
    <mt-field label="任务内容" class="content" placeholder="请输入详情" type="textarea" rows="4" v-model="schedule.event"></mt-field>
    <mt-field label="是否提醒"><mt-switch v-model="isRemind"></mt-switch></mt-field>
    <mt-field v-show="isRemind" label="提醒时间" placeholder="选择提醒时间" @click.native="openPicker" v-model="remindTime"></mt-field>
    <mt-datetime-picker  ref="picker" type="datetime" v-model="schedule.remindTime" @confirm="handleConfirm3"></mt-datetime-picker>
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
      startTime: '',
      endTime: '',
      remindTime: '',
      isRemind: false
    }
  },
  components: {
  },
  watch: {
  },
  mounted () {
    if (this.schedule.startTime) {
      this.startTime = util.dateFormat(new Date(this.schedule.startTime));
    }
    if (this.schedule.endTime) {
      this.endTime = util.dateFormat(new Date(this.schedule.endTime));
    }
    if (this.schedule.isRemind === 1) {
      this.isRemind = true;
      this.remindTime = util.dateFormat(new Date(this.schedule.remindTime));
    } else {
      this.isRemind = false;
    }
  },
  computed: {
    ...mapState(['scheduleStatus', 'schedule'])
  },
  methods: {
    openPicker () {
      this.$refs.picker.open()
    },
    /**
     * 选择日期
     */
    handleConfirm1 (time) {
      console.log('------');
      console.log(time);
      this.startTime = util.dateFormat(new Date(time));
    },
    handleConfirm2 (time) {
      this.endTime = util.dateFormat(new Date(time));
    },
    handleConfirm3 (time) {
      this.remindTime = util.dateFormat(new Date(time));
    },
    save() {
      if (this.scheduleStatus === 0) {
        this.saveSchedule();
      } else {
        this.updateSchedule();
      }
    },
    /**
     * 新建日程
     */
    saveSchedule() {
      axios.post('/dateManage', this.schedule).then(res => {
        this.$message({
          type: 'success',
          message: '添加成功!'
        });
        this.$router.push({ name: 'schedule_manage'});
      })
    },
    /**
     * 编辑
     */
    updateSchedule() {
      axios.put('/dateManage/' +  this.schedule._id, this.schedule).then(res => {
        this.$message({
          type: 'success',
          message: '编辑成功!'
        });
        this.$router.push({ name: 'schedule_manage'});
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
