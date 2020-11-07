<template>
  <div class="logos-grid">
    <grid>
      <slot></slot>
    </grid>
  </div>
</template>

<style lang="scss">
.logos-grid {
    .grid {
        display: grid;
        grid-column-gap: $gutter;
        grid-row-gap: $gutter;
        transition: 0.5s ease;
        -webkit-transition: 0.5s ease;
        @include respond-to("large and up") {
            grid-template-columns: repeat(5, 129px);
        }
        @include respond-to("medium and down") {
            grid-template-columns: repeat(3, auto);
        }
    }
}
</style>