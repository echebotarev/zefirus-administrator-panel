export const state = () => ({
  profile: {},
})
export const mutations = {
  SET_PROFILE(state, profile) {
    state.profile = profile
  },
}
export const actions = {
  fetchProfile({ commit, rootState }, id) {
    const profile = rootState.reservations.reservations.find(
      (reservation) => reservation.guestProfile.id === id
    )
    commit('SET_PROFILE', profile)
  },
}
