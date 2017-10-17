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
                <v-btn large flat class="red--text">
                  <v-icon large>fa-google-plus</v-icon>
                </v-btn>
              </network>
              <network network="linkedin">
                <v-btn large flat class="blue--text">
                <v-icon large>fa-linkedin</v-icon>
                </v-btn>
              </network>
              <network network="telegram">
                <v-btn large flat class="blue--text">
                <v-icon large>fa-telegram</v-icon>
                </v-btn>
              </network>
              <network network="twitter">
                <v-btn large flat class="blue--text">
                <v-icon large>fa-twitter</v-icon>
                </v-btn>
              </network>
              <network network="whatsapp">
                <v-btn large flat class="green--text">
                <v-icon large>fa-whatsapp</v-icon>
                </v-btn>
              </network>
              <network network="email">
                <v-btn large flat>
                <v-icon large>fa-envelope</v-icon>
                </v-btn>
              </network>
              <network network="pinterest">
                <v-btn large flat class="red--text">
                <v-icon large>fa-pinterest</v-icon>
                </v-btn>
              </network>
              <network network="reddit">
                <v-btn large flat>
                <v-icon large>fa-reddit</v-icon>
                </v-btn>
              </network>
              <network network="skype">
                <v-btn large flat class="blue--text">
                <v-icon large>fa-skype</v-icon>
                </v-btn>
              </network>
              <network network="sms">
                <v-btn large flat>
                <v-icon large>fa-commenting-o</v-icon>
                </v-btn>
              </network>
              <!--<network network="vk">
                <v-btn large flat>
                <v-icon large>fa-vk</v-icon>
                </v-btn>
              </network>-->
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
