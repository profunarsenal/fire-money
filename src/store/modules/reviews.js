const reviews = {
  state: {
    reviews: [
      {
        id: 0,
        avatar: 'avatar-1.jpg',
        user: 'Олег Богомолов',
        city: 'г. Москва',
        text: 'В принципе можно у них брать деньги. Не обманывают. Договор понятный и доступный. Кто пишет что До зарплаты разводят кого то - бессовестно врут!А зачем врать? Наверняка конкуренты работают.',
        grade: 4
      },
      {
        id: 1,
        avatar: 'avatar-2.jpg',
        user: 'Екатерина Романова',
        city: 'г. Саратов',
        text: 'Задержали зарплату, а за квартиру платить нужно было обязательно, оформила онлайн займ, уже выплатила, спасибо! Если что случится, знаю куда обратиться!',
        grade: 5
      },
      {
        id: 2,
        avatar: 'avatar-3.jpg',
        user: 'Игорь Карнавалов',
        city: 'г. Иркутск',
        text: 'Беру тут деньги второй раз. Во второй раз они предлагают намного лучше условия чем в первый раз. Большую сумму дают и льготный период удобный. Можно работать с ними.',
        grade: 5
      },
      {
        id: 3,
        avatar: 'avatar-4.jpg',
        user: 'Кирилл Кульчихин',
        city: 'г. Самара',
        text: 'Одобрили. Сразу. Указал карту, Перевели деньги. Что ещё нужно? Хорошая фирма. В общем сложилось хорошее впечатление.',
        grade: 5
      },
      {
        id: 4,
        avatar: 'avatar-5.jpg',
        user: 'Анна Блок',
        city: 'г. Москва',
        text: 'Сломали онлайн выдачу, не выдержали наплыва не желающих платить займ',
        grade: 3
      },
      {
        id: 5,
        avatar: 'avatar-6.jpg',
        user: 'Елена Арустамян',
        city: 'г. Челябинск',
        text: 'Нормальная компания на твёрдую 4ку. Сейчас у меня тут займ открыт под 1%. Взяла 3 тысячи и отдам на следующей неделе. Никаких справок о доходах не нужно. Удобно, никаких заморочек.',
        grade: 4
      },
    ]
  },

  getters: {
    getReviews(state) {
      return state.reviews;
    }
  }
}

export default reviews;