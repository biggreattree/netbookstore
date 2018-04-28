import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.http.options.emulateHTTP = true//兼容IE6

/* eslint-disable no-new */
new Vue({
  http: {
    root: '/api',
    headers: {}
  },
  el: '#app',
  router,
  render: h => h(App)
})
