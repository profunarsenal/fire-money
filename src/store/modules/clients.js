const clients = {
  state: {
    clients: [
      {
        id: 0,
        status: 'refusal',
        user: 'Екатерина Романова',
        message: 'Получила отказ 45 сек назад',
        city: 'г. Москва',
      },
      {
        id: 1,
        status: 'success',
        user: 'Игорь Николаев',
        message: 'Взял 5 000 ₽ 2 мин назад',
        city: 'г. Москва',
      },
      {
        id: 2,
        status: 'return',
        user: 'Светлана Борисовна',
        message: 'Внес на счет 12 000 ₽ 45 сек назад',
        city: 'г. Москва',
      },
    ]
  },

  getters: {
    getClients(state) {
      return state.clients
    }
  }
}

export default clients