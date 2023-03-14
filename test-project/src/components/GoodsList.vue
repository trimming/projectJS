<template>
    <div class="goods-list">
            <Card v-for="good in goods" v-bind:good = "good" :key = "good.product_name"/>
    </div>
</template>

<script>
    import Card from './Card.vue';

    export default {
        name: 'GoodsList',
        props: ['goods'],
        components: {
            Card
        }
    }
</script>