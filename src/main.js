// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import store from './store/index'

Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.config.productionTip = false
/*Vue.prototype.handle= {}*/
/*Vue.use(handle);*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
