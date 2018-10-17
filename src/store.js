import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

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
    events: []
  },

  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },

  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    }
  },

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
