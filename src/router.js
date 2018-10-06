import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/flightboard',
      name: 'flightboard',
      /* route level code-splitting
      this generates a separate chunk (about.[hash].js) for this route
      which is lazy-loaded when the route is visited.
      */
      component: () => import(/* webpackChunkName: "about" */ './views/Flightboard.vue')
    },
    {
      path: '/people',
      name: 'people',
      component: () => import('./views/People.vue')
    },
    {
      path: '/policy',
      name: 'policy',
      component: () => import('./views/Policy.vue')
    },
    {
      path: '/payment-options',
      name: 'payment-options',
      component: () => import('./views/PaymentOptions.vue')
    },
    {
      path: '/reporting',
      name: 'reporting',
      component: () => import('./views/Reporting.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settings.vue')
    },
  ]
})
