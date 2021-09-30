<template>
  <div id="app">
    <router-view></router-view>
    <!-- <font-awesome-icon class="fa-syringe" icon="syringe"></font-awesome-icon> -->
  </div>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: 'App',
  components: {
    // FontAwesomeIcon,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,700;1,400&family=Lato:wght@100;300&display=swap');

#app {
  font-family: 'Cabin', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  max-width: 74px;
}
</style>
