import Vue from 'vue';
import VueRouter from 'vue-router';
import TaskList from '../components/TaskList.vue';
import TaskForm from '../components/TaskForm.vue';
import MainContainer from '../layouts/MainContainer.vue';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Root',
    component: MainContainer,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: TaskList,
      },
      {
        path: 'home/new',
        name: 'NewTask',
        component: TaskForm,
      },
      {
        path: 'home/edit/:id',
        name: 'EditTask',
        components: {
          default: TaskList,
          helper: TaskForm,
        },
        props: {
          default: false,
          helper: (route) => ({ id: parseInt(route.params.id, 10) }),
        },
      },
    ],
  },
  {
    path: '/*',
    redirect: '/',
  },
];

const router = new VueRouter({
  made: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
