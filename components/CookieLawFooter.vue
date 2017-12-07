<template>
  <footer>
    <no-ssr>
      <cookie-law theme="dark-lime" buttonText="Accetta" v-on:accept="$store.commit('acceptCookie')">
          <div slot="message">
            Questo sito utilizza i cookie per fornire alcuni servizi. Accetta per avere una migliore esperienza di navigazione. <router-link to="policy">Approfondisci</router-link>
          </div>
      </cookie-law>
    </no-ssr>
  </footer>
</template>

<script>
import CookieLaw from 'vue-cookie-law'

export default {
  components: {
    CookieLaw
  }
}
</script>