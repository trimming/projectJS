'use strict';
const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        isVisibleCart: false,
        cart: []
    },
    methods: {
        makeGETRequest() {
            fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.goods = data;
                    this.filteredGoods = data;
                })
        },
        filterGoods() {
            let regex = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(good =>
                regex.test(good.product_name));
        },
        visibleCart() {
            this.isVisibleCart = !this.isVisibleCart;
        },
        addToCart(title, product_price) {
            this.cart.push({ product_name: title, price: product_price });
        }
    },
    mounted() {
        this.makeGETRequest()
    }

});
