import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../src/assets/css/reset.css'
import './../src/assets/css/color.css'
import './../src/assets/css/basic.css'
import './../src/assets/css/typography.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
