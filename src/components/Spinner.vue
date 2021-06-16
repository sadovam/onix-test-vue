<template>
    <div class="outer">
    <div class="inner"></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Spinner',
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/_main';

@keyframes slidein {
  from {
    margin-left: -1px;
  }
  50% {
    margin-left: 76px;
  }
  to {
    margin-left: -1px;
  }
}

.outer {
  width: 100px;
  height: 7px;
  margin: 10px auto;
  border-radius: 7px;
  background-color: $fg1;
}
.inner {
  width: 25px;
  height: 7px;
  border-radius: 7px;
  background-color: $bg1;
}

.inner {
  animation-duration: .5s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}
</style>
