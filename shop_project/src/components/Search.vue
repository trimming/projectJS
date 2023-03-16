<template>
  <div class="b-menu__left">
    <span><img src="images/logo.svg" alt="logo" /></span>
    <input
      type="text"
      class="goods-search"
      v-model="search"
      v-if="page == 'catalog'"
    />
    <button class="search-button" type="button" v-on:click="filterGoods">
      <img src="images/search.svg" alt="search" />
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