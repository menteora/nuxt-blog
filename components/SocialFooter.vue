<template>
  <v-footer fixed>
     <social-sharing 
        :to="to" 
        :title="title" 
        :description="description" 
        :hashtags="hashtags" 
        :twitter-user="twitterUser" 
        inline-template>
        <div>
          <network network="facebook">
            <v-tooltip top class="ma-0 pa-0">
              <v-btn icon flat slot="activator" class="blue--text mr-3 ml-3">
                <v-icon >fa-facebook-official</v-icon>
              </v-btn>
              <span>Facebook</span>
            </v-tooltip>
          </network>
          <network network="googleplus">
            <v-tooltip top>
              <v-btn icon flat slot="activator" class="red--text mr-3 ml-3">
                <v-icon>fa-google-plus</v-icon>
              </v-btn>
              <span>Google+</span>
            </v-tooltip>
          </network>
          <network network="twitter">
            <v-tooltip top>
              <v-btn icon flat slot="activator" class="blue--text mr-3 ml-3">
                <v-icon>fa-twitter</v-icon>
              </v-btn>
              <span>Twitter</span>
          </v-tooltip>
          </network>
          <network network="linkedin">
            <v-tooltip top>
              <v-btn icon flat slot="activator" class="blue--text mr-3 ml-3">
                <v-icon>fa-linkedin</v-icon>
              </v-btn>
              <span>Linkedin</span>
            </v-tooltip>
          </network>
          <network network="whatsapp">
            <v-tooltip top>
              <v-btn icon flat slot="activator" class="green--text mr-3 ml-3">
                <v-icon>fa-whatsapp</v-icon>
              </v-btn>
              <span>Whatsapp</span>
            </v-tooltip>
          </network>
          <network network="telegram">
            <v-tooltip top>
              <v-btn icon flat slot="activator" class="blue--text mr-3 ml-3">
                <v-icon>fa-telegram</v-icon>
              </v-btn>
              <span>Telegram</span>
            </v-tooltip>
          </network>
          <network network="email">
            <v-tooltip top>
              <v-btn icon flat slot="activator" class="mr-3 ml-3">
                <v-icon>fa-envelope</v-icon>
              </v-btn>
              <span>E-mail</span>
            </v-tooltip>
          </network>
          <network network="skype">
            <v-tooltip top>
              <v-btn icon flat slot="activator" class="blue--text mr-3 ml-3">
                <v-icon>fa-skype</v-icon>
              </v-btn>
              <span>Skype</span>
            </v-tooltip>
          </network>
          <network network="pinterest">
            <v-tooltip top>
              <v-btn icon flat slot="activator" class="red--text mr-3 ml-3">
                <v-icon>fa-pinterest</v-icon>
              </v-btn>
              <span>Pinterest</span>
            </v-tooltip>
          </network>
          <network network="reddit">
            <v-tooltip top>
              <v-btn icon flat slot="activator" class="mr-3 ml-3">
                <v-icon>fa-reddit</v-icon>
              </v-btn>
              <span>Reddit</span>
            </v-tooltip>
          </network>
          <network network="sms">
            <v-tooltip top>
              <v-btn icon flat slot="activator" class="mr-3 ml-3">
                <v-icon>fa-commenting-o</v-icon>
              </v-btn>
              <span>Sms</span>
            </v-tooltip>
          </network>
        </div>
      </social-sharing>
  </v-footer>
</template>

<script>
  export default {
    props: ['to', 'title', 'description', 'hashtags', 'twitterUser']
  }
</script>
