<template>
    <div class="task-form pl">
      <input type="text" class="task-text ps" v-model="taskText" @keyup.enter = "addTaskHandler">
      <my-button @click="addTaskHandler">Add</my-button>
    </div>
</template>

<script>
import MyButton from './MyButton.vue';

export default {
  name: 'TaskForm',
  components: {
    MyButton,
  },
  data() {
    return {
      taskText: '',
    };
  },
  methods: {
    addTaskHandler() {
      this.$emit('add-task', { text: this.taskText });
      this.taskText = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.task-form {
  width: $default-width;
  display: flex;
  justify-content: space-between;
  .task-text {
    color: $text-color;
    border-color: $border-color;
    flex-grow: 1;
  }
}

</style>
