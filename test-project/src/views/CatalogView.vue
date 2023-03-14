<template>
  <div class="catalog">    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <GoodsList/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GoodsList from '@/components/GoodsList.vue'

export default {
  name: 'CatalogView',
  components: {
    HelloWorld,
    GoodsList
  }
}
</script>
