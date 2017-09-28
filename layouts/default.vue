<template>
  <v-app light>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
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
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </main>
    </v-navigation-drawer>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { to: '/', title: 'Welcome', icon: 'apps' },
          { to: '/inspire', title: 'Inspire', icon: 'bubble_chart' },
          { to: '/posts', title: 'Posts', icon: 'bubble_chart' }
        ],
        miniVariant: false,
        title: 'Dinamicamente.org'
      }
    }
  }
</script>
