<template>
  <div>
    <h1 v-if="$store.state.isCookieAccepted" >{{$store.state.isCookieAccepted}} great work!</h1>
    <h1 v-else>{{$store.state.isCookieAccepted}} wtf!</h1>
  </div>
</template>

<script>
  export default {
    created () {
      this.$store.commit('setCookieStatus')
    }
  }
</script>