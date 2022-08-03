import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import NotFound from '../views/NotFound.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/reply',
    name: 'reply',
    component: () => import('../views/Reply.vue')
  },
  {
    path: '/follows',
    name: 'user-follows',
    component: () => import('../views/UserFollows.vue')
  },
  {
    path: '/admin/tweets',
    name: 'admin-tweets',
    component: () => import('../views/AdminMain.vue'),
    children: [
      {
        path: '/admin/tweets',
        name: 'admin-tweets',
        component: () => import('../components/AdminTweetList.vue'),
      },
      {
        path: '/admin/users',
        name: 'admin-users',
        component: () => import('../components/AdminUserList.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin-login',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/setting',
    name: 'account-setting',
    component: () => import('../views/AccountSetting.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  // dispatch 呼叫 vuex action，每次路由變化，向 API 發請求，取得當前使用者
  store.dispatch('fetchCurrentUser')
  next()
})

export default router
