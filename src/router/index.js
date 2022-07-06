import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/action',
        name: 'action',
        component: () => import('@/views/Action.vue')
      },
      {
        path: '/credit',
        name: 'credit',
        component: () => import('@/views/Credit.vue')
      },
      {
        path: '/receiving',
        name: 'receiving',
        component: () => import('@/views/Receiving.vue')
      },
    ]
  },
  {
    path: '/',
    name: 'AuthLayout',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: '/auth',
        name: 'auth',
        component: () => import('@/views/Auth.vue')
      },
      {
        path: '/cabinet',
        name: 'cabinet',
        component: () => import('@/views/Cabinet.vue')
      },
    ]
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 })
});

export default router;
