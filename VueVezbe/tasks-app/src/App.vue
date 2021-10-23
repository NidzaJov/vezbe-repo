<template>
  <div id="app">
    <h1 class="title">Tasks App</h1>
    <task-form/>
    <task-list/>
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  components: {
    TaskForm, TaskList,
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
