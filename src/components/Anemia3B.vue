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
          <h4>IV Iron Infusion</h4>
        </div>
        <div class="btn-wrap d-flex flex-column">
          <input
            type="button"
            value="Proceed"
            class="btn-dark mt-5"
            v-on:click="(proceed = true), (initial = false)"
          />
        </div>
      </div>
    </div>
    <div v-if="proceed">
      <Anemia4A></Anemia4A>
    </div>
  </div>
</template>

<script>
import Anemia4A from "./Anemia4A.vue";

export default {
  components: { Anemia4A },
  name: "Anemia3B",
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
