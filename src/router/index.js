import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Web from '@/components/Web/Web'
import Publish from '@/components/Publish/Publish'
import Login from '@/components/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Web',
      component: Web
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
