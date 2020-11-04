<template>
  <section class="hero" :class="stage">
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
          <g-image class="hero__logo" src="@/assets/logo-seal.svg" immediate="true"></g-image>
          <div v-if="stage == 'intro--arriving'">
            <h2 class="hero__message">Welcome to Secret Network</h2>
            <div class="intro-nav">
              <a @click="changeStage('intro--playing')" href="">See the video</a> - 
              <a @click="changeStage('intro--ended')" href="">Skip video</a>
            </div>
          </div>
          <div v-if="stage == 'intro--playing'">
            <iframe class="intro-video" v-show="stage == 'intro--playing'" src="https://www.youtube.com/embed/c70BBVUCxxk?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <a class="intro-nav" @click="changeStage('intro--ended')" href="">Skip video</a>
          </div>
          <div v-if="stage == 'intro--ended'">
            <h2 class="hero__message">Welcome to Secret Network</h2>
            <a class="intro-nav" @click="changeStage('intro--playing')" href="">See the video</a>
          </div>
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
      themeIndex: 0,
      stage: 'intro--ended'
    }
  },
  methods: {
    changeStage(newStage) {
      this.stage = newStage;
    },
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

$-hero-mobile-height--arriving: 400px;
$-hero-tablet-height--arriving: 400px;
$-hero-desktop-height--arriving: 500px;

$-hero-mobile-height--playing: 400px;
$-hero-tablet-height--playing: 700px;
$-hero-desktop-height--playing: 700px;

$-hero-mobile-height--ended: 400px;
$-hero-tablet-height--ended: 400px;
$-hero-desktop-height--ended: 400px;


$-logo-size-desktop: 100px;
$-logo-size-mobile: 68px;

.hero {
  position: relative;
  max-width: 100%;
  margin-bottom: $gutter;

  // Transitions used
  transition: height 0.5s ease-out;
  .hero__content {
    transition: height 0.5s ease-out;
  }



  // Intro arriving
  &.intro--arriving {
    @include respond-to("small and down") {
      height: rem($-hero-mobile-height--arriving);
    }
    @include respond-to("medium") {
      height: rem($-hero-tablet-height--arriving);
    }
    @include respond-to("large and up") {
      height: rem($-hero-desktop-height--arriving);
    }
  }

  // Intro playing
  &.intro--playing {
    @include respond-to("small and down") {
      height: rem($-hero-mobile-height--playing);
      .hero__content {
        width: calc(100% - #{$gutter * 2});
      }
    }
    @include respond-to("medium") {
      height: rem($-hero-tablet-height--playing);
      .hero__content {
        width: rem(600px);
      }
    }
    @include respond-to("large and up") {
      height: rem($-hero-desktop-height--playing);
    }
  }

  // Intro ended or skipped
  &.intro--ended {
    @include respond-to("small and down") {
      height: rem($-hero-mobile-height--ended);
    }
    @include respond-to("medium") {
      height: rem($-hero-tablet-height--ended);
    }
    @include respond-to("large and up") {
      height: rem($-hero-desktop-height--ended);
    }
  }




  .intro-video {
    max-width: 100%;
    @include respond-to("small and down") {
      width: 100%;
      height: 200px;
    }
    @include respond-to("medium") {
      width: 800px;
      height: 450px;
    }
    @include respond-to("large and up") {
      width: 800px;
      height: 450px;
    }
  }


  &__cover {
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      object-fit: cover;
      object-position: bottom;
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
      padding: $gutter;
    }
    @include respond-to("medium") {
      padding: $gutter-xlarge 0  $gutter;
    }
    @include respond-to("small and down") {
      padding: $gutter-large 0 0;
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

  &__message {
    @include respond-to("small and down") {
      font-size: rem(30px);
      padding: $gutter;
      padding-top: $gutter-large;
    }
    @include respond-to("medium") {
      font-size: rem(36px);
    }
    @include respond-to("large and up") {
      padding: $gutter-large;
      padding-top: $gutter-xlarge;
    }
  }

  .intro-nav {
    text-align: center;
    display: block;

    padding: $gutter;
  }

  &__logo {
    position: absolute;

    @include respond-to("large and up") {
      top: - ($-logo-size-desktop / 2);
      left: calc(100% / 2 - #{$-logo-size-desktop / 2});
    }
    @include respond-to("medium and down") {
      display: none;
      top: - ($-logo-size-mobile / 2);
      left: calc(100% / 2 - #{$-logo-size-mobile / 2});
    }
  }
}
</style>
