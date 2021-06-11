<template>
  <div>
    <h1>{{ id }}</h1>
    <div v-for="subcategory in subcategories" :key="subcategory.id">
    <h2>{{ subcategory.title }}</h2>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ISubCategory } from '@/common/interfaces';

export default Vue.extend({
  name: 'Products',
  data() {
    return {
      id: +this.$route.params.category_id,
    };
  },
  async mounted() {
    this.$store.dispatch('getSubCategories', { categoryId: this.id })
      .catch((error): void => {
        console.log(error);
      });
  },
  computed: {
    subcategories(): ISubCategory[] {
      return this.$store.getters.subcategories;
    },
  },
});
</script>
