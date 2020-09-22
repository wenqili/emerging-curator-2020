export default {
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
    middleware: ['i18n']
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