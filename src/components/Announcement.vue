<template>
    <twin-columns class="announcement">
        <template v-slot:left><slot name="content-left"></slot></template>
        <template v-slot:right><slot name="content-right"></slot></template>
    </twin-columns>
</template>

<style lang="scss">
.announcement {
  background-color: $primary-purple-color;
  padding-top: rem(78px);
  padding-bottom: rem(78px);
  .twins-column {
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
    }
  }
  // properly space NextButton components when used within the Announcmement component
  .next-button {
    margin-right: 20px;
    }
}
</style>
