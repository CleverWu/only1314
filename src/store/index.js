import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
Vue.use(Vuex)
var store=new Vuex.Store({
  modules: {
    userInfo:userInfo
  }
})
export default  store

