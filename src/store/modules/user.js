const user = {
  state: {
    user: {
      name: '',
      surName: '',
      patronymic: ''
    }
  },

  mutations: {
    changeUser(state, payload) {
      state.user.name = payload.userName;
      state.user.surName = payload.userSurName;
      state.user.patronymic = payload.userPatronymic;
    }
  },

  actions: {
    changeUser({ commit }, payload) {
      commit('changeUser', payload);
    }
  },

  getters: {
    getUser(state) {
      return state.user;
    }
  }
}

export default user;