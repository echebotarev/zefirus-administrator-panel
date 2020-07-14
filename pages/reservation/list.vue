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
              <table class="table mb-0 table-striped tbody">
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
                  <tr v-for="item in reservations" :key="item.id" role="row">
                    <td>
                      {{ item.guestProfile.person.firstName }}
                      {{ item.guestProfile.person.lastName }}
                    </td>
                    <td>{{ item.arrivalDate }}</td>
                    <td>{{ item.departureDate }}</td>
                    <td>{{ item.status }}</td>
                    <td>{{ item.roomType }}</td>
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
