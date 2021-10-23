<template>
  <div id="app">
    <h1 class="title">Tasks App</h1>
    <task-form @add-task="addTaskHandler" :search="searchParams"/>
    <task-list :tasks="filteredTasks" @delete="deleteTaskHandler"/>
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
      searchParams: {
        searchText: '',
        hideCompleted: false,
      },
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
      this.tasksData.push(newTask);
    },
    deleteTaskHandler(taskId) {
      const taskIdx = this.tasksData.findIndex((t) => t.id === taskId);
      if (taskIdx >= 0) {
        this.tasksData.splice(taskIdx, 1);
      }
    },
  },
  computed: {
    filteredTasks() {
      const searchedTasks = this.tasksData
        .filter((task) => {
          const taskTextLowercase = task.text.toLowerCase();
          const searchTextLowercase = this.searchParams.searchText.toLowerCase();
          const hasSearchText = taskTextLowercase.indexOf(searchTextLowercase) >= 0;

          return hasSearchText;
        });
      if (this.searchParams.hideCompleted) {
        const notCompleted = searchedTasks.filter((task) => !task.done);

        return notCompleted;
      }
      return searchedTasks;
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
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    text-align: center;
  }
}
</style>
<style lang="scss" src="./styles/global.scss"></style>
