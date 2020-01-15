<template>
  <div>
    <figure
      :class="[
        objectFit !== '' ? 'is-' + objectFit : '',
        imgAspectRatio
      ]"
    >
      <slot>
        <img
          class="lazyload"
          :data-src="dataSrc"
          :alt="alt"
        >
      </slot>
    </figure>
    <p v-if="caption">{{ caption }}</p>
  </div>
</template>

<script>
export default {
  name: 'ImageResponsive',
  props: {
    // The image URL you want to show
    dataSrc: {
      required: true,
      // `'cat.jpg'`
      type: String
    },
    /**
     * Add alternative text to the image if necessary (for example, if it's not for decoration).
    */
    alt: {
      type: String,
      default: null
    },
    /**
     * Add a caption below the image if you need it
    */
    caption: {
      type: String,
      default: null
    },
    /**
     * Define image ratio
    */
    aspectRatio: {
      type: String,
      default: 'aspect-ratio-16/9'
    },
    // Specify how the image/video will fit the container
    objectFit: {
      default: 'cover',
      required: false,
      // `'cover'` / `'contain'`
      type: String
    },
  },
  computed: {
    imgSrcset() {
      return true
    },
    imgAspectRatio() {
      return 'aspect-ratio-' + this.aspectRatio
    },
  },
}
</script>

<style lang="scss" scoped>
figure {
  overflow: hidden;
  position: relative;
  display: block;
  margin: 0;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate3d(-50%, -50%, 0);
  }

  &.is-contain img {
    object-fit: contain;
    font-family: "object-fit: contain";
  }

  &.is-cover img {
    object-fit: cover;
    font-family: "object-fit: cover";
  }

  & + p {
    margin-top: var(--spacing-tiny);
  }
}

.aspect-ratio-16\/9:before {
  content: '';
  float: left;
  padding-bottom: 56.25%;
}

.aspect-ratio-4\/3:before {
  content: '';
  float: left;
  padding-top: 75%;
}

.aspect-ratio-3\/4:before {
  content: '';
  float: left;
  padding-top: 100.33%;
}

.aspect-ratio-1\/1:before {
  content: '';
  float: left;
  padding-bottom: 100%;
}
</style>
