import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index' //重定向路由
  },
    {
    path: '/index',
    component: index  //首页路由
  },
  {
    path: '/login',
    name: 'login',
    //路由懒加载 ， 当然此处的（）亦可以由变量替换
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
