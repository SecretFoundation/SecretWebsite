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
$chevron-width: 10px;
$chevron-height: 6px;

.faq {
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid var(--theme-fg);
  margin-bottom: $gutter-large;

  h3 {
    position: relative;

    &:after {
      background-image: url('../assets/chevron-down.svg');
      background-size: $chevron-width $chevron-height;
      background-repeat: no-repeat;
      content: "";
      position: absolute;
      top: calc(100% / 2 - (#{$chevron-height} / 2));
      right: 0;
      width: $chevron-width;
      height: $chevron-height;
    }
  }
  p {
    display: none;
  }
  &__expanded {
    h3 {
      &:after {
        background-image: url('../assets/chevron-up.svg');
      }
    }
    p {
      display: block;
    }
  }
}

body {
  &[theme*=dark] {
    h3 {
      &:after {
        background-image: url('../assets/chevron-down-white.svg');
      }
    }
    .faq__expanded {
      h3 {
        &:after {
          background-image: url('../assets/chevron-up-white.svg');
        }
      }
    }
  }
}
</style>
