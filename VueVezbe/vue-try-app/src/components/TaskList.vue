<template>
  <div class= 'task-list'>
    <div class="task-list-filter">
        <input type="checkbox" id="filterTasks" v-model="unfinishedOnly">
        <label for="filterTasks">Show only unfinished tasks</label>
        <router-link to="/home/new" tag="button" class='new-button'>Add New </router-link>
    </div>
    <TaskItem v-for="(task, idx) in listOfTasks" :key="idx"
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
      if (!this.unfinishedOnly) {
        return this.listOfTasks;
        // return this.store.getters.unfinishedTasks;
      }
      // return this.$store.getters.unfinishedTasks;
      return this.unfinishedTasks;
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
