<template>
    <div class="mainContainer">
      <h1 class="title">Tasks App</h1>
      <router-view name="helper"></router-view>
      <router-view></router-view>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'MainContainer',
  created() {
    this.getTasksApi();
  },
  methods: {
    ...mapActions('tasks', ['getTasksApi']),
  },
};
</script>

<style lang="scss" scoped>
.title {
    text-align: center;
}
</style>
