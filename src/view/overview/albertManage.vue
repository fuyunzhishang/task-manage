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
    <mt-cell v-for="(n, idx) in imageList.ordinary" :title="n.title" :key="idx">
      <el-button type="text" class="albert-edit" @click="editAlbert(n)">编辑</el-button>
      <el-button type="text" class="albert-del" @click="delAlbert">删除</el-button>
        <!-- <span class="albert-edit" @click="editAlbert(n)">编辑</span>
        <span class="albert-del" @click="delAlbert">删除</span> -->
   </mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item :id="2">
    <mt-cell v-for="(n, idx) in imageList.multi" :title="n.title" :key="idx" />
  </mt-tab-container-item>
  <mt-tab-container-item :id="3">
    <mt-cell v-for="(n, idx) in imageList.tourism" :title="n.title" :key="idx" />
  </mt-tab-container-item>
  <mt-tab-container-item :id="4">
    <mt-cell v-for="(n, idx) in imageList.family" :title="n.title" :key="idx" />
  </mt-tab-container-item>
</mt-tab-container>
</div>
</template>


<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
import eventBus from '../../eventBus'
import { mapState, mapMutations, mapActions } from 'vuex'
import util from '../../util/util'

export default{
  data(){
    return {
      selected: 1
    }
  },
  created() {
    this.getImageList()
  },
  computed: {
    ...mapState([
      'imageList'
    ])
  },
  create() {
    this.updateList
  },
  methods: {
    ...mapActions([
      'getImageList'
    ]),
    editAlbert(albert)  {
      console.log(albert)
      this.$router.push('/overview/albertList');
    },
    delAlbert(albert) {
    },
    showList() {
      console.log('list ss');
    }
  }
}
</script>
<style>
.mint-tab-container {
  margin-top: 16px;
}
.albert-edit span, .albert-del span {
  color: #409EFF;
}
</style>