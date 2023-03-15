<template>
  <div class="catalog">    
    <Search/>
    <GoodsList/>
  </div>
</template>

<script>
// @ is an alias to /src

import GoodsList from '@/components/GoodsList.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'CatalogView',
  components: {    
    GoodsList,
    Search
  }
}
</script>
