const vue = new Vue({
    el: '#app',
    data() {
        return {
            goods: [],
            filteredGoods: [],
            cart: [],
            currentPage: 'catalog',
            cartCount: 0,
            cartTotal: 0,
        }
    },
    methods: {
        makeGETRequest() {
            fetch('https://raw.githubusercontent.com/trimming/projectJS/lesson-4/goodsList.json')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.goods = data;
                    this.filteredGoods = data;
                })
                .catch((reject) => {

                    alert('ошибка');
                })
        },
        filterGoods(search) {
            let regex = new RegExp(search, 'i');
            this.filteredGoods = this.goods.filter(good =>
                regex.test(good.title));
        },
        addToCart(id) {
            this.goods.forEach(good => {
                if (good.id === id && good.quantity >= 1) {
                    good.quantity += 1;
                    this.cartCount++;
                    good.total = good.quantity * good.price;
                    this.getTotalCart();
                } else if (good.id === id) {
                    this.cart.push(good);
                    good.quantity = 1;
                    this.cartCount++;
                    good.total = good.quantity * good.price;
                    this.getTotalCart();
                }
            });
            console.log(this.cart);
        },
        goToHandler(target) {
            this.currentPage = target;
        },
        getTotalCart() {
            let initialValue = 0;
            this.cartTotal = this.cart.reduce((acc, curr) =>
                acc + curr.total, initialValue);
        },
        closeCard(id) {
            this.cart = this.cart.filter((good) => good.id != id)
        }
    },
    mounted() {
        this.makeGETRequest()
    }
})