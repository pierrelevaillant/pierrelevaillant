<template>
  <section>
    <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img :src="require('~/assets/images/02/_thumb.jpg')" alt="Lorem ipsum" />
      </div>
      <div class="swiper-slide">
        <img :src="require('~/assets/images/02/01.jpg')" alt="Lorem ipsum" />
      </div>
      <div class="swiper-slide">
        <img :src="require('~/assets/images/02/02.jpg')" alt="Lorem ipsum" />
      </div>
      <div class="swiper-slide">
        <img :src="require('~/assets/images/02/03.jpg')" alt="Lorem ipsum" />
      </div>
      <div class="swiper-slide">
        <img :src="require('~/assets/images/02/04.jpg')" alt="Lorem ipsum" />
      </div>

    </div>
    <button class="a-button-prev"></button>
    <button class="a-button-next"></button>
    <div class="a-pagination"></div>
  </div>
  </section>
</template>

<script>

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
  head () {
    return {
      title: 'Photography — Pierre Le Vaillant',
    }
  },
  data () {
    return {
      banners: [
        '~/assets/images/humanly/logotype.jpg',
        '~/assets/images/humanly/logotype.jpg',
        '~/assets/images/humanly/logotype.jpg',
      ],
      swiperOption: {
        a11y: {
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
        },
        effect: 'fade',
        navigation: {
          nextEl: '.a-button-next',
          prevEl: '.a-button-prev',
        },
        fadeEffect: { crossFade: true },
        speed: 0,
        loop: true,
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        spaceBetween: 0,
        pagination: {
          el: '.a-pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
              return '<div>' + current + '</div><div>of</div><div>' + total + '</div>';
          }
        },
        on: {
          tap() {
            //this.slideNext();
          }
        },
      }
    }
  }
}
</script>

<style lang="scss">
.swiper-container {
  width: 100vw;
  height: 100vh;
}

.swiper-slide {

  img {
    width: auto;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);

    @media (orientation: portrait) {
      max-width: 50vw;
    }

    @media (orientation: landscape) {
      max-height: 50vh;
    }
  }
}

.a-pagination {
  position: absolute;
  bottom: 0;
  padding: var(--spacing-small);
  width: 100vw;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;

  & > div {
    flex: 1 1 0;
    text-align: center;

    &:first-child {
      text-align: left;
    }

    &:last-child {
      text-align: right;
    }
  }
}

button.a-button-prev,
button.a-button-next {
  -webkit-tap-highlight-color: transparent;
  background: none;
  color: inherit;
  border: none;
  padding: 0 !important;
  font: inherit;
  user-select: none;
  position: absolute;
  top: 0;
  height: 100vw;
  width: 50vw;
  z-index: 99;

  &:focus {
    outline:0;
  }
}

button.a-button-prev {
  left: 0;
	cursor:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="100" width="100" viewBox="0 0 120 119.56" style="enable-background:new 0 0 120 119.56;" xml:space="preserve"><path d="M118.68,63.55L32.2,62.72c21.7,8.71,28.26,25.26,28.26,25.26l-8.51,9.34c-6.56-28.24-29.4-33.72-41.5-34.6H2.81V57.5h7.66c12.1-0.88,34.93-6.36,41.5-34.6l8.51,9.34c0,0-6.57,16.55-28.26,25.26l86.48-0.83v6.88H118.68z"/></svg>'), auto;
}

button.a-button-next {
  cursor:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="100" width="100" viewBox="0 0 120 119.56" style="enable-background:new 0 0 120 119.56;" xml:space="preserve"><path d="M2.35,56.68l86.48,0.83c-21.7-8.71-28.26-25.26-28.26-25.26l8.51-9.34c6.56,28.24,29.4,33.72,41.5,34.6h7.66v5.22h-7.66c-12.1,0.88-34.93,6.36-41.5,34.6l-8.51-9.34c0,0,6.57-16.55,28.26-25.26L2.35,63.55V56.68z"/></svg>'), auto;
  right: 0;
}
</style>
