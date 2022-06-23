import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Dashboard',
    title: 'Bintulu Port',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Orbitron&display=swap")' }
    ],
    script: [
      {
        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAeDeYlQ30SsflxnhsDQmh24qeTuzTdBic&callback=myMap",
        // async:true,
        defer:true
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/scss/mixins.scss',
  ],

  // Global SCSS


  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    'plugins/echarts.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-gmaps', {
      key: 'AIzaSyAeDeYlQ30SsflxnhsDQmh24qeTuzTdBic',
      //you can use libraries: ['places']
    }]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          // primary: "rgba(0,0,0,0.1)",
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    styleResources: {
      scss:'./assets/scss/mixins.scss',
        // '~assets/scss/variables.scss'
    },
  },
  // googleMaps: {apiKey: 'AIzaSyAeDeYlQ30SsflxnhsDQmh24qeTuzTdBic'}
}
