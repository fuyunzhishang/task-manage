<template>
  <div class="about-wrap">
    <div class="page-header">
      <el-button type="text" @click="$router.back()" class="el-icon-d-arrow-left"><span class="goBack">返回</span></el-button>
    </div>
    <div class="content-wrap">
      <div class="logo-area">
        <div class="logo"><img src="../../assets/logo.png" alt=""></div>
        <div class="pro-name">EFFICIENCY</div>
      </div>
      <div class="main-wrap">
        <div class="title">联系我们</div>
        <article>
          E-mail: xxxxxxxxxxx
        </article>
        <article>
          Phone: xxxxxxxxxxx
        </article>
        <article>
          Address: xxxxxxxxxxx
        </article>
      </div>
    </div>
  </div>
</template>
<style scoped>
.logo, .pro-name {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.4rem;
}
.content-wrap {
  overflow: scroll;
  max-height: 500px;
}
.main-wrap {
  padding: 0 1rem;
  text-align: center;
  margin-top: 4rem;
}
.main-wrap .title {
  font-weight: bold;
  color: #444;
}
.main-wrap article {
  text-indent: 1.8rem;
  margin-top: 1rem;
}
.sub-title {
  font-weight: bold;
}
</style>

