<template>
  <div class="container">
    <p>Loading the Prismic's Preview...</p>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  async asyncData({ query, redirect, $prismic }) {
    let previewToken = query.token
    const url = await $prismic.api.previewSession(previewToken, '/')

    console.log(url);

    // redirect(url)
  },
}
</script>
