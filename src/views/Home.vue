<template>
  <ul>
  <li v-for="category in categories" :key="category.id">
    <CategoryTmb :category="category"/>
  </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import CategoryTmb from '@/components/CategoryTmb.vue';
import { ICategory } from '@/common/interfaces';

export default Vue.extend({
  name: 'Home',
  components: {
    CategoryTmb,
  },
  async mounted() {
    this.$store.dispatch('getCategories')
      .catch((error): void => {
        console.log(error);
      });
  },
  computed: {
    categories(): ICategory[] {
      return this.$store.getters.categories;
    },
  },
});
</script>
