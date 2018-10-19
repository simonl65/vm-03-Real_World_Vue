import EventService from '@/services/EventService.js'

export const state = {
  events: [],
  eventsTotal: 0,
  event: {}
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },

  SET_EVENTS(state, events) {
    state.events = events
  },

  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.eventsTotal = eventsTotal
  },

  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  },

  fetchEvents({ commit }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        commit('SET_EVENTS_TOTAL', parseInt(response.headers['x-total-count']))
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        console.error(error.response)
      })
  },

  fetchEvent({ commit, getters }, id) {
    let event = getters.getEventById(id)

    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(err => {
          console.error(err.response)
        })
    }
  }
}

export const getters = {
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
