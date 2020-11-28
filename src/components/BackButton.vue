<template>
  <g-link :to="to" class="back-button">
    <themed-image>
      <g-image light light-colored src="../assets/arrow-left-blue.svg"></g-image>
      <g-image dark dark-colored src="../assets/arrow-left-turquoise.svg"></g-image>
    </themed-image>
    <span>{{ tag }}</span>
  </g-link>
</template>

<script>

export default {
  props: {
    tag: {
      type: String,
      required: false
    },
    to: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss">
.back-button {
  display: inline-block;
  padding: 10px $gutter;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  border-radius: 10px;
  margin: 0 0 $gutter 0;
  @include theme(dark dark-colored) {
    color: $secondary-turquoise-color;
    border: 1px solid $secondary-turquoise-color;
  }
  @include theme(light light-colored) {
    color: $primary-blue-color;
    border: 1px solid $primary-blue-color;
  }
  span, .themed-image {
      display: inline-block;
      vertical-align: middle;
  }
  .themed-image {
    margin-right: rem(13px);
  }
  &:hover {
    transition: 0.5s ease;
    -webkit-transition: 0.5s ease;
    @include theme(dark dark-colored) {
      background-color: $secondary-turquoise-color;
      color: var(--theme-bg);
      .themed-image {
        img {
          filter: brightness(0);
        }
      }
    }
    @include theme(light light-colored) {
      background-color: $primary-blue-color;
      color: var(--theme-bg);
      .themed-image {
        img {
          filter: brightness(0) invert(1);
        }
      }
    }
  }
  &.turquoise {
    color: $secondary-turquoise-color !important;
    border: 1px solid $secondary-turquoise-color !important;
    @include theme(light light-colored) {
      .themed-image {
        img {
          filter: #{ "contrast(4.5)" } hue-rotate(-10deg);
        }
      }
    }
    &:hover {
      transition: 0.5s ease;
      -webkit-transition: 0.5s ease;
      @include theme(light light-colored) {
        background-color: $secondary-turquoise-color;
        color: $primary-black-color !important;
        .themed-image {
          img {
            filter: brightness(0);
          }
        }
      }
      @include theme(dark dark-colored) {
        color: $primary-black-color !important;
      }
    }
  }
}
</style>
