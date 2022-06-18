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
        city: 'г. Самара',
      },
      {
        id: 2,
        status: 'return',
        user: 'Светлана Борисовна',
        message: 'Внес на счет 12 000 ₽ 45 сек назад',
        city: 'г. Санкт-Петербург',
      },
      {
        id: 3,
        status: 'refusal',
        user: 'Александр Моисеев',
        message: 'Получила отказ 15 сек назад',
        city: 'г. Отрадный',
      },
      {
        id: 4,
        status: 'success',
        user: 'Ирина Ляшевская',
        message: 'Взял 25 000 ₽ 12 мин назад',
        city: 'г. Казань',
      },
      {
        id: 5,
        status: 'return',
        user: 'Владислав Тереньтьев',
        message: 'Внес на счет 2 750 ₽ 25 сек назад',
        city: 'г. Свердловск',
      },
    ]
  },

  getters: {
    getClients(state) {
      return state.clients;
    }
  }
}

export default clients;