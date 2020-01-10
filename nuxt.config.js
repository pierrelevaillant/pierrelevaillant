
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Pierre Le Vaillant',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src:
          "https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/app.scss',
    '@/node_modules/swiper/dist/css/swiper.css'
  ],
  styleResources: {
    scss: [
      '@/assets/scss/app.scss',
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: "@/plugins/locomotiveScroll.js",
      mode: "client"
    },
    { src: '@/plugins/swiper.js',
      mode: "client"
    },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-58743682-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    [ 'vue-scrollto/nuxt', { duration: 600, easing: 'ease-in-out' } ],
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        "postcss-import": {},
        "postcss-nested": {}
      },
      preset: {
        stage: 0,
        autoprefixer: {
          cascade: false,
          grid: false
        }
      }
    },
    extend(config, ctx) {}
  }
}
