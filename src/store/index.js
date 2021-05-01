import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reload: false
  },
  mutations: {
    refreshList(state) {
      state.reload = !state.reload
    }
  },
  actions: {},
  modules: {}
})
