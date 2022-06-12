const timer = {
  state: {
    isTime: true,
  },

  mutations: {
    changeStatus(state) {
      state.isTime = false;
    },
  },

  actions: {
    changeStatus({ commit }) {
      commit('changeStatus')
    }
  },

  getters: {
    getStatus(state) {
      return state.isTime
    }
  }
}

export default timer