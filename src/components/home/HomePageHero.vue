<template>
  <section class="hero">
    <div class="hero__cover">
      <themed-image>
        <img light src="@/assets/hero-black.svg" alt="hero">
        <img dark src="@/assets/hero-white.svg" alt="hero">
        <img light-colored dark-colored src="@/assets/hero-color.svg" alt="hero">
      </themed-image>
    </div>
    <div class="hero__content">
      <div class="hero__title">
        <div class="hero__title__container">
          <g-image class="hero__logo" src="@/assets/logo-seal.svg"></g-image>
          <h2>Welcome to Secret Network</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const themes = {
  'dark': {
    bg: 'hero-white.svg',
    fg: 'hero-color.svg'
  },
  'light': {
    bg: 'hero-black.svg',
    fg: 'hero-color.svg'
  },
  'dark-colored': {
    bg: 'hero-color.svg',
    fg: 'hero-white.svg'
  },
  'light-colored': {
    bg: 'hero-color.svg',
    fg: 'hero-black.svg'
  },
}

export default {
  data() {
    return {
      bg: null,
      fg: null,
      themeIndex: 0
    }
  },
  created() {
    this.$root.$on('theme', (theme) => {
      this.setTheme(theme)
      this.applyTheme(theme)
    });
    const currentTheme = themes[this.getTheme()]
    this.bg = currentTheme.bg
    this.fg = currentTheme.fg
  },
  methods: {
    applyMask(event) {
      const fg = this.$refs.fg
      fg.style.display = 'block'
      fg.style.clipPath = `circle(192px at ${event.x}px ${event.y}px)`
    },
    changeTheme() {
      const themeNames = Object.keys(themes)
      this.themeIndex = this.themeIndex + 1 === 4 ? 0 : this.themeIndex + 1
      const theme = themeNames[this.themeIndex]
      this.applyTheme(theme)
    },
    applyTheme(theme) {
      const newTheme = themes[theme]
      this.bg = newTheme.bg
      this.fg = newTheme.fg
      this.setTheme(theme)
    },
    setTheme(theme) {
      const [body] = document.getElementsByTagName('body')
      if (!body) return
      body.setAttribute('theme', theme)
    },
    getTheme() {
      const [body] = document.getElementsByTagName('body')
      if (!body) return
      return body.getAttribute('theme').trim()
    }
  },
}
</script>

<style lang="scss">
$-hero-desktop-height: 540px;
$-hero-tablet-height: 400px;
$-hero-mobile-height: 400px;

$-logo-size-desktop: 118px;
$-logo-size-mobile: 68px;

.hero {
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
      object-position: bottom;

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
  }

  &__title {
    position: relative;
    width: 100%;
    height: 100%;

    @include respond-to("large and up") {
      padding: $gutter-xxlarge;
    }
    @include respond-to("medium") {
      padding: $gutter-xxlarge 0;
    }
    @include respond-to("small and down") {
      padding: $gutter-large 0;
    }

    &__container {
      width: 100%;
      height: 100%;

      h2 {
        margin: 0;
        text-align: center;

        @include respond-to("small and down") {
          width: rem(303px);
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
      top: - ($-logo-size-mobile / 2);
      left: calc(100% / 2 - #{$-logo-size-mobile / 2});
    }
  }
}
</style>
