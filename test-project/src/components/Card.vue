<template>
    <div class="card">
            <h3>{{good.product_name}}</h3>
            <p>{{good.price}}</p>
            <button type="button" v-on:click="addToCart">Добавить в
            корзину</button>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: ['good'],
        methods: {
            addToCart() {
                this.$store.dispatch('addToCart', this.good.id_product)
            } 
        }
    }
</script>