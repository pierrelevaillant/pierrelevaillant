<template>
  <section class="grid-wrapper">

    <SpacingLarge />

    <div class="grid" data-scroll-section>
      <div class="col-10@lg">
        <div class="introduction js-fade" data-scroll>
          <span>French Designer and Creative Developer based in Paris, currently working at (<a href="http://www.area17.com" target="_blank">AREA 17</a>). Passionate about technology, visual communication and photography.</span><span>Aim to deliver efficient graphic systems and interfaces for cultural, commercial and editorial clients.</span>
        </div>
      </div>
      <div class="introduction-links col-2@lg js-fade" style="transition-delay:.1;" data-scroll>
        <ul>
          <li><a href="https://www.linkedin.com/in/pierrelevaillant/" title="LinkedIn" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
          <li><a href="https://www.instagram.com/pierre.levaillant/" title="Instagram" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
          <li><a href="https://twitter.com/levaillantp" title="Twitter" target="_blank" rel="noopener noreferrer">TWITTER</a></li>
        </ul>
      </div>
    </div>

    <SpacingLarge />

    <div data-scroll-section>
      <div class="grid grid-gap-xs">
        <div class="col-6 caps js-fade" data-scroll>
          <p>Experiences</p>
        </div>
        <div class="col-6 js-fade" data-scroll>
          <ul class="entries">
            <li>
              → &nbsp;<a href="https://www.area17.com/" target="_blank" rel="noopener nofollow" >AREA 17</a><br>
              Designer & Interface Engineer<br>
              (2017 — Present)
            </li>
            <li>
              → &nbsp;<a href="https://fantasy.co/" target="_blank" rel="noopener nofollow">Fantasy</a><br>
              Product Design Intern<br>
              (2016)
            </li>
            <li>
              → &nbsp;<a href="https://www.nurun.com/" target="_blank" rel="noopener nofollow">Pubicis Nurun</a><br>
              Junior Art Director<br>
              (2015)
            </li>
          </ul>
        </div>
        <SpacingSmall />
        <div class="col-6 caps js-fade" data-scroll>
          <p>Education</p>
        </div>
        <div class="col-6 js-fade" data-scroll>
          <ul class="entries">
            <li>→ ICTs Master Degree<br><a href="https://www.hetic.net/" target="_blank" rel="noopener nofollow">HETIC</a><br>(2017)</li>
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
            <li>Design system</li>
            <li>Mobile / App design</li>
            <li>Front-end development</li>
          </ul>
        </div>
        <SpacingSmall />
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
            <li>Celine</li>
          </ul>
        </div>
        <SpacingSmall />
        <div class="col-6 caps js-fade" data-scroll>
          <p>Special thanks</p>
        </div>
        <div class="col-6 js-fade" data-scroll>
          <ul>
            <li><a href="https://petesmart.co.uk/" target="_blank" rel="noopener nofollow">Peter Smart</a></li>
            <li><a href="http://www.davidlamothe.com/" target="_blank" rel="noopener nofollow">David Lamothe</a></li>
            <li><a href="http://www.martinrettenbacher.com/" target="_blank" rel="noopener nofollow">Martin Rettenbacher</a></li>
          </ul>
        </div>
      </div>
      <SpacingLarge />
    </div>
  </section>
</template>

<script>
import locomotive from "~/mixins/locomotive.js";

export default {
  mixins: [
    locomotive
  ],
  head () {
    return {
      title: 'Pierre Le Vaillant – Designer and Creative Developer',
    }
  },
}
</script>

<style lang="scss" scoped>

:hover,
:active {
  outline: none;
}

:focus {
  outline: none;
  border: 1px dotted #000;
}

.introduction {
  font-size: 8vw;
  letter-spacing: -0.025rem;
  line-height: 100%;
  padding-right: 2%;

  a {
    font-style: normal;
  }

  @include breakpoint('medium+') {
    font-size: 6vw;
    letter-spacing: -0.075rem;
  }

  @include breakpoint('large+') {
    padding-right: 0;
    font-size: 5.5vw;
    letter-spacing: -0.1rem;
  }

  span {
    display: block;
    text-indent: 8vw;
  }

  &-links {
    margin-top: 2vh;

    a {
      position: relative;
      padding-left: 1.6rem;

      &::before {
        content: '↗';
        left: 0;
        top: -4px;
        font-size: 120%;
        position: absolute;
        display: inline-block;
      }

      @include breakpoint('large+') {
        padding-left: 2rem;
      }
    }
  }
}

li + li {
  margin-top: 5px;
}

.entries li + li {
  margin-top: var(--spacing-tiny);
}

.caps {
  text-transform: uppercase;

  p {
    letter-spacing: 0.01em;
  }
}
</style>
