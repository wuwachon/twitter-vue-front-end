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

router.beforeEach(async (to, from, next) => {
  // localStorage 取出 token
  const token = localStorage.getItem('token')
  // 預設使用者為未驗證
  let isAuthenticated = false

  // 有 token 才向後端驗證
  if(token) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // 不需要 token 就可檢視之頁面
  const pathsWithoutAuthentications = ['login', 'register', 'admin-login']

  // 如果 token 無效，而且使用者想進入需要權限才能檢視的頁面，轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentications.includes(to.name)) {
    next('/login')
    return
  }

  // 如果 token 有效，而且使用者嘗試進入登入/註冊頁，轉址到首頁
  if (isAuthenticated && pathsWithoutAuthentications.includes(to.name)) {
    next('/main')
    return
  }

  next()
})

export default router
