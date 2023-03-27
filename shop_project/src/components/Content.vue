<template>
  <div class="content">
    <header class="header__catalog">
      <div class="header__menu">
        <div class="b-menu container">
          <Search />
          <div class="b-menu__right">
            <a href="product.html"><img src="img/burger.svg" alt="bar" /></a>
            <a href="registration.html"
              ><img src="img/user.svg" alt="user"
            /></a>
            <CartIcon />
          </div>
        </div>
      </div>
    </header>    
    <router-view />
  </div>
</template>

<script>
import CatalogView from "../views/CatalogView.vue";
import CartIcon from "./CartIcon.vue";
import CartView from "../views/CartView.vue";
import Search from "./Search.vue";
import HomeView from "../views/HomeView.vue";

export default {
  name: "Content",
  components: {
    CatalogView,
    CartView,
    CartIcon,
    Search,
    HomeView,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');  
  @import "../../public/variables";

  
  .header {
    background: #F1E4E6;

    &__menu {
        background: #222222;
    }

    &__wrap {
        position: relative;
    }
}

  .b-menu {
    display: flex;
    justify-content: space-between;
    padding: 18px 16px 19px;

    @media (max-width: 667px) {
        padding: 18px 0 19px;
    }
      

    &__right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 189px;

        @media (max-width: 667px) {
            width: 32px;
        }

        a {
            &:nth-child(2) {

                @media (max-width: 667px) {
                    display: none;
                }
            }
        }        
    }    

}
  
</style>