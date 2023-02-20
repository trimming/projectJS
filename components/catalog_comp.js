Vue.component('catalog_comp', {
    props: ['goods'],
    template: `<div>
    <div class="header__heading">
        <div class="b-heading container">
            <div class="b-heading__left"><a href="#">NEW ARRIVALS</a></div>
            <div class="b-heading__right">
                <a href="#">HOME</a>
                <span>/</span>
                <a href="#">MEN</a>
                <span>/</span>
                <a href="#">NEW ARRIVALS</a>
            </div>
        </div>
    </div>
    <goods_list_comp :goods="goods" v-on:add="addToCart"></goods_list_comp>        
    <div class="advantage">
        <div class="container advantage__content">
            <div class="b-advantageItem">
                <img src="images/truck.svg" alt="truck">
                <h4 class="b-advantageItem__heading">Free Delivery</h4>
                <p class="b-advantageItem__text">Worldwide delivery on all. Authorit tively morph
                next-generation innov tion with extensive models.</p>
            </div>
            <div class="b-advantageItem">
                <img src="images/percent.svg" alt="percent">
                <h4 class="b-advantageItem__heading">Sales & discounts</h4>
                <p class="b-advantageItem__text">Worldwide delivery on all. Authorit tively morph
                next-generation innov tion with extensive models.</p>
            </div>
            <div class="b-advantageItem">
                <img src="images/crown.svg" alt="crown">
                <h4 class="b-advantageItem__heading">Quality assurance</h4>
                <p class="b-advantageItem__text">Worldwide delivery on all. Authorit tively morph
                next-generation innov tion with extensive models.</p>
            </div>
        </div>
    </div>
</div>`,
    methods: {
        addToCart(id) {
            this.$emit('add', id)
        }
    }
})