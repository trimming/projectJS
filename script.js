'use strict';
const app = new Vue({
    el: '#app',
    data() {
        return {
            goods: [],
            filteredGoods: [],
            isVisibleCart: false,
            cart: [],
            message: false
        }
    },
    methods: {
        makeGETRequest(url) {
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (url === '/catalogData') {
                        this.goods = data;
                        this.filteredGoods = data;
                    } else {
                        this.cart = data;
                    }
                })
                .catch((reject) => {
                    this.message = !this.message;
                    console.log('ошибка');
                })
        },
        filterGoods(search) {
            let regex = new RegExp(search, 'i');
            this.filteredGoods = this.goods.filter(good =>
                regex.test(good.product_name));
        },
        visibleCart() {
            this.isVisibleCart = !this.isVisibleCart;
        },
        addToCart(id) {
            this.goods.forEach(good => {
                if (good.id_product === id) {
                    this.cart.push(good);
                    fetch('/addToCart', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(good)
                    })
                }
            });
        },
        removeFromCart(id) {
            this.cart.forEach(good => {
                if (good.id_product === id) {
                    fetch('/removeFromCart', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(good)
                    })
                }
            });
            this.cart = this.cart.filter(good =>
                good.id_product !== id);
        }
    },
    mounted() {
        this.makeGETRequest('/catalogData');
        this.makeGETRequest('/addToCart');
        this.makeGETRequest('/removeFromCart');
    }

});
