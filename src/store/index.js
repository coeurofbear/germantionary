import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

// export const numberDisplay = Vue.observable({
//   count: 0
// })

export default new Vuex.Store({
  state: {
    wordId: null,
    user: {},
    displayName: ''
  },
  mutations: {
    setWordId(state, arr) {
      state.wordId = arr
    },
    setUser(state, obj) {
      state.user = obj
    },
    setDisplayName(state, name) {
      state.displayName = name
    }
  },
  actions: {
    getUserAsync({ commit }) {
      firebase.auth().onAuthStateChanged(user => {
        commit('setUser', user)
      })
    },
    getCurrentUserAsync({ commit }) {
      const user = firebase.auth().currentUser
      commit('setUser', user)
    }
  },
  modules: {}
})
