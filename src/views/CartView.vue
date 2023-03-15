<template>
  <div class="cart">
    <ul>
       <li v-bind:key="good.id_product" v-for="good of cart">{{good.product_name}}__{{ good.price }}$__{{ good.quantity }}шт.
          <ButtonRemove v-bind:good="good"/>
       </li>
    </ul>    
  </div>
</template>

<script>
  import ButtonRemove from '@/components/ButtonRemove.vue'

  export default {
    name: 'CartView',
    
    components: {
      ButtonRemove
    },
    computed: {
      cart() {
        return this.$store.getters.getCart;
      }
    }
  }

</script>
<style scoped>
  ul {
    list-style-type: none;
  }
</style>
