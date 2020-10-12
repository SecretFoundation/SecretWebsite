<template>
  <ClientOnly>
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
  </ClientOnly>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  max-width: rem(378px);
  height: 100%;
  border: 3px solid;
  border-radius: 22px;

  & > :not(img):not(&__header):not(&__footer) {
    padding: 0 $gutter;
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
    position: absolute;
    bottom: $gutter;
    left: $gutter;
    width: calc(100% - #{$gutter * 2});

    p {
      margin: 0;
    }
  }
}
</style>
