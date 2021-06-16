<template>
  <div class="home">
    <Spinner v-if="showSpinner"/>
    <div v-else class="categories">
      <router-link
        v-for="category in categories"
        :key="category.id"
        :to="'/category/' + category.id"
      >
        <CategoryTmb :category="category"/>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CategoryTmb from '@/components/CategoryTmb.vue';
import Spinner from '@/components/Spinner.vue';
import { ICategory } from '@/common/interfaces';

export default Vue.extend({
  name: 'Home',
  components: {
    CategoryTmb,
    Spinner,
  },
  data() {
    return {
      showSpinner: false,
    };
  },
  async mounted() {
    this.showSpinner = true;
    this.$store.commit('UPDATE_CATEGORIES', { categories: [] });
    this.$store.dispatch('getCategories')
      .finally(() => {
        this.showSpinner = false;
      })
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

<style scoped lang="scss">
@import '@/assets/scss/_main';
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.categories {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
}

a:focus, a:hover {
  background-color: $bg-active;
}

</style>
