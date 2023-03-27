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
          <button v-on:click="clearCartHandler" type="button">Clear shopping cart</button>
          <router-link to="/catalog" class="search-button" type="button"><button v-on:click="goToHandler">Continue shopping</button></router-link>          
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
  computed: {
    cart_list() {
      return this.$store.getters.getCart;
    },
    total() {
        return this.$store.getters.getTotalCart;
    }
  },
  methods: {
    clearCartHandler() {
        this.$store.dispatch('loadClearCart', this.cart_list)
    },
    goToHandler() {
        this.$store.commit('goToHandler')
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");
@import "../../public/variables";
.cart {
    &__content {
        display: flex;
        justify-content: space-between;
        margin-top: 96px;
        margin-bottom: 128px;        

        @media (max-width: 1024px) {
            flex-direction: column;
            margin-top: 59px;
        }

        @media (max-width: 667px) {
            margin-top: 39px;
            margin-bottom: 96px;
            flex-direction: column;
            margin-left: 8px;
            margin-right: 8px;
        }
        .cart__goods {
            margin-right: 128px;
            width: 652px;
            
            @media (max-width: 1024px) {
                margin-right: 0;
                width: 100%;
            }
        }
        .cart__form {
            flex: 1 1 auto;
        }

        form {
            display: flex;
            flex-direction: column;
            padding-top: 17px;
            margin-bottom: 40px;

            @media (max-width: 1024px) {                
                padding-top: 0;
            }

            @media (max-width: 667px) {
                padding-top: 18px;
            }

            h3 {
                font-weight: 300;
                line-height: 19px;
                font-size: 16px;
                color: #222222;
                margin-bottom: 20px;

            }

            input {
                border: 1px solid #A4A4A4;
                width: inherit;
                height: 44px;
                margin-bottom: 21px;
                padding-left: 17px;
                font-weight: 300;
                font-size: 13px;
                line-height: 16px;
                color: #B1B1B1;

            }

            button {
                width: 100px;
                height: 34px;
                background: none;
                border: 1px solid #A4A4A4;
                font-weight: 300;
                font-size: 11px;
                line-height: 13px;
                color: #4A4A4A;
                margin-top: 3px;
                text-transform: uppercase;

                @media (max-width: 667px) {
                    text-transform: none;
                }
            }
            
        }

        .cart__proceed {
            background: #F5F3F3;
            height: 214px;
            padding: 39px 34px 42px 44px;
            box-sizing: border-box;
            text-align: end;

            @media (max-width: 1024px) {
                margin-top: 38px;
            }

            @media (max-width: 667px) {                
                margin-top: 18px;
            }

            h4 {
                font-weight: 400;
                font-size: 11px;
                line-height: 13px;
                color: #4A4A4A;

                span {
                    margin-left: 30px;
                }
            }

            h2 {
                font-weight: 300;
                font-size: 16px;
                line-height: 19px;
                color: #222222;
                margin-top: 12px;
                margin-bottom: 21px;

                span {
                    font-weight: 700;
                    margin-left: 30px;
                    margin-right: 3px;
                    color: $colorPink;
                }
            }

            &Line {
                border: 1px solid #E2E2E2;
            }

            button {
                height: 50px;
                margin-top: 11px;
                width: 100%;
                font-weight: 300;
                font-size: 16px;
                line-height: 19px;
                color: #FFFFFF;
                background: $colorPink;
                border: none;

                @media (max-width: 667px) {
                    margin-top: 17px;
                }
            }
        }

        .cart__buttons {
            margin-top: 32px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 40px;



            @media (max-width: 1024px) {                
                justify-content: space-around;
                margin-top: 22px;
            }

            @media (max-width: 667px) {
                
                margin-top: 0;
            }

            button {
                border: 1px solid #A4A4A4;
                background: none;
                height: 50px;
                width: 225px;
                @include kitProp(#000000, 300);
                text-transform: uppercase;
                cursor: pointer;

                @media (max-width: 667px) {
                    height: 32px;
                    max-width: 174px;
                    font-size: 12px;
                    line-height: 14px;
                    text-transform: none;
                }

                @media (max-width: 374px) {
                    max-width: 144px;
                }
            }
            button:hover {background-color: #7f817f}

      button:active {
      background-color: #7f817f;  
      transform: translateY(4px);
      }
        }
    }
}
.b-heading {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 667px) {
        flex-direction: column;
        justify-content: space-evenly;
    }

    &__left {
        a {
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            color: $colorPink;
            text-decoration: none;
        }
    }

    &__right {
        a {
            text-decoration: none;
            @include kitProp(#636363, 300);

            &:hover {
                color: $colorPink;
            }
        }
    }
}

.b-heading__right_disabled {
    display: none;
}

.b-heading__shopping_padding {
    @media (max-width: 667px) {
        padding-top: 50px;
        height: auto;
        display: block;
        text-align: center;
    }
}
</style>