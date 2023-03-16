<template>
  <div class="b-card">
    <div class="b-card__wrap">
      <img class="b-card__img" :src="good.image" alt="model" />
      <div class="b-card__wrapBtn">
        <button class="b-card__button" v-on:click="addToCart">
          <img src="images/cart.svg" alt="cart" />
          Add to Cart
        </button>
      </div>
    </div>
    <div class="b-card__info">
      <h4 class="b-card__infoItem">{{ good.title }}</h4>
      <p class="b-card__infoText">{{ good.text }}</p>
      <p class="b-card__infoPrice">
        $<span class="b-ard__price">{{ good.price }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["good"],
  methods: {
    addToCart() {
      this.$emit("add", this.good.id);
    },
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
  @import "../../public/variables";
  .b-card {

&:hover {
    .b-card__wrapBtn {
        display: flex;
    }
}

&__wrap {
    position: relative;

    .b-card__img {
        display: block;
        width: 100%;
    }

    &Btn {
        display: none;
        position: absolute;
        justify-content: center;
        align-items: center;
        background: rgba(58, 56, 56, 0.86);
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        button {
            display: flex;
            align-items: center;
            @include kitProp(#FFFFFF, 400);
            box-sizing: border-box;
            padding: 10px 13px;
            background: none;
            border: 1px solid #FFFFFF;
            cursor: pointer;

            img {
                margin-right: 11px;
            }
        }
    }
}

&__info {
    background: #F8F8F8;
    padding-top: 25px;
    padding-bottom: 20px;
    padding-left: 16px;

    &Item {
        font-weight: 400;
        line-height: 16px;
        color: #000000;
        font-size: 13px;
    }

    &Text {
        padding-top: 13px;
        @include kitProp(#5D5D5D, 300);
    }

    &Price {
        font-size: 16px;
        line-height: 19px;
        font-weight: 400;
        color: #F16D7F;
        padding-top: 18px;
    }
}

&_notActive_size_ml {
    @media (max-width: 1024px) {
        display: none;
    }
}

&_notActive_size_s {
    @media (max-width: 667px) {
        display: none;
    }
}

&_active_size_s {
    @media (max-width: 667px) {
        display: block;
    }
}

&_location {
    @media (max-width: 1024px) {
        grid-row-start: 1;
        grid-column-start: 1;
    }
}
}
</style>