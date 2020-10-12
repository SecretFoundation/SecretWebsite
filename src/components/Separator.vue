<template>
  <div class="separator">
    <g-image class="separator--black" src="../assets/separator-black.svg"></g-image>
    <g-image class="separator--white" src="../assets/separator-white.svg"></g-image>
  </div>
</template>

<style lang="scss">
.separator {
  &[small] {
    img {
      max-width: rem(200px);
    }
  }

  &[space-small] {
    margin-bottom: $gutter;
  }
  &[space-large] {
    margin-bottom: $gutter-large;
  }

  img {
    display: none;

    &.separator--black {
      @include theme(light light-colored) {
        display: block;
      }
    }
    &.separator--white {
      @include theme(dark dark-colored) {
        display: block;
      }
    }
  }
}
</style>
