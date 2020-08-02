export default {
  namespaced: true,
  state: {
    transactions: [],
    budget: 0
  },
  mutations: {
    addData: (state, value) => {
      state.transactions.push({
        nama: value.nama,
        tanggal: value.tanggal,
        nominal: value.nominal,
        keterangan: value.keterangan
      })
    },
    updateData: (state, value) => {
      state.transactions.splice(value.index, 1, {
        nama: value.nama,
        tanggal: value.tanggal,
        nominal: value.nominal,
        keterangan: value.keterangan
      })
    },
    deleteData: (state, value) => {
      state.transactions.splice(value.index, 1)
    },
    editBudget: (state, value) => {
      state.budget = value.budget
    }
  },
  actions: {
    add: ({ commit }, value) => {
      commit('addData', value)
    },
    update: ({ commit }, value) => {
      commit('updateData', value)
    },
    delete: ({ commit }, value) => {
      commit('deleteData', value)
    },
    changeBudget: ({ commit }, value) => {
      commit('editBudget', value)
    }
  },
  getters: {
    allTransaction: state => state.transactions,
    budget: state => state.budget,
    countPengeluaran: (state) => {
      return state.transactions.reduce((val, element) => {
        return parseInt(val) + parseInt(element.nominal)
      }, 0)
    },
    countSisa: (state) => {
      let sisaBudget = state.budget
      state.transactions.forEach(data => {
        sisaBudget -= parseInt(data.nominal)
      })
      return sisaBudget
    }
  }
}
