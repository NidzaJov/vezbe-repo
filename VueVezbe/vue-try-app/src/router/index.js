import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
  made: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
