<template>
  <div class="auth-fluid">
    <!--Auth fluid left content -->
    <div class="auth-fluid-form-box">
      <div class="align-items-center d-flex h-100">
        <div class="card-body">
          <!-- Logo -->
          <div class="auth-brand text-center text-lg-left">
            <a href="index.html" class="logo-dark">
              <span
                ><img
                  src="~/assets/images/zefirus_black_contrast_h36.png"
                  alt=""
                  height="18"
              /></span>
            </a>
            <a href="index.html" class="logo-light">
              <span
                ><img
                  src="~/assets/images/zefirus_black_contrast_h36.png"
                  alt=""
                  height="18"
              /></span>
            </a>
          </div>

          <!-- title-->
          <h4 class="mt-0">Sign In</h4>
          <p class="text-muted mb-4">
            Enter your email address and password to access account.
          </p>

          <!-- form -->
          <form action="#">
            <div class="form-group">
              <label for="emailaddress">Email address</label>
              <input
                id="emailaddress"
                class="form-control"
                type="email"
                required=""
                placeholder="Enter your email"
              />
            </div>
            <div class="form-group">
              <a href="pages-recoverpw-2.html" class="text-muted float-right"
                ><small>Forgot your password?</small></a
              >
              <label for="password">Password</label>
              <input
                id="password"
                class="form-control"
                type="password"
                required=""
                placeholder="Enter your password"
              />
            </div>
            <div class="form-group mb-3">
              <div class="custom-control custom-checkbox">
                <input
                  id="checkbox-signin"
                  type="checkbox"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="checkbox-signin"
                  >Remember me</label
                >
              </div>
            </div>
            <div class="form-group mb-0 text-center">
              <button class="btn btn-primary btn-block" type="submit">
                <i class="mdi mdi-login"></i> Log In
              </button>
            </div>
          </form>
          <!-- end form-->

          <!-- Footer-->
          <footer class="footer footer-alt">
            <p class="text-muted">
              Can't sign in?
              <a
                href="https://support.hoteza.com"
                class="text-muted ml-1"
                target="_blank"
                ><b>Ask Support</b></a
              >
            </p>
          </footer>
        </div>
        <!-- end .card-body -->
      </div>
      <!-- end .align-items-center.d-flex.h-100-->
    </div>
    <!-- end auth-fluid-form-box-->

    <!-- Auth fluid right content -->
    <div class="auth-fluid-right text-center">
      <div class="auth-user-testimonial">
        <h2 class="mb-3">Contactless. Timeless. Paperless.</h2>
        <p class="lead">
          Hoteza Zefirus
        </p>
      </div>
      <!-- end auth-user-testimonial-->
    </div>
    <!-- end Auth fluid right content -->
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style scoped></style>
