<template>
  <div class="themed-image">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.themed-image {
  img {
    display: none;

    &[alt*=black] {
      @include theme(dark) {
        display: block;
      }
    }

    &[alt*=white] {
      @include theme(light) {
        display: block;
      }
    }

    &[dark] {
      @include theme(dark) {
        display: block;
      }
    }
    &[light] {
      @include theme(light) {
        display: block;
      }
    }
    &[light-colored] {
      @include theme(light-colored) {
        display: block;
      }
    }
    &[dark-colored] {
      @include theme(dark-colored) {
        display: block;
      }
    }
  }
}
</style>
