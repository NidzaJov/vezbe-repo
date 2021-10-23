let idCounter = 0;
const generateId = function () {
  idCounter += 1;
  return idCounter;
};

export default {
  namespaced: true,
  state: {
    tasksData: [
      { id: generateId(), text: 'Buy milk', done: false },
      { id: generateId(), text: 'Walk the dog', done: false },
      { id: generateId(), text: 'Wash the dishes', done: false },
    ],
  },
  actions: {},
  mutations: {},
  getters: {},

};
