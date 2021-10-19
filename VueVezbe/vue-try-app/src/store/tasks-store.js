export default {
  namespaced: true,
  state: {
    tasks: [
      {
        text: 'Buy bread',
        completed: true,
      },
      {
        text: 'Play guitar',
        completed: false,
      },
      {
        text: 'Go for a walk',
        completed: false,
      },
    ],
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
    },
    removeTask(state, payload) {
      state.tasks.splice(state.tasks.indexOf(payload), 1);
    },
  },
  actions: {
    ADD_TASK(context, payload) {
      context.commit('addTask', payload);
    },
  },
  getters: {
    unfinishedTasks(state) {
      return state.tasks.filter((e) => !e.completed);
    },
  },
};
