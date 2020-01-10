<template>
  <section class="o-galleries" data-scroll-section>

    <SpacingLarge />

      <div class="grid grid-gap-xs" data-scroll data-scroll-speed="2">
          <div class="col-6 m-gallery">
            <nuxt-link to="/photography/01">
              <img :src="require('~/assets/images/01/_thumb.jpg')" alt="Lorem ipsum" />
              <div class="m-gallery__title">
                <div><span>01</span></div>
                <div><span data-count="33 imgs" data-title="California"></span></div>
              </div>
            </nuxt-link>
          </div>
      </div>

      <SpacingMedium />

      <nuxt-link to="/photography/01">
        <div class="grid grid-gap-xs" data-scroll data-scroll-speed="1">
          <div class="col-start-8 col-4">
            <img :src="require('~/assets/images/02/_thumb.jpg')" alt="Lorem ipsum" />
            02
          </div>
        </div>
      </nuxt-link>

      <SpacingMedium />

      <nuxt-link to="/photography/01">
        <div class="grid grid-gap-xs" data-scroll data-scroll-speed="2">
          <div class="col-start-2 col-4">
            <img :src="require('~/assets/images/03/_thumb.jpg')" alt="Lorem ipsum" />
            03
          </div>
        </div>
      </nuxt-link>

      <SpacingMedium />

      <nuxt-link to="/photography/01">
        <div class="grid grid-gap-xs" data-scroll data-scroll-speed="1">
          <div class="col-start-7 col-5">
            <img :src="require('~/assets/images/04/_thumb.jpg')" alt="Lorem ipsum" />
            04
          </div>
        </div>
      </nuxt-link>

      <SpacingLarge />

      <footer class="grid grid-gap-xs" data-scroll>
          <div class="col-6 overflow">
            <p><a href="#" v-scroll-to="'#js-scroll'">Back to top</a></p>
          </div>
          <div class="col-6 overflow">
            <p>© {{ new Date().getFullYear() }}</p>
          </div>
      </footer>

    </div>
  </section>
</template>

<script>
import locomotive from "~/mixins/locomotive.js";

import SpacingLarge from '~/components/Spacing/SpacingLarge'
import SpacingMedium from '~/components/Spacing/SpacingMedium'
import SpacingSmall from '~/components/Spacing/SpacingSmall'
import SpacingTiny from '~/components/Spacing/SpacingTiny'
import SingleNumber from '~/components/Numbers/SingleNumber'
import Quote from '~/components/Blockquote/Quote'

export default {
  components: {
    SpacingLarge,
    SpacingMedium,
    SpacingSmall,
    SpacingTiny,
    SingleNumber,
    Quote
  },
  mixins: [locomotive],
  head () {
    return {
      title: 'Photography — Pierre Le Vaillant',
    }
  }
}
</script>

<style lang="scss">
.o-galleries {

}
.m-gallery {
  &__title {
    display: flex;
    text-transform: uppercase;
    margin-top: var(--spacing-tiny);

    & > div {
      width: 50%;
      text-align: right;

      &:last-child span:before {
        content: attr(data-title);
      }
    }
  }

  &:hover .m-gallery__title > div:last-child span:before {
      content: attr(data-count);
  }
}
</style>
