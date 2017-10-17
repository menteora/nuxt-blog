<template>

<v-layout column justify-center align-center>

<v-flex xs12 md5>
  <div class="text-xs-center">
    <v-avatar size="200px">
      <img class="img-circle elevation-7 mb-1" src="~/static/images/darthvader.jpg">
    </v-avatar>
    <h4><b>Dinamicamente.org</b></h4>
    <h6 class="text-xs-center"><i>I find this lack of page disturbing...</i></h6>
  </div>
</v-flex>
</v-layout>
</template>
<script>
export default {
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
}
</script>
