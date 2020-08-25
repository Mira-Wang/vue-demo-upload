import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 手动挂载
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
