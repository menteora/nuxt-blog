<template>
  <v-footer>
     <social-sharing url="https://vuejs.org/"
                      title="The Progressive JavaScript Framework"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
                      inline-template>
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
        </div>
      </social-sharing>
  </v-footer>
</template>

<script>
  export default {

  }
</script>
