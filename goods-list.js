Vue.component('goods-list', {
    props: ['goods'],
    template:
        `<div class="goods-list">
            <goods-item v-for="good in goods" :good = "good" :key = "good.product_name"></goods-item>
        </div>`
})

Vue.component('goods-item', {
    props: ['good'],
    template:
        `<div class="goods-item">
            <h3>{{good.product_name}}</h3>
            <p>{{good.price}}</p>
            <button type="button" v-on:click="addToCart(good.product_name, good.price)">Добавить в
            корзину</button>
        </div>`
})