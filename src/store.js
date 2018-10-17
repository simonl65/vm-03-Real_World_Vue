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
    ]
  },

  mutations: {},

  actions: {},

  getters: {
    catLength: state => {
      return state.categories.length
    }
  }
})
