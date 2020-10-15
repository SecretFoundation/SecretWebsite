<template>
  <section class="main-page-hero">
    <div class="main-page-hero__cover">
      <themed-image>
        <img light src="@/assets/hero-black.svg" alt="hero">
        <img dark src="@/assets/hero-white.svg" alt="hero">
        <img light-colored dark-colored src="@/assets/hero-color.svg" alt="hero">
      </themed-image>
    </div>
    <div class="main-page-hero__content">
      <div class="main-page-hero__title">
        <g-image class="main-page-hero__logo" src="../assets/logo-seal.svg"></g-image>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$-hero-desktop-height: 339px;
$-hero-tablet-height: 280px;
$-hero-mobile-height: 280px;

.main-page-hero {
  position: relative;
  max-width: 100%;

  @include respond-to("small and down") {
    min-height: rem($-hero-mobile-height);
  }
  @include respond-to("medium") {
    min-height: rem($-hero-tablet-height);
  }
  @include respond-to("large and up") {
    height: rem($-hero-desktop-height);
  }

  &__cover {
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      object-fit: cover;
      object-position: 50% -10%;
      display: none;
      transform: rotate(180deg);

      @include respond-to("small and down") {
        object-position: left;
        min-height: rem($-hero-mobile-height);
      }
      @include respond-to("medium") {
        min-height: rem($-hero-tablet-height);
      }
      @include respond-to("large and up") {
        height: rem($-hero-desktop-height);
      }

      &[data-src*=black] {
        @include theme(light) {
          display: block;
        }
      }
      &[data-src*=white] {
        @include theme(dark) {
          display: block;
        }
      }
      &[data-src*=color] {
        @include theme(light-colored dark-colored) {
          display: block;
        }
      }
    }
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid;
    border-radius: 16px;
    padding: rem(86px) 0;
    width: 100%;

    @include respond-to("small and down") {
      max-width: rem(280px);
    }
    @include respond-to("medium") {
      max-width: rem(680px);
    }
    @include respond-to("large and up") {
      max-width: rem(788px);
    }

    @include theme(dark dark-colored) {
      border-color: white;
      background: $primary-black-color;
    }
    @include theme(light light-colored) {
      border-color: $primary-black-color;
      background: white;
    }
    @include respond-to("small and down") {
      padding: 55px 0;
    }
  }

  &__title {
    position: relative;
    h2 {
      margin: 0;
      text-align: center;
    }
  }

  &__logo {
    position: absolute;
    top: 0%;
    left: 50%;

    @include respond-to("small and down") {
      max-width: rem(68px);
      transform: translate(-50%, -130%);
    }
    @include respond-to("medium") {
      max-width: rem(80px);
    }
    @include respond-to("large and up") {
      max-width: rem(118px);
      transform: translate(-50%, -125%);
    }
  }
}
</style>
