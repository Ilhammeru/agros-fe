import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugins
import './plugins/axios'
import './plugins/loading'
import './plugins/sweetalert'
// import './plugins/crypto'

// errors Request comopnent
import Errors from '@/components/Errors.vue'

Vue.config.productionTip = false
Vue.component('error-request', Errors)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
