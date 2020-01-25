<template>
  <section class="o-galleries" v-if="galleries.length !== 0" data-scroll-section>

    <SpacingLarge />

    <Grid data-scroll>
        <div v-for="(gallery, index) in galleries" :key="gallery.id" class="m-gallery" :class="layout[index] ? layout[index] :''">
          <nuxt-link :to="'/jpgs/' + gallery.uid">
            <ImageResponsive :image="gallery.data.cover" :aspectRatio="'4/3'" />
            <div class="m-gallery__title">
              <div><span>{{ ( index < 10 ? '0' : '' ) + (index + 1).toString()  }}</span></div>
              <div><span v-if="gallery.data.title" :data-count="gallery.data.images.length + ' imgs'" :data-title="gallery.data.title[0].text"></span></div>
            </div>
          </nuxt-link>
        </div>
    </Grid>

    <SpacingLarge />

      <!-- <SpacingLarge />

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

      <SpacingLarge /> -->

  </section>
</template>

<script>
import locomotive from "~/mixins/locomotive.js"

export default {
  mixins: [locomotive],
  head () {
    return {
      title: 'JPGS — Pierre Le Vaillant',
    }
  },
  data() {
    return {
      layout: [
        'col-start-6 col-6 col-start-8@md col-4@md',
        'col-start-2 col-7 col-4@md',
        'col-7 col-start-5 col-start-7@md col-5@md'
      ]
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const galleries = await $prismic.api.query(
        $prismic.predicates.at("document.type", "galleries"),
        { orderings : '[my.galleries.date desc]' }
      )

      return {
        galleries: galleries.results,
      }
    } catch (e) {
        error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="scss">
.m-gallery {
  & + .m-gallery {
    margin-top: var(--spacing-large);
  }

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
