<template>
  <div class="f-body">
    <header class="fixed top-0 z-30 flex justify-between w-full p-4">
      <h1>
        <nuxt-link to='/'>Pierre Le Vaillant</nuxt-link>
      </h1>
      <!-- <ul class="flex space-x-2">
        <li>
          <Link href="/" text="Work" />
        </li>
        <li>
          <Link href="/pictures" text="Pictures" />
        </li>
        <li>
          <Link href="/info" text="Info" />
        </li>
      </ul> -->
    </header>
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>
