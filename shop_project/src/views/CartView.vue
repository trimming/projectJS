<template>
  <main class="cart">
    <div class="header__heading">
      <div class="b-heading b-heading__shopping_padding container">
        <div class="b-heading__left"><a href="#">SHOPPING CART</a></div>
        <div class="b-heading__right b-heading__right_disabled">
          <a href="#">HOME</a>
          <span>/</span>
          <a href="#">MEN</a>
          <span>/</span>
          <a href="#">NEW ARRIVALS</a>
        </div>
      </div>
    </div>
    <div class="cart__content container">
      <div class="cart__goods">
        <CartCard v-for="good in cart_list" :good="good" :key="good.id" />
        <div class="cart__buttons">
          <button v-on:click="clearCartHandler">Clear shopping cart</button>
          <button v-on:click="goToHandler">Continue shopping</button>
        </div>
      </div>
      <div class="cart__form">
        <form action="#">
          <h3>SHIPPING ADRESS</h3>
          <input type="text" placeholder="Bangladesh" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Postcode / Zip" />
          <button>Get a quote</button>
        </form>
        <div class="cart__proceed">
          <h4>
            SUB TOTAL<span>{{ total }}$</span>
          </h4>
          <h2>
            GRAND TOTAL<span>{{ total }}$</span>
          </h2>
          <div class="cart__proceedLine"></div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CartCard from "../components/CartCard.vue";

export default {
  name: "CartView",
  components: {
    CartCard,
  },
};
</script>