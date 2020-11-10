<template>
  <simple-layout>
    <template #logo>
      <g-link to="/">
        <themed-image>
          <g-image light light-colored class="logo" src="../assets/secret-logo--black.svg" immediate="true"></g-image>
          <g-image dark dark-colored class="logo" src="../assets/secret-logo--white.svg" immediate="true"></g-image>
        </themed-image>
      </g-link>
    </template>
    <template #navigation>
      <g-link cream to="/about/about-secret-network">About</g-link>
      <g-link red to="/blog">Blog</g-link>
      <g-link purple to="/community">Community</g-link>
      <g-link yellow to="/developers">Developers</g-link>
      <g-link orange to="/ecosystem/overview">Ecosystem</g-link>
      <g-link blue to="https://forum.scrt.network/">Forum</g-link>
      <div class="social-networks__mobile">
        <g-link to="https://github.com/SecretFoundation/SecretWebsite">
          <themed-image>
            <g-image dark dark-colored src="@/assets/github-white.svg" immediate="true"></g-image>
            <g-image light light-colored src="@/assets/github-black.svg" immediate="true"></g-image>
          </themed-image>
        </g-link>
        <g-link to="https://discord.com/invite/SJK32GY">
          <themed-image>
            <g-image dark dark-colored src="@/assets/discord-white.svg" immediate="true"></g-image>
            <g-image light light-colored src="@/assets/discord-black.svg" immediate="true"></g-image>
          </themed-image>
        </g-link>
        <g-link to="https://t.me/SCRTcommunity">
          <themed-image>
            <g-image dark dark-colored src="@/assets/telegram-white.svg" immediate="true"></g-image>
            <g-image light light-colored src="@/assets/telegram-black.svg" immediate="true"></g-image>
          </themed-image>
        </g-link>
        <g-link to="https://twitter.com/SecretNetwork">
          <themed-image>
            <g-image dark dark-colored src="@/assets/twitter-white.svg" immediate="true"></g-image>
            <g-image light light-colored src="@/assets/twitter-black.svg" immediate="true"></g-image>
          </themed-image>
        </g-link>
        <g-link to="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw">
          <themed-image>
            <g-image dark dark-colored src="@/assets/youtube-white.svg" immediate="true"></g-image>
            <g-image light light-colored src="@/assets/youtube-black.svg" immediate="true"></g-image>
          </themed-image>
        </g-link>
      </div>
    </template>
    <template #actions>
      <div class="social-networks">
        <g-link to="https://github.com/SecretFoundation/SecretWebsite">
          <themed-image>
            <g-image dark dark-colored src="@/assets/github-white.svg" immediate="true"></g-image>
            <g-image light light-colored src="@/assets/github-black.svg" immediate="true"></g-image>
          </themed-image>
        </g-link>
        <g-link to="https://discord.com/invite/SJK32GY">
          <themed-image>
            <g-image dark dark-colored src="@/assets/discord-white.svg" immediate="true"></g-image>
            <g-image light light-colored src="@/assets/discord-black.svg" immediate="true"></g-image>
          </themed-image>
        </g-link>
        <g-link to="https://t.me/SCRTcommunity">
          <themed-image>
            <g-image dark dark-colored src="@/assets/telegram-white.svg" immediate="true"></g-image>
            <g-image light light-colored src="@/assets/telegram-black.svg" immediate="true"></g-image>
          </themed-image>
        </g-link>
        <g-link to="https://twitter.com/SecretNetwork">
          <themed-image>
            <g-image dark dark-colored src="@/assets/twitter-white.svg" immediate="true"></g-image>
            <g-image light light-colored src="@/assets/twitter-black.svg" immediate="true"></g-image>
          </themed-image>
        </g-link>
        <g-link to="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw">
          <themed-image>
            <g-image dark dark-colored src="@/assets/youtube-white.svg" immediate="true"></g-image>
            <g-image light light-colored src="@/assets/youtube-black.svg" immediate="true"></g-image>
          </themed-image>
        </g-link>
      </div>
      <div class="toggles">
        <button @click="toggleDarkLightMode">
          <themed-image>
            <g-image dark dark-colored src="@/assets/moon.svg" immediate="true"></g-image>
            <g-image light light-colored src="@/assets/sun.svg" immediate="true"></g-image>
          </themed-image>
        </button>
        <button @click="toggleColoredMode">
          <themed-image>
            <g-image dark light src="@/assets/mono.svg" immediate="true"></g-image>
            <g-image dark-colored light-colored src="@/assets/chromo.svg" immediate="true"></g-image>
          </themed-image>
        </button>
      </div>
    </template>
    <template #nav-toggle>
      <themed-image>
        <g-image light light-colored src="@/assets/menu-black.svg"></g-image>
        <g-image dark dark-colored src="@/assets/menu-white.svg"></g-image>
      </themed-image>
    </template>
    <template #nav-toggle-close>
      <themed-image>
        <g-image light light-colored src="@/assets/close-icon-black.svg"></g-image>
        <g-image dark dark-colored src="@/assets/close-icon-white.svg"></g-image>
      </themed-image>
    </template>
    <template #navigation-header>
      <g-link to="/" home>
        <themed-image>
          <g-image light light-colored src="@/assets/badge-black.svg"></g-image>
          <g-image dark dark-colored src="@/assets/badge-white.svg"></g-image>
        </themed-image>
      </g-link>
    </template>
    <base-page>
      <slot></slot>
      <newsletter></newsletter>
    </base-page>
    <template #footer>
      <single-column class="custom-footer">
        <div class="custom-footer__content">
          <div>
            <themed-image>
              <g-image light light-colored src="@/assets/secret-logo-footer--black.svg" class="custom-footer__logo"></g-image>
              <g-image dark dark-colored src="@/assets/secret-logo-footer--white.svg" class="custom-footer__logo"></g-image>
            </themed-image>
            <p>This website has a secret. It’s 100% opensource!</p>
            <p>
              Contribute at
              <g-link to="https://github.com/SecretFoundation/SecretWebsite">
                Github
                <themed-image class="github-link">
                  <g-image light light-colored src="@/assets/github-black.png"></g-image>
                  <g-image dark  dark-colored  src="@/assets/github-white.png"></g-image>
                </themed-image>
              </g-link>
            </p>
            <div class="custom-footer__social">
              <g-link light light-colored to="https://discord.com/invite/SJK32GY">
                <themed-image>
                  <g-image dark dark-colored src="@/assets/discord-white.svg"></g-image>
                  <g-image light light-colored src="@/assets/discord-black.svg"></g-image>
                </themed-image>
              </g-link>
              <g-link light light-colored to="https://t.me/SCRTcommunity">
                <themed-image>
                  <g-image dark dark-colored src="@/assets/telegram-white.svg"></g-image>
                  <g-image light light-colored src="@/assets/telegram-black.svg"></g-image>
                </themed-image>
              </g-link>
              <g-link light light-colored to="https://twitter.com/SecretNetwork">
                <themed-image>
                  <g-image dark dark-colored src="@/assets/twitter-white.svg"></g-image>
                  <g-image light light-colored src="@/assets/twitter-black.svg"></g-image>
                </themed-image>
              </g-link>
              <g-link light light-colored to="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw">
                <themed-image>
                  <g-image dark dark-colored src="@/assets/youtube-white.svg"></g-image>
                  <g-image light light-colored src="@/assets/youtube-black.svg"></g-image>
                </themed-image>
              </g-link>
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
            <g-link to="https://discord.gg/7t7PqPZFJq">Secret Chat</g-link>
            <g-link to="https://forum.scrt.network/">Secret Forum</g-link>
            <g-link to="/committees/introduction">Committees</g-link>
          </div>
          <div class="custom-footer__links">
            <h4>Secret Network</h4>
            <g-link to="/about/about-secret-network">About</g-link>
            <g-link to="/about/faq">FAQ</g-link>
            <g-link to="/media">Media Articles</g-link>
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
  created() {
    if (process.isClient) {
      const theme = localStorage.getItem('theme')
      if (!theme) return
      this.darkLightModeState = !theme.includes('dark')
      this.coloredModeState = theme.includes('colored')
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
      const colorMode = this.coloredModeState ? '-colored' : ''
      const darkLightMode = this.darkLightModeState ? 'light' : 'dark'
      const theme = `${darkLightMode}${colorMode}`
      this.setBodyAttr(theme)
      if (process.isClient) {
        localStorage.setItem('theme', theme)
      }
    },
    setBodyAttr(theme) {
      const [body] = document.getElementsByTagName('body')
      if (!body) return
      body.setAttribute('theme', theme)
    }
  }
}
</script>

