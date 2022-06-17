const suggestions = {
  state: {
    suggestions: [
      {
        id: 0,
        rate: 'LITE',
        sum: 15000,
        term: 7,
        interval: 'дней',
        sumReturn: 15000
      },
      {
        id: 1,
        rate: 'BASIC',
        sum: 25000,
        term: 30,
        interval: 'дней',
        sumReturn: 25000
      },
      {
        id: 2,
        rate: 'PRO',
        sum: 45000,
        term: 90,
        interval: 'дней',
        sumReturn: 45000
      },
    ],
  },

  getters: {
    getSuggestions(state) {
      return state.suggestions;
    }
  }
}

export default suggestions;