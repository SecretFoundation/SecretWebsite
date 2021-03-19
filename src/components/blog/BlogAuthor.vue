<template>
  <div class="blog-author">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
$-picture-size: 44px;
$-social-icons: 200px;
.blog-author {
  display: grid;
  align-items: center;
  align-self: end;
  grid-column-gap: $gutter;
  grid-template-columns: $-picture-size 1fr $-social-icons;

  .share-icons {
    display: flex;
    justify-content: space-between;
    a {
      padding: 10px;
    }
  }

  img[picture] {
    width: rem($-picture-size);
    height: rem($-picture-size);
    border-radius: 50%;
  }

  div[info] {
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: $gutter-xsmall;
  }
}
</style>
