<template>
    <div class="task-form pl">
      <div class="form-add">
        <input
        type="text"
        class="task-text ps"
        v-model="taskText"
        @keyup.enter ="addTaskHandler"
        placeholder="Add a new task">
        <my-button @click="addTaskHandler">Add</my-button>
        <my-button @click="showSearch = !showSearch">
          <span v-show="!showSearch"></span>
          <span v-show="showSearch">V</span>
        </my-button>
      </div>
      <div class="form-search" v-if="showSearch">
        <input
          type="text"
          placeholder="Search..."
          class="task-text search-text ps"
          v-model="searchText"
          @keyup="changeInputHandler"/>
        <label class="filter">
          <input type="checkbox" v-model="hideCompleted" @change="changeInputHandler">
          Hide
        </label>

      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import MyButton from './MyButton.vue';

export default {
  name: 'TaskForm',
  components: {
    MyButton,
  },
  data() {
    return {
      taskText: '',
      showSearch: false,
      searchText: '',
      hideCompleted: false,
    };
  },
  methods: {
    ...mapActions('tasks', ['addTask', 'setSearchParams']),
    changeInputHandler() {
      this.setSearchParams({
        searchText: this.searchText,
        hideCompleted: this.hideCompleted,
      });
    },
    addTaskHandler() {
      this.addTask(this.taskText);
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
  flex-wrap: wrap;
  justify-content: space-between;
  .task-text {
    color: $text-color;
    border-color: $border-color;
    flex-grow: 1;
  }
  .form-add,
  .form-search {
    width: 100%;
    display: flex;
  }
  .form-add {
    margin-bottom: $padding-l;
  }
  .form-search {
    align-items: center;
  }
}

</style>
