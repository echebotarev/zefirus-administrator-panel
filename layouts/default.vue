<template>
  <div class="wrapper">
    <div class="content-page">
      <div class="content">
        <nav-bar />
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
export default {
  components: {
    NavBar,
  },
  head() {
    return {
      titleTemplate: '%s - Zefirus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Zefirus',
        },
      ],
      bodyAttrs: {
        'data-layout': 'topnav',
        hid: 'data-layout',
      },
    }
  },
}
</script>

<style></style>
