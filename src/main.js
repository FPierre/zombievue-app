// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueSocketio from 'vue-socket.io'
import App from './App'

Vue.config.productionTip = false

// Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VueSocketio, 'http://localhost:1337')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
