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
    ],
    events: [
      { id: 1, title: 'e1', organiser: 'a' },
      { id: 2, title: 'e2', organiser: 'b' },
      { id: 3, title: 'e3', organiser: 'c' },
      { id: 4, title: 'e4', organiser: 'd' }
    ]
  },

  mutations: {},

  actions: {},

  getters: {
    catLength: state => {
      return state.categories.length
    },

    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },

    // Passing in getters:
    activeTodosCount: (state, getters) => {
      return state.todos.length - getters.doneTodos.length
    },
    // Without passing in getters:
    // activeTodosCount: state => {
    //   return state.todos.filter(todo => !todo.done).length
    // }

    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
