import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import PriceList from '@/views/PriceList.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'PriceList',
    component: PriceList,
  },
  {
    path: '/bookMarkList',
    name: 'BookMarkList',
    component: () => import('../views/BookMarkList.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
