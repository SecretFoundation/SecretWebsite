<template>
    <twin-columns class="announcement">
        <template v-slot:left><slot name="content-left"></slot></template>
        <template v-slot:right><slot name="content-right"></slot></template>
    </twin-columns>
</template>

<style lang="scss">
.announcement {
  background-color: $primary-purple-color;
  padding: 0;
  .twins-column {
    padding-top: rem(78px);
    padding-bottom: rem(78px);
    &--start {
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
        img {
          vertical-align: middle;
          margin-left: 10px;
        }
      }
      .read-more-button {
        display: inline-block;
        padding: 10px $gutter;
        border-radius: 10px;
        margin: 0 0 $gutter 0;
        border: 1px solid $secondary-turquoise-color;
        p {
          display: inline-block;
          margin: 0;
          span {
            display: inline-block;
            vertical-align: middle;
            font-weight: bold;
            font-size: 20px;
            text-decoration: none;
            color: $secondary-turquoise-color;
          }
        }
        .g-image {
            display: inline-block;
            vertical-align: middle;
            margin-left: rem(13px);
        }
      }
    }
    @include respond-to("medium and down") {
      padding-top: $gutter;
      padding-bottom: $gutter;
    }
  }
}
</style>
