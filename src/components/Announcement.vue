<template>
  <div class="announcement">
    <slim-column>
      <span>Announcement</span>
      <div class="announcement__title">
        <slot name="title"></slot>
      </div>
      <slot name="default"></slot>
    </slim-column>
  </div>
</template>

<style lang="scss">
.announcement {
  background-color: $primary-purple-color;
  text-align: center;
  padding: $gutter-xxlarge 0;

  .column {
    @include respond-to("large and up") {
      padding: 0 $gutter-xlarge;
    }
  }

  span {
    font-size: 24px;
    line-height: 38.42px;
    letter-spacing: -0.33 px;
  }

  h3,
  p,
  span {
    color: white;
  }

  p {
    margin-bottom: 0;
  }
}
</style>
