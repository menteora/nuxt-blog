<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm7 md8>
        <v-card>
          <v-card-text>
            <h1 class="display-1">{{ page.title }}</h1>
            <nuxtent-body :body="page.body" />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
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
