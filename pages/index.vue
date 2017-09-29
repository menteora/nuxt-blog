<template>

<v-layout column justify-center align-center>

<v-flex xs12 md5>
  <div class="text-xs-center">
    <v-avatar size="150px">
      <img class="img-circle elevation-7 mb-1" src="~/assets/dinamicamente.png">
    </v-avatar>
    <h4><b>Dinamicamente.org</b></h4>
    <h6 class="text-xs-center"><i>Geeky posts in shuffle mode</i></h6>
  </div>
</v-flex>

<v-flex xs12 md5>
  <div v-for="post in posts" :key="post.title">
    <v-card class="my-3" hover>
      <v-card-media class="white--text" height="190px" :src="'/images/'+post.image.feature" v-if="post.image.feature">
      </v-card-media>

      <v-card-title primary-title>
        <h3 class="headline mb-0">{{ post.title }}</h3>
      </v-card-title>
      <v-card-text>
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
        <v-btn :to="post.permalink" flat class="blue--text">Leggi</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</v-flex>
</v-layout>
</template>


<script>
  export default {
    asyncData: async ({ app, route, payload }) => ({
      posts: await app.$content('/').get(route.path) || payload
    })
  }
</script>
