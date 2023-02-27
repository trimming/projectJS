Vue.component('goods-cart', {
    props: ['cart_block', 'hidden'],
    template:
        `<div>
            <button class="cart-button" type="button" v-on:click="visibleCart">Корзина</button>
            <ul v-if="hidden">
                <li v-for="good of cart_block">{{good.product_name}}__{{ good.price }}$<button type="button" v-on:click="removeInCart">Удалить</button></li>
            </ul>
        </div>`,
    methods: {
        visibleCart() {
            this.$emit('show', this.hidden)
        },
        removeInCart() {
            this.$emit('remove', this.good.id_product)
        }
    }
})