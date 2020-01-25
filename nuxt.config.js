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
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/app.scss',
    '~/node_modules/swiper/dist/css/swiper.css'
  ],
  styleResources: {
    scss: [
      '~/assets/scss/app.scss',
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: "~/plugins/lazysizes.js",
      mode: "client"
    },
    {
      src: "~/plugins/locomotiveScroll.js",
      mode: "client"
    },
    { src: '~/plugins/swiper.js',
      mode: "client"
    },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-58743682-1'
    }],
    '~/modules/crawler',
    '~/modules/static',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/prismic',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Prismic configuration
  */
  prismic: {
    endpoint: 'https://pierrelevaillant.cdn.prismic.io/api/v2'
  },
  /*
  ** Preload font
  */
  bundleRenderer: {
    shouldPreload: (file, type) => {
      if (type === 'font') {
        return /.woff2/.test(file)
      }
      return ['script', 'style'].includes(type)
    }
  },
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
  },
}
