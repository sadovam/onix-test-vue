<template>
  <div class="hello">
    <h2>{{ category.title }}</h2>
    <img v-bind:src="require(`@/assets/images/categories/${category.tmb}`)"/>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { ICategory } from '@/common/interfaces';

export default Vue.extend({
  name: 'CategoryTmb',
  props: {
    category: {
      type: Object as PropType<ICategory>,
    },
  },

});
</script>

<style scoped lang="scss">
h2 {
  margin: 40px 0 0;
  color: #128963;
}

a {
  color: #42b983;
}
</style>
