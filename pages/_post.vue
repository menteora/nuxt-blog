<template>
<div>
  <v-parallax class="hidden-sm-and-down" :src="'/images/'+post.image.feature" v-if="post.image.feature">
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
          <social-sharing :to="post.permalink" :title="post.title" :description="post.description" :hashtags="post.tags.toString()" twitter-user="dinamicamente" inline-template>
            <div>
              <network network="facebook">
                <v-btn large flat class="blue--text">
                  <!--<i class="fa fa-facebook"></i>
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>-->
                  <v-icon large>fa-facebook-official</v-icon>
                </v-btn>
              </network>
              <network network="googleplus">
                <v-btn fab large flat class="red--text">
                  <v-icon large>fa-google-plus</v-icon>
                </v-btn>
              </network>
              <network network="linkedin">
                <v-btn flat class="blue--text">
                  <i class="fa fa-linkedin"></i>
                </v-btn>
              </network>
              <network network="telegram">
                <v-btn flat class="blue--text">
                  <i class="fa fa-telegram"></i>
                </v-btn>
              </network>
              <network network="twitter">
                <v-btn flat class="blue--text">
                  <i class="fa fa-twitter"></i>
                </v-btn>
              </network>
              <network network="whatsapp">
                <v-btn flat class="green--text">
                  <i class="fa fa-whatsapp"></i>
                </v-btn>
              </network>
              <network network="email">
                <v-btn flat>
                  <i class="fa fa-envelope"></i>
                </v-btn>
              </network>
              <network network="pinterest">
                <v-btn flat class="red--text">
                  <i class="fa fa-pinterest"></i>
                </v-btn>
              </network>
              <network network="reddit">
                <v-btn flat>
                  <i class="fa fa-reddit"></i>
                </v-btn>
              </network>
              <network network="skype">
                <v-btn flat class="blue--text">
                  <i class="fa fa-skype"></i>
                </v-btn>
              </network>
              <network network="sms">
                <v-btn flat>
                  <i class="fa fa-commenting-o"></i>
                </v-btn>
              </network>
              <network network="vk">
                <v-btn flat>
                  <i class="fa fa-vk"></i>
                </v-btn>
              </network>
              <!--<network network="weibo">
                <i class="fa fa-weibo"></i>Weibo
              </network>-->
              <!--<network network="line">
                <i class="fa fa-line"></i>Line
              </network>-->
              <!--<network network="odnoklassniki">
                <i class="fa fa-odnoklassniki"></i>Odnoklassniki
              </network>-->
            </div>
          </social-sharing>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>
<script>
  export default {
    asyncData: async ({
      app,
      route,
      payload
    }) => ({
      post: await app.$content('/').get(route.path) || payload
    })
  }
</script>

<style>
  @import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';

  @media screen and (min-width: 960px) {
    #absolute {
      position: absolute;
      top: 300px;
    }
  }
</style>
