<template>
  <div class="home">
    <CategoryTmb title="Category 1"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CategoryTmb from '@/components/CategoryTmb.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    CategoryTmb,
  },
});
</script>
