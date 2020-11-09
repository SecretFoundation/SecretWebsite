<template>
  <g-link class="community-card" :to="to">
    <div class="community-card__icon">
      <slot name="icon"></slot>
    </div>
    <div class="community-card__name">
      <h4>{{ name }}</h4>
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false
    },
    to: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      unwrapped: false
    }
  }
}
</script>

<style lang="scss" scoped>
.community-card {
  display: grid;
  grid-template-rows: 72px 50px;
  width: 100%;
  max-width: rem(378px);
  border: 3px solid var(--theme-fg);
  border-radius: 22px;
  text-align: center;
  text-decoration: none;
  padding: $gutter;
  transition: 0.5s ease;
  -webkit-transition: 0.5s ease;
  &__icon {
      margin: 0 auto;
  }
  &__name {
      h4 {
          margin: 0;
          padding: 10px 0;
      }
  }
  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
}
</style>
