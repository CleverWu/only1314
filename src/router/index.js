import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Web from '@/components/Web/Web'
/*import Publish from '@/components/Publish/Publish'
import Login from '@/components/Login/Login'*/

Vue.use(Router)
const Publish= resolve=> {
  require(['../components/Publish/Publish.vue'], resolve)
};
const Login= resolve=> {
  require(['../components/Login/Login.vue'], resolve)
};
const activeEmail= resolve=> {
  require(['../components/activeEmail/activeEmail.vue'], resolve)
};
const article= resolve=> {
  require(['../components/article/article.vue'], resolve)
};
const excel= resolve=> {
  require(['../components/excel/excel.vue'], resolve)
};
const userCenter= resolve=> {
  require(['../components/userCenter/userCenter.vue'], resolve)
};
const userPhoto= resolve=> {
  require(['../components/userCenter/userPhoto.vue'], resolve)
};
const account= resolve=> {
  require(['../components/userCenter/account.vue'], resolve)
};
const welcomeUser= resolve=> {
    require(['../components/userCenter/welcomeUser.vue'], resolve)
};
const commonTopBar= resolve=> {
  require(['../components/Header/commonTopBar.vue'], resolve)
};


export default new Router({
  mode: 'history',
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
    },
    {
      path: '/activeEmail',
      name: 'activeEmail',
      component: activeEmail
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/excel',
      name: 'excel',
      component: excel
    },
    {
      path: '/commonTopBar',
      name: 'commonTopBar',
      component: commonTopBar
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: userCenter,
      children: [
        {
          path: 'userPhoto',
          name:'userPhoto',
          component: userPhoto
        },
        {
          path: 'account',
          name:'account',
          component: account
        },
          {
              path: 'welcomeUser',
              name:'welcomeUser',
              component: welcomeUser
          }
      ]
    }
  ]
})
