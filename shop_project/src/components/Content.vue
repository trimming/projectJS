<template>
  <div class="content">
    <header class="header__catalog">
      <div class="header__menu">
        <div class="b-menu container">
          <Search :page="page" />
          <div class="b-menu__right">
            <a href="product.html"><img src="images/burger.svg" alt="bar" /></a>
            <a href="registration.html"
              ><img src="images/user.svg" alt="user"
            /></a>
            <CartIcon :count="count" />
          </div>
        </div>
      </div>
    </header>
    <!-- <CatalogView :goods="goods" />
    <CartView :cart_list="cart_list" :total="total" v-on:close="closeCard" /> -->
    <router-view />
  </div>
</template>

<script>
import CatalogView from "../views/CatalogView.vue";
import CartIcon from "./CartIcon.vue";
import CartView from "../views/CartView.vue";
import Search from "./Search.vue";

export default {
  name: "Content",
  components: {
    CatalogView,
    CartView,
    CartIcon,
    Search,
  },
};
</script>