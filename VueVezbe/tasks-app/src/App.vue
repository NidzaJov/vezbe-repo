<template>
  <div id="app">
    <h1 class="title">Tasks App</h1>
    <task-form @add-task="addTaskHandler"/>
    <task-list :tasks="tasksData"/>
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

let idCounter = 0;
const generateId = function () {
  idCounter += 1;
  return idCounter;
};

export default {
  name: 'App',
  components: {
    TaskForm, TaskList,
  },
  data() {
    return {
      tasksData: [
        { id: generateId(), text: 'Buy milk', done: false },
        { id: generateId(), text: 'Walk the dog', done: false },
        { id: generateId(), text: 'Wash the dishes', done: false },
      ],
    };
  },
  methods: {
    addTaskHandler(info) {
      const newTask = { id: generateId(), text: info.text, done: false };
      this.taskData.push(newTask);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/variables.scss";

#app {
  width: 600px;
  border: 4px solid $border-color;
  margin: auto;

  .title {
    text-align: center;
  }
}
</style>
<style lang="scss" src="./styles/global.scss"></style>
