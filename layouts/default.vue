<template>
  <div class="wrapper">
    <div class="content-page">
      <div class="content">
        <NavBar />
        <Nuxt />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import Footer from '~/components/Footer'
export default {
  components: {
    NavBar,
    Footer,
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
