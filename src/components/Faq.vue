<template>
  <div class="faq" :class="{ 'faq__expanded': expanded }">
    <div class="faq__header" @click.stop="toggleExpand">
      <slot name="header"></slot>
    </div>
    <slot name="default"></slot>
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
  border-bottom: 1px solid var(--theme-fg);
  //margin-bottom: $gutter-large;
  p {
    display: none;
  }
  blockquote {
    display:none;
  }

  &__header{
    cursor: pointer;
    user-select: none;
    overflow:auto;
    padding-top: $gutter-large;
    h4 {
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
          background-image: url('../assets/chevron-down-light.svg');
        }
        @include theme(light light-colored) {
          background-image: url('../assets/chevron-down-dark.svg');
        }
      }
    }
  }

  &__expanded {
    &__header{
      h4 {
        &:after {
          @include theme(dark dark-colored) {
            background-image: url('../assets/chevron-up-light.svg');
          }
          @include theme(light light-colored) {
            background-image: url('../assets/chevron-up-dark.svg');
          }
        }
      }
    }
    p {
      display: block;
    }
    blockquote {
      display:block;
    }
  }
}
</style>
