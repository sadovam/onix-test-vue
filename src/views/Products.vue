<template>
  <div>
    <Spinner v-if="showSpinner"/>
    <div v-else>
    <button @click="() => {showSubcategories = !showSubcategories}">Subcategories</button>
    <main>
    <aside v-if="showSubcategories">
      <router-link class="subcategory"
        v-for="subcategory in subcategories"
        :key="subcategory.id"
        :to="'/category/' + id + '?sub=' + subcategory.id"
      >
        <img :src="subcategory.image ? require(`@/${imagePath}${subcategory.image}`) : ''"/>
        {{ subcategory.title }}
      </router-link>
    </aside>
    <section class="products">
      <router-link v-for="product in products" :key="product.id" :to="'/product/' + product.id">
        <ProductTmb :product="product"/>
      </router-link>
    </section>
    </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ICategory, IProductTmb, ISubCategory } from '@/common/interfaces';
import Spinner from '@/components/Spinner.vue';
import ProductTmb from '@/components/ProductTmb.vue';
import config from '@/common/config';

export default Vue.extend({
  name: 'Products',
  components: {
    Spinner,
    ProductTmb,
  },
  data() {
    return {
      id: +this.$route.params.category_id,
      imagePath: config.subcategoriesImgPath,
      showSpinner: false,
      showSubcategories: true,
    };
  },
  async mounted() {
    this.getCategory(this.id);
  },
  methods: {
    async onSubCategorySelected(subcategoryId: number) {
      this.showSpinner = true;
      this.$store.dispatch('getProductsBySubCategory', { subcategoryId })
        .finally(() => {
          this.showSpinner = false;
        })
        .catch((error): void => {
          console.log(error);
        });
    },
    async getCategory(id: number) {
      this.showSpinner = true;
      this.$store.commit('UPDATE_PRODUCTS', { products: [] });
      this.$store.commit('UPDATE_SUBCATEGORIES', { subcategories: [] });
      this.$store.dispatch('getCategory', { categoryId: id })
        .catch((error): void => {
          console.log(error);
        });
      this.$store.dispatch('getSubCategories', { categoryId: id })
        .catch((error): void => {
          console.log(error);
        })
        .then(() => {
          if (this.$route.query?.sub) {
            this.onSubCategorySelected(+this.$route.query.sub);
          } else {
            this.$store.dispatch('getProductsByCategory', { categoryId: id })
              .finally(() => {
                this.showSpinner = false;
              })
              .catch((error): void => {
                console.log(error);
              });
          }
        });
    },
  },
  computed: {
    subcategories(): ISubCategory[] {
      return this.$store.getters.subcategories;
    },
    products(): IProductTmb[] {
      return this.$store.getters.products;
    },
    category(): ICategory | null {
      return this.$store.getters.category;
    },
  },
  watch: {
    $route(to) {
      if (to.query?.sub) {
        this.onSubCategorySelected(+to.query.sub);
      }
      if (to.params?.category_id) {
        this.getCategory(+to.params.category_id);
      }
    },
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/_main';

main {
  display: flex;
  justify-content: start;
  max-width: 1200px;
  margin: 0 auto;
}

aside {
  min-width: fit-content;
  display: flex;
  flex-direction: column;
}

img {
  border-radius: 5px;
  margin-right: 10px;
}

.products {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

h1 {
  font-size: 2em;
  color: $fg1;
  text-shadow: 2px 2px 4px $shadow;
}

a {
  width: 250px;
  margin: 10px;
  padding: 20px;
  text-decoration: none;
  border-radius: 7px;
  color: $fg2;
  background-color: $bg2;
  text-shadow: 1px 1px 2px $shadow;
  box-shadow: 2px 2px 2px $shadow;

  &.router-link-exact-active {
    color: $bg1;
    background-color: $fg1;
    box-shadow: none;
    text-shadow: 1px 1px 1px $shadow2;
  }

}

a:focus, a:hover {
  background-color: $bg-active;
}

.subcategory {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 3px 10px;
  margin: 3px 10px;
  font-weight: bold;
  font-size: 1.5em;
  border-radius: 5px;
}

</style>
