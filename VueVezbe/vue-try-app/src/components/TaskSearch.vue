<template>
    <div class="task-form">
        <div class="left-column">
            <input type="text" class="todo-text" placeholder="Search..."
            v-model="searchText" @keydown.enter='performSearch'>
        </div>
        <div class="right-column">
            <button class="todo-add" @click="performSearch">Search</button>
            <div class="error-container" v-if="errorText.length">{{ this.errorText }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TaskSearch',
  data() {
    return {
      searchText: '',
      errorText: '',
    };
  },
  props: {
    paramSearchText: {
      type: String,
      default: '',
    },
  },
  created() {
    this.searchText = this.paramSearchText;
  },
  methods: {
    performSearch() {
      if (this.searchText.length === 0) {
        this.errorText = 'you must enter some text to search';
      } else {
        this.$router.push(`/home?sq=${this.searchText}`);
      }
    },
  },
};
</script>

<style lang="less">
@input-height: 32px;
.task-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .todo-text,
    .todo-add {
        height: @input-height;
        font-size: 14px;
    }

    .todo-text {
        padding: 4px;
        width: 100%;
    }
    .error-container {
        color: red;
        flex-basis: 100%;
        text-align: center;
    }
}
</style>
