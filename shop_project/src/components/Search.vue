<template>
  <div class="b-menu__left">
    <router-link to="/"><img src="img/logo.svg" alt="logo" /></router-link>
    <input
      type="text"
      class="goods-search"
      v-bind="search"
      v-if="page == 'catalog'"
    />
    <button class="search-button" type="button" v-on:click="filterGoods">
      <img src="img/search.svg" alt="search" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["search", "page"],
  methods: {
    filterGoods() {
      this.$emit("filter", this.search);
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