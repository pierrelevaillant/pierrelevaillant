<template>
  <nav class="grid grid-gap-xs">
      <div class="col-6">
        <!-- <nuxt-link to="/" class="root">Pierre Le Vaillant</nuxt-link> -->
      </div>
      <div class="col-6">
        <nuxt-link to="/">Info</nuxt-link>,&nbsp;
        <nuxt-link to="/jpgs" class="">JPGS</nuxt-link>
      </div>
  </nav>
</template>

<script>
import { store } from "~/store/store.js";

export default {
  computed: {
    navStyle() {
      console.debug("STORE ISNAMVAL", store.isNavSmall);
      return {
        padding: store.isNavSmall ? "4px 0" : "10px 0"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  padding: var(--spacing-small);
  width: 100vw;
  align-items: center;
  position: fixed;
  z-index: 5;

  & > div:last-child {
    text-align: right;
  }

  a {
    text-transform: uppercase;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      height: 1px;
      background: var(--color-black);
      bottom: 0;
      -webkit-transition: all .5s cubic-bezier(1,0,.29,1) .3s;
      transition: all .5s cubic-bezier(1,0,.29,1) .3s;
      right: 0;
      width: 0;
    }

    &.nuxt-link-exact-active:not(.root) {
      &:after {
        left: 0;
        right: auto;
        width: 100%;
      }
    }
  }
}
</style>
