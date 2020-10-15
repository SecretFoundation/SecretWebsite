<template>
  <div class="card">
    <div class="card__header">
      <slot name="header"></slot>
      <separator small space-small/>
    </div>
    <div class="card__body" ref="body" :class="{ 'card__body--unwrapped': unwrapped }">
      <slot name="default"></slot>
    </div>
    <div class="card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unwrapped: false
    }
  },
  mounted() {
    const body = this.$refs.body
    const img = body.querySelector('img')
    this.unwrapped = img != null
  },
}
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  width: 100%;
  max-width: rem(378px);
  height: 100%;
  border: 3px solid var(--theme-fg);
  border-radius: 22px;

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

  &__body {
    height: 100%;
    padding-bottom: $gutter;

    & > * {
      padding: 0 $gutter;
    }
    &--unwrapped {
      & > * {
        padding: 0;
        margin: 0;
      }
    }
    p {
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
