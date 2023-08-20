import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
    counter: 0,
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
    completedTasks(state) {
      return state.tasks.filter((task) => task.completed);
    },
    incompleteTasks(state) {
      return state.tasks.filter((task) => !task.completed);
    },
    taskCount(state) {
      return state.tasks.length;
    },
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    toggleTask(state, taskId) {
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    clearCompletedTasks(state) {
      const incompleteTasks = state.tasks.filter((task) => !task.completed);
      state.tasks = [...incompleteTasks];
    },

    clearAllTasks(state) {
      state.tasks = [];
    },
  },
  actions: {},
  modules: {},
});
