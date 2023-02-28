Vue.component('goods-cart', {
    props: ['cart_block', 'hidden'],
    template:
        `<div>
            <button class="cart-button" type="button" v-on:click="visibleCart">Корзина</button>
            <ul v-if="hidden">
                <li v-for="good of cart_block">{{good.product_name}}__{{ good.price }}$
                    <button-remove  v-bind:good="good" v-on:remove="removeFromCart">Удалить</button-remove>
                </li>
            </ul>
        </div>`,
    methods: {
        visibleCart() {
            this.$emit('show', this.hidden)
        },
        removeFromCart(id) {
            this.$emit('remove', id)
        }
    }
})

Vue.component('button-remove', {
    props: ['good'],
    template: '<button type="button" v-on:click="removeFromCart">Удалить</button>',
    methods: {
        removeFromCart() {
            this.$emit('remove', this.good.id_product)
        }
    }
})