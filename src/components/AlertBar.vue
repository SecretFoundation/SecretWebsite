<template>
  <div class="bar">
      <p class="text">
        ALERT: Earn up to 500,000 SCRT for participating in Secret Bridge Mining! Rewards go live on <span>January 12th</span> - <g-link class=“alert-link” to="/blog/secret-ethereum-bridge-mining">click here</g-link> to learn more.
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
    p {
       font-family: Hind,sans-serif;
    }
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
