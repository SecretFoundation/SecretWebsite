<template>
  <div class="committee">
    <div class="committee__header">
      <slot name="header"></slot>
    </div>
    <div class="committee__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.committee {
  $root: &;
  border: 3px solid;
  border-radius: 22px;
  width: 100%;
  height: 100%;

  @each $name, $color in $primary-colors {
    &[#{$name}] {
      border-color: var(--#{$name}-color);
      a:not([aria-hidden=true]) {
        background-color: var(--#{$name}-color);
      }
      @at-root & #{$root}__header {
        border-color: var(--#{$name}-color);
      }
    }
  }

  &__header {
    padding: rem($gutter);
    border-bottom: 3px solid;

    p {
      margin: 0;
    }

    p:nth-of-type(2) {
      font-size: rem(21px);
      font-weight: bold;
    }

    a:not([aria-hidden=true]) {
      display: block;
      width: 100%;
      padding: rem(10px) 0;
      text-decoration: none;
      text-align: center;
      font-weight: bold;
      border-radius: 10px;
      margin-top: $gutter;
    }
  }

  &__body {
    padding: rem($gutter);

    h5 {
      font-weight: bold;
    }
  }
}
</style>
