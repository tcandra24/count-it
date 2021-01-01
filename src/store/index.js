import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import transaction from '@/store/transaction'
import categories from '@/store/categories'

const persist = new VuexPersist({
  key: 'countIt-data',
  storage: localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [persist.plugin],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    transaction,
    categories
  }
})
