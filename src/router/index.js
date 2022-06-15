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
    path: '/receiving',
    name: 'receiving-page',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReceivingView.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
