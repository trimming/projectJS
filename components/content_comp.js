Vue.component('content_comp', {
    props: ['goods', 'cart_list', 'page'],
    template: ` <div class="content">
    <header class="header__catalog">
        <div class="header__menu">
            <div class="b-menu container">
                <search_comp v-on:filter="filterGoods"></search_comp>
                <div class="b-menu__right">
                    <a href="product.html"><img src="images/burger.svg" alt="bar"></a>
                    <a href="registration.html"><img src="images/user.svg" alt="user"></a>
                    <div class="b-menu__rightCart">
                        <a class="b-menu__rightCartIcon"><img src="images/cart.svg" alt="cart"></a>
                        <span class="b-menu__quantityCart"></span>                        
                    </div>
                </div>
            </div>
        </div>
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
    </header> 
    <goods_list_comp :goods="goods" v-on:add="addToCart" v-if="page == 'catalog'"></goods_list_comp>
    <cart_comp :cart_list="cart_list" v-if="page == 'cart'"></cart_comp>
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
        filterGoods(search) {
            this.$emit('filter', search)
        },
        addToCart(id) {
            this.$emit('add', id)
        }
    }
})


