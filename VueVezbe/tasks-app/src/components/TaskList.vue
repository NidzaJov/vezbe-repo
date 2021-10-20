<template>
<div class="task-list">
  <single-task v-for="task in tasks" :key="task.id" :task="task"/>
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
};
</script>

<style lang="less" scoped>

</style>
