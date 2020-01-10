<template>
  <section class="container o-about" data-scroll-section>

    <SpacingLarge />

    <div class="grid grid-gap-xs">
      <div class="col-10">
      <blockquote>
        <p><span>French Designer and Creative Developer based in Paris, currently working at (<a href="http://www.area17.com" target="_blank">AREA 17</a>). Passionate about technology, visual communication and photography.</span><span>Aim to deliver efficient graphic systems and interfaces for cultural, commercial and editorial clients.</span></p>
      </blockquote>
      </div>
      <div class="col-2">
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
        <div class="col-6 caps">
          <p>Experiences</p>
        </div>
        <div class="col-6">
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
        <div class="col-6 caps">
          <p>Education</p>
        </div>
        <div class="col-6">
          <ul>
            <li>→ ICTs Master Degree<br>HETIC<br>(2017)<br><br></li>
            <li>→ Computing Sciences DUT<br>Université du Maine<br>(2014)</li>
          </ul>
        </div>
        <SpacingSmall />
        <div class="col-6 caps">
          <p>Disciplines</p>
        </div>
        <div class="col-6">
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
          </ul>
        </div>
        <SpacingSmall />
        <hr>
        <div class="col-6 caps">
          <p>Selected Clients</p>
        </div>
        <div class="col-6">
          <ul>
            <li>Netflix</li>
            <li>Mitsubishi</li>
            <li>Pentagram</li>
            <li>Le Parisien</li>
            <li>Nokia</li>
            <li>Salon des Entrepreneurs</li>
            <li>Van Cleef & Arpels</li>
            <li>Do The Green Thing</li>
            <li>Céline</li>
          </ul>
        </div>
        <SpacingSmall />
        <div class="col-6 caps">
          <p>Special thanks</p>
        </div>
        <div class="col-6">
          <ul>
            <li>David Lamothe</li>
            <li>Martin Rettenbacher</li>
            <li></li>
          </ul>
        </div>
      </div>

      <SpacingLarge />

      <svg class="svg" viewBox="0 0 708 1063" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M77.7706 1.52393C43.5204 56.5044 14.7762 121.711 4.9288 185.978C1.49475 208.39 -3.59292 233.164 14.8312 249.421C41.4002 272.864 78.5601 279.803 112.681 283.66C175.066 290.712 238.048 294.557 300.66 299.101C386.117 305.304 477.649 325.128 544.193 383.524C560.388 397.736 577.702 412.096 583.467 433.875C589.453 456.489 586.192 486.324 584.977 509.402C582.867 549.509 561.919 589.577 524.891 608.091C505.362 617.856 480.277 620.207 459.099 624.539C442.44 627.947 427.405 633.893 410.09 632.931C401.171 632.436 399.734 604.697 398.677 598.356C396.33 584.271 388.35 562.525 405.894 556.061C427.363 548.151 457.249 544.849 479.407 550.019C493.517 553.311 498.875 567.683 502.065 580.733C507.501 602.971 513.282 625.837 517.339 648.372C521.683 672.505 530.177 713.92 517.003 736.151C498.059 768.119 454.332 791.678 422.51 808.993C416.347 812.346 338.945 839.597 337.584 822.588C334.959 789.778 391.577 800.973 411.768 803.455C508.38 815.329 569.004 895.98 627.608 963.908C651.234 991.292 675.384 1018.51 695.751 1048.5C698.939 1053.19 701.328 1059.51 706.157 1061.93" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

<!--
      <footer class="o-footer grid grid-gap-xs" data-scroll>
          <div class="col-6 overflow">
            <p><a href="#" @click.native="$moveTo">Back to top</a></p>
          </div>
          <div class="col-6 overflow">
            <p>© {{ new Date().getFullYear() }}</p>
          </div>
      </footer> -->

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
      title: 'About — Pierre Le Vaillant',
    }
  },
}
</script>

<style lang="scss">
.o-about {
  //background: linear-gradient(180deg, #2D1821 0%, #EB5D38 16.15%, #31191F 18.75%, #F46440 34.38%, #DDD9D7 38.02%, #0A7FE2 65.1%), #C4C4C4;
  // background-color: #DBDBDB;
  // color: #266339;

  &__paragraph {
    text-align: center;
    text-transform: uppercase;
  }
}

.svg {
  position: absolute;
  left: 50%;
  top: 10vw;
  transform: translateX(-50%);
  user-select: none;
}

.caps {
  text-transform: uppercase;
  p {
    letter-spacing: 0.01em;
  }
}

.o-footer {
  padding-bottom: var(--spacing-small);
}
</style>
