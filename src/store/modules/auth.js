const auth = {
  state: {
    isAuth: false
  },

  mutations: {
    changeStatus(state, payload) {
      state.isAuth = payload
    }
  },

  actions: {
    changeStatus({ commit }, payload) {
      commit('changeStatus', payload)
    }
  },

  getters: {
    getAuthStatus(state) {
      return state.isAuth
    },
  }
}

export default auth