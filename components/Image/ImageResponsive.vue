<template>
  <div>
    <picture
      v-if="image"
      :class="[
        objectFit !== '' ? 'is-' + objectFit : '',
        imgAspectRatio
      ]"
    >
      <!--[if IE 9]><video style="display: none;><![endif]-->
      <source
        v-if="image.small"
        :data-srcset="image.small.url"
        :media="'(max-width:' + image.small.dimensions.width + ')'"
      />
      <source
        v-if="image.medium"
        :data-srcset="image.medium.url"
        :media="'(max-width:' + image.medium.dimensions.width + ')'"
      />
      <source
        v-if="image.large"
        :data-srcset="image.large.url"
        :media="'(max-width:' + image.large.dimensions.width + ')'"
      />
      <source
        :data-srcset="image.large ? image.large.url : image.url" />
      <!--[if IE 9]></video><![endif]-->
      <img
        :data-src="image.large ? image.large.url : image.url"
        class="lazyload"
        :alt="image.alt" />
    </picture>
  </div>
</template>

<script>
export default {
  name: 'ImageResponsive',
  props: {
    image: {
      required: true,
      type: Object,
      default: null,
    },
    /**
     * Define image ratio
    */
    aspectRatio: {
      required: false,
      type: String,
      default: 'aspect-ratio-16/9'
    },
    // Specify how the image/video will fit the container
    objectFit: {
      required: false,
      // `'cover'` / `'contain'`
      type: String,
      default: 'cover',
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
