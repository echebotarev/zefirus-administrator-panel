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
    // eslint-disable-next-line promise/param-names
    return new Promise((resolve) => {
      const reservation = rootState.reservations.reservations.find(
        (reservation) => reservation.guestProfile.id === id
      )
      commit('SET_PROFILE', reservation.guestProfile)
      resolve()
    })
  },
}
