const calculator = {
  state: {
    calculator: {
      sliderSum: '50000',
      selectorStyle: '0%',
      progressStyle: '0%',
    },

    monthArray: [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ],
  },

  mutations: {
    changeSliderSum(state, payload) {
      state.calculator.sliderSum = payload;
    }
  },

  actions: {
    changeSliderSum({ commit }, payload) {
      commit('changeSliderSum', payload)
    }
  },

  getters: {
    getSliderSum(state) {
      return state.calculator.sliderSum
    },

    getMonth(state) {
      return state.monthArray
    },

    getSelector(state) {
      return state.calculator.selectorStyle
    },

    getProgress(state) {
      return state.calculator.progressStyle
    },
  }
}

export default calculator