<template>
  <div
    class="container pt-5 d-flex flex-column justify-content-center animate__animated animate__fadeInRight full-height"
  >
    <div class="card-wrap d-flex flex-column align-items-center" v-if="initial">
      <div
        class="diamond-grp d-flex align-items-center align-center mt-5 mb-3 justify-content-center"
      >
        <div class="diamond box-shadow"></div>
        <h4>Patient on Diuretics?</h4>
      </div>
      <input
        type="button"
        value="Yes"
        class="btn-dark mt-5"
        v-on:click="initial = 'false'"
      />
      <input type="button" value="No" class="btn-dark red mt-3" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hypovolemia1A",
  data: function() {
    return {
      initial: true,
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
