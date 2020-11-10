<template>
  <g-link class="contributor-logo" :to="to">
    <div class="contributor-logo__hover">
      <span :style="{ color: `var(--${color}-color)` }">{{ role }} </span>
      <span :style="{ color: `var(--${colorTwo}-color)` }">{{ roleTwo }} </span>
      <p>{{ name }}</p>
    </div>
    <div class="contributor-logo__image">
      <slot name="image"></slot>
    </div>
  </g-link>
</template>

<script>
const colors = {
  "developer": "blue",
  "validator": "red",
  "wallet": "orange",
  "fund": "purple",
  "": "yellow",
  undefined: "black"
}
const colorsTwo = {
  "developer": "blue",
  "validator": "red",
  "wallet": "orange",
  "fund": "purple",
  "": "yellow",
  undefined: "black"
}

export default {
  props: {
    role: {
      type: String,
      required: false
    },
    roleTwo: {
      type: String,
      required: false
    },
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
      unwrapped: false,
      color: '',
      colorTwo: ''
    }
  },
  created() {
    this.color = this.getColor()
    this.colorTwo = this.getSecondColor()
  },
  methods: {
    getColor() {
      return colors[this.role.toLowerCase()]
    },
    getSecondColor() {
      return colorsTwo[this.roleTwo.toLowerCase()]
    },
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
          display: block;
          text-transform: uppercase;
          line-height: 1em;
          &:nth-last-child(2) {
            margin-bottom: 10px;
          }
      }
      p {
          margin: 0;
          font-weight: bold;
          color: var(--theme-bg);
          line-height: 1em;
      }
      @include respond-to("medium and down") {
        padding: $gutter 10px;
        p {
          font-size: $gutter;
        }
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
    }
}
</style>
