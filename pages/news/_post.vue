<template>
<div>
  <v-layout row wrap>
    <v-flex d-flex xs12>
      <v-card>
        <v-card-media class="hidden-sm-and-down" :src="'/images/'+post.image.feature" v-if="post.image.feature" height="600px">
        </v-card-media>
        <v-card-media class="hidden-md-and-up" :src="'/images/'+post.image.feature" v-if="post.image.feature" height="200px">
        </v-card-media>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout row wrap>
    <v-flex d-flex xs12 sm4 md3>
      <v-layout column>
        <v-flex pa-3>
          <v-flex>
            <v-avatar :tile=false class="grey lighten-4" size="100px">
              <img :src="'/images/'+post.author+'.png'" alt="avatar">
            </v-avatar>
          </v-flex>
          <v-flex>
            <h2>by {{post.author}}</h2>
          </v-flex>
          <v-flex>
            <p><v-icon>label</v-icon> {{ post.category }}</p>
            <p><v-icon>loyalty</v-icon> {{ post.tags.toString() }}</p>
            <p><v-icon>event</v-icon> {{ post.date }}</p>
        </v-flex>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 sm7 md8>
      <v-card>
        <v-card-text>
          <h1 class="display-1">{{ post.title }}</h1>
          <nuxtent-body :body="post.body" />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  <social-footer 
    :to="post.permalink" 
    :title="post.title" 
    :description="post.description" 
    :hashtags="post.tags.toString()" 
    twitter-user="dinamicamente"
  ></social-footer>
</div>
</template>
<script>
import SocialFooter from '~/components/SocialFooter.vue'

export default {
  components: {
    SocialFooter
  },
  asyncData: async ({
    app,
    route,
    payload
  }) => ({
    post: await app.$content('/news').get(route.path) || payload
  })
}
</script>

<style>
  /*  @media screen and (min-width: 960px) {
    #absolute {
      position: absolute;
      top: 300px;
    }
  }
*/

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

  li {
    font-size: 16px!important;
    font-weight: 400;
  }  
  /*#myparallax {
    opacity: 0.7;
    filter: alpha(opacity=70);
}*/
</style>
