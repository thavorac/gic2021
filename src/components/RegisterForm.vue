<template>
  <div class="container">
    <div class="card bg-light">
      <article class="card-body mx-auto" style="max-width: 400px">
        <h4 class="card-title mt-3 text-center">Create Account</h4>
        <p class="text-center">Get started with your free account</p>
        <form>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input
              name=""
              class="form-control"
              placeholder="Full name"
              type="text"
            />
          </div>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
            <input
              name=""
              class="form-control"
              placeholder="Email address"
              type="email"
            />
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fad fa-mars"></i>
              </span>
            </div>
            <select class="form-control">
              <option selected="">Select a gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <!-- form-group end.// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
            </div>
            <input
              class="form-control"
              placeholder="Create password"
              type="password"
            />
          </div>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
            </div>
            <input
              class="form-control"
              placeholder="Repeat password"
              type="password"
            />
          </div>
          <!-- form-group// -->
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">
              Create Account
            </button>
          </div>
          <!-- form-group// -->
          <p class="text-center">Have an account? <a href="">Log In</a></p>
        </form>
      </article>
    </div>
    <!-- card.// -->
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
