import { randomInteger } from '~/services/utils'

const users = [
  { image: 'avatar-1.jpg', name: '1' },
  { image: 'avatar-2.jpg', name: '2' },
  { image: 'avatar-3.jpg', name: '3' },
  { image: 'avatar-4.jpg', name: '4' },
  { image: 'avatar-5.jpg', name: '5' },
  { image: 'avatar-6.jpg', name: '6' },
  { image: 'avatar-7.jpg', name: '7' },
  { image: 'avatar-8.jpg', name: '8' },
  { image: 'avatar-9.jpg', name: '9' },
  { image: 'avatar-10.jpg', name: '10' },
]

export const state = () => ({
  user: {},
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

export const actions = {
  fetchUser({ commit }) {
    commit('SET_USER', users[randomInteger(0, 9)])
  },
}
