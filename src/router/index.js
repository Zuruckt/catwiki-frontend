import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BreedDetail from '../views/BreedDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/breed/:breed_name',
    name: 'breed',
    props: true,
    component: BreedDetail
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
