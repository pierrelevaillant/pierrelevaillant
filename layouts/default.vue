<template>
  <div id="js-scroll" @mousemove="doDrag">
    <!-- <Navigation /> -->
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation/Navigation.vue'

export default {
  components: {
    Navigation
  },
  methods: {
    doDrag(e) {
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;

      let mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
      let mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

      document.body.style.transition = 'background .1s ease-out'
      document.body.style.background = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #fafafa, var(--color-gray))'
      }
  }
}
</script>
