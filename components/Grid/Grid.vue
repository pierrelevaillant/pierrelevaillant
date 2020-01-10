<template>
  <section>
      <slot />
  </section>
</template>

<script>
export default {
  name: 'Grid'
}
</script>

<style lang="scss" scoped>
section {
  @include grid;

  & > div {
    @include grid-column-end(2);

    @include breakpoint('medium+') {
        @include grid-column-end(6);
    }
  }
}
</style>
