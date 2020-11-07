<template>
  <g-link :to="to" class="blue-button">
    <span>{{ tag }}</span>
    <themed-image>
      <g-image light light-colored src="../assets/arrow-right-blue.svg"></g-image>
      <g-image dark dark-colored src="../assets/arrow-right-turquoise.svg"></g-image>
    </themed-image>
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
.blue-button {
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
      margin-left: rem(13px);
  }
}
</style>
