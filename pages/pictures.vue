<template>
  <section>
    <!-- <div class="absolute inset-0 w-full h-full bg-black"></div> -->
      <ul class="grid mx-4 space-y-20 my-35 lg:space-y-65 lg:mx-35 lg:my-50">
        <li class="w-1/2">
          <figure class="relative w-full h-0" style="padding-bottom: 100%;">
            <img class="absolute inset-0 object-cover w-full h-full" src="http://images.xhbtr.com/v2/uploads/images/449051/xhbtr_713a3db5-9294-4689-8718-f815af21cd18_w2000.jpg" alt="" />
          </figure>
        </li>
        <li class="w-2/5 ml-auto">
          <figure class="relative w-full h-0" style="padding-bottom: 66.66%;">
            <img class="absolute inset-0 object-cover w-full h-full" src="https://images.prismic.io/mirrormirror/1c57dd09-269b-4d91-9bb4-efeaed9f5b9b_Bea+De+Giacomo+SZ+2020+-11.jpg?" alt="" />
          </figure>
        </li>
        <li class="w-2/3">
          <figure class="relative w-full h-0" style="padding-bottom: 75%;">
            <img class="absolute inset-0 object-cover w-full h-full" src="https://images.prismic.io/mirrormirror/c84d484a-fabe-4ff2-9569-b39a4d8e68c8_Bea+De+Giacomo+SZ+2020+-4.jpg?" alt="" />
          </figure>
        </li>
        <li class="w-1/2 ml-auto">
          <figure class="relative w-full h-0" style="padding-bottom: 66.66%;">
            <img class="absolute inset-0 object-cover w-full h-full" src="https://i.ibb.co/PNNmVzG/Capture-d-e-cran-2021-05-27-a-17-48-21.png" alt="" />
          </figure>
        </li>
        <li>
          <blockquote class="f-display">"We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time."</blockquote>
          <p class="mt-5">— Alexis Foucault</p>
        </li>
        <li class="w-1/2 mx-auto">
          <figure class="relative w-full h-0" style="padding-bottom: 66.66%;">
            <img class="absolute inset-0 object-cover w-full h-full" src="https://images.prismic.io/mirrormirror/1c57dd09-269b-4d91-9bb4-efeaed9f5b9b_Bea+De+Giacomo+SZ+2020+-11.jpg?" alt="" />
          </figure>
        </li>
        <li class="w-1/2">
          <figure class="relative w-full h-0" style="padding-bottom: 75%;">
            <img class="absolute inset-0 object-cover w-full h-full" src="https://images.prismic.io/mirrormirror/c84d484a-fabe-4ff2-9569-b39a4d8e68c8_Bea+De+Giacomo+SZ+2020+-4.jpg?" alt="" />
          </figure>
        </li>
        <li class="w-1/3 ml-auto">
          <figure class="relative w-full h-0" style="padding-bottom: 66.66%;">
            <img class="absolute inset-0 object-cover w-full h-full" src="https://i.ibb.co/PNNmVzG/Capture-d-e-cran-2021-05-27-a-17-48-21.png" alt="" />
          </figure>
        </li>
      </ul>

    <div v-if="showOverview" class="fixed inset-0 z-40 w-full h-full p-4 bg-white">
      <ul class="flex flex-wrap">
        <li class="mb-2 mr-2">
          <img class="object-cover w-50 h-50" src="https://images.prismic.io/mirrormirror/5568d1b3-965c-476b-9288-1808f04ff826_Bea+De+Giacomo+SZ+2020+-8.jpg?" alt="" />
        </li>
        <li class="mb-2 mr-2">
          <img class="object-cover w-50 h-50" src="https://images.prismic.io/mirrormirror/1c57dd09-269b-4d91-9bb4-efeaed9f5b9b_Bea+De+Giacomo+SZ+2020+-11.jpg?" alt="" />
        </li>
        <li class="mb-2 mr-2">
          <img class="object-cover w-50 h-50" src="https://images.prismic.io/mirrormirror/c84d484a-fabe-4ff2-9569-b39a4d8e68c8_Bea+De+Giacomo+SZ+2020+-4.jpg?" alt="" />
        </li>
        <li class="mb-2 mr-2">
          <img class="object-cover w-50 h-50" src="https://images.prismic.io/mirrormirror/56f76a8a-5fab-4149-8021-4c3925cc7a85_Bea+De+Giacomo+SZ+2020+-3.jpg?" alt="" />
        </li>
      </ul>
    </div>

    <button class="fixed z-50 border-b border-transparent bottom-4 left-4" :class="{ 'border-black': showOverview }" @click="toggleOverview()">Overview</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showOverview: false
    }
  },
  methods: {
    toggleOverview() {
      this.showOverview = !this.showOverview
    }
  }
}
</script>