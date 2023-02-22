Vue.component('content_comp', {
    props: ['goods', 'cart_list', 'page', 'count', 'total'],
    template: ` <div class="content">
    <header class="header__catalog">
        <div class="header__menu">
            <div class="b-menu container">
                <search_comp v-on:filter="filterGoods" :page="page"></search_comp>
                <div class="b-menu__right">
                    <a href="product.html"><img src="images/burger.svg" alt="bar"></a>
                    <a href="registration.html"><img src="images/user.svg" alt="user"></a>
                    <cart-icon_comp v-on:go-to="goToHandler" :count="count"></cart-icon_comp>                    
                </div>
            </div>
        </div>        
    </header>
    <catalog_comp :goods="goods" v-if="page == 'catalog'" v-on:add="addToCart"></catalog_comp>
    <cart_comp :cart_list="cart_list" v-if="page == 'cart'" v-on:go-to="goToHandler" :total="total" v-on:close="closeCard" v-on:clear="clearCartHandler"></cart_comp>     
</div>`,
    methods: {
        filterGoods(search) {
            this.$emit('filter', search)
        },
        addToCart(id) {
            this.$emit('add', id)
        },
        goToHandler(target) {
            this.$emit('go-to', target)
        },
        closeCard(id) {
            this.$emit('close', id)
        },
        clearCartHandler(target) {
            this.$emit('clear', target)
        }
    }
})

Vue.component('cart-icon_comp', {
    props: ['count'],
    template: `<div class="b-menu__rightCart" v-on:click="goToHandler">
    <a class="b-menu__rightCartIcon"><img src="images/cart.svg" alt="cart"></a>
    <span class="b-menu__quantityCart">{{ count }}</span>                        
    </div>`,
    methods: {
        goToHandler() {
            this.$emit('go-to', 'cart')
        }
    }
})