<style lang="scss">
.header {
  border-bottom: 1px solid var(--theme-fg);
  .no-column {
    padding: 0 $gutter;
  }
  &__actions {
    display: grid;
    grid-auto-flow: column;

    @include respond-to("large and up") {
      grid-column-gap: $gutter-xlarge;
    }
  }
  @include theme(light light-colored) {
    //border-bottom: 1px solid $primary-black-color;
  }
  .main-nav {

    @include respond-to("large and up") {
      height: 100%;
    }

    &__header {
      @include respond-to("medium and down") {
        padding: $gutter $gutter $gutter;
      }
    }

    &__primary {
      width: 100%;
      max-width: $header-nav-items-width * $header-nav-items;
      justify-self: center;

      @include respond-to("large and up") {
        height: 100%;
        // Check for the number of items in the header
        grid-auto-columns: calc(100% / #{$header-nav-items});
        // This is kind of a hack; avoid it at all costs... but for now is fine
        grid-template-columns: unset;
      }

      a {
        @include respond-to("large and up") {
          width: 100%;
          height: 100%;
          display: grid;
          place-content: center center;
        }
        @include respond-to("medium and down") {
          font-size: rem(24px);

          &:not(.active) {
            padding: $gutter;
            color: var(--theme-fg);
          }
        }

        &.active {
          &:not([home]) {
            @include respond-to("small and down") {
              display: grid;
              place-content: center start;
              padding: $gutter;
            }
            @include theme(dark light) {
              background-color: var(--theme-fg);
              color: var(--theme-bg);
            }
            @include theme(dark-colored light-colored) {
              @each $name, $color in $primary-colors {
                &[#{$name}] {
                  background-color: $color;
                  color: var(--theme-fg);
                }
                &[cream], &[yellow], &[orange] {
                  color: $primary-black-color;
                }
              }
            }
          }
        }

        &:hover {
          transition: background-color 300ms ease-in-out;

          @include theme(dark light) {
            background-color: var(--theme-fg);
            color: var(--theme-bg);
          }
          @include theme(dark-colored light-colored) {
            @each $name, $color in $primary-colors {
              &[#{$name}] {
                background-color: $color;
                color: white;
              }
              &[cream], &[yellow], &[orange] {
                color: $primary-black-color;
              }
            }
          }
        }
      }
    }
  }
}
.logo {
  width: auto;
  height: rem(58px);
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
  a:hover {
    text-decoration: underline;
  }
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
    @include respond-to("medium and down") {
      margin: 0 auto rem(20px) auto;
    }
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
.social-networks {
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: $gutter-small;

  @include respond-to("medium and down") {
    display: none;
  }
  &__mobile {
    @include respond-to("large and up") {
      display: none;
    }
    @include respond-to("medium and down") {
      padding: $gutter;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 67px);
      align-items: center;
      width: calc(100% - #{$gutter-xxxlarge});
      position: fixed;
      bottom: 0;
      a {
        .themed-image {
          img {
            margin: 0 auto;
          }
        }
        &:hover {
          @include theme(dark dark-colored) {
            .themed-image {
                img {
                    filter: invert(1);
                }
            }
          }
          @include theme(light light-colored) {
            .themed-image {
              img {
                  filter: invert(1);
              }
            }
          }
        }
      }
    }
  }
}
.toggles {
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: $gutter;
  button {
    cursor: pointer;
  }
  img {
    width: 24px;
    height: 24px;
  }
}
.github-link {
  display: inline-block;
  vertical-align: middle;
  img {
    width: rem(24px);
    height: rem(24px);
  }
}
</style>
