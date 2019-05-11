<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-avatar tile size="100%">
          <img :src="'/images/'+post.image.feature" v-if="post.image.feature">
        </v-avatar>
      </v-flex>
      <v-flex d-flex xs12 sm4 md2>
        <v-layout column>
          <v-flex pa-3>
            <v-flex>
              <v-avatar :tile="false" class="grey lighten-4" size="100px">
                <img :src="'/images/'+post.author+'.png'" alt="avatar">
              </v-avatar>
            </v-flex>
            <v-flex>
              <h2>by {{post.author}}</h2>
            </v-flex>
            <v-flex>
              <p>
                <v-icon>label</v-icon>
                {{ post.category }}
              </p>
              <p>
                <v-icon>loyalty</v-icon>
                {{ post.tags.toString() }}
              </p>
              <p>
                <v-icon>event</v-icon>
                {{ post.modified | moment("dddd, DD MMMM YYYY") }}
              </p>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm6 md8 class="mt-5">
        <h1 class="display-1">{{ post.title }}</h1>
        <div v-html="post.$html"/>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs12 sm6 md8 class="mt-5">
        <no-ssr>
          <facebook-comments :permalink="post.jekyll_permalink || post.permalink"></facebook-comments>
        </no-ssr>
      </v-flex>
    </v-layout>
    <social-footer
      :to="post.jekyll_permalink"
      :title="post.title"
      :description="post.description"
      :hashtags="post.tags.toString()"
      twitter-user="dinamicamente"
    ></social-footer>
  </div>
</template>
<script>
import SocialFooter from "~/components/SocialFooter.vue";
import FacebookComments from "~/components/FacebookComments.vue";
import posts from "static/api/news.json";

export default {
  components: {
    SocialFooter,
    FacebookComments
  },
  computed: {
    post() {
      return  posts.find(post => post.$slug === this.$route.params.post) 
    }
  }
};
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
  font-size: 24px !important;
  font-weight: 400;
  line-height: 32px !important;
  letter-spacing: normal !important;
}

p {
  font-size: 16px !important;
  font-weight: 400;
}

li {
  font-size: 16px !important;
  font-weight: 400;
}
/*#myparallax {
    opacity: 0.7;
    filter: alpha(opacity=70);
}*/
</style>
