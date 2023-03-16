<template>
  <div class="b-menu__rightCart" v-on:click="goToHandler">
    <a class="b-menu__rightCartIcon"
      ><img src="images/cart.svg" alt="cart"
    /></a>
    <span class="b-menu__quantityCart">{{ count }}</span>
  </div>
</template>

<script>
export default {
  props: ["count"],
  name: "CartIcon",
  methods: {
    goToHandler() {
      this.$emit("go-to", "cart");
    },
  },
};
</script>