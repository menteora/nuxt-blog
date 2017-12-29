<template>
    <div
      :permalink="permalink"
    >
      <div id=fb_thread class="text-xs-center">
        <div v-if="$store.state.isCookieAccepted" class="fb-comments" :data-href="baseUrl" data-numposts="5" data-width="100%"></div>
        <div v-else>Per commentare devi prima accettare i cookie.</div>
      </div>
      <div id="fb-root"></div>
      <script v-if="$store.state.isCookieAccepted">
        (function (d, s, id) {
          var js
          var fjs = d.getElementsByTagName(s)[0]
          if (d.getElementById(id)) return
          js = d.createElement(s); js.id = id
          js.src = '//connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v2.8&appId={{$store.state.facebookAppId}}'
          fjs.parentNode.insertBefore(js, fjs)
        }(document, 'script', 'facebook-jssdk'))
      </script>
    </div>
</template>

<script>
/* DEV NOTES
- no-ssr module must be external to component, otherwise it generate a localstorage error
- facebook component must be separate from nuxtent tag, otherwise the markdown page disappear on refresh of page
(putting "/" at the end of the url)
*/
export default {
  props: ['permalink'],
  data: function () {
    return { baseUrl: window.location.origin + this.permalink }
  },
  created () {
    this.$store.commit('setCookieStatus')
  }
}
</script>