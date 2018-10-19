import Vue from 'vue'
import Vuex from 'vuex'
import * as m_user from '@/store/modules/user.js'
import * as m_event from '@/store/modules/event.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    m_user,
    m_event
  },

  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
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
  }
})
