<template>
  <section class="grid-wrapper o-about" data-scroll-section>

    <SpacingLarge />

    <div class="grid grid-gap-xs">
      <div class="col-10@md">
        <div class="introduction js-fade" data-scroll>
          <span>French Designer and Creative Developer based in Paris, currently working at (<a href="http://www.area17.com" target="_blank">AREA 17</a>). Passionate about technology, visual communication and photography.</span><span>Aim to deliver efficient graphic systems and interfaces for cultural, commercial and editorial clients.</span>
        </div>
      </div>
      <div class="introduction-links col-2@md js-fade" style="transition-delay:.1;" data-scroll data-scroll-speed="1">
        <ul>
          <li><a href="https://www.linkedin.com/in/pierrelevaillant/" title="LinkedIn" target="_blank" rel="noopener noreferrer">↳ &nbsp;LinkedIn</a></li>
          <li><a href="https://www.instagram.com/pierre.levaillant/" title="Instagram" target="_blank" rel="noopener noreferrer">↳ &nbsp;Instagram</a></li>
          <li><a href="https://twitter.com/levaillantp" title="Twitter" target="_blank" rel="noopener noreferrer">↳ &nbsp;Twitter</a></li>
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
          <ul class="entries">
            <li>
              → <a href="https://www.area17.com/" target="_blank" rel="noopener noreferrer" title="AREA 17">AREA 17</a><br>
              Designer<br>
              (2017 — Present)
            </li>
            <li>
              → <a href="https://fantasy.co/" target="_blank" rel="noopener noreferrer" title="Fantasy Interactive">Fantasy</a><br>
              Product Design Intern<br>
              (2016)
            </li>
            <li>
              → <a href="https://www.nurun.com/" target="_blank" rel="noopener noreferrer" title="Publicis Nurun">Pubicis Nurun</a><br>
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
            <li>→ ICTs Master Degree<br><a href="https://www.hetic.net/" target="_blank" rel="noopener noreferrer" title="HETIC">HETIC</a><br>(2017)</li>
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
            <li><a href="http://www.davidlamothe.com/" target="_blank" rel="noopener noreferrer" title="David Lamothe">David Lamothe</a</li>
            <li><a href="http://www.martinrettenbacher.com/" target="_blank" rel="noopener noreferrer" title="Martin Rettenbacher">Martin Rettenbacher</a></li>
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
.introduction {
  font-size: 7vw;
  letter-spacing: -0.025rem;
  line-height: 1.05;

  a {
    font-style: italic;
  }

  @include breakpoint('medium+') {
    font-size: 5vw;
    letter-spacing: -0.1rem;
  }

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

li {
  a:hover {
    font-style: italic;
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
