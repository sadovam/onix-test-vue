<template>
  <div>
    <h1>{{ id }}</h1>
    <h2>{{ product ? product.title : 'loading' }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { IProduct } from '@/common/interfaces';

export default Vue.extend({
  name: 'Product',
  data() {
    return {
      id: +this.$route.params.product_id,
    };
  },
  async mounted() {
    this.$store.dispatch('getProduct', { productId: this.id })
      .catch((error): void => {
        console.log(error);
      });
  },
  methods: {
  },
  computed: {
    product(): IProduct {
      return this.$store.getters.product;
    },
  },
});
</script>
