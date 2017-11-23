<template>
  <v-layout column justify-center align-center>

    <nuxt-page-logo />

    <v-container fluid grid-list-md>
      <v-layout column justify-center align-center>
        <v-flex xs12 sm8 md8>
          <v-card>
            <v-card-text>
              <h1 class="display-1">{{ page.title }}</h1>
              <nuxtent-body :body="page.body" />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </v-layout>
</template>

<script>
import NuxtPageLogo from '~/components/PageLogo.vue'

export default {
  components: {
    NuxtPageLogo
  },
  asyncData: async ({
    app,
    route,
    payload
  }) => ({
    page: await app.$content('/pages').get(route.path) || payload
  })
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
