Vue.component('goods-list', {
    props: ['goods'],
    template:
        `<div class="goods-list">
            <goods-item v-for="good in goods" v-bind:good = "good" :key = "good.product_name" v-on:add="addToCart"></goods-item>
        </div>`,
    methods: {
        addToCart(id) {
            this.$emit('add', id)
        }
    }
})

Vue.component('goods-item', {
    props: ['good'],
    template:
        `<div class="goods-item">
            <h3>{{good.product_name}}</h3>
            <p>{{good.price}}</p>
            <button type="button" v-on:click="addToCart">Добавить в
            корзину</button>
        </div>`,
    methods: {
        addToCart() {
            this.$emit('add', this.good.id_product)
        }
    }
})