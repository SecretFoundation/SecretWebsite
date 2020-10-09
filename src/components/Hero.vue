<template>
  <section class="hero" @mousemove="applyMask" @click="changeTheme">
    <div class="hero__cover">
      <g-image ref="bg" class="hero__bg" :src="require(`!!assets-loader!@images/${bg}`)"></g-image>
      <g-image ref="fg" class="hero__fg" :src="require(`!!assets-loader!@images/${fg}`)"></g-image>
    </div>
    <div class="hero__content">
      <div class="hero__title">
        <g-image class="hero__logo" src="../../content/img/logo-seal.svg"></g-image>
        <h2>Welcome to Secret Network</h2>
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
$-hero-desktop-height: 527px;
$-hero-tablet-height: 400px;
$-hero-mobile-height: 400px;

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
    padding: 86px 76px;

    @include theme(dark dark-colored) {
      border-color: white;
      background: $primary-black-color;
    }
    @include theme(light light-colored) {
      border-color: $primary-black-color;
      background: white;
    }
    @include respond-to("small and down") {
      padding: 55px 21px;
    }
  }

  &__title {
    position: relative;
    h2 {
      margin: 0;
      text-align: center;

      @include respond-to("small and down") {
        width: rem(303px);
      }
    }
  }

  &__logo {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -120%);
  }
}
</style>
