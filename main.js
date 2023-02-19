const vue = new Vue({
    el: '#app',
    data() {
        return {
            goods: [],
            filteredGoods: [],
            cart: [],
            currentPage: 'catalog',
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
                if (good.id === id) {
                    this.cart.push(good);
                }
            });
            console.log(this.cart);
        }
    },
    mounted() {
        this.makeGETRequest()
    }
})