import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import base from './routers/base'
import home from './routers/home'

Vue.use(VueRouter)

const routes = [
  ...base,
  ...home
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

// 前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
// 后置守卫
router.afterEach(() => {
  NProgress.done()
})

export default router
