export default {
  /*
  ** Activate components - https://nuxtjs.org/guides/directory-structure/components#components-module
  */
  components: true,

  /*
  ** Global CSS - https://nuxtjs.org/guides/features/configuration#pre-processors
  */
  css: [
    '~/assets/main.css',
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
  build: {
    /*
     ** You can extend webpack config here
    */
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