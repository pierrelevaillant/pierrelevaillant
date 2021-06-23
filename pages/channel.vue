<template>
  <ul class="grid grid-cols-2">
    <template v-for="content in contents" v-key="content.id">
      <li v-if="content.image">
        <figure>
          <img :src="content.image.display.url" />
        </figure>
      </li>
    </template>
  </ul>
</template>

<script>
  export default {
    async asyncData({ $http }) {
      const channel = await $http.$get('https://api.are.na/v2/channels/photography-1481144697')

      return {
        contents: channel.contents
      }
    }
  }
</script>
