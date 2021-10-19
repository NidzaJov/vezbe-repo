<template>
    <div class="task-item" :class="taskItemClasses">
        <div class="task-item-content left-column" @click="toggleItem">
            <input type='checkbox' :checked="taskItem.completed">
            <span>{{taskItem.text}}</span>
        </div>
        <div class='task-item-buttons right-column'>
            <button @click="removeItem">X</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    taskItem: {
      reqired: true,
      type: [Object],
      validator(t) {
        return typeof t.text === 'string' && typeof t.completed === 'boolean';
      },
    },
  },
  computed: {
    taskItemClasses() {
      return { 'completed-item': this.taskItem.completed };
    },
  },
  methods: {
    toggleItem() {
      this.taskItem.completed = !this.taskItem.completed;
    },
    removeItem() {
      this.$emit('remove-item');
    },
  },
};
</script>

<style lang="less">
.task-item {
    width:  100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 8px 0px;
    padding: 8px;
    .task-item-buttons {
        display: flex;
        justify-content: center;
    }
    &.completed-item {
        .task-item-content {
            text-decoration: line-through;
        }
    }
}
</style>
