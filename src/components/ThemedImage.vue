<template>
  <div class="themed-image">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.themed-image {
  img {
    display: none;

    &[dark] {
      @include theme(light) {
        display: block;
      }
    }
    &[light] {
      @include theme(dark) {
        display: block;
      }
    }
    &[dark-colored] {
      @include theme(dark-colored) {
        display: block;
      }
    }
    &[light-colored] {
      @include theme(light-colored) {
        display: block;
      }
    }
  }
}
</style>
