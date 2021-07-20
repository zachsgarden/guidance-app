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
          <h4>Whole Blood Infusion</h4>
        </div>
        <input
          type="button"
          value="Proceed"
          class="btn-dark mt-5"
          v-on:click="(proceed = true), (initial = false)"
        />
      </div>
    </div>
    <div v-if="proceed">
      <AnemiaConclusionB></AnemiaConclusionB>
    </div>
  </div>
</template>

<script>
import AnemiaConclusionB from "./AnemiaConclusionB.vue";
export default {
  components: { AnemiaConclusionB },
  name: "Anemia2C",
  data: function() {
    return {
      initial: true,
      proceed: false,
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
