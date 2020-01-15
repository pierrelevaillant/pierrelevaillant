<template>
  <section class="o-galleries" data-scroll-section>

    <SpacingLarge />

      <Grid data-scroll>
          <div class="m-gallery col-8 col-6@md">
            <nuxt-link to="/jpgs/01">
              <ImageResponsive :data-src="require('~/assets/images/01/_thumb.jpg')" alt="Sed ut perspiciatis unde omnis" :aspectRatio="'4/3'" />
              <div class="m-gallery__title">
                <div><span>01</span></div>
                <div><span data-count="33 imgs" data-title="California"></span></div>
              </div>
            </nuxt-link>
          </div>
      </Grid>

      <SpacingLarge />

      <Grid data-scroll>
          <div class="m-gallery col-start-6 col-6 col-start-8@md col-4@md">
            <nuxt-link to="/jpgs/02">
              <ImageResponsive :data-src="require('~/assets/images/02/_thumb.jpg')" alt="Sed ut perspiciatis unde omnis" :aspectRatio="'4/3'" />
              <div class="m-gallery__title">
                <div><span>02</span></div>
                <div><span data-count="33 imgs" data-title="Jordan"></span></div>
              </div>
            </nuxt-link>
          </div>
      </Grid>

      <SpacingLarge />

      <Grid data-scroll>
          <div class="m-gallery col-start-2 col-7 col-4@md">
            <nuxt-link to="/jpgs/03">
              <ImageResponsive :data-src="require('~/assets/images/03/_thumb.jpg')" alt="Sed ut perspiciatis unde omnis" :aspectRatio="'4/3'" />
              <div class="m-gallery__title">
                <div><span>03</span></div>
                <div><span data-count="33 imgs" data-title="Random"></span></div>
              </div>
            </nuxt-link>
          </div>
      </Grid>

      <SpacingLarge />

      <Grid data-scroll>
          <div class="m-gallery col-7 col-start-5 col-start-7@md col-5@md">
            <nuxt-link to="/jpgs/03">
              <ImageResponsive :data-src="require('~/assets/images/04/_thumb.jpg')" alt="Sed ut perspiciatis unde omnis" :aspectRatio="'3/4'" />
              <div class="m-gallery__title">
                <div><span>04</span></div>
                <div><span data-count="33 imgs" data-title="Lorem ipsum"></span></div>
              </div>
            </nuxt-link>
          </div>
      </Grid>

      <SpacingLarge />

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
import ImageResponsive from '~/components/Image/ImageResponsive'
import Grid from '~/components/Grid/Grid'

export default {
  components: {
    SpacingLarge,
    SpacingMedium,
    SpacingSmall,
    SpacingTiny,
    SingleNumber,
    Quote,
    ImageResponsive,
    Grid
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
