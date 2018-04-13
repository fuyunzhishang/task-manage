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
          //component: () => import('@/view/overview'),
          component: overview,
          children: [
            {
              path: 'home',
              name: 'overview_home',
              meta: {},
              //component: () => import('@/view/overview/home')
              component: home
            },
            {
              path: 'cal',
              name: 'overview_cal',
              meta: {
                requiresAuth: true
              },
              //component: () => import('@/view/overview/cal')
              component: cal
            },
            {
              path: 'center',
              name: 'overview_center',
              meta: {
                requiresAuth: true
              },
              //component: () => import('@/view/overview/center')
              component: center
            },
            {
              path: 'addRemark',
              name: 'add_remark',
              meta: {
                requiresAuth: true
              },
              //component: () => import('@/view/overview/addRemark')
              component: addRemark
            }
          ]
        }
      ]
    }
  ]
})
