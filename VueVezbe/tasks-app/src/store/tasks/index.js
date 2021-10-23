let idCounter = 0;
const generateId = function () {
  idCounter += 1;
  return idCounter;
};

export default {
  namespaced: true,
  state: {
    searchParams: {
      searchText: '',
      hideCompleted: false,
    },
    tasksData: [
      { id: generateId(), text: 'Buy milk', done: false },
      { id: generateId(), text: 'Walk the dog', done: false },
      { id: generateId(), text: 'Wash the dishes', done: false },
    ],
  },
  actions: {
    deleteTask(context, taskId) {
      const taskIdx = context.state.tasksData.findIndex((t) => t.id === taskId);
      if (taskIdx >= 0) {
        context.commit('spliceTask', taskIdx);
      }
    },
    addTask(context, text) {
      const newTask = {
        id: generateId(), text, done: false,
      };
      context.commit('pushTask', newTask);
    },
    setSearchParams(context, params) {
      context.commit('setParams', params);
    },
  },
  mutations: {
    spliceTask(state, idx) {
      state.tasksData.splice(idx, 1);
    },
    pushTask(state, newTask) {
      state.tasksData.push(newTask);
    },
    setParams(state, params) {
      state.searchParams = params;
    },
  },
  getters: {
    filteredTasks(state) {
      const searchedTasks = state.tasksData
        .filter((task) => {
          const taskTextLowerCase = task.text.toLowerCase();
          const searchTextLowerCase = state.searchParams.searchText.toLowerCase();
          const hasSearchText = taskTextLowerCase.indexOf(searchTextLowerCase) >= 0;
          return hasSearchText;
        });
      if (state.searchParams.hideCompleted) {
        const notCompleted = searchedTasks.filter((tasks) => !tasks.done);
        return notCompleted();
      }
      return searchedTasks;
    },
  },

};
