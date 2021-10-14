import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: false,
  target: 'static',
  components: true,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Pierre Le Vaillant – Digital generalist',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // Title
      { property: 'og:title', content: 'Pierre Le Vaillant – Digital generalist' },
      { name: 'twitter:title', content: 'Pierre Le Vaillant – Digital generalist' },
      { itemprop: 'name', content: 'Pierre Le Vaillant – Digital generalist' },

      // Description
      { name: 'description', content: 'Pierre Le Vaillant is a graphic/product designer and a creative front-end engineer based in Paris, France. He is currently working at AREA 17.' },
      { property: 'og:description', content: 'Pierre Le Vaillant is a graphic/product designer and a creative front-end engineer based in Paris, France. He is currently working at AREA 17.' },
      { name: 'twitter:description', content: 'Pierre Le Vaillant is a graphic/product designer and a creative front-end engineer based in Paris, France. He is currently working at AREA 17.' },
      { itemprop: 'description', content: 'Pierre Le Vaillant is a graphic/product designer and a creative front-end engineer based in Paris, France. He is currently working at AREA 17.' },

      // URL
      { name: 'og:url', content: 'https://www.pierrelevaillant.com/' },
      { name: 'twitter:url', content: 'https://www.pierrelevaillant.com/' },

      // Image
      { property: 'og:image', content: 'https://www.pierrelevaillant.com/cover.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:image', content: 'https://www.pierrelevaillant.com/cover.png' },
      { itemprop: 'image', content: 'https://www.pierrelevaillant.com/cover.png' },

      // Copyright, author, robots...
      { name: 'copyright', content: '(c) 2020 Pierre Le Vaillant' },
      { rel: 'author', type: "text/plain", content: 'humans.txt' },
      { name: 'robots', content: 'NOODP' },
      { name: 'google', content: 'nositelinkssearchbox' },

      // Facebook / Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Pierre Le Vaillant' },
      { property: 'og:author', content: 'https://www.facebook.com/Pierre.Le.Vaillant' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@levaillantp' },
      { name: 'twitter:domain', content: 'pierrelevaillant.com' },
      { name: 'twitter:creator', content: '@levaillantp' },
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
    '~/assets/css/app.css',
  ],
  tailwindcss: {
    jit: true
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-analytics', {
      id: 'UA-58743682-1'
    }],
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/http',
    ['nuxt-font-loader-strategy', {
      ignoreLighthouse: true,
      ignoredEffectiveTypes: ['2g', 'slow-2g'],
      fonts: [
        // Font
        {
          fileExtensions: ['woff2', 'woff'],
          fontFamily: 'Monument Grotesk',
          fontFaces: [
            {
              preload: true,
              src: '@/assets/fonts/monument-grotesk',
            },
          ]
        }
      ]
    }]
  ],
})
