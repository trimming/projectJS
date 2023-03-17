import { createStore } from 'vuex'

export default createStore({
  state: {
    goods: [],
    cart: [],
    search: '',
  },
  getters: {
    getGoods(state) {
      return state.goods;
    },
    getCart(state) {
      return state.cart;
    },
    getSearch(state) {
      return state.search;
    }
  },
  mutations: {
    setGoods(state, payload) { state.goods = [...state.goods, ...payload] },
  },
  actions: {
    loadGoodsList({ commit }) {
      return fetch('api/good')
        .then((response) => {
          return response.json()
        })
        .then((goodList) => {
          commit('setGoods', goodList)
        })
    },

  },
  modules: {
  }
})
