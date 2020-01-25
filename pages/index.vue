<template>
  <section class="container o-about" data-scroll-section>

    <SpacingLarge />

    <div class="grid grid-gap-xs">
      <div class="col-10@md">
        <div class="introduction js-fade" data-scroll>
          <span>French Designer and Creative Developer based in Paris, currently working at (<a href="http://www.area17.com" target="_blank">AREA 17</a>). Passionate about technology, visual communication and photography.</span><span>Aim to deliver efficient graphic systems and interfaces for cultural, commercial and editorial clients.</span>
        </div>
      </div>
      <div class="introduction-links col-2@md js-fade" style="transition-delay:.1;" data-scroll data-scroll-speed="1">
        <ul>
          <li><a href="https://www.linkedin.com/in/pierrelevaillant/" title="LinkedIn" target="_blank">↳ &nbsp;LinkedIn</a></li>
          <li><a href="https://www.instagram.com/pierre.levaillant/" title="Instagram" target="_blank">↳ &nbsp;Instagram</a></li>
          <li><a href="https://twitter.com/levaillantp" title="Twitter" target="_blank">↳ &nbsp;Twitter</a></li>
        </ul>
      </div>
    </div>

    <SpacingLarge />

    <div data-scroll>
      <div class="grid grid-gap-xs">
        <div class="col-6 caps js-fade" data-scroll>
          <p>Experiences</p>
        </div>
        <div class="col-6 js-fade" data-scroll>
          <p>→ <a href="https://www.area17.com/" target="_blank" title="AREA 17">AREA 17</a><br>
          Designer<br>
          (2017 — Present)<br><br>
          → <a href="https://fantasy.co/" target="_blank" title="Fantasy Interactive">Fantasy</a><br>
          Design Intern<br>
          (2016)<br><br>
          → <a href="https://www.nurun.com/" target="_blank" title="Publicis Nurun">Pubicis Nurun</a><br>
          Junior Art Director<br>
          (2015)</p>
        </div>
        <SpacingSmall />
        <div class="col-6 caps js-fade" data-scroll>
          <p>Education</p>
        </div>
        <div class="col-6 js-fade" data-scroll>
          <ul>
            <li>→ ICTs Master Degree<br>HETIC<br>(2017)<br><br></li>
            <li>→ Computing Sciences DUT<br>Université du Maine<br>(2014)</li>
          </ul>
        </div>
        <SpacingSmall />
        <div class="col-6 caps js-fade" data-scroll>
          <p>Disciplines</p>
        </div>
        <div class="col-6 js-fade" data-scroll>
          <ul>
            <li>Art direction</li>
            <li>Photography</li>
            <li>Interactive design</li>
            <li>UX design</li>
            <li>Design consulting</li>
            <li>Design specifications</li>
            <li>Brand books & guidelines</li>
            <li>Editorial design</li>
            <li>Mobile / App design</li>
            <li>Front-end development</li>
          </ul>
        </div>
        <SpacingSmall />
        <hr>
        <div class="col-6 caps js-fade" data-scroll>
          <p>Selected Clients</p>
        </div>
        <div class="col-6 js-fade" data-scroll>
          <ul>
            <li>Netflix</li>
            <li>The Weather Channel</li>
            <li>Mitsubishi</li>
            <li>Nokia</li>
            <li>Pentagram</li>
            <li>Le Parisien</li>
            <li>Salon des Entrepreneurs</li>
            <li>Van Cleef & Arpels</li>
            <li>Do The Green Thing</li>
            <li>Céline</li>
          </ul>
        </div>
        <SpacingSmall />
        <div class="col-6 caps js-fade" data-scroll>
          <p>Special thanks</p>
        </div>
        <div class="col-6 js-fade" data-scroll>
          <ul>
            <li>David Lamothe</li>
            <li>Martin Rettenbacher</li>
            <li></li>
          </ul>
        </div>
      </div>

      <SpacingLarge />
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
import ImageResponsive from '~/components/Image/ImageResponsive'

export default {
  components: {
    SpacingLarge,
    SpacingMedium,
    SpacingSmall,
    SpacingTiny,
    SingleNumber,
    Quote,
    ImageResponsive
  },
  mixins: [
    locomotive
  ],
  head () {
    return {
      title: 'Pierre Le Vaillant — Designer and Creative Developer',
    }
  },
}
</script>

<style lang="scss" scoped>
.introduction {
  font-size: 5vw;

  span {
    display: block;
    text-indent: 8vw;
  }

  &-links {
    @include breakpoint('small-') {
      margin-top: 4vh;
    }
  }
}
.caps {
  text-transform: uppercase;

  p {
    letter-spacing: 0.01em;
  }
}
</style>
