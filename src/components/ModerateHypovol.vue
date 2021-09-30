<template>
  <div
    class="container pt-5 d-flex flex-column justify-content-center animate__animated animate__fadeInRight full-height"
  >
    <div class="card-wrap d-flex flex-column align-items-center" v-if="initial">
      <div class="diamond-grp d-flex align-items-center align-center mt-5 mb-3">
        <div class="diamond box-shadow"></div>
        <h4>Moderate Hypovolemia</h4>
      </div>
      <div class="btn-wrap d-flex flex-column">
        <input
          type="button"
          value="Treat Anemia"
          class="btn-dark mt-5"
          v-on:click="(optionA = true), (initial = false)"
        />
        <input
          type="button"
          value="Treat Hypovolemia"
          class="btn-dark red mt-3"
          v-on:click="(optionB = true), (initial = false)"
        />
      </div>
    </div>
    <div v-if="optionA">
      <Anemia1A></Anemia1A>
    </div>
    <div v-if="optionB">
      <Hypovolemia1A></Hypovolemia1A>
    </div>
  </div>
</template>

<script>
import Anemia1A from "./Anemia1A.vue";
import Hypovolemia1A from "./Hypovolemia1A.vue";

export default {
  components: { Anemia1A, Hypovolemia1A },
  name: "ModerateHypovol",
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
