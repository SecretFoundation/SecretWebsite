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
  transition: 0.5s ease;
  -webkit-transition: 0.5s ease;
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
    position: relative;
    padding: $gutter;

    width: 100%;
    height: 100%;
    min-height: rem(516px);

    p {
      position: absolute;
      padding: 0;
      margin: 0;
      border-radius: $gutter-large;

      width: 100%;
      max-height: 390px;
      overflow: hidden;

      left: 0;
      bottom: 0;
      right: 0;

      img {
        width: 100%;
        object-fit: cover;
        @media (min-width: 320px) and (max-width: 390px) {
          height: rem(393px);
        }
      }
      @media (min-width: 1008px) and (max-width: 1199px) {
        max-height: rem(332px);
      } 
    }
  }
  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
}
</style>
