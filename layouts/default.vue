<template>
  <div id="js-scroll" @mousemove="doDrag">
    <!-- <Navigation /> -->
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    doDrag(e) {
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;

      let mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
      let mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

      document.body.style.background = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, var(--color-a), var(--color-b))'
      }
  }
}
</script>
