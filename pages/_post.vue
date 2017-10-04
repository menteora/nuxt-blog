<template>
  <div>
    <v-parallax class="hidden-sm-and-down" :src="'/images/'+post.image.feature" v-if="post.image.feature" >
    </v-parallax>
  <v-layout column justify-center align-center>
    <v-flex id="absolute" xs12 md7>
      <v-card>
        <v-card-media class="hidden-md-and-up" :src="'/images/'+post.image.feature" v-if="post.image.feature" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h1 class="headline">{{ post.title }}</h1>
            <nuxtent-body :body="post.body" />
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text">Share</v-btn>
          <v-btn flat class="orange--text">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>
<script>
export default {
  asyncData: async ({ app, route, payload }) => ({
    post: await app.$content('/').get(route.path) || payload
  })
}
</script>

<style>
@media screen and (min-width: 960px) {
    #absolute {
      position: absolute;
      top: 300px;
    }
}
</style>
