import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import './static/styles/reset.css'

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
  router,
  store
})

app.$mount('#app')
