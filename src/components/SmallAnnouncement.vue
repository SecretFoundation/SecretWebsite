<template>
    <triplet-columns class="small-announcement">
        <template v-slot:left><slot name="content"></slot></template>
    </triplet-columns>
</template>

<style lang="scss">
.triplets-columns {
  &.small-announcement {
    background-color: unset;
    @media (min-width: 320px) and (max-width: 1199px) {
      background-color: $primary-purple-color;
      grid-template-columns: 100%;
      margin-top: $gutter-xxxlarge;
    }
    .triplets-columns {
      &__section {
        padding-top: rem(78px);
        padding-bottom: rem(78px);
        &:first-child {
          background-color: $primary-purple-color;
          grid-column: 1 / span 2;
          @media (min-width: 320px) and (max-width: 1199px) {
            grid-column: 1 / span 1;
            padding: $gutter;
            width: 100%;
            margin: 0 auto;
          }
          @media (min-width: 1008px) and (max-width: 1199px) {
            width: 1008px;
          }
        }
        &:not(:first-child) {
          display: none;
        }
      }
      &__column {
        width: rem(800px);
        text-align: left;
        padding-right: rem(120px);
        h4 {
        font-size: 24px;
        color: white;
        }
        h3 {
          color: white;
        }
        p {
          color: white;
          a {
            text-decoration: none;
            color: $secondary-turquoise-color;
          }
        }
        @media (min-width: 320px) and (max-width: 1199px) {
          width: 100%;
          padding: $gutter 0;
        }
      }
    }
  }
}
</style>
