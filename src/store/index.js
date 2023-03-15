import { createStore } from 'vuex'

export default createStore({
  state: {
    goods: [],       
    cart: [],
    message: false,
    search: ''    
  },
  getters: {
    getGoods(state) {
      return state.goods;
    },
    getCart(state) {
      return state.cart;
    },
    getMessage(state) {
      return state.message;
    },
    getSearch(state) {
      return state.search
    }    
  },
  mutations: {
    setSearch(state, search) {
      state.search = search
    },
    setCatalog(state, payload) { state.goods = [...state.goods, ...payload] },
    addToCart(state, goodId) {
      const goodInCart = state.cart.find((good) => good.id_product === goodId)
      if(goodInCart) {
        goodInCart.quantity++
      } else {
        const good = state.goods.find((good) => good.id_product === goodId)
        state.cart.push({...good, quantity: 1})
      }
    },
    removeFromCart(state, goodId) {
      state.cart = state.cart.filter(good =>
        good.id_product !== goodId);
    }
  },
  actions: {
    loadCatalog({commit}) {
      return fetch('/api/catalog')
        .then((response) => {
          return response.json();          
        })
        .then((goodList) => {
          commit('setCatalog', goodList);          
        })
        .catch((reject) => {
          this.message = !this.message;
          alert('ошибка');
      })
    },
    loadToCart({commit, dispatch}, good) {
      return fetch('/api/cart', {method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(good)})
        .then((response) => {
          commit('addToCart', good.id_product)
          dispatch('setStat', { type: 'add', id: good.id_product})
          console.log(good)
        })        
    },
    loadFromCart({commit, dispatch}, good) {
      return fetch('/api/removeFromCart',{method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(good)})
      .then((response) => {
        commit('removeFromCart', good.id_product);
        dispatch('setStat', { type: 'remove', id: good.id_product})
    })
    },
    setStat({commit}, stat) {
      return fetch('/api/stats', {method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(stat)})
      .then((response) => {
        console.log(stat)
      })
    }
  }  
})
