import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Demo',
    meta:'开发',
    component: () => import(/* webpackChunkName: "about" */ '../views/Demo.vue')
  },
  {
    path: '/Map',
    name: 'Map',
    meta:'安装',
    component: () => import(/* webpackChunkName: "about" */ '../views/Map.vue')
  },
  {
    path: '/Test',
    name: 'Test',
    meta:'测试组件',
    component: Test
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    meta:'日历',
    component: () => import(/* webpackChunkName: "about" */ '../views/Calendar.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
