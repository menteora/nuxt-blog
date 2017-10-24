<template>
<div>
  <div v-for="tag in tags" :key="tag">
    <h2 class="headline">{{tag}}</h2>
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 md4 v-for="post in posts" v-if="post.tags.indexOf(tag) > -1" :key="post.title">
          <v-card class="my-3" hover>
            <v-card-media class="white--text" height="150px" :src="'/images/'+post.image.feature" v-if="post.image.feature">
            </v-card-media>
            <v-card-title>{{post.title}}</v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</div>
</template>

<script>
  var _ = require('underscore')

  export default {
    asyncData: async ({
      app,
      route,
      payload
    }) => ({
      posts: await app.$content('/').getAll()
    }),
    data: function () {
      return {
        tags: []
      }
    },
    created: function () {
      var t = []
      for (var i = 0; i < this.posts.length; i++) {
        for (var n = 0; n < this.posts[i].tags.length; n++) {
          t.push(this.posts[i].tags[n])
        }
      }
      this.tags = _.uniq(t)
    },
    methods: {},
    filters: {}
  }
</script>
