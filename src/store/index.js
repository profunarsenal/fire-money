import { createStore } from 'vuex'

import suggestions from '@/store/modules/suggestions'
import payments from '@/store/modules/payments'
import reviews from '@/store/modules/reviews'
import clients from '@/store/modules/clients'
import rules from '@/store/modules/rules'
import spollers from '@/store/modules/spollers'
import timer from '@/store/modules/timer'
import calculator from '@/store/modules/calculator'

const store = createStore({
  modules: {
    suggestions,
    payments,
    reviews,
    clients,
    rules,
    spollers,
    timer,
    calculator
  }
})

export default store

