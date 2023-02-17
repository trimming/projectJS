Vue.component('goods-cart', {
    props: ['cart_block',],
    template:
        `<div>
            <button class="cart-button" type="button">Корзина</button>
            <ul>
                <li v-for="good of cart_block">{{good.product_name}}__{{ good.price }}$</li>
            </ul>
        </div>`,

})