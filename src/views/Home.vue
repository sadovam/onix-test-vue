<template>
  <div>
  <router-link v-for="category in categories" :key="category.id" :to="'/category/' + category.id">
    <CategoryTmb :category="category"/>
  </router-link>
  </div>
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
