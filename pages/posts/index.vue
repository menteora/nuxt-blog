<template>

<v-layout column justify-center align-center>

<v-flex xs12 md5>
  <div class="text-xs-center">
    <v-avatar size="150px">
      <img class="img-circle elevation-7 mb-1" src="~/assets/dinamicamente.png">
    </v-avatar>
    <h4><b>Dinamicamente.org</b></h4>
    <h6 class="text-xs-center"><i>Geeky posts in shuffle mode</i></h6>
  </div>
</v-flex>

<v-flex xs12 md5>
  <div v-for="post in posts" :key="post.title">
    <v-card class="my-3" hover>
      <v-card-media class="white--text" height="190px" :src="post.imgUrl">
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline">{{ post.title }}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-media>
      <v-card-text>
        {{ post.content }}
      </v-card-text>
      <v-card-actions>
        <v-btn icon class="red--text">
          <v-icon medium>fa-reddit</v-icon>
        </v-btn>
        <v-btn icon class="light-blue--text">
          <v-icon medium>fa-twitter</v-icon>
        </v-btn>
        <v-btn icon class="blue--text text--darken-4">
          <v-icon medium>fa-facebook</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn flat class="blue--text">Read More</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</v-flex>
</v-layout>
</template>


<script>
  export default {
    asyncData (context) {
      // called every time before loading the component
      return {
        title: 'Your Logo',
        posts: [{
          title: 'Fusce ullamcorper tellus sed maximus',
          content: 'Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna. Mauris aliquet elit rutrum lorem fermentum, id lobortis arcu facilisis. Mauris ut justo magna. Vivamus euismod fringilla. ',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
        },
        {
          title: 'Donec vitae suscipit lectus, a luctus diam.',
          content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi. Aenean arcu sapien, rutrum nec mollis id, condimentum quis orci. Praesent a rhoncus orci. Praesent turpis turpis, imperdiet id eleifend consequat. ',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
        },
        {
          title: 'Vestibulum condimentum quam eu est convallis',
          content: ' at sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo. Quisque gravida, est quis tincidunt bibendum, nibh elit dapibus mauris.',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
        }
        ]
      }
    }
  }
</script>
