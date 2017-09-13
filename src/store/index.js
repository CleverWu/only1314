import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import apiLink from './modules/apiLink'
import article from './modules/article'
Vue.use(Vuex)
var store=new Vuex.Store({
  modules: {
    userInfo:userInfo,
    apiLink:apiLink,
    article:article
  }
})
export default  store

