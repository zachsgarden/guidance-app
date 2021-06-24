<template>
  <div id="app" class="container mt-5">
    <navigation></navigation>
    <router-view>
      <login></login>
      <guidance></guidance>
    </router-view>
    <!-- <font-awesome-icon class="fa-syringe" icon="syringe"></font-awesome-icon> -->
  </div>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Navigation from "./components/Navigation.vue";
import Login from "./components/Login.vue";
import Guidance from "./components/Guidance.vue";

export default {
  name: "App",
  components: {
    // FontAwesomeIcon,
    Navigation,
    Login,
    Guidance,
  },
};
</script>
