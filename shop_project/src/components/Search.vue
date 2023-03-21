<template>
  <div class="b-menu__left">
    <router-link to="/"><img src="img/logo.svg" alt="logo" /></router-link>
    <input type="text" class="goods-search" v-model="search" />
    <button class="search-button" type="button">
      <img src="img/search.svg" alt="search" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Search",

  computed: {
    search: {
      set(value) {
        return this.$store.commit("setSearch", value);
      },
      get() {
        return this.$store.getters.getSearch;
      },
    },
  },
};
</script>

<style lang="scss">
.b-menu__left {
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 111px;

  .goods-search {
    align-self: center;
    margin-left: 20px;
    margin-right: 5px;
  }

  .search-button {
    background-color: #222222;
    border: none;
  }
}
</style>