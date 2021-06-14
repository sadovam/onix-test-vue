<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

$shadow: #030706;
$shadow2: #b3c7c6;
$bg1: #233739;
$bg2: #304446;
$fg1: #0dbc79;
$fg2: #1d8c59;

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
</style>
