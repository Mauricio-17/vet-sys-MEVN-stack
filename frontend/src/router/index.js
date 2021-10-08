
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      let auth = localStorage.getItem('token')
      if(!auth){
        next()
      }else{
        next({name: 'Clients'})
      }
    }
  },
  {
    path: '/clients',
    name: 'Clients',
    component: () => import(/* webpackChunkName: "about" */ '../views/Clients.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/mascots',
    name: 'Mascots',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mascots.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue'),
    beforeEnter: (to, from, next) => {
      let auth = localStorage.getItem('token')
      if(!auth){
        next()
      }else{
        next({name: 'Clients'})
      }
    }
  },
  {
    path: '/species',
    name: 'Species',
    component: () => import(/* webpackChunkName: "about" */ '../views/Species.vue'),
    meta: { requiresAuth: true }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let auth = localStorage.getItem('token')
  if (to.meta.requiresAuth) {
    if (auth) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }

})

export default router
