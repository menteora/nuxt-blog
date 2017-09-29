<template>
  <div>
  <v-parallax :src="'/images/'+post.image.feature" v-if="post.image.feature"></v-parallax>
  <v-layout column justify-center align-center>
  <v-flex xs12 md7>
    <h2>{{ post.title }}</h2>
  <nuxtent-body :body="post.body" />
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
</style>
