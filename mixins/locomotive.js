export default {
  watch: {
    $route() {
      this.lmS.update();
    }
  },
  mounted() {
    this.$nextTick(
      function() {
        this.lmS = new this.locomotiveScroll({
          el: document.querySelector("#js-scroll"),
          smooth: true, /* if false disable overflow: hidden on html, body */
          inertia: 0.95,
        });
      }.bind(this)
    );
  },
  destroyed() {
    this.lmS.destroy();
  },
};
