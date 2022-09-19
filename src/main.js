import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toasted from 'vue-toasted'
import 'bootstrap'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import './axios'

Vue.config.productionTip = false

Vue.use(Toasted, {
   duration : 1500,
   position : 'top-right',
   theme : 'outline',
   iconPack : 'material'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
