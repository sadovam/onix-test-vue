<template>
  <div class="tmb">
    <img :src="require(`@/${imagePath}`)"/>
    <h2>{{ category.title }}</h2>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { ICategory } from '@/common/interfaces';
import config from '@/common/config';

export default Vue.extend({
  name: 'CategoryTmb',
  props: {
    category: {
      type: Object as PropType<ICategory>,
    },
  },
  data() {
    return {
      imagePath: config.categoriesImgPath + this.category.image,
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

</style>
