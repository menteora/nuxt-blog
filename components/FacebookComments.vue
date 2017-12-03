<template>
<h1>{{cookieAccepted}}</h1>
</template>

<script>
  export default {
    data: function () {
      return {
        cookieAccepted: false
      }
    },
    created () {
    },
    methods: {
      cookieAccepted: function () {
        this.cookieAccepted = localStorage.getItem('cookie:accepted')
      }
    }

  }
</script>