<template>
<div class="task-list">
  <single-task v-for="task in tasksData"
  :key="task.id"
  :id="task.id"
  :text="task.text"/>
  <my-button @click="openNewTask">Add new task</my-button>
</div>
</template>

<script>
import { mapState } from 'vuex';
import SingleTask from './SingleTask.vue';
import MyButton from './MyButton.vue';

export default {
  name: 'TaskList',
  components:
    { SingleTask, MyButton },
  computed: {
    ...mapState('tasks', ['tasksData']),
  },
  methods: {
    openNewTask() {
      this.$router.push({ name: 'TaskAdd' });
    },
  },
};
</script>

<style lang="less" scoped>

</style>
