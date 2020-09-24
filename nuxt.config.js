export default {
  title: {
    title: '他山之石 新代理人',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: '他山之石 新代理人',
        name: '他山之石 新代理人',
        content: '他山之石 新代理人'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  target: 'static',
  /*
  ** Activate components - https://nuxtjs.org/guides/directory-structure/components#components-module
  */
  components: true,

  /*
  ** Global CSS - https://nuxtjs.org/guides/features/configuration#pre-processors
  */
  css: [
    '~/assets/main.scss',
    // Load a Node.js module directly (here it's a Sass file)
    // 'bulma',
    // // CSS file in the project
    // '@/assets/css/main.css',
    // // SCSS file in the project
    // '@/assets/css/main.scss'
  ],
  buildModules: [
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    }
  },
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
  ],
  plugins: ['plugins/i18n.js'],
  router: {
    middleware: ['i18n'],
    base: '/emerging-curator-2020/'
  },
  build: {
    /*
     ** You can extend webpack config here
    */
    transpile: ['GLTFLoader.js', 'OrbitControls.js', 'TransformControls.js'],
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend(config, ctx) {
       // Run ESLint on save
       if (ctx.isDev && ctx.isClient) {
         config.module.rules.push({
           enforce: "pre",
           test: /\.(js|vue)$/,
           loader: "eslint-loader",
           exclude: /(node_modules)/
         })
       }
     }
   }
}