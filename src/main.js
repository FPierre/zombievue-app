// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueSocketio from 'vue-socket.io'
import store from './store'
import App from './App'

Vue.config.productionTip = false

// Vue.use(VueSocketio, 'http://localhost:1337', store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
