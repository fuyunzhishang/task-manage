import Vue from 'vue'
import Router from 'vue-router'
//import {index as main} from '../components/main/index.vue';
import HelloWorld from '../components/HelloWorld.vue';
import main from '../components/main/main.vue';
import overview  from '../view/overview/overview.vue';
import home from '../view/overview/home.vue';
import cal from '../view/overview/cal.vue';
import center from '../view/overview/center.vue';
import addRemark from '../view/overview/addRemark.vue';
import albertManage from '../view/overview/albertManage.vue';
import albertList from '../view/overview/albertList.vue';
import scheduleManage from '../view/overview/scheduleManage.vue';
import index from '../view/center/index';
import showUserInfo from '../view/center/showUserInfo';
import setting from '../view/center/setting';
import introduce from '../view/center/introduce';
import contact from '../view/center/contact';
import images from '../view/albert/images.vue';
import addImage from '../view/albert/addImage.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: main,
      redirect: {
        name: 'overview'
      },
      children: [
        { // 首页
          path: 'overview',
          name: 'overview',
          redirect: {
            name: 'overview_home'
          },
          component: overview,
          children: [
            {
              path: 'home',
              name: 'overview_home',
              meta: {},
              component: home
            },
            {
              path: 'cal',
              name: 'overview_cal',
              meta: {
                requiresAuth: true
              },
              component: cal
            },
            {
              path: 'center',
              name: 'overview_center',
              component: center,
            },
            {
                path: 'introduce',
                name: 'introduce',
                component: introduce
             },
             {
                path: 'showUserInfo',
                name: 'show_user_info',
                component: showUserInfo
              },
              {
                path: 'setting',
                name: 'setting',
                component: setting
              },
              {
                path: 'contact',
                name: 'contact',
                component: contact
              },
            {
              path: 'addRemark',
              name: 'add_remark',
              meta: {
                requiresAuth: true
              },
              component: addRemark
            },
            {
              path: 'albertManage',
              name: 'albert_manage',
              component: albertManage
            },
            {
              path: 'images',
              name: 'images',
              component: images
            },
            {
              path: 'addImage',
              name: 'add_image',
              component: addImage
            },
            {
              path: 'albertList',
              name: 'albert_list',
              component: albertList
            },
            {
              path: 'scheduleManage',
              name: 'schedule_manage',
              component: scheduleManage
            }
          ]
        }
      ]
    }
  ]
})
