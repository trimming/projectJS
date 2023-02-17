Vue.component('goods-search', {
    props: ['search'],
    template:
        `<div class = "goods-search">
            <input type="text" v-model="search"/>
            <button class="searh-button" type="button" v-on:click="filterGoods">Искать</button>
        </div>`,
    methods: {
        filterGoods() {
            this.$emit('filter', this.search)
        }
    }
})