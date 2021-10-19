<template>
  <div id="app">
    <div class="container">
      <h1>To-Do List</h1>
     <TaskForm @click-button=createTask></TaskForm >
     <TaskList   :listOfTasks="tasks"></TaskList>
    </div>
  </div>
</template>
<script>
/*
import ReactiveInput from './components/ReactiveInput.vue';
import PersonComponent from './components/PersonComponent.vue';
*/
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

export default {
  name: 'app',
  data() {
    return {
      tasks: [
        {
          text: 'Buy bread',
          completed: true,
        },
        {
          text: 'Play guitar',
          completed: false,
        },
        {
          text: 'Go for a walk',
          completed: false,
        },
      ],
    };
  },
  components: {
    /* ReactiveInput, PersonComponent, */
    TaskForm, TaskList,
  },
  methods: {
    createTask(eventData) {
      this.tasks.push({ text: eventData.text, completed: false });
      console.log(eventData.text);
    },
  },
};
</script>
<style lang="less">
  html {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  .container {
    width: 600px;
    margin: auto;
    h1 {
      text-align: center;
    }
  }

  .left-column {
    width: 200px;
    padding-right: 8px;
  }
  .right-column {
    width: 40px
  }
</style>
