<template>
  <div>
    <Content />
    <Footer />
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Content,
    Footer,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
  @import "../public/variables";
  .container {
    margin: 0 auto;
    max-width: 1140px;

    @media (max-width: 1140px) {
        margin-left: 16px;
        margin-right: 16px;
    }
}
</style>
