<template>
  <div class="simple-section" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'var(--theme-fg)'
    },
    backgroundColor: {
      type: String,
      required: false,
      default: 'var(--theme-bg)'
    }
  },
  computed: {
    style() {
      return {
        'color': this.color,
        'background-color': this.backgroundColor
      }
    }
  }
}
</script>

<style lang="scss">
.simple-section {
  padding: $gutter-xxlarge 0;

  & * {
    color: inherit;
  }
}
</style>
