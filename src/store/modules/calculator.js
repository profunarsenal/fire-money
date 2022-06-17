const calculator = {
  state: {
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

  getters: {
    getMonth(state) {
      return state.monthArray;
    },
  }
}

export default calculator;