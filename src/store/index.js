import { createStore } from 'vuex'

import suggestions from '@/store/modules/suggestions'
import payments from '@/store/modules/payments'
import reviews from '@/store/modules/reviews'
import clients from '@/store/modules/clients'
import rules from '@/store/modules/rules'

const store = createStore({
  modules: {
    suggestions,
    payments,
    reviews,
    clients,
    rules
  }
})

export default store

