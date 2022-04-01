import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wordId: null
  },
  mutations: {
    setWordId(state, arr) {
      state.wordId = arr
    }
  },
  actions: {},
  modules: {}
})
