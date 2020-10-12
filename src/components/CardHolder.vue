<template>
  <single-column class="card-holder" :class="{ 'card-holder--bi': columns == 2 }">
    <grid :columns="columns">
      <slot></slot>
    </grid>
  </single-column>
</template>

<script>
export default {
  props: {
    columns: {
      type: String,
      default: '3'
    }
  }
}
</script>

<style lang="scss">
.card-holder {
  &.column {
    padding: 0 $gutter;
  }

  &--bi {
    .card {
      &:nth-of-type(1) {
        @include respond-to("large and up") {
          justify-self: end;
        }
      }
      &:nth-of-type(2) {
        @include respond-to("large and up") {
          justify-self: start;
        }
      }
    }
  }
}
</style>
