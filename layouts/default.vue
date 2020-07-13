<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
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
    }
  },
}
</script>

<style></style>
