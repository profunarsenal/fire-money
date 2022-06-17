const transactions = {
    state: {
        transactions: [
            {
                id: 0,
                date: '1 июня 2022',
                time: '11:20',
                status: 'Списание',
                sum: 5650
            },
            {
                id: 1,
                date: '2 мая 2022',
                time: '14:37',
                status: 'Списание',
                sum: 4900
            },
            {
                id: 2,
                date: '7 апреля 2022',
                time: '10:03',
                status: 'Списание',
                sum: 3780
            },
            {
                id: 3,
                date: '6 марта 2022',
                time: '17:54',
                status: 'Пополнение',
                sum: 10000
            },
            {
                id: 4,
                date: '19 февраля 2022',
                time: '09:13',
                status: 'Займ',
                sum: 15000
            },
        ]
    },

    getters: {
        getTransactions(state) {
            return state.transactions;
        }
    }
}

export default transactions;