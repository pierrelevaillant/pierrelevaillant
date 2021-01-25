<template>
  <section class="m-4 text-lg leading-none sm:text-xl md:text-2xl xl:text-3xl" data-scroll-container>
      <h1 class="grid grid-cols-2 gap-4" data-scroll-section>
        <span>Pierre</span>
        <span>Le Vaillant</span>
      </h1>

      <div class="grid grid-cols-2 gap-4 mt-4" data-scroll-section>
        <h2 class="col-span-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <p>Product Designer and Interface Engineer based in Paris, currently working at (<a href="http://www.area17.com" target="_blank" rel="noopener nofollow">AREA 17</a>) and freelancing. Passionate about technology, visual communication and photography.</p>
          <p>Aim to deliver efficient graphic systems and interfaces for cultural, commercial and editorial clients.</p>
        </h2>

        <h3>Experiences</h3>

        <ul class="space-y-4">
          <li>
            → &nbsp;<a href="https://www.area17.com/" target="_blank" rel="noopener nofollow">AREA 17</a><br>
            Designer & Interface Engineer<br>
            (2017 — Present)
          </li>
          <li>
            → &nbsp;<a href="https://fantasy.co/" target="_blank" rel="noopener nofollow">Fantasy</a><br>
            Product Designer Intern<br>
            (2016)
          </li>
          <li>
            → &nbsp;<a href="https://www.nurun.com/" target="_blank" rel="noopener nofollow">Pubicis Nurun</a><br>
            Junior Art Director<br>
            (2015)
          </li>
        </ul>

        <h3>Education</h3>

        <ul class="space-y-4">
          <li>→ ICTs Master Degree<br><a href="https://www.hetic.net/" target="_blank" rel="noopener nofollow">HETIC</a><br>(2017)</li>
          <li>→ Computing Sciences DUT<br>Université du Maine<br>(2014)</li>
        </ul>

        <h3>Disciplines</h3>

        <ul>
          <li>Art direction</li>
          <li>Photography</li>
          <li>User Interface design</li>
          <li>Brand books & guidelines</li>
          <li>Design system</li>
          <li>Mobile / App design</li>
          <li>Front-end development</li>
        </ul>

        <h3>Selected Clients</h3>

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

        <h3>Special thanks</h3>

        <ul>
          <li>
            <a href="https://petesmart.co.uk/" target="_blank" rel="noopener nofollow">Peter Smart</a>
          </li>
          <li>
            <a href="http://www.davidlamothe.com/" target="_blank" rel="noopener nofollow">David Lamothe</a>
          </li>
          <li>
            <a href="http://www.martinrettenbacher.com/" target="_blank" rel="noopener nofollow">Martin Rettenbacher</a>
          </li>
        </ul>
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
      title: 'Pierre Le Vaillant – Designer and Interface Engineer',
    }
  },
}
</script>
