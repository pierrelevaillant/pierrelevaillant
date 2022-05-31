<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const title = ref('Pierre Le Vaillant')
const description = ref('Senior designer and developer living in Paris, working at Liveblocks.')

useHead({
  title,
  meta: [
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1,viewport-fit=cover' },

    // Title
    { property: 'og:title', content: title },
    { name: 'twitter:title', content: title },
    { itemprop: 'name', content: title },

    // Description
    { name: 'description', content: description },
    { property: 'og:description', content: description},
    { name: 'twitter:description', content: description },
    { itemprop: 'description', content: description },

    // URL
    { name: 'og:url', content: 'https://www.pierrelevaillant.com' },
    { name: 'twitter:url', content: 'https://www.pierrelevaillant.com' },

    // Image
    { property: 'og:image', content: 'fb.jpeg' },
    { name: 'twitter:image:src', content: 'tw.jpg' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: '@levaillantp' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  ]
})
</script>