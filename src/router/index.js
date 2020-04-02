import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/middleware/Auth'

import Home from '@/components/Home'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Footer from '@/components/partials/Footer'

Vue.component('v-footer', Footer)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: Auth
    }
  ]
})
