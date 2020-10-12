<template>
  <div class="faq" @click.stop="toggleExpand" :class="{ 'faq__expanded': expanded }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false
    }
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded
    }
  }
}
</script>

<style lang="scss" scoped>
$-chevron-width: 10px;
$-chevron-height: 6px;

.faq {
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid var(--theme-fg);
  margin-bottom: $gutter-large;

  h3 {
    position: relative;

    &:after {
      position: absolute;
      content: "";
      background-size: $-chevron-width $-chevron-height;
      background-repeat: no-repeat;
      top: calc(100% / 2 - (#{$-chevron-height} / 2));
      right: 0;
      width: $-chevron-width;
      height: $-chevron-height;

      @include theme(dark dark-colored) {
        background-image: url('../assets/chevron-down-dark.svg');
      }
      @include theme(light light-colored) {
        background-image: url('../assets/chevron-down-light.svg');
      }
    }
  }
  p {
    display: none;
  }
  &__expanded {
    h3 {
      &:after {
        @include theme(dark dark-colored) {
          background-image: url('../assets/chevron-down-light.svg');
        }
        @include theme(light light-colored) {
          background-image: url('../assets/chevron-down-dark.svg');
        }
      }
    }
    p {
      display: block;
    }
  }
}
</style>
