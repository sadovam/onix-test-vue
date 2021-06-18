<template>
  <div class="tmb">
    <img :src="require(`@/${imagePath}${item.product.image}`)"/>
    <section>
      <h2>{{ item.product.title }}</h2>
      <h3>Price: ${{ item.product.price }}</h3>
      <h3>Number: {{ item.num }}</h3>
      <h2>Sum: ${{ sum }}</h2>
    </section>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { ICartPosition } from '@/common/interfaces';
import config from '@/common/config';

export default Vue.extend({
  name: 'CartPosition',
  props: {
    item: {
      type: Object as PropType<ICartPosition>,
    },
  },
  data() {
    return {
      imagePath: config.productsTmbPath,
    };
  },
  computed: {
    sum(): number {
      return this.item.num * this.item.product.price;
    },
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/_main';
.tmb {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
  text-align: right;
  background-color: $bg1;
  padding: 5px 15px;
  margin: 20px;
  border-radius: 10px;
  border: 2px solid $bg2;
  box-shadow: 3px 3px 1px $shadow;
}

img {
  width: 150px;
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

</style>
