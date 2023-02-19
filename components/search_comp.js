Vue.component('search_comp', {
    props: ['search'],
    template: `<div class="b-menu__left">
        <a href="index.html"><img src="images/logo.svg" alt="logo"></a>
        <input type="text" class="goods-search" v-model="search">
        <button class="search-button" type="button" v-on:click="filterGoods">
            <img src="images/search.svg" alt="search">
        </button>
    </div>`,
    methods: {
        filterGoods() {
            this.$emit('filter', this.search)
        }
    }
})