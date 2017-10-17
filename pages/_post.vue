<template>
<div>
  <v-parallax id="myparallax" class="hidden-sm-and-down" :src="'/images/'+post.image.feature" v-if="post.image.feature">
    <!--<v-layout column justify-center align-center mt-3>
        <v-flex xs12 md5>
          <div class="text-xs-center">
            <v-avatar size="150px">
              <img class="img-circle elevation-7" src="~/assets/dinamicamente.png">
            </v-avatar>
            <h4><b>Dinamicamente.org</b></h4>
          </div>
        </v-flex>
    </v-layout>-->
  </v-parallax>
  <v-layout column justify-center align-center>
    <v-flex xs12 md7 id="absolute">
      <v-card>
        <v-card-media class="hidden-md-and-up" :src="'/images/'+post.image.feature" v-if="post.image.feature" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h1 class="display-1">{{ post.title }}</h1>
            <nuxtent-body :body="post.body" />
          </div>
        </v-card-title>
        <v-card-actions>
          <social-sharing :to="post.permalink" :title="post.title" :description="post.description" :hashtags="post.tags.toString()" twitter-user="dinamicamente" inline-template>
            <div>
              <network network="facebook">
                <v-tooltip top>
                  <v-btn large flat slot="activator" class="blue--text">
                    <v-icon large>fa-facebook-official</v-icon>
                  </v-btn>
                  <span>Facebook</span>
                </v-tooltip>
              </network>
              <network network="googleplus">
                <v-tooltip top>
                  <v-btn large flat slot="activator" class="red--text">
                    <v-icon large>fa-google-plus</v-icon>
                  </v-btn>
                  <span>Google+</span>
                </v-tooltip>
              </network>
              <network network="linkedin">
                <v-tooltip top>
                  <v-btn large flat slot="activator" class="blue--text">
                    <v-icon large>fa-linkedin</v-icon>
                  </v-btn>
                  <span>Linkedin</span>
                </v-tooltip>
              </network>
              <network network="telegram">
                <v-tooltip top>
                  <v-btn large flat slot="activator" class="blue--text">
                    <v-icon large>fa-telegram</v-icon>
                  </v-btn>
                  <span>Telegram</span>
                </v-tooltip>
              </network>
              <network network="twitter">
                <v-tooltip top>
                  <v-btn large flat slot="activator" class="blue--text">
                    <v-icon large>fa-twitter</v-icon>
                  </v-btn>
                  <span>Twitter</span>
                </v-tooltip>
              </network>
              <network network="whatsapp">
                <v-tooltip top>
                  <v-btn large flat slot="activator" class="green--text">
                    <v-icon large>fa-whatsapp</v-icon>
                  </v-btn>
                  <span>Whatsapp</span>
                </v-tooltip>
              </network>
              <network network="email">
                <v-tooltip top>
                  <v-btn large flat slot="activator">
                    <v-icon large>fa-envelope</v-icon>
                  </v-btn>
                  <span>E-mail</span>
                </v-tooltip>
              </network>
              <network network="pinterest">
                <v-tooltip top>
                  <v-btn large flat slot="activator" class="red--text">
                    <v-icon large>fa-pinterest</v-icon>
                  </v-btn>
                  <span>Pinterest</span>
                </v-tooltip>
              </network>
              <network network="reddit">
                <v-tooltip top>
                  <v-btn large flat slot="activator">
                    <v-icon large>fa-reddit</v-icon>
                  </v-btn>
                  <span>Reddit</span>
                </v-tooltip>
              </network>
              <network network="skype">
                <v-tooltip top>
                  <v-btn large flat slot="activator" class="blue--text">
                    <v-icon large>fa-skype</v-icon>
                  </v-btn>
                  <span>Skype</span>
                </v-tooltip>
              </network>
              <network network="sms">
                <v-tooltip top>
                  <v-btn large flat slot="activator">
                    <v-icon large>fa-commenting-o</v-icon>
                  </v-btn>
                  <span>Sms</span>
                </v-tooltip>
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

  @media screen and (min-width: 960px) {
    #absolute {
      position: absolute;
      top: 300px;
    }
  }
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
  /*#myparallax {
    opacity: 0.7;
    filter: alpha(opacity=70);
}*/
</style>
