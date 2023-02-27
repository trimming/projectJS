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
                    this.goods = data;
                    this.filteredGoods = data;
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
                }
            });
            console.log(this.cart);
        }
    },
    mounted() {
        this.makeGETRequest('/catalogData');
        this.makeGETRequest('/addToCart');
    }

});
