<template>
  <div>
    <!--<h5 v-if="$store.state.isCookieAccepted">comment enabled</h5>
    <h5 v-else>comment disabled</h5>-->
  </div>
</template>

<script>
  export default {
    created () {
      this.$store.commit('setCookieStatus')
    }
  }
</script>