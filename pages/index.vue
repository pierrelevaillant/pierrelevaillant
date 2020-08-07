<template>
  <div class="m-4 grid grid-cols-2 gap-4 row-gap-32 text-xl sm:text-2xl lg:text-3xl leading-none">
    <div>Pierre</div>
    <div>Le Vaillant</div>
    <div class="col-span-2 text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
      <div class="max-w-6xl">
        <p>Product Designer and Interface Engineer based in Paris, currently working at (<a class="font-serif" href="http://www.area17.com" target="_blank">AREA 17</a>) and freelancing. Passionate about technology, visual communication and photography.</p>
        <p class="indent-md">Aim to deliver efficient graphic systems and interfaces for cultural, commercial and editorial clients.</p>
      </div>
    </div>

        <div class="js-fade" data-scroll>
          <p>Experiences</p>
        </div>
        <div class="js-fade" data-scroll>
          <ul>
            <li>
              → &nbsp;<a href="https://www.area17.com/" target="_blank" rel="noopener nofollow" >AREA 17</a><br>
              Designer & Interface Engineer<br>
              (2017 — Present)
            </li>
            <li class="mt-4">
              → &nbsp;<a href="https://fantasy.co/" target="_blank" rel="noopener nofollow">Fantasy</a><br>
              Product Design Intern<br>
              (2016)
            </li>
            <li class="mt-4">
              → &nbsp;<a href="https://www.nurun.com/" target="_blank" rel="noopener nofollow">Pubicis Nurun</a><br>
              Junior Art Director<br>
              (2015)
            </li>
          </ul>
        </div>
        <div class="caps js-fade" data-scroll>
          <p>Education</p>
        </div>
        <div class="js-fade" data-scroll>
          <ul>
            <li>→ ICTs Master Degree<br><a href="https://www.hetic.net/" target="_blank" rel="noopener nofollow">HETIC</a><br>(2017)</li>
            <li class="mt-4">→ Computing Sciences DUT<br>Université du Maine<br>(2014)</li>
          </ul>
        </div>
        <div class="js-fade" data-scroll>
          <p>Disciplines</p>
        </div>
        <div class="js-fade" data-scroll>
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
        <div class="js-fade" data-scroll>
          <p>Selected Clients</p>
        </div>
        <div class="js-fade" data-scroll>
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
        <div class="js-fade" data-scroll>
          <p>Special thanks</p>
        </div>
        <div class="js-fade" data-scroll>
          <ul>
            <li><a href="https://petesmart.co.uk/" target="_blank" rel="noopener nofollow">Peter Smart</a></li>
            <li><a href="http://www.davidlamothe.com/" target="_blank" rel="noopener nofollow">David Lamothe</a></li>
            <li><a href="http://www.martinrettenbacher.com/" target="_blank" rel="noopener nofollow">Martin Rettenbacher</a></li>
          </ul>
        </div>
    </div>
  </div>
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

<style scoped>
.indent-md {
  text-indent: 5vw;
}
</style>