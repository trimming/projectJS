Vue.component('cart_comp', {
    props: ['cart_list', 'total'],
    template: `<main class="cart">
    <div class="cart__content container">
            <div>
                <cart-goods_comp v-for="good in cart_list" :good="good" :key="good.id" v-on:close="closeCard"></cart-goods_comp>                                               
                <div class="cart__buttons">
                    <button>Clear shopping cart</button>
                    <button v-on:click="goToHandler">Continue shopping</button>
                </div>
            </div>        
            <div>
                <form action="#">
                    <h3>SHIPPING ADRESS</h3>
                    <input type="text" placeholder="Bangladesh">
                    <input type="text" placeholder="State">
                    <input type="text" placeholder="Postcode / Zip">
                    <button>Get a quote</button>
                </form>        
                <div class="cart__proceed">
                    <h4>SUB TOTAL<span>{{ total }}$</span></h4>
                    <h2>GRAND TOTAL<span>{{ total }}$</span></h2>
                    <div class="cart__proceedLine"></div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>        
            </div>
        </div>      
    </main>`,
    methods: {
        goToHandler() {
            this.$emit('go-to', 'catalog')
        },
        closeCard(id) {
            this.$emit('close', id)
        }
    }
})

Vue.component('cart-goods_comp', {
    props: ['good'],
    template: `<div class="b-cart__card">
    <img class="b-cart__cardImg" :src="good.image" alt="product">
    <div class="b-cart__cardInfo">
        <div>
            <h2>{{ good.title }}</h2>
            <ul>
                <li>Price:<span>{{ good.price }}$</span></li>
                <li>Color:<span>Red</span></li>
                <li>Size:<span>Xl</span></li>
                <li>Quantity:<span>{{ good.quantity }}</span></li>
                <li>Total:<span>{{ good.total }}$</span></li>
            </ul>
        </div>
        <img src="images/close.svg" alt="close" v-on:click="closeCard">
    </div>
    </div>`,
    methods: {
        closeCard() {
            this.$emit('close', this.good.id);
        }
    }
})