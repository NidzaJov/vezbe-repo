export default {
  namespaced: true,
  state: {
    tasks: [
      {
        id: 1,
        text: 'Buy bread',
        completed: true,
      },
      {
        id: 2,
        text: 'Play guitar',
        completed: false,
      },
      {
        id: 3,
        text: 'Go for a walk',
        completed: false,
      },
    ],
    counter: 3,
  },
  mutations: {
    addTask(state, payload) {
      state.counter += 1;
      const newTask = { id: state.counter, ...payload };
      state.tasks.push(newTask);
    },
    updateTask(state, payload) {
      const idx = state.tasks.findIndex((e) => e.id === payload.id);
      state.task.splice(idx, 1, payload);
    },
    removeTask(state, payload) {
      state.tasks.splice(state.tasks.indexOf(payload), 1);
    },
  },
  actions: {
    ADD_TASK(context, payload) {
      context.commit('addTask', payload);
    },
    UPDATE_TASK(context, payload) {
      context.commit('addTask', payload);
    },
  },
  getters: {
    unfinishedTasks(state) {
      return state.tasks.filter((e) => !e.completed);
    },
  },
};
