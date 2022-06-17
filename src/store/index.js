import { createStore } from 'vuex';

import suggestions from '@/store/modules/suggestions';
import payments from '@/store/modules/payments';
import reviews from '@/store/modules/reviews';
import clients from '@/store/modules/clients';
import rules from '@/store/modules/rules';
import spollers from '@/store/modules/spollers';
import calculator from '@/store/modules/calculator';
import user from '@/store/modules/user';
import transactions from '@/store/modules/transactions'

const store = createStore({
  modules: {
    suggestions,
    payments,
    reviews,
    clients,
    rules,
    spollers,
    calculator,
    user,
    transactions,
  }
})

export default store;

