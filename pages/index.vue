<template>
<v-layout column justify-center align-center>

  <nuxt-page-logo />

  <v-flex xs12 md5>
    <div v-for="post in posts" :key="post.title">

      <v-card class="my-3" hover v-on:click.capture="go(post.$slug)">
        <v-img class="white--text" height="250px" :src="'/images/'+post.image.feature" v-if="post.image.feature">
        </v-img>
        <v-card-title primary-title>
          <h3 class="headline mb-0">{{ post.title }}</h3>
        </v-card-title>
        <v-card-text class="subheading">
          {{ post.description }}
        </v-card-text>
      </v-card>

    </div>
  </v-flex>

</v-layout>
</template>

<script>
import NuxtPageLogo from '~/components/PageLogo.vue'
import news from 'static/api/news.json'

export default {
  components: {
    NuxtPageLogo
  },
  computed: {
    posts() {
      return news
    }
  },
  methods: {
    go: function (url) {
      this.$nuxt.$router.push(`/news/${url}`)
    }
  }
}
</script>
