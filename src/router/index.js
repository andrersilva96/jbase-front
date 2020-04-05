import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/middleware/Auth'

import Home from '@/components/Home'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Footer from '@/components/partials/Footer'
import Navbar from '@/components/partials/Navbar'
import Alert from '@/components/partials/Alert'

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.component('alert', Alert)
Vue.component('navbar', Navbar)
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
