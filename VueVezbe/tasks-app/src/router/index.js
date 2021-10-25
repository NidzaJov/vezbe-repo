import Vue from 'vue';
import VueRouter from 'vue-router';
import MainContainer from '../views/MainContainer.vue';
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';
import SingleTask from '../components/SingleTask.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Root',
    component: MainContainer,
    redirect: '/list',
    children: [
      {
        path: 'list',
        name: 'TaskList',
        components: {
          default: TaskList,
          helper: false,
        },
      },
      {
        path: 'list/add',
        name: 'TaskAdd',
        components: {
          default: TaskList,
          helper: TaskForm,
        },
      },
      {
        path: 'list/edit/:id',
        name: 'EditTask',
        components: {
          default: SingleTask,
          helper: false,
        },
        props: {
          default: (route) => ({ id: parseInt(route.params.id, 10), text: route.params.text }),
          helper: false,
        },
      },
    ],
  },
  {
    path: '/*',
    components: NotFound,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
