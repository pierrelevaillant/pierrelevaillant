<template>
  <div class="font-sans antialiased uppercase text-black relative overflow-hidden" id="js-scroll" @mousemove="doDrag">
    <main>
      <nuxt />
    </main>
    <span class="cursor absolute pointer-events-none"></span>
  </div>
</template>

<script>
export default {
  methods: {
    doDrag(e) {
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;

      let mouseXpercentage = Math.round(event.pageX);
      let mouseYpercentage = Math.round(event.pageY);

      var timestamp = 0;
      var mY = 0;
      var now = Date.now();
      var currentmY = e.screenY;

      var dt = now - timestamp;
      var distance = Math.abs(currentmY - mY);
      var speed = Math.round(distance / dt * 1000);
      console.log(dt, distance, speed);

      mY = currentmY;
      timestamp = now;

      document.documentElement.style.setProperty('--x', mouseXpercentage + 'px');
      document.documentElement.style.setProperty('--y', mouseYpercentage + 'px');
      document.documentElement.style.setProperty('--size', 80 + distance + 'px');
      }
  },
}
</script>

<style scoped>
.indent-md {
  text-indent: 5vw;
}

.cursor {
  content: '';
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle closest-side, #BDFF00, transparent);
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease;
}
</style>