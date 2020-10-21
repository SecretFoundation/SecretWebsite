<template>
  <div class="separator">
    <themed-image>
      <g-image light light-colored src="../assets/separator-black.svg"></g-image>
      <g-image dark dark-colored src="../assets/separator-white.svg"></g-image>
    </themed-image>
  </div>
</template>

<style lang="scss">
.separator {
  display: grid;

  &:not([small]) {
    @include respond-to("medium and down") {
      padding: 0 $gutter;
    }
  }

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
  &[space-xlarge] {
    margin-bottom: $gutter-xlarge;
  }

  &[center] {
    justify-content: center;
  }
}
</style>
