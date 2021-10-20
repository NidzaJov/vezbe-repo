<template>
    <div class="task-form">
      <input type="text" v-model="taskText">
      <button @click="addTaskHandler">Add</button>
    </div>
</template>

<script>
export default {
  name: 'TaskForm',
  data() {
    return {
      taskText: '',
    };
  },
  methods: {
    addTaskHandler() {
      this.$emit('add-task', { text: this.taskText });
    },
  },
};
</script>

<style lang="less" scoped>

</style>
