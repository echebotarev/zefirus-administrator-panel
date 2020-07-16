<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Reservation List</h4>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover mb-0">
                <thead>
                  <tr>
                    <th>Guest Name</th>
                    <th>Arrival</th>
                    <th>Departure</th>
                    <th>Status</th>
                    <th>Room Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="reservation in reservations"
                    :key="reservation.id"
                    role="row"
                  >
                    <td>
                      {{ reservation.guestProfile.person.lastName }}
                      {{ reservation.guestProfile.person.firstName }}
                      (<nuxt-link
                        :to="
                          '/guest-profile/view/' + reservation.guestProfile.id
                        "
                        >view</nuxt-link
                      >)
                    </td>
                    <td>{{ reservation.arrivalDate }}</td>
                    <td>{{ reservation.departureDate }}</td>
                    <td>{{ reservation.status }}</td>
                    <td>{{ reservation.roomType }}</td>
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
      await store.dispatch('reservations/fetchReservations')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable API server',
      })
    }
  },
  computed: mapState({
    reservations: (state) => state.reservations.reservations,
  }),
}
</script>

<style scoped></style>
