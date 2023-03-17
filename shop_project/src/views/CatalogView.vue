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
    <Advantage />
  </div>
</template>

<script>
import GoodsList from "../components/GoodsList.vue";
import Advantage from "../components/Advantage.vue";

export default {
  name: "CatalogView",
  components: {
    GoodsList,
    Advantage,
  },
};
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");
@import "../../public/variables";
.header__heading {
  background: #f8f3f4;
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
</style>