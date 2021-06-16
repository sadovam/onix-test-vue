<template>
  <div>
    <Spinner v-if="showSpinner"/>
    <div v-else>
      <h1>{{product.title}}</h1>
      <img :src="require(`@/${imagePath}${product.image}`)"/>
      <h2>${{product.price}}</h2>
      <p>{{product.description}}</p>
      <input v-model.number="productNum" type="number">
      <button @click="onAddToCart">Add to Cart</button>
      <button>Buy Now</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { IProduct } from '@/common/interfaces';
import config from '@/common/config';
import Spinner from '@/components/Spinner.vue';

export default Vue.extend({
  name: 'Product',
  components: {
    Spinner,
  },
  data() {
    return {
      id: +this.$route.params.product_id,
      imagePath: config.productsImgPath,
      productNum: 1,
      showSpinner: false,
    };
  },
  async mounted() {
    this.showSpinner = true;
    this.$store.commit('UPDATE_PRODUCT', { product: null });
    this.$store.dispatch('getProduct', { productId: this.id })
      .finally(() => {
        this.showSpinner = false;
      })
      .catch((error): void => {
        console.log(error);
      });
  },
  methods: {
    onAddToCart() {
      this.$store.commit('UPDATE_CART', { product: this.product, num: this.productNum });
    },
  },
  computed: {
    product(): IProduct {
      return this.$store.getters.product;
    },
  },
});
</script>
