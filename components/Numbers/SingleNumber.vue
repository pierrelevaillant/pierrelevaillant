<template>
  <div>
    <p v-if="legend">{{ legend }}</p>
    <span ref="value">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'SingleNumber',
  props: {
    legend: {
      type: String,
    },
    value: {
      type: Number,
      default() {
        return 1;
      },
    },
    isAnimated: {
      type: Boolean,
      default() {
        return false;
      },
    }
  }
}
</script>

<style scoped>
div {
  max-width: 100%;
  overflow: hidden;
}

span {
  font-size: 15vw;
}
</style>
