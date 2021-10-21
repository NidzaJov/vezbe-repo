<template>
<div class="task-list">
  <single-task v-for="task in tasks" :key="task.id" :task="task" @delete="deleteTask"/>
</div>

</template>

<script>
import SingleTask from './SingleTask.vue';

export default {
  name: 'TaskList',
  components:
    { SingleTask },
  props: {
    tasks: {
      type: Array,
    },
  },
  methods: {
    deleteTask(taskId) {
      const taskIdx = this.tasks.findIndex((t) => t.id === taskId);
      if (taskIdx >= 0) {
        this.tasks.splice(taskIdx, 1);
      }
    },
  },
};
</script>

<style lang="less" scoped>

</style>
