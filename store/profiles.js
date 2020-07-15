import ApiService from '@/services/ApiService'

export const state = () => ({
  profile: {},
  profiles: [],
})
export const mutations = {
  SET_PROFILE(state, profile) {
    state.profile = profile
  },
  UPDATE_PROFILE(state, payload) {
    state.profile = Object.assign(state.profile, payload)
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

  sendData({ commit, state }) {
    // eslint-disable-next-line no-undef
    const dataArray = $('form.person').serializeArray()
    const postData = {}
    // eslint-disable-next-line no-undef
    $(dataArray).each(function (i, field) {
      postData[field.name] = field.value
    })

    ApiService.sendData(`/guest-profile/${state.profile.id}/update`, {
      person: postData,
    }).then((response) => {
      commit('UPDATE_PROFILE', response.formData)
    })
    // eslint-disable-next-line no-undef
    // $.ajax({
    //   type: 'POST',
    //   url: `http://zefirus.hoteza.com:50780/api/guest-profile/${state.profile.id}/update`,
    //   dataType: 'json',
    //   contentType: 'application/json',
    //   data: JSON.stringify({ person: postData }),
    // }).done(function (response) {
    //   console.log(response)
    // })
  },
}
