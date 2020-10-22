<template>
  <section class="blog-hero">
    <themed-image class="blog-hero__cover">
      <img light src="@/assets/hero-black.svg" alt="hero">
      <img dark src="@/assets/hero-white.svg" alt="hero">
      <img light-colored dark-colored src="@/assets/hero-color.svg" alt="hero">
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
      width: 100%;
      object-fit: cover;
      object-position: top;
      transform: rotate(180deg);

      @include respond-to("large and up") {
        height: 80px;
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
    width: 100%;
    max-width: rem(742px);
    text-align: center;
    padding: 0 $gutter;
    margin: 0 auto;

    h1 {
      margin-top: 0;
    }

    div[tag] {
      text-transform: uppercase;
      color: $primary-blue-color;
    }
  }
}
</style>
