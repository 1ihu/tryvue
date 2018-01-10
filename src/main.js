// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import stroe from "./store/store";
import ElementUI from 'element-ui'
import App from './App'
import jquery from 'jquery'
import "./icon/index";
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
Vue.use(ElementUI)
// Vue.use(Vuex)
Vue.prototype.$store = stroe;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // stroe,
  template: '<App/>',
  components: { App }
})

// import "./styles/bease.css";
