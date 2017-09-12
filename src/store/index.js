import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import apiLink from './modules/apiLink'
Vue.use(Vuex)
var store=new Vuex.Store({
  modules: {
    userInfo:userInfo,
    apiLink:apiLink
  }
})
export default  store

