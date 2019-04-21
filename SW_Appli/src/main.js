import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import items from './store/items'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  store: items,
  render: h => h(App),
}).$mount('#app')
