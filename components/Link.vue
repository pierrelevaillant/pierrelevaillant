<template>
  <nuxt-link :class="classes" :to="href" v-if="!external">
    <span v-text="text"></span>
  </nuxt-link>
  <a v-else :href="href" :class="classes" target="_blank" rel="noopener noreferer">
    <span v-text="text"></span>
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    href: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    external: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classes() {
      return 'inline-flex items-center justify-center h-6 px-2 bg-white border border-black rounded lg:hover:bg-black lg:hover:text-white'
    }
  }
}
</script>

<style scoped>
a.nuxt-link-exact-active {
  @apply bg-black text-white;
}
</style>

</style>