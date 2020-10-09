<template>
  <simple-layout>
    <template #logo>
      <g-link to="/">
        <g-image class="logo" src="../assets/secret-logo--black.svg"></g-image>
        <g-image class="logo" src="../assets/secret-logo--white.svg"></g-image>
      </g-link>
    </template>
    <template #navigation>
      <g-link to="/about/about-secret-network">About</g-link>
      <g-link to="/community">Community</g-link>
      <g-link to="/developers/introduction/overview">Developers</g-link>
      <g-link to="/ecosystem/overview">Ecosystem</g-link>
    </template>
    <template #actions>
      <button class="theme-selector" :class="{ 'theme-selector--dark': !darkLightModeState, 'theme-selector--light': darkLightModeState }" @click="toggleDarkLightMode"></button>
      <button class="theme-selector" :class="{ 'theme-selector--no-colored': !coloredModeState, 'theme-selector--colored': coloredModeState }" @click="toggleColoredMode"></button>
    </template>
    <base-page>
      <slot></slot>
    </base-page>
    <template #footer>
      <single-column class="custom-footer">
        <div class="custom-footer__content">
          <div>
            <g-image src="../assets/secret-logo--white.svg" class="custom-footer__logo"></g-image>
            <p>This website has a secret, contact us at</p>
            <p><g-link to="mailto:info@secret.foundation">info@secret.foundation</g-link></p>
            <div class="custom-footer__social">
              <g-link><g-image src="../assets/discord.svg"></g-image></g-link>
              <g-link><g-image src="../assets/telegram.svg"></g-image></g-link>
              <g-link><g-image src="../assets/twitter.svg"></g-image></g-link>
              <g-link><g-image src="../assets/youtube.svg"></g-image></g-link>
            </div>
          </div>
          <div class="custom-footer__links">
            <h4>Documentation</h4>
            <g-link to="/developers/introduction/overview">Overview</g-link>
            <g-link to="/developers/node-operators/validators/validators">For Validators</g-link>
            <g-link to="/developers/secret-contract-devs/developing-secret-contracts">For Developers</g-link>
          </div>
          <div class="custom-footer__links">
            <h4>Secret Community</h4>
            <g-link to="https://blog.scrt.network/">Secret Blog</g-link>
            <g-link to="https://chat.scrt.network/">Secret Chat</g-link>
            <g-link to="https://forum.scrt.network/">Secret Forum</g-link>
            <g-link to="/committees/introduction">Committees</g-link>
          </div>
          <div class="custom-footer__links">
            <h4>Secret Network</h4>
            <g-link to="/about/about-secret-network">About</g-link>
            <g-link to="/about/faq">FAQ</g-link>
          </div>
        </div>
        <div class="custom-footer__copy">
          <span>© Secret Network. All Rights Reserved.</span>
          <span><g-link>Terms of Service</g-link> | <g-link>Privacy Policy</g-link></span>
        </div>
      </single-column>
    </template>
  </simple-layout>
</template>

<script>
export default {
  name: 'BaseLayout',
  data() {
    return {
      theme: null,
      darkLightModeState: false, // false is dark
      coloredModeState: false, // false is not activated
    }
  },
  methods: {
    toggleDarkLightMode() {
      this.darkLightModeState = !this.darkLightModeState
      this.setTheme()
    },
    toggleColoredMode() {
      this.coloredModeState = !this.coloredModeState
      this.setTheme()
    },
    setTheme() {
      const [body] = document.getElementsByTagName('body')
      if (!body) return
      const colorMode = this.coloredModeState ? '-colored' : ''
      const darkLightMode = this.darkLightModeState ? 'light' : 'dark'
      const theme = `${darkLightMode}${colorMode}`
      body.setAttribute('theme', theme)
      this.$root.$emit('theme', theme)
    }
  }
}
</script>

<style lang="scss">
.logo {
  width: auto;
  height: rem(58px);
  &[src*=black] {
    @include theme(dark dark-colored) {
      display: none;
    }
    @include theme(light light-colored) {
      display: block;
    }
  }
  &[src*=white] {
    @include theme(dark dark-colored) {
      display: block;
    }
    @include theme(light light-colored) {
      display: none;
    }
  }
}
.theme-selector {
  width: rem(18px);
  height: rem(18px);
  border-radius: 50%;
  border: 1px solid white;

  &:not(:last-child) {
    margin-right: 5px;
  }

  &--dark {
    background-color: white;
  }
  &--light {
    background-color: $primary-black-color;
  }
  &--no-colored {
    background-color: gray;
    border: 1px solid white;
  }
  &--colored {
    background-color: #1B46FF;
  }
}
.custom-footer {
  &.single-column {
    @include respond-to("large and up") {
      padding: 0;
    }
    @include respond-to("medium and down") {
      padding: 0 rem(16px);
    }
  }
  p {
    line-height: rem(25px);
  }
  &__logo {
    width: rem(110px);
    margin-bottom: rem(20px);
  }
  &__social {
    margin-top: rem(16px);
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: rem(18px);
    grid-auto-columns: min-content;
    @include respond-to("medium and down") {
      justify-content: center;
      margin-bottom: rem(50px);
    }
  }
  &__links {
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: rem(10px);
    grid-auto-columns: max-content;
    text-align: right;

    @include respond-to("large and up") {
      justify-content: end;
      align-content: start;
    }
    @include respond-to("medium and down") {
      justify-content: center;
      text-align: center;
      margin-bottom: rem(34px);
    }

    h4 {
      font-weight: bold;
      line-height: rem(25px);
      margin-bottom: 6px; // Not the best option for spacing, but for now is fine...
    }
  }
  &__content {
    display: grid;
    padding: 0 rem(16px) rem(16px) rem(16px);

    @include respond-to("large and up") {
      grid-auto-flow: column;
    }
    @include respond-to("medium and down") {
      justify-content: center;
      text-align: center;
    }
  }
  &__copy {
    display: grid;
    box-shadow: inset 0px 2px 0px #AAAAAA;
    padding: rem(16px);

    @include respond-to("large and up") {
      grid-auto-flow: column;
      grid-template-columns: 1fr 1fr;
    }
    @include respond-to("medium and down") {
      grid-auto-flow: row;
      justify-content: center;
      text-align: center;
      grid-row-gap: rem(12px);
    }
    span {
      &:nth-of-type(2) {
        @include respond-to("large and up") {
          justify-self: end;
        }
      }
    }
  }
}
</style>
