import { createStore } from 'vuex'

export default createStore({
  state: {
    goods: [],
    cart: [],
    form: [],
    search: '',
    cartCount: 0,
    cartTotal: 0,
    inputName: {
      regex: new RegExp('^([a-zA-Z \\s?]+)$', 'mi'),
      text: '',
    },
    inputPhone: {
      regex: new RegExp('^\\+7\\([0-9]{3}\\)[0-9]{3}-[0-9]{4}$', 'm'),
      text: '',
    },
    inputEmail: {
      regex: new RegExp('^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$', 'mi'),
      text: '',
    },
  },
  getters: {
    getSearch(state) {
      return state.search;
    },
    getGoods(state) {
      return state.goods;
    },
    getCart(state) {
      return state.cart;
    },
    getSearch(state) {
      return state.search;
    },
    getCartCount(state) {
      return state.cartCount;
    },
    getTotalCart(state) {
      let initialValue = 0;
      state.cartTotal = state.cart.reduce((acc, curr) =>
        acc + curr.total, initialValue);
      return state.cartTotal;
    },
    getInputName(state) {
      return state.inputName;
    },
    getInputPhone(state) {
      return state.inputPhone;
    },
    getInputEmail(state) {
      return state.inputEmail;
    }
  },
  mutations: {
    setUserName(state, input) {
      state.inputName.text = input;      
    },
    setUserPhone(state, input) {
      state.inputPhone.text = input;      
    },
    setUserEmail(state, input) {
      state.inputEmail.text = input;      
    },
    setDataForm(state, userData) {
      state.form.push(userData);
      
    },
    setSearch(state, search) {
      state.search = search
    },
    setGoods(state, payload) { state.goods = [...state.goods, ...payload] },
    addToCart(state, goodId) {
      const goodInCart = state.cart.find((good) => good.id === goodId)
      if (goodInCart) {
        goodInCart.quantity++;
        goodInCart.total = goodInCart.quantity * goodInCart.price;
        state.cartCount++;
      } else {
        const good = state.goods.find((good) => good.id === goodId);
        good.quantity = 1;
        good.total = good.quantity * good.price;
        state.cart.push({ ...good });
        state.cartCount++;
      }
    },
    closeCard(state, id) {
      state.cart.forEach(good => {
        if (good.id === id) {
          state.cartCount = state.cartCount - good.quantity;
          good.quantity = 0;
          good.total = 0;
        }
      })
      state.cart = state.cart.filter((good) => good.id != id);
    },
    clearCartHandler(state, target) {
      state.cart.forEach(good => {
        good.quantity = 0;
        good.total = 0;
      })
      state.cart = [];
      state.cartCount = 0;
      state.cartTotal = 0;
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
    loadToCart({ commit, dispatch }, good) {
      return fetch('/api/cart', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(good) })
        .then((response) => {
          commit('addToCart', good.id)
          // dispatch('setStat', { type: 'add', id: good.id})
          console.log(good)
        })
    },
    loadCloseCard({ commit, dispatch }, good) {
      return fetch('/api/closeCard', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(good) })
        .then((response) => {
          commit('closeCard', good.id)
          // dispatch('setStat', { type: 'add', id: good.id})
          console.log(good)
        })
    },
    loadClearCart({ commit, dispatch }, good) {
      return fetch('/api/clearCartHandler', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(good) })
        .then((response) => {
          commit('clearCartHandler', good.id)
          // dispatch('setStat', { type: 'add', id: good.id})
          console.log(good)
        })
    },
    loadDataForm({ commit }, userData) {
      return fetch('/api/sendDataForm', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userData) })
        .then((response) => {
          commit('setDataForm', userData)
          console.log(userData)
        })
    },
  },
  modules: {
  }
})
