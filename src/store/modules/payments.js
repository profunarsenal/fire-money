const payments = {
  state: {
    payments: [
      {
        id: 0,
        image: 'payment-1.png'
      },
      {
        id: 1,
        image: 'payment-2.png'
      },
      {
        id: 2,
        image: 'payment-3.png'
      },
      {
        id: 3,
        image: 'payment-4.png'
      },
      {
        id: 4,
        image: 'payment-5.svg'
      },
    ]
  },

  getters: {
    getPayments(state) {
      return state.payments;
    }
  }
}

export default payments;