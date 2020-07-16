<template>
  <div class="container-fluid">
    <!-- start page title -->
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Guest Profile List</h4>
        </div>
      </div>
    </div>
    <!-- end page title -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover mb-0">
                <thead>
                  <tr>
                    <th>Guest Name</th>
                    <th>Birth date</th>
                    <th>Country of birth</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="profile in profiles" :key="profile.id" role="row">
                    <td>
                      {{ profile.person.lastName }}
                      {{ profile.person.firstName }}
                      (<nuxt-link :to="'/guest-profile/view/' + profile.id"
                        >view</nuxt-link
                      >)
                    </td>
                    <td>{{ profile.person.dateOfBirth }}</td>
                    <td>{{ profile.person.countryOfBirth }}</td>
                    <td>{{ profile.person.gender }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'List',
  async fetch({ store, error }) {
    try {
      await store.dispatch('profiles/fetchProfiles')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable API server',
      })
    }
  },
  computed: mapState({
    profiles: (state) => state.profiles.profiles,
  }),
}
</script>

<style scoped></style>
