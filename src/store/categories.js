export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    addData: (state, value) => {
      state.categories.push({
        id: value.id,
        nama: value.nama,
        keterangan: value.keterangan,
        warna: value.warna
      })
    },
    updateData: (state, value) => {
      state.categories.splice(value.index, 1, {
        id: value.id,
        nama: value.nama,
        keterangan: value.keterangan,
        warna: value.warna
      })
    },
    deleteData: (state, value) => {
      state.categories.splice(value.id, 1)
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
    }
  },
  getters: {
    allData: state => state.categories
  }
}
