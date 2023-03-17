<template>
  <div>
    <div class="header">
      <div class="header__menu">
        <div class="b-menu container">
          <div class="b-menu__left">
            <a href="index.html"><img src="images/logo.svg" alt="logo" /></a>
            <a href="catalog.html"
              ><img src="images/search.svg" alt="search"
            /></a>
          </div>
          <div class="b-menu__right">
            <a href="product.html"><img src="images/burger.svg" alt="bar" /></a>
            <a href="registration.html"
              ><img src="images/user.svg" alt="user"
            /></a>
            <div class="b-menu__rightCart">
              <a href="Cart.html"><img src="images/cart.svg" alt="cart" /></a>
              <span class="b-menu__quantityCart"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="header__wrap">
        <div class="header__content">
          <img
            class="header__contentImage"
            src="images/manmodel.png"
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
            <img src="images/close.svg" alt="close" />
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
        <Card />
      </div>
      <a class="fetured__button" href="#">Browse All Product</a>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
};
</script>