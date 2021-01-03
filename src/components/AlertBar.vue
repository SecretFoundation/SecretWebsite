<template>
  <div class="bar">
      <p class="text">
        ALERT: The ENG to SCRT swap is scheduled to close on <span>Jan 4th, 2021 at 10pm UTC</span>. For more information on your options <g-link class=“alert-link” to="https://secretnodes.org/#/ss">click here</g-link>.
      </p>
      <div class="close" v-on:click="closeBar()">&times;</div>
  </div>
</template>

<script>
export default {
  methods: {
    closeBar () {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss"> 
  .bar {
    background-color: var(--primary-purple-color);
    position: fixed;
    top: 0;
    z-index: 10005;
    width: 100vw;
    @include respond-to("small and down") {
      height: 80px;
      padding: 0 30px;
    }
    @include respond-to("medium") {
      height: 50px;
      padding: 0 75px;
    }
    @include respond-to("large and up") {
      height: 40px;
    }
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    position: relative;
    span {
      font-weight: bold;
    }
    a:link {
      color: #00B3EA;
      font-weight: bold;
    }
    a:visited {
      color: #00B3EA;
      font-weight: bold;
    }
  }

  .close{
    font-size: 24px;
    position: absolute;
    right: 0;
    padding: 12px 10px 8px 10px;
    cursor: pointer;
  }
</style>
