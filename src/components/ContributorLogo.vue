<template>
  <div class="contributor-logo">
    <div class="contributor-logo__hover">
      <span :style="{ color: `var(--${color}-color)` }">{{ role }}</span>
      <p>{{ name }}</p>
    </div>
    <div class="contributor-logo__image">
      <slot name="image"></slot>
    </div>
  </div>
</template>

<script>
const colors = {
  "developer": "blue",
  "validator": "red",
  "": "yellow"
}

export default {
  props: {
    role: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      unwrapped: false,
      color: ''
    }
  },
  created() {
    this.color = this.getColor()
  },
  methods: {
    getColor() {
      return colors[this.role.toLowerCase()]
    }
  },
  mounted() {
    const body = this.$refs.body
    const img = body.querySelector('img')
    this.unwrapped = img != null
  }
}
</script>

<style lang="scss" scoped>
.contributor-logo {
    margin: 0;
    line-height: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: relative;
    &__hover {
        opacity: 0;
        border-radius: 10px;
        padding: $gutter;
        position: absolute;
        z-index: 10;
        text-align: center;
        width: 100%;
        height: 100%;
        transition: 0.5s ease;
        -webkit-transition: 0.5s ease;
        @include theme(dark dark-colored) {
            background-color: rgba(white, 0.9);
        }
        @include theme(light light-colored) {
            background-color: rgba(black, 0.9);
        }
        span {
            text-transform: uppercase;
            line-height: 1.6em;
        }
        p {
            margin: 0;
            font-weight: bold;
            color: var(--theme-bg);
        }
    }
    &__image {
        position: relative;
        z-index: -1;
        p {
            margin: 0;
            line-height: 0;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            img {
                border-radius: 10px;
            }
        }
    }
    &:hover {
        .contributor-logo__hover {
            opacity: 1;
        }
    }
    @include respond-to("medium and down") {
        &:nth-child(13), &:nth-child(14), &:nth-child(15), &:nth-child(16),  &:nth-child(17), &:nth-child(18), &:nth-child(19), &:last-child {
            display: none;
        }
    }
}
</style>
