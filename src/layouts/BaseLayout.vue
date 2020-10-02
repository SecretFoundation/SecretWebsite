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
      <g-link to="/committees/introduction">Committees</g-link>
      <g-link to="/community">Community</g-link>
      <g-link to="/developers/introduction/overview">Developers</g-link>
      <g-link to="/ecosystem/overview">Ecosystem</g-link>
      <g-link to="/about/faq">FAQ</g-link>
    </template>
    <template #actions>
      <button class="theme-selector" :class="{ 'theme-selector--dark': !darkLightModeState, 'theme-selector--light': darkLightModeState }" @click="toggleDarkLightMode"></button>
      <button class="theme-selector" :class="{ 'theme-selector--no-colored': !coloredModeState, 'theme-selector--colored': coloredModeState }" @click="toggleColoredMode"></button>
    </template>
    <base-page>
      <slot></slot>
    </base-page>
    <template #footer>
      <single-column>
        <p>This website has a secret.</p>
        <p>info@secret.foundation</p>
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
      }
    }
  };
</script>

<style lang="scss">
  .logo {
    height: 58px;
    width: auto;
  }
  body {
    &[theme*=dark] {
      .logo {
        &[src*=black] {
          display: none;
        }
        &[src*=white] {
          display: block;
        }
      }
    }
    &[theme*=light] {
      .logo {
        &[src*=black] {
          display: block;
        }
        &[src*=white] {
          display: none;
        }
      }
    }
  }
  .theme-selector {
    width: 18px;
    height: 18px;
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
  .footer {
    text-align: center;
    & p:not(:last-child) {
      margin-bottom: $gutter;
    }
  }
</style>
