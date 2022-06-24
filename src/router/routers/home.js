export default [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'home' */ '@/pages/home'),
    meta: {
      title: '首页',
      showHeader: true
    }
  }
]
