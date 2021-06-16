<template>
  <div class="home">
    <h1>Cart</h1>
    <div class="products-list">
      <ul>
        <li v-for="item in cart" :key="item.product.id">
        {{item.product.title}} - {{item.num}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ICartPosition } from '@/common/interfaces';

export default Vue.extend({
  name: 'Home',
  components: {
  },
  computed: {
    cart(): ICartPosition[] {
      return this.$store.getters.cart;
    },
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/_main';

h1 {
  font-size: 2em;
  color: $fg1;
  text-shadow: 2px 2px 4px $shadow;
}

</style>
