<template>
  <section class="blog-hero">
    <themed-image class="blog-hero__cover">
      <g-image dark src="~/assets/hero-black.svg" alt="cover image"></g-image>
      <g-image light src="~/assets/hero-white.svg" alt="cover image"></g-image>
      <g-image light-colored dark-colored src="~/assets/hero-color.svg" alt="cover image"></g-image>
    </themed-image>
    <div class="blog-hero__content">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blog-hero {
  position: relative;

  & {
    @include respond-to("large and up") {
      min-height: 420px;
    }
    @include respond-to("medium") {
      min-height: 350px;
    }
    @include respond-to("small and down") {
      min-height: 400px;
    }
  }

  &__cover {
    img {
      object-fit: cover;
      object-position: top;
      transform: rotate(180deg);

      @include respond-to("large and up") {
        height: 120px;
      }
      @include respond-to("medium") {
        height: 80px;
      }
      @include respond-to("small and down") {
        height: 40px;
      }
    }
  }

  &__content {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    max-width: rem(742px);
    text-align: center;
    transform: translate(-50%, 0%);
    padding: 0 $gutter;

    @include respond-to("medium and up") {
      transform: translate(-50%, 71px);
    }
    @include respond-to("small and down") {
      transform: translate(-50%, 41px);
    }

    h1 {
      margin-top: 0;
    }

    div[tag] {
      text-transform: uppercase;
      color: $primary-teal-color;
    }
  }
}
</style>
