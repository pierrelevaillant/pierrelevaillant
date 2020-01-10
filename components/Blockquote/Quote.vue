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

<style lang="scss">
blockquote {
  p {
    font-size: 5vw;
    line-height: 1;
    //padding-right: 5%;

    span {
      display: block;
      text-indent: 8vw;
    }
  }

  cite {
    @include f-body;

    &::before {
      content: '';
      display: block;
      height: var(--spacing-medium);
    }
  }
}
</style>
