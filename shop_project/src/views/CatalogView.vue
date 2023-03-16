<template>
  <div>
    <div class="header__heading">
      <div class="b-heading container">
        <div class="b-heading__left"><a href="#">NEW ARRIVALS</a></div>
        <div class="b-heading__right">
          <a href="#">HOME</a>
          <span>/</span>
          <a href="#">MEN</a>
          <span>/</span>
          <a href="#">NEW ARRIVALS</a>
        </div>
      </div>
    </div>
    <GoodsList :goods="goods" />
    <div class="advantage">
      <div class="container advantage__content">
        <div class="b-advantageItem">
          <img src="img/truck.svg" alt="truck" />
          <h4 class="b-advantageItem__heading">Free Delivery</h4>
          <p class="b-advantageItem__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
        <div class="b-advantageItem">
          <img src="img/percent.svg" alt="percent" />
          <h4 class="b-advantageItem__heading">Sales & discounts</h4>
          <p class="b-advantageItem__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
        <div class="b-advantageItem">
          <img src="img/crown.svg" alt="crown" />
          <h4 class="b-advantageItem__heading">Quality assurance</h4>
          <p class="b-advantageItem__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsList from "../components/GoodsList.vue";

export default {
  name: "CatalogView",
  components: {
    GoodsList,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
@import "../../public/variables";
.header__heading {
    background: #F8F3F4;
    height: 148px;

    &_container {
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        @media (max-width: 667px) {
            justify-content: center;
        }

        h1 {
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            color: $colorPink;
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
  .advantage {
    background: #222224;

    &__content {
        display: flex;
        justify-content: center;
        padding-bottom: 104px;
        padding-top: 104px;
        align-items: center;

        @media (max-width: 1024px) {
            flex-direction: column;
            align-items: center;
        }

        @media (max-width: 667px) {
            padding-top: 48px;
            padding-bottom: 81px;
        }
    }
}
.b-advantageItem {
    text-align: center;

    @media (max-width: 1024px) {
        padding-bottom: 48px;
        max-width: 400px;
    }

    @media (max-width: 667px) {
        padding-bottom: 47px;
    }

    &__heading {
        font-weight: 400;
        line-height: 24px;
        color: #FBFBFB;
        font-size: 19.96px;
        padding-top: 19px;
        padding-bottom: 16px;

        @media (max-width: 667px) {
            padding-bottom: 14px;
            padding-top: 18px;
        }
    }

    &__text {
        font-weight: 300;
        line-height: 17px;
        font-size: 13.972px;
        color: #FBFBFB;
        text-align: center;
    }
}
</style>