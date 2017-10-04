<template>

  <v-app light v-scroll="onScroll">
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-avatar :hidden="hiddenTitle" class="ml-3" size="32px" >
        <img :hidden="hiddenTitle" src="~/assets/icons/favicon.png">
      </v-avatar>
      <v-toolbar-title :hidden="hiddenTitle" v-text="title"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down"
          v-for="(item, i) in items"
          :key="i"
          >
        <v-btn :to="item.to" flat>
          <v-icon left v-html="item.icon"></v-icon>{{item.title}}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>

    <main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </main>

  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        clipped: true,
        drawer: false,
        fixed: false,
        miniVariant: false,
        title: 'Dinamicamente.org',
        offsetTop: 0,
        offsetLimit: 250,
        hiddenTitle: true,
        items: [{
          title: 'Home',
          icon: 'home',
          to: '/'
        },
        {
          title: 'Tags',
          icon: 'label',
          to: '/tags/'
        },
        {
          title: 'Licenza',
          icon: 'description',
          to: '/info/licenza'
        },
        {
          title: 'Policy',
          icon: 'copyright',
          to: '/info/cookie-policy'
        },
        {
          title: 'Feed',
          icon: 'rss_feed',
          to: '/feed.xml'
        }
        ]
      }
    },
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      }
    },
    watch: {
      offsetTop: function (val) {
        // this.$nuxt.$router.match('/')
        if (this.offsetTop > this.offsetLimit) {
          this.hiddenTitle = false
        } else {
          this.hiddenTitle = true
        }
      }
    }
  }
</script>
