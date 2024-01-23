import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/productDetail/:shoeName',
      name: 'productDetail',
      component: () => import('@/views/ProductDetail.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/log-in.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/sign-up.vue'),
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/views/shopping-page.vue'),
    },
    {
      path: '/aboutUs',
      name: 'aboutUS',
      component: () => import('@/views/AboutUsPage.vue'),
    },
    {
      path: '/favorites',
      name: 'favotites',
      component: () => import('@/views/FavoritePage.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartPage.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

export default router;
