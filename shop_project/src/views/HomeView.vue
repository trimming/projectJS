<template>
  <div>
    <div class="header">
      <!-- <div class="header__menu">
        <div class="b-menu container">
          <div class="b-menu__left">
            <a href="index.html"><img src="img/logo.svg" alt="logo" /></a>
            <a href="catalog.html"
              ><img src="img/search.svg" alt="search"
            /></a>
          </div>
          <div class="b-menu__right">
            <a href="product.html"><img src="img/burger.svg" alt="bar" /></a>
            <a href="registration.html"
              ><img src="img/user.svg" alt="user"
            /></a>
            <div class="b-menu__rightCart">
              <a href="Cart.html"><img src="img/cart.svg" alt="cart" /></a>
              <span class="b-menu__quantityCart"></span>
            </div>
          </div>
        </div>
      </div> -->
      <div class="header__wrap">
        <div class="header__content">
          <img
            class="header__contentImage"
            src="img/manmodel.png"
            alt="model"
          />
          <div class="header__contentHeading">
            <div class="header__contentHeadingText">
              <h1 class="header__brand">THE BRAND</h1>
              <h2 class="header__lux">
                OF LUXERIOUS <span class="fashion__text">FASHION</span>
              </h2>
            </div>
          </div>
        </div>

        <div class="b-hiddenMenu b-hiddenMenu_active">
          <div class="b-hiddenMenu__close">
            <img src="img/close.svg" alt="close" />
          </div>
          <h4 class="b-hiddenMenu__heading">MENU</h4>
          <h5 class="b-hiddenMenu__category">MAN</h5>
          <ul class="b-hiddenMenu__list">
            <li><a class="b-hiddenMenu__item" href="#">Accessories</a></li>
            <li><a class="b-hiddenMenu__item" href="#">Bags</a></li>
            <li><a class="b-hiddenMenu__item" href="#">Denim</a></li>
            <li><a class="b-hiddenMenu__item" href="#">T-Shirts</a></li>
          </ul>
          <h5 class="b-hiddenMenu__category">WOMAN</h5>
          <ul class="b-hiddenMenu__list">
            <li><a class="b-hiddenMenu__item" href="#">Accessories</a></li>
            <li><a class="b-hiddenMenu__item" href="#">Jackets & Coats</a></li>
            <li><a class="b-hiddenMenu__item" href="#">Polos</a></li>
            <li><a class="b-hiddenMenu__item" href="#">T-Shirts</a></li>
            <li><a class="b-hiddenMenu__item" href="#">Shirts</a></li>
          </ul>
          <h5 class="b-hiddenMenu__category">KIDS</h5>
          <ul class="b-hiddenMenu__list">
            <li><a class="b-hiddenMenu__item" href="#">Accessories</a></li>
            <li><a class="b-hiddenMenu__item" href="#">Jackets & Coats</a></li>
            <li><a class="b-hiddenMenu__item" href="#">Polos</a></li>
            <li><a class="b-hiddenMenu__item" href="#">T-Shirts</a></li>
            <li><a class="b-hiddenMenu__item" href="#">Shirts</a></li>
            <li><a class="b-hiddenMenu__item" href="#">Bags</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="category container">
      <div class="category__items item__women">
        <h3 class="category__heading">
          <span class="category__headingText">30% OFF </span><br />FOR WOMEN
        </h3>
      </div>
      <div class="category__items item__men">
        <h3 class="category__heading">
          <span class="category__headingText">HOT DEAL </span><br />FOR MEN
        </h3>
      </div>
      <div class="category__items item__kids">
        <h3 class="category__heading">
          <span class="category__headingText">NEW ARRIVALS </span><br />FOR KIDS
        </h3>
      </div>
      <div class="category__items item__accesories">
        <h3 class="category__heading">
          <span class="category__headingText">LUXIROUS & TRENDY </span
          ><br />ACCESORIES
        </h3>
      </div>
    </div>
    <div class="fetured container">
      <div class="fetured__header">
        <h2 class="fetured__heading">Fetured Items</h2>
        <p class="fetured__headingText">
          Shop for items based on what we featured in this week
        </p>
      </div>
      <div class="fetured__cardBlock">
        <Card v-for="good in goods" :good="good" :key="good.id" />
      </div>
      <a class="fetured__button" href="#">Browse All Product</a>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name:'Home',
  components: {
    Card,
  },
  computed: {
    goods() {
      return this.$store.getters.getGoods;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");
@import "../../public/variables";
.header__content {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-height: 764px;
    max-width: 1600px;

    @media (max-width: 667px) {
        height: 363px;
    }

    &Image {
        display: block;
        width: 50%;
        height: inherit;
        object-fit: contain;

        @media (max-width: 667px) {
            display: none;
        }
    }

    &Heading {
        box-sizing: border-box;
        margin-left: 63px;
        width: 50%;
        align-self: center;
        height: inherit;

        @media (max-width: 1024px) {
            margin-left: 39px;
        }

        @media (max-width: 667px) {
            padding-top: 148px;
            margin: 0 auto;
            width: inherit;
        }

        &Text {
            border-left: #F16D7F 12px solid;
            padding-left: 16px;
        }
    }
}

.header__brand {
    font-weight: 900;
    line-height: 58px;
    color: #222222;
    font-size: 48px;

    @media (max-width: 1024px) {
        font-weight: 700;
        font-size: 44px;
        line-height: 53px;
    }

    @media (max-width: 667px) {
        font-weight: 700;
        font-size: 38px;
        line-height: 30px;
    }
}

.header__lux {
    font-weight: 700;
    font-size: 31px;
    line-height: 37px;

    @media (max-width: 1024px) {
        font-size: 24px;
        line-height: 29px;
    }

    @media (max-width: 667px) {
        font-size: 20px;
        line-height: 24px;
    }
}
.b-hiddenMenu {
    background: #FFFFFF;
    width: 232px;
    padding-left: 33px;
    box-sizing: border-box;
    height: 100%;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);

    &__close {
        display: flex;
        justify-content: end;
        padding-right: 16px;
        padding-top: 16px;
    }

    &__heading {
        @include kitProp(#000000, 700);
    }

    &__list {
        list-style-type: none;
        padding-left: 21px;

        li {
            padding-bottom: 11px;
        }
    }

    &__item {
        text-decoration: none;
        @include kitProp(#6F6E6E, 400);
    }

    &__category {
        padding-bottom: 12px;
        padding-top: 20px;
        @include kitProp($colorPink, 400);
    }

    &_active {
        position: absolute;
        top: 0;
        right: 0;

        @media (max-width: 1599px) {
            display: none;
        }
    }
}
.category {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 260px 180px;
    padding-top: 65px;
    padding-bottom: 96px;

    @media (max-width: 1024px) {
        grid-gap: 20px;
        grid-template-rows: 167px 116px;
        padding-top: 20px;
        padding-bottom: 155px;
    }

    @media (max-width: 667px) {
        grid-gap: 32px;
        grid-template-rows: 248px 248px 248px 111px;
        grid-template-columns: 1fr;
        padding-top: 64px;
        padding-bottom: 64px;
    }

    &__items {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__heading {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: $colorPink;
        text-align: center;

        &Text {
            font-weight: 400;
            line-height: 19px;
            color: #FFFFFF;
            font-size: 16px;
        }
    }
}

.item__women {
    background: url(../../public/img/women.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}

.item__men {
    background: url(../../public/img/men.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}

.item__kids {
    background: url(../../public/img/kids.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}

.item__accesories {
    grid-column: 1/4;
    background: url(../../public/img/accesories.jpg);
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 667px) {
        grid-column: 1/2;
    }
}
.fetured {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 96px;

    &__header {
        padding-bottom: 49px;

        @media (max-width: 1024px) {
            padding-bottom: 73px;
        }

        @media (max-width: 667px) {
            padding-bottom: 64px;
        }
    }

    &__heading {
        font-weight: 400;
        line-height: 36px;
        color: #222222;
        font-size: 30px;
        text-align: center;
        padding-bottom: 6px;

        &Text {
            text-align: center;
            width: 100%;
            @include kitProp(#9F9F9F, 400);
        }
    }

    &__cardBlock {
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        padding-bottom: 48.5px;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 16px;
            grid-template-rows: repeat(3, 1fr);
        }

        @media (max-width: 667px) {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(6, 1fr);
            padding-bottom: 41px;
        }
    }

    &__button {
        text-decoration: none;
        border: 1px solid #FF6A6A;
        box-sizing: border-box;
        padding: 14.5px 38.5px;
        color: #FF6A6A;

        &:hover {
            background: #F16D7F;
            color: #FFFFFF;
        }
    }
}
</style>