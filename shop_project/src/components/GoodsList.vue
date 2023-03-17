<template>
  <div class="filter container">
    <nav class="filter__nav">
      <div class="filter__navLeft">
        <a class="filter__text" href="#">FILTER</a>
        <img class="filter__img" src="img/filter.svg" alt="bar" />
        <div class="b-filter__hidden b-filter__hidden_active">
          <img class="b-filter__hiddenImg" src="img/filter_red.svg" alt="bar" />
          <div class="b-filter__hiddenCategory">
            <h5 class="b-filter__hiddenItem">CATEGORY</h5>
            <ul>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Bags</a></li>
              <li><a href="#">Denim</a></li>
              <li><a href="#">Hoodies & Sweatshirts</a></li>
              <li><a href="#">Jackets & Coats</a></li>
              <li><a href="#">Polos</a></li>
              <li><a href="#">Shirts</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Sweaters & Knits</a></li>
              <li><a href="#">T-Shirts</a></li>
              <li><a href="#">Tanks</a></li>
            </ul>
          </div>
          <div class="b-filter__hiddenCategory">
            <h5 class="b-filter__hiddenItem">BRAND</h5>
          </div>
          <div class="b-filter__hiddenCategory">
            <h5 class="b-filter__hiddenItem">DESIGNER</h5>
          </div>
        </div>
      </div>
      <div class="nav__center">
        <div>
          <a class="nav__category" href="#">TRENDING NOW</a>
          <img src="img/check.svg" alt="check" />
        </div>
        <div class="nav__size">
          <a class="nav__category" href="#">SIZE</a>
          <img src="img/check.svg" alt="check" />
          <div class="b-sizePop b-nav__sizePop">
            <div class="b-sizePop__item">
              <input type="checkbox" name="size" />XS
            </div>
            <div class="b-sizePop__item">
              <input type="checkbox" name="size" />S
            </div>
            <div class="b-sizePop__item">
              <input type="checkbox" name="size" />M
            </div>
            <div class="b-sizePop__item">
              <input type="checkbox" name="size" />L
            </div>
          </div>
        </div>
        <div>
          <a class="nav__category" href="#">PRICE</a>
          <img src="img/check.svg" alt="check" />
        </div>
      </div>
    </nav>
    <div class="filter__cards">
      <Card v-for="good in goods" :good="good" :key="good.id" />
    </div>
    <nav class="nav__low">
      <a href="#"><img src="img/code_left.svg" alt="code" /></a>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">.....</a>
      <a href="#">20</a>
      <a href="#"><img src="img/code_right.svg" alt="code" /></a>
    </nav>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "GoodsList",
  components: {
    Card,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");
@import "../../public/variables";
.filter {
  margin-bottom: 96px;

  @media (max-width: 667px) {
    margin-left: 8px;
    margin-right: 8px;
  }

  &__nav {
    display: flex;
    padding-top: 51px;
    padding-bottom: 65px;

    @media (max-width: 1024px) {
      justify-content: space-between;
    }

    .filter__navLeft {
      position: relative;

      .filter__text {
        @include kitProp(#000000, 600);
        text-decoration: none;
        position: absolute;
        z-index: 2;
        top: 2px;

        @media (max-width: 667px) {
          display: none;
        }
      }

      .filter__img {
        padding-left: 55px;

        @media (max-width: 667px) {
          padding-left: 0px;
          height: 25px;
        }
      }

      &:hover .filter__text {
        color: #ef5b70;
        left: 16px;
        top: 2px;
      }

      &:hover .b-filter__hidden {
        display: block;
      }
    }

    .nav__center {
      margin-left: 292px;

      @media (max-width: 1024px) {
        margin-left: 0;
      }

      @media (max-width: 667px) {
        margin-left: 0;
      }

      & > div:not(:last-child) {
        @media (max-width: 667px) {
          padding-right: 15px;
        }
      }

      .nav__category {
        @include kitProp(#6f6e6e, 400);
        text-decoration: none;
        padding-right: 10px;
        padding-left: 28px;

        @media (max-width: 667px) {
          font-size: 12px;
          line-height: 14px;
          padding-right: 9px;
          padding-left: 0;
        }
      }

      .nav__size {
        position: relative;

        &:hover .b-sizePop {
          display: block;
        }
      }

      & > div {
        display: inline-block;
      }
    }
  }

  &__cards {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      grid-template-rows: repeat(4, 1fr);
      justify-content: center;
    }

    @media (max-width: 667px) {
      grid-template-columns: 1fr;
      row-gap: 16px;
      grid-template-rows: repeat(8, 1fr);
    }
  }

  .nav__low {
    display: flex;
    justify-content: center;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    width: 283px;
    margin: 0 auto;
    padding: 12px 15px;
    margin-top: 48px;

    a {
      text-decoration: none;
      font-weight: 300;
      line-height: 19px;
      font-size: 16px;
      color: #c4c4c4;
      margin-right: 18px;

      &:hover {
        color: #ef5b70;
      }
    }
  }
}

.nav__low a:nth-child(7),
.nav__low a:nth-child(8),
.nav__low a:nth-child(10) {
  margin-right: 0;
}
.b-filter__hidden {
  background: #ffffff;
  box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
  height: 531px;
  width: 360px;
  padding: 13px 16px;
  box-sizing: border-box;
  height: inherit;

  @media (max-width: 667px) {
    width: 304px;
  }

  &_active {
    position: absolute;
    z-index: 1;
    top: -7px;
    display: none;
  }

  &Img {
    padding-bottom: 16px;
    padding-left: 55px;

    @media (max-width: 667px) {
      padding-left: 0px;
      height: 25px;
    }
  }

  &Category {
    @include kitProp(#6f6e6e, 400);
  }

  &Item {
    border-bottom: 1px solid #ebebeb;
    border-left: 5px solid #ef5b70;
    padding: 11px;
  }

  a {
    @extend .b-filter__hiddenCategory;
    text-decoration: none;
  }

  li {
    list-style-type: none;
    padding-bottom: 11px;
  }

  h5 {
    margin-bottom: 18px;
  }

  ul {
    margin-left: 17px;
    padding-bottom: 13px;
  }
}
.b-sizePop {
  padding: 7px 9.5px;
  background: #ffffff;
  box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
  width: 79px;
  height: 103px;
  box-sizing: border-box;

  &__item {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: #6f6e6e;
  }

  input {
    margin-right: 9.5px;
    margin-bottom: 10px;
    border: 1px solid #ebebeb;
  }
}

.b-nav__sizePop {
  position: absolute;
  z-index: 1;
  display: none;
}
</style>