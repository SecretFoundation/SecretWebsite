<template>
  <header class="secret-header">
    <div class="header-container">
      <alert-bar></alert-bar>
      <no-column class="header__content">
        <a class="header__nav-toggle" @click="toggleNav" aria-label="Navigation toggle">
          <slot name="nav-toggle"></slot>
        </a>
        <div class="header__logo"><slot name="logo"></slot></div>
        <nav class="main-nav" :class="{ 'main-nav--open': isNavOpen }">
          <div class="main-nav__primary">
            <div class="main-nav__header">
              <slot name="navigation-header"></slot>
              <button class="main-nav__close-button" @click="toggleNav" aria-label="Close">
                <slot name="nav-toggle-close"></slot>
              </button>
            </div>
            <slot name="navigation"></slot>
          </div>
        </nav>
        <div class="header__actions">
          <slot name="actions"></slot>
        </div>
      </no-column>
    </div>
    
  </header>
</template>

<script>
  export default {
    name: 'SecretHeader',
    data () {
      return {
        isNavOpen: false
      }
    },
    methods: {
      toggleNav () {
        this.isNavOpen = !this.isNavOpen
      }
    },
    watch:{
      $route (to, from){
        this.isNavOpen = false
      }
    }
  };
</script>

<style lang="scss">
  .secret-header {

    position: $header-position;
    @if($header-position == fixed) {
      z-index: 10000;
      top: 0;
    }

    font-family: $header-default-font;
    color: $header-text-color;
    width: 100%;
    background-color: $header-background-color;

    a:link {
      color: $header-nav-default-color;
    }
    a:hover {
      color: $header-nav-hover-color;
    }
    a:active {
      color: $header-nav-active-color;
    }
    a:visited {
      color: $header-nav-visited-color;
    }


    &__content {
      // TODO make this thing pick up this line
      height: rem($header-height);
      display: grid;
      grid-template-columns: rem($header-logo-space-width) 1fr rem($header-actions-space-width);
      grid-template-rows: 100%;

      @include respond-to("medium and down") {
        grid-template-columns: rem($header-lateral-column-mobile-width) 1fr rem($header-lateral-column-mobile-width);
      }
    }

    &__nav-toggle {
      padding: 0;
      align-self: center;

      @include respond-to("large and up") {
        display: none;
      }
    }

    &__logo {
      place-self: center left;

      @include respond-to("medium and down") {
        place-self: center center;
      }
    }

    &__actions {
      place-self: center right;
    }

    .main-nav {
      &__close-button {
        width: rem($header-nav-close-toggle-size);
        height: rem($header-nav-close-toggle-size);
      }

      &__header {
        @include respond-to("medium and down") {
          display: grid;
          grid-auto-flow: column;
          align-items: center;
        }
        @include respond-to("large and up") {
          display: none;
        }
      }

      @include respond-to("medium and down") {
        display: none;

        &--open {
          position: fixed;
          top: 0;
          left: 0;
          display: block;
          background-color: $header-nav-background-color;
          color: $header-nav-color;
          width: $header-nav-mobile-width;
          height: 100%;
          z-index: 10000;
          outline: solid;
          outline-color: black;
          outline-width: 1px;
        }

        &__primary {
          display: grid;
          grid-auto-flow: row;
          grid-row-gap: rem($header-nav-spacing);
        }

        &__close-button {
          justify-self: end;
          img {
            width: rem(24px);
            height: rem(24px);
          }
        }
      }

      @include respond-to("large and up") {
        display: $header-nav-primary-desktop-display;
        grid-auto-flow: column;
        grid-template-columns: $header-nav-primary-desktop-columns;
        grid-gap: $header-nav-primary-desktop-gap;
        align-self: center;

        &__primary {
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: repeat(auto-fit, rem($header-nav-items-width));
          grid-column-gap: rem($header-nav-spacing);
          justify-content: $header-nav-justify-content;
          justify-items: $header-nav-justify-items;
        }

        &__close-button {
          display: none;
        }
      }
    }
  }
</style>
