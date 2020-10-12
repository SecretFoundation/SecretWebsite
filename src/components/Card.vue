<template>
  <div class="card">
    <div class="card__header">
      <slot name="header"></slot>
      <separator small space-small/>
    </div>
    <slot name="default"></slot>
    <div class="card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: grid;
  width: 100%;
  max-width: rem(378px);
  height: 100%;
  border: 3px solid;
  border-radius: 22px;

  & > :not(p):not(&__header):not(&__footer) {
    padding: 0 $gutter;
  }

  p {
    img {
      width: 100%;
      object-fit: cover;
      padding-bottom: $gutter;

      @at-root p {
        height: 100%;
        margin: 0;
      }
    }
  }

  @include theme(dark dark-colored) {
    border-color: white;
  }
  @include theme(light light-colored) {
    border-color: $primary-black-color;
  }

  a:not([aria-hidden=true]) {
    display: block;
    width: 100%;
    border-radius: 10px;
    padding: 10px 0;
    text-align: center;
    color: var(--theme-bg);
    background-color: var(--theme-fg);
    font-weight: bold;
    text-decoration: none;
  }

  &__header {
    padding: $gutter $gutter 0;
  }

  &__footer {
    align-self: end;
    padding: 0 $gutter $gutter;

    p {
      margin: 0;
    }
  }
}
</style>
