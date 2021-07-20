<template>
  <div class="row mt-5 mobile-row-padding">
    <div
      class="col-md-6 col-xs-12 container d-flex flex-column justify-content-center mt-5 animate__animated animate__fadeInLeft"
    >
      <h1>The future is here.</h1>
      <h5 class="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis
        enim lobortis scelerisque fermentum dui.
      </h5>
    </div>
    <div
      class="col-md-6 col-xs-12 container d-flex flex-column mt-5 animate__animated animate__fadeInRight box-shadow"
    >
      <h3>Welcome Back!</h3>
      <input type="text" placeholder="Username" class="mt-3" />
      <input type="text" placeholder="Password" class="mt-3" />
      <p class="forgot mt-2">Forgot Password?</p>
      <div class="submit-wrap mx-auto">
        <router-link to="/moderate-hypovolemia">
          <input type="button" value="submit" class="btn-dark mt-5" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.forgot {
  color: var(--daxor-blue);
  font-size: 0.875rem;
  text-decoration: underline;
}

.subtitle {
  max-width: 600px;
}

@media (max-width: 520px) {
  .container.box-shadow {
    border: none;
    box-shadow: none;
  }
}
</style>
