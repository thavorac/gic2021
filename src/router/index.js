import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../pages/Welcome'
import Home from '../pages/Home'
const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../pages/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../pages/auth/Register.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // if (!store.getters.isLoggedIn) {
    //   next({ name: 'Login' })
    // } else {
    //   next() // go to wherever I'm going
    // }
    console.log('this routes require login')
    next()
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router