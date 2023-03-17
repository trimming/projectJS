<template>
  <div class="b-cart__card">
    <img class="b-cart__cardImg" :src="'img/products/' + good.image" alt="product" />
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
      <img src="img/close.svg" alt="close" v-on:click="closeCard" />
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

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");
@import "../../public/variables";
.b-cart__card {
  display: flex;
  height: 306px;
  justify-content: start;
  margin: 0;
  box-shadow: 17px 19px 24px rgba(0, 0, 0, 0.13);
  margin-bottom: 40px;
  width: 652px;

  @media (max-width: 1024px) {
    grid-column: 1/3;
    width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 667px) {
    grid-column: 1/2;
    height: 188px;
  }

  &Img {
    display: block;
    height: inherit;
    max-width: 100%;
  }

  &Info {
    padding-top: 20px;
    padding-left: 31px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 667px) {
      padding-top: 13px;
      padding-left: 17px;
    }

    h2 {
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #222222;
      margin-bottom: 42px;

      @media (max-width: 667px) {
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 26px;
      }
    }

    ul {
      list-style-type: none;
      font-weight: 400;
      font-size: 22px;
      line-height: 31px;
      color: #575757;

      @media (max-width: 667px) {
        font-size: 14px;
        line-height: 17px;
      }

      li {
        span {
          margin-left: 12px;

          @media (max-width: 667px) {
            margin-left: 6px;
          }
        }

        &:first-child {
          span {
            color: #ef5b70;
          }
        }

        &:last-child {
          span {
            margin-left: 24px;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #656565;
            border: 1px solid #eaeaea;
            padding: 0.5px 12px;
            box-sizing: border-box;

            @media (max-width: 667px) {
              font-size: 10px;
              line-height: 12px;
              padding: 1px 8px;
            }
          }
        }
      }
    }

    img {
      height: 18px;
      width: 18px;
      margin-top: 7px;
      margin-right: 22px;
      cursor: pointer;

      @media (max-width: 667px) {
        width: 10px;
        height: 11px;
        margin-top: 4px;
        margin-right: 12px;
      }
    }
  }
}
</style>