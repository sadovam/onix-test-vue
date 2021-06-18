<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cart">Cart[{{productsNumInCart}}]</router-link>
    </div>
    <BreadCrumbs/>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import BreadCrumbs from '@/components/BreadCrumbs.vue';

export default Vue.extend({
  name: 'App',
  components: {
    BreadCrumbs,
  },
  computed: {
    productsNumInCart() {
      return this.$store.getters.cart.length;
    },
  },
});
</script>

<style lang="scss">
@import '@/assets/scss/_main';
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  color: $fg1;
  background-color: $bg1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $fg2;

    &.router-link-exact-active {
      color: $fg1;
    }
  }
}

button {
  padding: 10px 20px;
  margin: 10px;
  background-color: $bg2;
  color: $fg1;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px $shadow;
  font-size: 1em;
}
</style>
