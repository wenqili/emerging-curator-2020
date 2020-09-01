export default {
  /*
  ** Activate components - https://nuxtjs.org/guides/directory-structure/components#components-module
  */
  components: true,

  /*
  ** Global CSS - https://nuxtjs.org/guides/features/configuration#pre-processors
  */
  css: [
      '~/assets/main.css'
  ],
  // build: {
  //   /*
  //    ** You can extend webpack config here
  //   */
  //   extend(config, ctx) {
  //      // Run ESLint on save
  //      if (ctx.isDev && ctx.isClient) {
  //        config.module.rules.push({
  //          enforce: "pre",
  //          test: /\.(js|vue)$/,
  //          loader: "eslint-loader",
  //          exclude: /(node_modules)/
  //        })
  //      }
  //    }
  //  }
}