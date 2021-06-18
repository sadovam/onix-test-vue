<template>
  <div v-if="shown" >
    <router-link v-if="category" to="/">Home</router-link>
    <router-link
    v-if="subcategory" :to="'/category/' + category.id">{{category.title}}</router-link>
    <router-link v-if="product && category && subcategory"
    :to="'/category/' + category.id + '?sub=' + subcategory.id">{{subcategory.title}}</router-link>
    <h1>{{lastPosition}}</h1>
  </div>
</template>

<script lang="ts">
import { ICategory, IProduct } from '@/common/interfaces';
import Vue from 'vue';

export default Vue.extend({
  name: 'BreadCrumbs',
  data(): {category: ICategory | null,
          product: IProduct | null,
          subcategory: ICategory | null,
          shown: boolean,
          } {
    return {
      category: null,
      product: null,
      subcategory: null,
      shown: true,
    };
  },
  watch: {
    async $route(to) {
      if (to.params?.category_id) {
        this.getCategory(+to.params?.category_id);
      } else {
        this.category = null;
      }
      if (to.query?.sub) {
        this.getSubCategory(+to.query?.sub);
      } else {
        this.subcategory = null;
      }
      if (to.params?.product_id) {
        await this.getProduct(+to.params?.product_id);
      } else {
        this.product = null;
      }
      if (to.path === '/cart' || to.path === '/confirm') {
        this.shown = false;
      } else {
        this.shown = true;
      }
    },
  },
  methods: {
    async getCategory(id: number) {
      this.$store.dispatch('getCategory', { categoryId: id })
        .then(() => {
          this.category = this.$store.getters.category;
        })
        .catch((error): void => {
          console.log(error);
        });
    },
    async getSubCategory(id: number) {
      this.$store.dispatch('getSubCategory', { subcategoryId: id })
        .then(() => {
          this.subcategory = this.$store.getters.subcategory;
        })
        .catch((error): void => {
          console.log(error);
        });
    },
    async getProduct(id: number) {
      this.$store.dispatch('getProduct', { productId: id })
        .then(() => {
          this.product = this.$store.getters.product;
          if (this.product) {
            this.getCategory(this.product.categoryId);
            this.getSubCategory(this.product.subcategoryId);
          }
        })
        .catch((error): void => {
          console.log(error);
        });
    },

  },
  computed: {
    lastPosition() :string {
      if (this.product) {
        return this.product.title;
      }
      if (this.subcategory) {
        return this.subcategory.title;
      }
      if (this.category) {
        return this.category.title;
      }
      return 'Home';
    },
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/_main';
h1, a {
  border-radius: 5px;
  display: inline-block;
  font-size: 1.5em;
  text-shadow: 2px 2px 4px $shadow;
  background-color: $bg2;
  margin: 3px 10px;
  padding: 7px 10px;
}

a {
  text-decoration: none;
  color: $fg1;
}

h1 {
  color: $fg2;
}
</style>
