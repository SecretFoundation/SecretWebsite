<template>
  <div class="simple-card">
    <g-link :to="to" class="simple-card__content">
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
  }
}
</script>

<style lang="scss">
.simple-card {
  position: relative;
  border-radius: 17px;
  padding: 25px 19px;
  height: 100%;
  text-decoration: none;

  a {
    text-decoration: none;
  }

  @include theme(dark dark-colored) {
    border: 3px solid white;
  }
  @include theme(light light-colored) {
    border: 3px solid black;
  }

  &__content {
    & > h3 {
      font-size: rem(32px);
      margin: 0;
      & > strong {
        font-size: rem(22px);
      }
    }
    & > p:nth-of-type(1) {
      width: calc(100% + 40px);
      margin: 0;
      position: relative;
      left: -20px;
      bottom: -34px;
      & > img {
         width: 100%;
         object-position: bottom;
      }
    }
  }
}
</style>
