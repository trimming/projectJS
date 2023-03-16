<template>
  <div class="b-menu__rightCart" v-on:click="goToHandler">
    <a class="b-menu__rightCartIcon"
      ><img src="img/cart.svg" alt="cart"
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

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
  @import "../../public/variables";
  .b-menu__rightCart {
            position: relative;

            @media (max-width: 667px) {
                display: none;
            }

            img {
                height: 29px;
                width: 32px;
                cursor: pointer;
            }
        }
       .b-menu__quantityCart {
        position: absolute;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF;
        top: 17px;
        right: 99px;
        border-radius: 50%;
        padding: 3px 6px;
        top: -5px;
        right: -15px;
        background: #F16D7F;
    }
</style>