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
import dateManage from '../view/overview/dateManage.vue';
import index from '../view/center/index';
import showUserInfo from '../view/center/showUserInfo';
import setting from '../view/center/setting';
import aboutUs from '../view/center/aboutUs';
import contact from '../view/center/contact';
import images from '../view/albert/images.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //component: () => import('@/components/main'),
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
                path: 'aboutUs',
                name: 'about_us',
                component: aboutUs
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
              path: 'albertList',
              name: 'albert_list',
              component: albertList
            },
            {
              path: 'dateManage',
              name: 'date_manage',
              component: dateManage
            }
          ]
        }
      ]
    }
  ]
})
