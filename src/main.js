import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import './static/styles/reset.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

const app = new Vue({
  render: h => h(App),
  router,
  store
})

app.$mount('#app')
