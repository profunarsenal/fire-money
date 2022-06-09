const suggestions = {
  state: {
    suggestions: [
      {
        id: 0,
        rate: 'LITE',
        sum: 15000,
        term: 7,
        interval: 'дней',
        dateReturn: '12 января 2022',
        sumReturn: 20000,
      },
      {
        id: 1,
        rate: 'BASIC',
        sum: 25000,
        term: 1,
        interval: 'месяц',
        dateReturn: '12 февраля 2022',
        sumReturn: 35500,
      },
      {
        id: 2,
        rate: 'PRO',
        sum: 45000,
        term: 1,
        interval: 'год',
        dateReturn: '12 января 2023',
        sumReturn: 70000,
      },
    ]
  },

  getters: {
    getSuggestions(state) {
      return state.suggestions
    }
  }
}

export default suggestions