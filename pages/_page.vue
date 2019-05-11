<template>
  <v-layout column justify-center align-center>

    <nuxt-page-logo />
    <v-container fluid grid-list-md>
      <v-layout column justify-center align-center>
        <v-flex xs12 sm6 md8>
          <h1 class="display-1">{{ page.title }}</h1>
           <div v-html="page.$html" />
        </v-flex>
      </v-layout>
    </v-container>

  </v-layout>
</template>

<script>
import NuxtPageLogo from '~/components/PageLogo.vue'
import pages from 'static/api/pages.json'

export default {
  components: {
    NuxtPageLogo
  },
  computed: {
    page() {
      return pages.find(
        page => page.$slug === this.$route.params.page
      )
    }
  },
}
</script>

<style>
  h2 {
    font-size: 24px!important;
    font-weight: 400;
    line-height: 32px!important;
    letter-spacing: normal!important;
  }

  p {
    font-size: 16px!important;
    font-weight: 400;
  }
</style>
