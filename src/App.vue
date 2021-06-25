<template>
  <div id="app" class="container mt-5 full-height">
    <navigation></navigation>
    <router-view> </router-view>
    <!-- <font-awesome-icon class="fa-syringe" icon="syringe"></font-awesome-icon> -->
  </div>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    // FontAwesomeIcon,
    Navigation,
  },
};
</script>
