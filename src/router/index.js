import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Login from '@/view/login/Login'
// import index from '@/views/index/index'

Vue.use(Router)

export default new Router({
  // routes: [
  //   // {
  //   //   path: '/',
  //   //   name: 'HelloWorld',
  //   //   component: HelloWorld
  //   // }
  //   // {
  //   //   path: '/',
  //   //   name: 'Login',
  //   //   component: Login
  //   // }
  //   {
  //     path: '/',
  //     name: 'index',
  //     component: index
  //   }
  // ]
  routes: [
    {
      path: '/',
      component: () => import('@/components/main'),
      // component: () => import ('@/view/login/Login'),
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
          component: () => import('@/view/overview'),
          children: [
            {
              path: 'home',
              name: 'overview_home',
              meta: {},
              component: () => import('@/view/overview/home')
            },
            {
              path: 'cal',
              name: 'overview_cal',
              meta: {
                requiresAuth: true
              },
              component: () => import('@/view/overview/cal')
            },
            {
              path: 'center',
              name: 'overview_center',
              meta: {
                requiresAuth: true
              },
              component: () => import('@/view/overview/center')
            },
            {
              path: 'addRemark',
              name: 'add_remark',
              meta: {
                requiresAuth: true
              },
              component: () => import('@/view/overview/addRemark')
            }
          ]
        }
      ]
    }
  ]
})
