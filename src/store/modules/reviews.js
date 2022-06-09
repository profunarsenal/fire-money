const reviews = {
  state: {
    reviews: [
      {
        id: 0,
        avatar: 'avatar-1.jpg',
        user: 'Екатерина Романова, 26 лет',
        city: 'г. Москва',
        text: 'Для того, чтобы воспользоваться услугой, вам необходимо лишь заполнить анкету на сайте, все остальное сервис сделает за вас, сэкономив вам большое количество времени и сил. Наш сервис работает со всеми клиентами, нам не важно, какая у вас кредитная история и имеются ли текущие просрочки.',
        grade: 5
      },
      {
        id: 1,
        avatar: 'avatar-2.jpg',
        user: 'Екатерина Романова, 26 лет',
        city: 'г. Москва',
        text: 'Для того, чтобы воспользоваться услугой, вам необходимо лишь заполнить анкету на сайте, все остальное сервис сделает за вас, сэкономив вам большое количество времени и сил. Наш сервис работает со всеми клиентами, нам не важно, какая у вас кредитная история и имеются ли текущие просрочки.',
        grade: 3
      },
      {
        id: 2,
        avatar: 'avatar-3.jpg',
        user: 'Екатерина Романова, 26 лет',
        city: 'г. Москва',
        text: 'Для того, чтобы воспользоваться услугой, вам необходимо лишь заполнить анкету на сайте, все остальное сервис сделает за вас, сэкономив вам большое количество времени и сил. Наш сервис работает со всеми клиентами, нам не важно, какая у вас кредитная история и имеются ли текущие просрочки.',
        grade: 4
      },
    ]
  },

  getters: {
    getReviews(state) {
      return state.reviews
    }
  }
}

export default reviews