<template>
  <div class="b-cart__card">
    <img class="b-cart__cardImg" :src="good.image" alt="product" />
    <div class="b-cart__cardInfo">
      <div>
        <h2>{{ good.title }}</h2>
        <ul>
          <li>
            Price:<span>{{ good.price }}$</span>
          </li>
          <li>Color:<span>Red</span></li>
          <li>Size:<span>Xl</span></li>
          <li>
            Quantity:<span>{{ good.quantity }}</span>
          </li>
          <li>
            Total:<span>{{ good.total }}$</span>
          </li>
        </ul>
      </div>
      <img src="images/close.svg" alt="close" v-on:click="closeCard" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CartCard",
  props: ["good"],
  methods: {
    closeCard() {
      this.$emit("close", this.good.id);
    },
  },
};
</script>