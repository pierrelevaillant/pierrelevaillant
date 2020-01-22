<template>
  <blockquote>
    <p v-if="text">{{ text }}</p>
    <cite v-if="author">— {{ author }}</cite>
  </blockquote>
</template>

<script>
export default {
  name: 'Quote',
  props: {
    text: {
      type: String,
    },
    author: {
      type: String,
      default() {
        return false
      }
    }
  }
}
</script>
