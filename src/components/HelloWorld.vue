<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{el}}</p>
    <form>
        <el-input v-model="name" placeholder="名称"></el-input>
        <el-input v-model="price" placeholder="价格"></el-input>
        <el-button type="primary" @click="addUser">提交</el-button>
    </form>
  </div>
</template>
 
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      price: '',
      el:''
    }
  },
  methods: {
    addUser() {
      var name = this.name;
      var price = this.price;
      this.$http.post('/api/user/addUser', {
        name: name,
        price: price
      },{}).then((response) => {
        console.log(response);
      })
    },
    aaa(){
      this.el="成功引入element";
    }
  }
}
</script>