<template>
  <div>{{ profile.id }}</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('profiles/fetchProfile', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable API server',
      })
    }
  },
  computed: mapState({
    profile: (state) => state.profiles.profile,
  }),
}
</script>

<style scoped></style>
