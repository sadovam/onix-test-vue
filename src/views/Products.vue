<template>
  <div>
    <h1>{{ id }}</h1>
    <div
      v-for="subcategory in subcategories"
      :key="subcategory.id"
      @click="() => onSubCategorySelected(subcategory.id)"
    >
      <h2>{{ subcategory.title }}</h2>
    </div>
    <div>
    <h3>Products</h3>
    <div v-for="product in products" :key="product.id">
      <h2>{{ product.title }}</h2>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { IProduct, ISubCategory } from '@/common/interfaces';

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
    this.$store.dispatch('getProductsByCategory', { categoryId: this.id })
      .catch((error): void => {
        console.log(error);
      });
  },
  methods: {
    async onSubCategorySelected(subcategoryId: number) {
      this.$store.dispatch('getProductsBySubCategory', { subcategoryId })
        .catch((error): void => {
          console.log(error);
        });
    },
  },
  computed: {
    subcategories(): ISubCategory[] {
      return this.$store.getters.subcategories;
    },
    products(): IProduct[] {
      return this.$store.getters.products;
    },
  },
});
</script>
