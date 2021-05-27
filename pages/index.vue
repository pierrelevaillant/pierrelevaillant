<template>
  <section class="m-4">
      <div class="grid grid-cols-2 pt-7 lg:pt-10 gap-y-15 lg:gap-y-35">
        <!-- <h1 class="grid grid-cols-2 col-span-full">
          <span>Pierre</span>
          <span>Le Vaillant</span>
        </h1> -->

        <h2 class="col-span-full f-display">
          <p>Product Designer and Interface Engineer based in Paris, currently working at (<a href="http://www.area17.com" target="_blank" rel="noopener nofollow">AREA 17</a>) and freelancing. Passionate about technology, visual communication and photography.</p>
          <p>Aim to deliver efficient graphic systems and interfaces for cultural, commercial and editorial clients.</p>
        </h2>

        <div class="relative grid col-span-full gap-y-4">
          <h2 class="f-display">FEATURED</h2>
          <video class="w-full h-auto" loop muted autoplay :src="require('~/assets/celine.mp4')"></video>
          <div>
            <p><a class="link-absolute" href="https://www.celine.com" target="_blank" rel="noopener noreferer">A new scalable, homogeneous and sustainable e-commerce platform for CELINE.com</a></p>
            <p><span class="opacity-50">Role:</span> Interface Engineer</p>
          </div>
        </div>

        <!-- < <div class="text-sm col-span-full">
          <div class="grid w-full grid-cols-6 opacity-50">
            <div>Year</div>
            <div>Client</div>
            <div>Type</div>
            <div>Role</div>
            <div>Agency</div>
          </div>
          <div class="grid w-full grid-cols-6">
            <div>2021</div>
            <div>Doconomy</div>
            <div>App</div>
            <div>Interface Engineer</div>
            <div>Freelance</div>
            <div class="text-right">Visit</div>
          </div>
          <div class="grid w-full grid-cols-6">
            <div>2021</div>
            <div>Doconomy</div>
            <div>E-commerce, Art Direction</div>
            <div>Interface Engineer</div>
            <div>AREA 17</div>
          </div>
          <div class="grid w-full grid-cols-6">
            <div>2021</div>
            <div>Doconomy</div>
            <div>Art Direction</div>
            <div>Interface Engineer</div>
            <div>AREA 17</div>
            <div class="text-right">Visit</div>
          </div>
          <div class="grid w-full grid-cols-6">
            <div>2021</div>
            <div>Doconomy</div>
            <div>Website, Identity</div>
            <div>Product designer</div>
            <div>Freelance</div>
            <div class="text-right">Visit</div>
          </div>
          <div class="grid w-full grid-cols-6">
            <div>2021</div>
            <div>Doconomy</div>
            <div>Website, Identity</div>
            <div>Interface Engineer</div>
            <div>Freelance</div>
          </div>
          <div class="grid w-full grid-cols-6">
            <div>2021</div>
            <div>Doconomy</div>
            <div>App</div>
            <div>Interface Engineer</div>
            <div>AREA 17</div>
          </div>
          <div class="grid w-full grid-cols-6">
            <div>2021</div>
            <div>Doconomy</div>
            <div>Website, Identity</div>
            <div>Product designer</div>
            <div>Publicis Nurun</div>
            <div class="text-right">Visit</div>
          </div>
          <div class="grid w-full grid-cols-6">
            <div>2021</div>
            <div>Doconomy</div>
            <div>App</div>
            <div>Art director</div>
            <div>Fantasy Interactive</div>
            <div class="text-right">Visit</div>
          </div>
        </div> -->
      </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Pierre Le Vaillant – Designer and Interface Engineer',
    }
  },
}
</script>
