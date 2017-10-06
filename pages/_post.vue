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
            <social-sharing url="https://vuejs.org/" inline-template>
            <div>
              <network network="facebook">
                <i class="fa fa-fw fa-facebook"></i> Facebook
              </network>
              <network network="googleplus">
                <i class="fa fa-fw fa-google-plus"></i> Google +
              </network>
              <network network="linkedin">
                <i class="fa fa-fw fa-linkedin"></i> LinkedIn
              </network>
              <network network="pinterest">
                <i class="fa fa-fw fa-pinterest"></i> Pinterest
              </network>
              <network network="reddit">
                <i class="fa fa-fw fa-reddit"></i> Reddit
              </network>
              <network network="twitter">
                <i class="fa fa-fw fa-twitter"></i> Twitter
              </network>
              <network network="vk">
                <i class="fa fa-vk"></i> VKontakte
              </network>
              <network network="weibo">
                <i class="fa fa-weibo"></i> Weibo
              </network>
              <network network="whatsapp">
                <i class="fa fa-fw fa-whatsapp"></i> Whatsapp
              </network>
            </div>
          </social-sharing>
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
