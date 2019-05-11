import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
var appConfig = require('config').get('app')

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  for favicon: https://realfavicongenerator.net/
  */
  head: {
    title: appConfig.get('title'),
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: appConfig.get('metaContent') }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', color: "#000000", href: '/safari-pinned-tab.svg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  plugins: [
    '~/plugins/vue-social-sharing.js',
    '~/plugins/vue-moment.js'
  ],

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl', 'prismjs/themes/prism-coy.css'],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    'nuxt-gustave',
    ['@nuxtjs/google-analytics', { ua: appConfig.get('GoogleAnalyticsId') }]
  ],
  gustave: {
    compilers: [
      'compilers/news.js',
      'compilers/pages.js'
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#202020' },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
