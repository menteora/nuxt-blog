<template>
  <h5 v-if="$store.state.isCookieAccepted">comment enabled</h5>
  <h5 v-else>comment disabled</h5>
</template>

<script>
/* DEV NOTES
- no-ssr module must be external to component, otherwise it generate a localstorage error
- facebook component must be separate from nuxtent tag, otherwise the markdown page disappear on refresh of page
(putting "/" at the end of the url)
*/
export default {
  created () {
    this.$store.commit('setCookieStatus')
  }
}
</script>