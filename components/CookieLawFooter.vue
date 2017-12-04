<template>
  <footer>
    <cookie-law theme="dark-lime" buttonText="Accetta">
        <div slot="message">
          <button v-on:click="$store.commit('acceptCookie')">cookieAccepted</button>
          Questo sito utilizza i cookie per fornire alcuni servizi. Accetta per avere una migliore esperienza di navigazione. <router-link to="policy">Approfondisci</router-link>
        </div>
    </cookie-law>
  </footer>
</template>