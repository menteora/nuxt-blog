<template>
<v-layout column justify-center align-center>

  <nuxt-page-logo />

  <v-flex xs12 md5>
    <div v-for="post in posts" :key="post.title">

      <v-card class="my-3" hover>
        <v-card-media class="white--text" height="250px" :src="'/images/'+post.image.feature" v-if="post.image.feature">
        </v-card-media>
        <v-card-title primary-title>
          <h3 class="headline mb-0">{{ post.title }}</h3>
        </v-card-title>
        <v-card-text class="subheading">
          {{ post.description }}
        </v-card-text>
        <v-card-actions>
          <v-btn icon class="red--text">
            <v-icon medium>fa-reddit</v-icon>
          </v-btn>
          <v-btn icon class="light-blue--text">
            <v-icon medium>fa-twitter</v-icon>
          </v-btn>
          <v-btn icon class="blue--text text--darken-4">
            <v-icon medium>fa-facebook</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn :to="post.path" flat class="blue--text">Leggi</v-btn>
        </v-card-actions>
      </v-card>

    </div>
  </v-flex>

</v-layout>
</template>

<script>
import NuxtPageLogo from '~/components/PageLogo.vue'

export default {
  components: {
    NuxtPageLogo
  },
  asyncData: async ({
    app
  }) => ({
    posts: await app.$content('/news').query({ exclude: 'body' }).getAll()
  })
}
</script>
