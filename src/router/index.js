/*
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-03 09:59:39
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-24 15:48:28
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Demo',
    meta:'旋转',
    component: () => import(/* webpackChunkName: "about" */ '../views/Demo.vue')
  },
  {
    path: '/Map',
    name: 'Map',
    meta:'案例',
    component: () => import(/* webpackChunkName: "about" */ '../views/Map.vue')
  },
  {
    path: '/pipe',
    name: 'pipe',
    meta:'管道',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pipe.vue')
  },{
    path: '/lineThree',
    name: 'lineThree',
    meta:'流光线',
    component: () => import(/* webpackChunkName: "about" */ '../views/lineThree.vue')
  },
  {
    path: '/gradientBox',
    name: 'gradientBox',
    meta:'渐变色',
    component: () => import(/* webpackChunkName: "about" */ '../views/gradientBox.vue')
  },{
    path: '/Ellipsoid',
    name: 'Ellipsoid',
    meta:'椭球体',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ellipsoid.vue')
  },{
    path: '/Curve',
    name: 'Curve',
    meta:'多线',
    component: () => import(/* webpackChunkName: "about" */ '../views/Curve.vue')
  },
  {
    path:'/Map3dChina',
    name:'Map3dChina',
    meta:"3D地图",
    component: () => import(/* webpackChunkName: "about" */ '../views/Map3dChina.vue')
  },
  {
    path:'/heart',
    name:'heart',
    meta:"心形",
    component: () => import(/* webpackChunkName: "about" */ '../views/heart.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
