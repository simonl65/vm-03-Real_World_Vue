import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal wlfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    todos: [
      { id: 1, text: 'One', done: true },
      { id: 2, text: 'Two', done: false },
      { id: 3, text: 'Three', done: true },
      { id: 4, text: 'Four', done: false }
    ]
  },

  mutations: {},

  actions: {},

  getters: {
    catLength: state => {
      return state.categories.length
    },

    donetodos: state => {
      return state.todos.filter(todo => todo.done)
    },

    // Passing in getters:
    activeTodosCount: (state, getters) => {
      return state.todos.length - getters.donetodos.length
    }
    // Without passing in getters:
    // activeTodosCount: state => {
    //   return state.todos.filter(todo => !todo.done).length
    // }
  }
})
