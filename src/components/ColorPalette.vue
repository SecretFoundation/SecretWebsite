<template>
  <div class="color-palette">
    <div class="color-palette__color" :style="{ backgroundColor: hex }"></div>
    <div class="color-palette__text">
      <p>{{ hex }}</p>
      <p>{{ rgb }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hex: {
      type: String,
      required: false
    },
    rgb: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.color-palette {
  $root: &;
  width: 100%;
  @each $name, $color in $secondary-colors {
    &[color=#{$name}] a:hover {
      color: var(--#{$name}-color);
    }
  }
  &__color {
    height: rem(115px);
    width: 100%;
  }
  &__text {
    margin-top: $gutter;
    p {
      margin-bottom: 0;
    }
  }
}
</style>