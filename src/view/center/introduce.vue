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
        <div class="title">功能介绍</div>
        <article>
          EFFICIENCY 是一款个人事务管理应用，主要功能有：备忘录管理、相册管理、约会管理（日程管理）和计算器。
        </article>
        <article>
          <div class="sub-title">1、备忘录管理</div>
          <p class="intro-content">
            以用户身份进入应用的使用者，可以进行新建备忘录、编辑备忘录、删除和查询备忘录操作；以游客身份进入应用的使用者则没有此项权限。
          </p>
        </article>
        <article>
          <div class="sub-title">2、相册管理</div>
          <p class="intro-content">
            以用户身份进入应用的使用者，可以新建、编辑相册；以游客身份进入应用的使用者则没有此项权限。
          </p>
        </article>
        <article>
          <div class="sub-title">3、约会（日程）管理</div>
          <p class="intro-content">
            以用户身份进入应用的使用者，可以进行新建、编辑以及删除日程等操作；新建日程可以设置时间提醒；以游客身份进入应用的使用者则没有此项权限。
          </p>
        </article>
        <article>
          <div class="sub-title">4、计算器</div>
          <p class="intro-content">
            以任何身份进入应用的使用者可以使用该计算器进行简单的算数运算。
          </p>
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

