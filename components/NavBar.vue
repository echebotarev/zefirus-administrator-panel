<template>
  <div>
    <div class="navbar-custom topnav-navbar topnav-navbar-dark">
      <div class="container-fluid">
        <!-- LOGO -->
        <nuxt-link to="/" class="topnav-logo">
          <span class="topnav-logo-lg">
            <img
              src="~/assets/images/logo_zefirus_white_h36.png"
              alt=""
              height="16"
            />
          </span>
          <span class="topnav-logo-sm">
            <img
              src="~/assets/images/logo_zefirus_white_h36.png"
              alt=""
              height="16"
            />
          </span>
        </nuxt-link>

        <ul class="list-unstyled topbar-right-menu float-right mb-0">
          <li class="dropdown notification-list">
            <a
              id="topbar-userdrop"
              class="nav-link dropdown-toggle nav-user arrow-none mr-0"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="account-user-avatar">
                <img :src="avatarImg" alt="user-image" class="rounded-circle" />
              </span>
              <span>
                <span class="account-user-name">Dominic Keller</span>
                <span class="account-position">Founder</span>
              </span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown"
              aria-labelledby="topbar-userdrop"
            >
              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-account-circle mr-1"></i>
                <span>My Account</span>
              </a>

              <!-- item-->
              <a
                href="http://support.hoteza.com"
                target="_blank"
                class="dropdown-item notify-item"
              >
                <i class="mdi mdi-lifebuoy mr-1"></i>
                <span>Support</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-logout mr-1"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="topnav shadow-sm">
      <div class="container-fluid">
        <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
          <div id="topnav-menu-content" class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <nuxt-link
                  to="/reservation/list"
                  class="nav-link"
                  role="button"
                >
                  <i class="mdi mdi-notebook-outline mr-1"></i>
                  Reservation List
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/guest-profile/list"
                  class="nav-link"
                  role="button"
                >
                  <i class="mdi mdi-account-multiple-outline mr-1"></i>
                  Guest Profiles List
                </nuxt-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'NavBar',
  computed: mapState({
    user: (state) => state.user.user,
    avatarImg: (state) => `/images/users/${state.user.user.image}`,
  }),
  created() {
    this.fetchUser()
  },
  methods: mapActions('user', ['fetchUser']),
}
</script>

<style scoped></style>
