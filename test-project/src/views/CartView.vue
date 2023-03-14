<template>
  <div class="cart">
    <ul>
       <li v-bind:key="good.id_product" v-for="good of cart_block">{{good.product_name}}__{{ good.price }}$
          <ButtonRemove/>
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
    }
  }

</script>
