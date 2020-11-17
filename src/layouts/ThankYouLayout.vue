<template>
  <div class="thank-you-layout">
    <section class="thank-you-page-hero">
        <div class="thank-you-page-hero__cover">
        <themed-image>
            <img light src="@/assets/hero-black.svg" alt="thank-you-page-hero">
            <img dark src="@/assets/hero-white.svg" alt="thank-you-page-hero">
            <img light-colored dark-colored src="@/assets/hero-green.svg" alt="thank-you-page-hero">
        </themed-image>
        </div>
    </section>
    <slot name="default"></slot>
  </div>
</template>

<script>
import MainPageHero from '../components/MainPageHero'

export default {
  components: { MainPageHero }
}
</script>


<style lang="scss">
$-hero-mobile-height: 240px;
$-hero-tablet-height: 280px;
$-hero-desktop-height: 250px;

$-logo-size-desktop: 78px;
$-logo-size-mobile: 68px;

.thank-you-layout {
  + .newsletter {
    display: none;
  }
  #subscription-confirmed {
    margin: 0;
  }
}

.thank-you-page-hero {
  position: relative;
  max-width: 100%;

  @include respond-to("small and down") {
    min-height: rem($-hero-mobile-height);
  }
  @include respond-to("medium") {
    min-height: rem($-hero-tablet-height);
  }
  @include respond-to("large and up") {
    height: rem(94px);
  }

  &__cover {
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      object-fit: cover;
      transform: rotate(180deg);

      @include respond-to("small and down") {
        object-position: left;
        min-height: rem($-hero-mobile-height);
                object-position: 0% 0%;

      }
      @include respond-to("medium") {
        min-height: rem($-hero-tablet-height);
      }
      @include respond-to("large and up") {
        height: rem(94px);
        object-position: 0% 0%;
      }
    }
  }

  &__fg {
    display: none;
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid;
    border-radius: 16px;

    background-color: var(--theme-bg);
    color: var(--theme-fg);

    @include respond-to("large and up") {
      min-width: rem(600px);
    }
  }

  &__title {
    position: relative;
    width: 100%;
    height: 100%;

    @include respond-to("small and down") {
      padding-top: rem(24px);
      padding-bottom: rem(24px);
    }
    @include respond-to("medium") {
      padding: $gutter-large;
    }
    @include respond-to("large and up") {
      padding-top: rem(55px);
      padding-bottom: rem(34px);
    }

    &__container {
      width: 100%;
      height: 100%;

      h2 {
        margin: 0;
        text-align: center;

        @include respond-to("small and down") {
          width: rem(303px);
          // TODO Maybe pass to a token
          font-size: rem(24px);
        }
        @include respond-to("medium") {

        }
        @include respond-to("large and up") {
          font-size: rem(32px);
        }
      }

      img {
        @include respond-to("medium and up") {
          width: rem($-logo-size-desktop);
          height: rem($-logo-size-desktop);
        }
        @include respond-to("small and down") {
          width: rem($-logo-size-mobile);
          height: rem($-logo-size-mobile);
        }
      }
    }
  }

  &__logo {
    position: absolute;

    @include respond-to("medium and up") {
      top: - ($-logo-size-desktop / 2);
      left: calc(100% / 2 - #{$-logo-size-desktop / 2});
    }
    @include respond-to("small and down") {
      display: none;
      top: - ($-logo-size-mobile / 2);
      left: calc(100% / 2 - #{$-logo-size-mobile / 2});
    }
  }
}

.thank-you-banner {
    background-color: $secondary-green-color;
    h1, p {
        color: $primary-black-color;
    }
    h1 {
      margin-top: 0;
    }
}

.join {
    #join-the-conversation {
        text-align: center;
    }
}


</style>
