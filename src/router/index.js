import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/credit',
    name: 'credit',
    component: () => import('@/views/Credit.vue')
  },
  {
    path: '/action/:id',
    name: 'action',
    component: () => import('@/views/Action.vue')
  },
  {
    path: '/receiving',
    name: 'receiving',
    component: () => import('@/views/Receiving.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/Auth.vue')
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('@/views/Review.vue')
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior: () => ({ y: 0 })
});

export default router;
