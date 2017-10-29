<template>
</template>

<script>
  export default {
    props: ['error'],
    created () {
      console.log('error created')
      if (this.error.statusCode === 404) {
        console.log('404 check')
        this.$nuxt.$router.push('/404')
      }
    }
  }
</script>
