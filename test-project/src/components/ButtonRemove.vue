<template>
    <button type="button" v-on:click="removeFromCart">Удалить</button>
</template>

<script>
    export default {
        name: 'ButtonRemove',
        props: ['good'],
        methods: {
            removeFromCart() {
                this.$store.dispatch('removeFromCart', this.good.id_product)
             }
        }
    }

</script>