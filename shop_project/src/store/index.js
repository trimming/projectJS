import { createStore } from 'vuex'

export default createStore({
  state: {
    goods: [],
    cart: [],
    search: '',
    cartCount: 0,
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
    addToCart(state, goodId) {
      const goodInCart = state.cart.find((good) => good.id === goodId)
      if(goodInCart) {
        goodInCart.quantity++
      } else {
        const good = state.goods.find((good) => good.id === goodId)
        state.cart.push({...good, quantity: 1})
      }
    }
  },
  actions: {
    loadGoodsList({ commit }) {
      return fetch('/api/good')
        .then((response) => {
          return response.json()
        })
        .then((goodList) => {
          commit('setGoods', goodList)
        })
    },
    loadToCart({commit, dispatch}, good) {
      return fetch('/api/cart', {method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(good)})
        .then((response) => {
          commit('addToCart', good.id)
          // dispatch('setStat', { type: 'add', id: good.id})
          console.log(good)
        })
        
    },
  },
  modules: {
  }
})
