<template>
  <div class="tmb">
    <img :src="require(`@/${imagePath}`)"/>
    <h2>{{ product.title }}</h2>
    <h3>${{ product.price }}</h3>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { IProductTmb } from '@/common/interfaces';
import config from '@/common/config';

export default Vue.extend({
  name: 'ProductTmb',
  props: {
    product: {
      type: Object as PropType<IProductTmb>,
    },
  },
  data() {
    return {
      imagePath: config.productsTmbPath + this.product.image,
    };
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/_main';
.tmb {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

img {
  border-radius: 15px;
}

h2 {
  font-size: 1.5em;
  color: $fg2;
  text-shadow: 2px 2px 4px $shadow;
}

h3 {
  font-size: 1.3em;
  color: $fg1;
  background-color: $bg1;
  padding: 5px;
  border-radius: 5px;
  text-shadow: 1px 1px 1px $shadow;
  box-shadow: -2px -2px 1px $shadow;
}

</style>
