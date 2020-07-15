import ApiService from '@/services/ApiService'

export const state = () => ({
  profile: {},
  profiles: [],
})
export const mutations = {
  SET_PROFILE(state, profile) {
    state.profile = profile
  },
  SET_PROFILES(state, profiles) {
    state.profiles = profiles
  },
}
export const actions = {
  fetchProfiles({ commit }) {
    return ApiService.getData('/guest-profile/list').then((response) => {
      commit('SET_PROFILES', response.data)
    })
  },

  fetchProfile({ commit }, id) {
    return ApiService.getData(`/guest-profile/${id}/view`).then((response) => {
      commit('SET_PROFILE', response.data)
    })
  },
}
