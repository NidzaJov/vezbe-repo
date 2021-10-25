import Vue from 'vue';
import VueRouter from 'vue-router';
import MainContainer from '../views/MainContainer.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Root',
    component: MainContainer,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
