<template>
    <div>
        <TaskItem v-for="(task, idx) in listOfTasks" :key="idx"
        :taskItem="task" @remove-item="removeTask(task)"></TaskItem>
    </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
  props: {
    listOfTasks: {
      required: true,
      type: [Array],
    },
  },
  methods: {
    removeTask(t) {
      this.listOfTasks.splice(this.listOfTasks.indexOf(t), 1);
    },
  },
};
</script>
