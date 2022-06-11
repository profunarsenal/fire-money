import { createRouter, createWebHistory } from 'vue-router'

import MainView from '@/views/MainView'
import ReviewView from '@/views/ReviewView'

const routes = [
  {
    path: '/',
    component: MainView
  },
  {
    path: '/review',
    component: ReviewView
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
