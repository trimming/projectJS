Vue.component('cart_comp', {
    props: ['cart_list'],
    template: `<main class="cart">
    <div class="cart__content container">
            <div>
                <cart-goods_comp v-for="good in cart_list" :good="good" :key="good.id"></cart-goods_comp>                                               
                <div class="cart__buttons">
                    <button>Clear shopping cart</button>
                    <button>Continue shopping</button>
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
                    <h4>SUB TOTAL<span>$900</span></h4>
                    <h2>GRAND TOTAL<span>$900</span></h2>
                    <div class="cart__proceedLine"></div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>        
            </div>
        </div>      
</main>`
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
            </ul>
        </div>
        <img src="images/close.svg" alt="close">
    </div>
</div>`
})