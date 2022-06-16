import { createRouter, createWebHistory } from 'vue-router'

import MainView from '@/views/MainView'

const routes = [
  {
    path: '/',
    name: 'main-view',
    component: MainView
  },
  {
    path: '/form',
    name: 'form-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormView.vue')
  },
  {
    path: '/action/:id',
    name: 'action-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/ActionView.vue')
  },
  {
    path: '/receiving',
    name: 'receiving-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReceivingView.vue')
  },
  {
    path: '/auth',
    name: 'auth-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/AuthView.vue')
  },
  {
    path: '/review',
    name: 'review-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReviewView.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
