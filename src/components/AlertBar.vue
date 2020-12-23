<template>
  <div class="bar" v-show="showBar">
      <p class="text">The ENG to SCRT swap is scheduled to close on Jan 1st 2021 11pm PST.</p>
      <p class="text">For more information on your options <g-link to="https://secretnodes.org/#/ss">click here</g-link>.</p>
      <div class="close" @click="showBar=false">&#10005;</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showBar: true,
    }
  },
}
</script>

<style lang="scss">
  .bar {
    background-color: #816DA8;
    top: 0;
    width: 100vw;
    height: auto;
    color: white;
    justify-content: center;
    align-items: center;
    .text {
      position: relative;
      text-align: center
    }
    a {
      color: $primary-yellow-color;
      font-weight: 600;
    }
    .close{
      position: absolute;
      right: 0;
      top: $gutter;
      padding: $gutter;
      cursor: pointer;
    }
    @include respond-to("small and down") {
      padding: $gutter rem(32px) $gutter $gutter;
      .close{
        padding: 0 rem(10px);
      }
    }
    @include respond-to("medium") {
      padding: rem(10px) rem(44px) rem(10px) $gutter;
      .close{
        padding: 0 $gutter;
      }
    }
    @include respond-to("large and up") {
      padding: $gutter;
      .close{
        padding: 0 $gutter;
      }
    }
  }
</style>