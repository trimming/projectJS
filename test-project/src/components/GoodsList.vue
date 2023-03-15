<template>
    <div class="goods-list">
            <Card v-for="good in goods" v-bind:good = "good" :key = "good.product_name"/>
    </div>
</template>

<script>
    import Card from './Card.vue';

    export default {
        name: 'GoodsList',
        components: {
            Card
        },
        computed: {
            search() {
            return this.$store.getters.getSearch ? new RegExp(this.$store.getters.getSearch, 'gi') : false
            },
            goods() {                
                if(this.search) {
                    return this.$store.getters.getGoods.filter((good) => this.search.test(good.product_name))
                }
                return this.$store.getters.getGoods;
            }
        }
    }
</script>