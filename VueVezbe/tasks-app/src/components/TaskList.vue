<template>
<div class="task-list">
  <single-task v-for="task in filteredTasks" :key="task.id" :task="task" />
</div>

</template>

<script>
import { mapGetters } from 'vuex';
import SingleTask from './SingleTask.vue';

export default {
  name: 'TaskList',
  components:
    { SingleTask },
  computed: {
    ...mapGetters('tasks', ['filteredTasks']),
  },
};
</script>

<style lang="less" scoped>

</style>
