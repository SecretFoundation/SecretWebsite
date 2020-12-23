<template>
  <div class="bar">
      <p class="text">
        ALERT: The ENG to SCRT swap is scheduled to close on <span>Jan 1st 2021 11pm PST</span>. For more information on your options <g-link class=“alert-link” to="https://secretnodes.org/#/ss">click here</g-link>
      </p>
      <div class="close" v-on:click="closeBar()">X</div>
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
    @include respond-to("medium and up") {
      height: 30px;
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
      color: var(--primary-blue-color);
    }
    a:visited {
      color: var(--primary-blue-color);
    }
  }

  .close{
    position: absolute;
    right: 0;
    padding: 10px;
    cursor: pointer;
  }
</style>
