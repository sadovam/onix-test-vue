<template>
  <main>
    <Spinner v-if="showSpinner"/>
    <section v-if="product">
      <div class="product">
        <img :src="product.image ? require(`@/${imagePath}${product.image}`) : ''"/>
        <div class="info">
          <h1>{{product.title}}</h1>
          <h2>${{product.price}}</h2>
          <p>{{product.description}}</p>
          <input v-model.number="productNum" type="number">
          <button @click="onAddToCart">Add to Cart</button>
          <button @click="onBuyNow">Buy Now</button>
        </div>
      </div>
    </section>
  </main>
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
    onBuyNow() {
      this.onAddToCart();
      this.$router.push({ path: '/cart' });
    },
  },
  computed: {
    product(): IProduct {
      return this.$store.getters.product;
    },
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/_main';
.product {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
  background-color: $bg1;
  padding: 5px 15px;
  margin: 20px;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

img {
  border-radius: 15px;
  margin: 10px;
}

h2 {
  font-size: 1.5em;
  color: $fg2;
  text-shadow: 2px 2px 4px $shadow;
  margin: 7px;
}

h3 {
  display: inline-block;
  font-size: 1.3em;
  color: $fg1;
  background-color: $bg1;
  margin: 5px;
  border-radius: 5px;
  text-shadow: 1px 1px 1px $shadow;
}

p {
  max-width: 300px;
}

</style>
