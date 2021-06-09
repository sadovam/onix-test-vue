<template>
  <div class="hello">
    <h2>{{ title }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CategoryTmb',
  props: {
    title: String,
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
