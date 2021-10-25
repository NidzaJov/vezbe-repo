const APIURL = 'http://localhost:3000';

export default {
  namespaced: true,
  state: {
    searchParams: {
      searchText: '',
      hideCompleted: false,
    },
    tasksData: null,
  },
  actions: {
    async getTasksApi(context) {
      context.commit('setAllTasks', null);
      let dynamicURL = `${APIURL}/tasks?`;
      if (context.state.searchParams.hideCompleted) {
        dynamicURL += `done=${!context.state.searchParams.hideCompleted}`;
      }
      if (context.state.searchParams.searchText.trim().length > 0) {
        dynamicURL += `&q=${context.state.searchParams.searchText.trim()}`;
      }
      const response = await fetch(dynamicURL);
      if (response.ok) {
        const parsedJSON = await response.json();
        context.commit('setAllTasks', parsedJSON);
      }
    },
    async deleteTask(context, taskId) {
      const response = await fetch(`${APIURL}/tasks/${taskId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        context.dispatch('getTasksApi');
      }
    },
    async editTask(context, task) {
      const response = await fetch(`${APIURL}/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      if (response.ok) {
        context.dispatch('getTasksApi');
      }
    },
    async addTask(context, text) {
      const newTask = { text, done: false };
      const response = await fetch(`${APIURL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      if (response.ok) {
        context.dispatch('getTasksApi');
      }
    },
    setSearchParams(context, params) {
      context.commit('setParams', params);
      context.dispatch('getTasksApi');
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
    setAllTasks(state, tasks) {
      state.tasksData = tasks;
    },
  },
};
