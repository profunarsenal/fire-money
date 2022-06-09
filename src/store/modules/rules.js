const rules = {
  state: {
    rules: [
      {
        id: 0,
        title: 'Все возможные риски и убытки, и условия выдачи кредитов.',
        text: `о вашим анкетным данным сервис автоматически выбирает наиболее выгодные предложения и работает непосредственно с кредитными организациями, предоставляющими микрозаймы
        В случае приобретения платной услуги, вы получаете полный доступ к функциональности сервиса сроком на 1 год с момента активации услуги!
        
        Ваша заявка будет отправляться в МФО с наибольшей вероятностью одобрения в данный момент времени с соблюдением необходимых пауз между отправками. При предварительном одобрении кредитные организации сами связываются с вами, и вам необходимо лишь подтвердить свое согласие на займ и забрать деньги.
        Список МФО, в которые была отправлена ваша заявка, и другую необходимую информацию о работе в рамках платной услуги вы можете наблюдать в личном кабинете, в разделе Отчеты
        Стоимость услуги всего 1499 рублей. Для вашего удобства оплата услуги происходит в рассрочку: четыре платежа по 374.8 рублей каждые пять дней. Оплачивая услугу, вы получаете доступ к функциональности сервиса сроком на 1 год (365 дней) с момента активации услуги.
        
        Если вы получили займ и более не нуждаетесь в услугах сервиса - вы можете остановить обработку вашей заявки самостоятельно и в любое время в разделе Отписаться от услуг.`
      },
      {
        id: 1,
        title: 'Что будет при просрочке',
        text: `о вашим анкетным данным сервис автоматически выбирает наиболее выгодные предложения и работает непосредственно с кредитными организациями, предоставляющими микрозаймы
        В случае приобретения платной услуги, вы получаете полный доступ к функциональности сервиса сроком на 1 год с момента активации услуги!
        
        Ваша заявка будет отправляться в МФО с наибольшей вероятностью одобрения в данный момент времени с соблюдением необходимых пауз между отправками. При предварительном одобрении кредитные организации сами связываются с вами, и вам необходимо лишь подтвердить свое согласие на займ и забрать деньги.
        Список МФО, в которые была отправлена ваша заявка, и другую необходимую информацию о работе в рамках платной услуги вы можете наблюдать в личном кабинете, в разделе Отчеты
        Стоимость услуги всего 1499 рублей. Для вашего удобства оплата услуги происходит в рассрочку: четыре платежа по 374.8 рублей каждые пять дней. Оплачивая услугу, вы получаете доступ к функциональности сервиса сроком на 1 год (365 дней) с момента активации услуги.
        
        Если вы получили займ и более не нуждаетесь в услугах сервиса - вы можете остановить обработку вашей заявки самостоятельно и в любое время в разделе Отписаться от услуг.`
      },
    ]
  },

  getters: {
    getRules(state) {
      return state.rules
    }
  }
}

export default rules