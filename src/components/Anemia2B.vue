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
          <h4>Mean Arterial Pressure &#60; 80 mmHg?</h4>
        </div>
        <!-- YES AND NO BUTTONS -->
        <div class="btn-wrap d-flex flex-column">
          <input
            type="button"
            value="Yes"
            class="btn-dark mt-5"
            v-on:click="showToast1()"
          />
          <input
            type="button"
            value="No"
            class="btn-dark red mt-3"
            v-on:click="showToast2()"
          />
        </div>
      </div>
    </div>
    <div v-if="optionA">
      <Anemia2C></Anemia2C>
    </div>
    <div v-if="optionB">
      <Anemia3C></Anemia3C>
    </div>
  </div>
</template>

<script>
import Anemia2C from "./Anemia2C.vue";
import Anemia3C from "./Anemia3C.vue";
export default {
  components: { Anemia2C, Anemia3C },
  name: "Anemia2B",
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
