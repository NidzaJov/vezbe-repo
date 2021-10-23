<template>
<div class="task-list">
  <single-task v-for="task in tasksData" :key="task.id" :task="task" @delete="deleteTask"/>
</div>

</template>

<script>
import { mapState } from 'vuex';
import SingleTask from './SingleTask.vue';

export default {
  name: 'TaskList',
  components:
    { SingleTask },
  computed: {
    ...mapState('tasks', ['tasksData']),
  },
  methods: {
    deleteTask(taskId) {
      this.$emit('delete', taskId);
    },
  },
};
</script>

<style lang="less" scoped>

</style>
