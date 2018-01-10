import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/Layout/layout';
import tabs from '@/view/tabs/tabs';
import login from '@/view/login/login'; //登录
Vue.use(Router)


const router = new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      meta: {
        requireAuth: true
      },
    }, {
      path: '/',
      component: Layout,
      children: [{
        path: "tabs",
        component: tabs,
        meta: {
          requireAuth: true
        },
      }]
    }
  ]
})
// 路由拦截器

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (sessionStorage.getItem("username")) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    // console.log('zzz')
    next()
  }
})

router.afterEach(() => {

})

export default router
