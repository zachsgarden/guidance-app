<template>
  <div>
    <div
      class="container pt-5 d-flex flex-column justify-content-center animate__animated animate__fadeInRight full-height"
      v-if="initial"
    >
      <div class="card-wrap d-flex flex-column align-items-center">
        <div
          class="diamond-grp d-flex align-items-center align-center mt-5 mb-3 justify-content-center"
        >
          <div class="diamond box-shadow"></div>
          <h4>Serum albumin &#60; 3.0 g/cL?</h4>
        </div>
        <!-- YES AND NO BUTTONS -->
        <input
          type="button"
          value="Yes"
          class="btn-dark mt-5"
          v-on:click="(optionA = true), (initial = false)"
        />
        <input
          type="button"
          value="No"
          class="btn-dark red mt-3"
          v-on:click="(optionB = true), (initial = false)"
        />
      </div>
    </div>

    <div v-if="optionA">
      <Hypovolemia3B></Hypovolemia3B>
    </div>
    <div v-if="optionB">
      <Hypovolemia4A></Hypovolemia4A>
    </div>
  </div>
</template>

<script>
import Hypovolemia3B from "./Hypovolemia3B.vue";
import Hypovolemia4A from "./Hypovolemia4A.vue";

export default {
  components: { Hypovolemia3B, Hypovolemia4A },
  name: "Hypovolemia3A",
  data: function() {
    return {
      initial: true,
      optionA: false,
      optionB: false,
    };
  },
};
</script>

<style scoped>
.diamond-grp {
  width: 200px;
  height: 200px;
  position: relative;
}

h4.danger-heading {
  color: #842029;
}

h4 {
  color: var(--daxor-blue);
  text-align: center;
}

.diamond {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  border: 3px solid var(--daxor-blue);
  transform: rotate(45deg);
}
</style>
