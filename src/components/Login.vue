<template>
  <div>
    <div class="jumbotron mb-3">
      <div class="bg-img">
        <div class="gradient-overlay"></div>
        <div class="container">
          <div class="text-wrap text-left">
            <h1 class="light">Reliable, Accurate Fluid Management Data</h1>
            <p>
              Daxor Decision Support is your resource for efficient, precise
              blood volume determinations.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <img class="logo" alt="logo" src="../assets/logo.png" />
      <h4 class="logo-subheading mb-4">Decision Support</h4>
      <h3 class="greeting">Welcome Back!</h3>
      <p>Sign in below with your username and password.</p>
      <form>
        <div class="form-group mb-4">
          <input
            type="username"
            class="form-control"
            id="username"
            placeholder="Username"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
          <p class="link text-left">Forgot Password?</p>
        </div>
        <router-link to="/page-one">
          <button type="submit" class="btn btn-primary mb-3">
            Log In
          </button>
        </router-link>
        <p class="link">Create an account</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style scoped>
.container {
  max-width: 300px;
}

h3,
h4 {
  font-weight: 700;
}

.logo-subheading {
  color: #454545;
  font-size: 16px;
  text-transform: uppercase;
}

.greeting {
  color: #003c77;
  font-size: 20px;
}

.text-left {
  text-align: left;
}

.forgot {
  color: var(--daxor-blue);
  font-size: 0.875rem;
  text-decoration: underline;
}

.subtitle {
  max-width: 600px;
}

.jumbotron h1,
.jumbotron p {
  color: #fff;
}

h1.light {
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  font-weight: 300;
}

p {
  font-size: 14px;
}

p.link {
  color: #0d6efd;
  font-size: 14px;
}

.jumbotron {
  position: relative;
}

.bg-img {
  padding: 2.5rem 0;
  background-image: url('../assets/lab.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  position: relative;
}

.gradient-overlay {
  background: rgb(35, 57, 107);
  background: linear-gradient(
    90deg,
    rgba(35, 57, 107, 1) 0%,
    rgba(149, 171, 211, 0.7371323529411764) 78%,
    rgba(149, 171, 211, 0.3449754901960784) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}

button {
  background-color: #003c77;
  width: 100%;
}
</style>
