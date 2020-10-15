<template>
  <div class="home-card">
    <g-link :to="to">
      <slot></slot>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false
    }
  },
}
</script>

<style lang="scss">
$-strong-font-size: 24px;

.home-card {
  border: 3px solid var(--theme-fg);
  border-radius: rem($gutter-large);

  h3 > strong {
    font-size: $-strong-font-size;
  }

  a {
    text-decoration: none;
  }

  &[horizontal] {
    position: relative;

    width: 100%;
    height: 100%;
    min-height: 258px;
    overflow: hidden;

    padding: $gutter;

    @include respond-to("medium and down") {
      min-height: 528px;
    }

    p {
      width: 100%;
      height: 100%;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: -1;
      }
    }
  }

  &[vertical] {
    padding: $gutter;
    height: 100%;

    p {
      position: relative;
      padding: 0;
      margin: 0;

      width: calc(100% + #{$gutter * 2});
      height: 100%;
      left: - $gutter;
      bottom: - $gutter;

      img {
        width: 100%;
      }
    }
  }
}
</style>
