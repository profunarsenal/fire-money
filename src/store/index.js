import { createStore } from 'vuex'

import suggestions from '@/store/modules/suggestions'
import payments from '@/store/modules/payments'
import reviews from '@/store/modules/reviews'
import clients from '@/store/modules/clients'
import rules from '@/store/modules/rules'

const store = createStore({
  state: {
    monthArray: [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ],
  },

  getters: {
    getMonth(state) {
      return state.monthArray
    }
  },

  modules: {
    suggestions,
    payments,
    reviews,
    clients,
    rules
  }
})

export default store

