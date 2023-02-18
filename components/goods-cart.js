Vue.component('goods-cart', {
    props: ['cart_block', 'hidden'],
    template:
        `<div>
            <button class="cart-button" type="button" v-on:click="visibleCart">Корзина</button>
            <ul v-if="hidden">
                <li v-for="good of cart_block">{{good.product_name}}__{{ good.price }}$</li>
            </ul>
        </div>`,
    methods: {
        visibleCart() {
            this.$emit('show', this.hidden)
        }
    }
})