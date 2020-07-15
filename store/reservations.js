import ApiService from '@/services/ApiService.js'

export const state = () => ({
  reservations: [],
})
export const mutations = {
  SET_RESERVATIONS(state, reservations) {
    state.reservations = reservations
  },
}
export const actions = {
  fetchReservations({ commit }) {
    return ApiService.getData().then((response) => {
      commit('SET_RESERVATIONS', response.data)
    })
  },
}
