<template>
    <div class = "goods-search">
            <input type="text" v-model="search"/>
            <button class="searh-button" type="button" v-on:click="filterGoods">Искать</button>
        </div>
</template>

<script>
    export default {
        name: 'Search',
        computed: {        
            search: {
                set (value) {
                    return this.$store.commit('setSearch', value)
                },
                get () {
                    return this.$store.getters.getSearch
                }
            }
        }
    }
</script>