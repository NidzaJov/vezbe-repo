import Vue from 'vue';
import Vuex from 'vuex';
import TasksStore from './tasks-store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messageLog: [],
  },
  mutations: {
    addLogEntry(state, message) {
      state.messageLog.push(message);
    },
  },
  actions: {
    ADD_TASK(context, payload) {
      console.log();
      context.commit('addLogEntry', `ADD_TASK ${payload.text}`);
    },
    UPDATE_TASK(context, payload) {
      context.commit('updateTask', payload);
    },
  },
  modules: {
    TasksStore,
  },
});
