<template>
  <div
    class="container pt-5 d-flex flex-column justify-content-center animate__animated animate__fadeInRight full-height"
  >
    <div class="alert alert-danger text-center" role="alert">
      <strong>Control Bleeding</strong>
    </div>
    <div class="alert alert-info text-center" role="alert">
      <em>Consider administering up to</em><br />
      <strong>2.1 units of blood</strong>
    </div>
    <div class="card-wrap d-flex flex-column align-items-center">
      <div class="diamond-grp d-flex align-items-center align-center mt-5 mb-3">
        <div class="diamond box-shadow"></div>
        <h4>Is Patient on diuretics?</h4>
      </div>
      <router-link to="/guidance-one" class="d-flex flex-column">
        <input type="button" value="Yes" class="btn-dark mt-5" />
        <input type="button" value="No" class="btn-dark red mt-3" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "guidance-four",
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
