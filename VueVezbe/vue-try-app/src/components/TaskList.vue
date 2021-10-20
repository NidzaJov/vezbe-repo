<template>
  <div class= 'task-list'>
    <div class="task-list-filter">
        <input type="checkbox" id="filterTasks" v-model="unfinishedOnly">
        <label for="filterTasks">Show only unfinished tasks</label>
        <router-link to="/home/new" tag="button" class='new-button'>Add New </router-link>
    </div>
    <TaskItem v-for="task in tasks" :key="task.id"
        :taskItem="task" @remove-item="removeTask(task)"></TaskItem>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import TaskItem from './TaskItem.vue';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
  data() {
    return {
      unfinishedOnly: false,
    };
  },
  props: {
    searchString: {
      type: String,
      default: '',
    },
  },
  methods: {
    ...mapMutations('TasksStore', {
      removeTask: 'removeTask',
    }),
  // this.$store.commit('removeTask', t);
  },
  computed: {
    ...mapState('TasksStore',
      {
        listOfTasks: (state) => state.tasks,
      }),
    ...mapGetters('TasksStore', {
      unfinishedTasks: 'unfinishedTasks',
    }),
    tasks() {
      let finalArray = [];
      if (!this.unfinishedOnly) {
        finalArray = this.listOfTasks;
        // return this.store.getters.unfinishedTasks;
      } else {
      // return this.$store.getters.unfinishedTasks;
        finalArray = this.unfinishedTasks;
      }

      if (this.searchString.length > 0) {
        finalArray = finalArray.filter((e) => e.text.toLowerCase()
          .includes(this.searchString.toLowerCase()));
      }

      return finalArray;
    },
  },
};
</script>

<style lang="less">
.task-list {
  .task-list-filter {
    width: 100%;
    text-align: center;
  }

  .new-button {
    margin-left: 4px;
  }
}
</style>
