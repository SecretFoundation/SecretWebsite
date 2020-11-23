<template>
  <g-link class="grid-item" :to="to">
    <div class="grid-item__hover">
      <div class="top">
        <p>{{ name }}</p>
      </div>
      <div class="bottom">
        <span :style="{ color: `var(--${color}-color)` }">{{ tag }} </span>
        <span :style="{ color: `var(--${colorTwo}-color)` }">{{ tagTwo }} </span>
      </div>
    </div>
    <div class="grid-item__image">
      <g-image :src="require(`!!assets-loader!@images/${src}`)"></g-image>
    </div>
  </g-link>
</template>

<script>
const colors = {
  "developer": "blue",
  "validator": "red",
  "wallet": "orange",
  "fund": "purple",
  undefined: "black",
  "": "blue"
}
const colorsTwo = {
  "developer": "blue",
  "validator": "red",
  "wallet": "orange",
  "fund": "purple",
  undefined: "black",
  "": "blue"
}

export default {
  props: {
    tag: {
      type: String,
      required: false
    },
    tagTwo: {
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
    },
    src: {
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
      return colors[this.tag.toLowerCase()]
    },
    getSecondColor() {
      return colorsTwo[this.tagTwo.toLowerCase()]
    },
  }
}
</script>

<style lang="scss" scoped>
.grid-item {
    margin: 0;
    line-height: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: relative;
    &__hover {
      opacity: 0;
      border-radius: 7px;
      padding: 3px;
      display: grid;
      grid-template-rows: repeat(2, 50%);
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
      @include respond-to("medium and down") {
        padding: $gutter 10px;
      }
      .top, .bottom {
        display: block;
        width: 100%;
        align-self: center;
        span {
          display: block;
          text-transform: uppercase;
          line-height: 1em;
          width: 100%;
          word-break: break-word;
          -webkit-hyphens: auto;
          -moz-hyphens: auto;
          -ms-hyphens: auto;
          hyphens: auto;
          &:nth-child(2) {
            margin-bottom: 10px;
          }
        }
        p {
          margin: 0;
          font-weight: bold;
          color: var(--theme-bg);
          line-height: 1em;
          width: 100%;
          word-break: break-word;
          -webkit-hyphens: auto;
          -moz-hyphens: auto;
          -ms-hyphens: auto;
          hyphens: auto;
          @include respond-to("medium and down") {
            p {
              font-size: $gutter;
            }
          }
        }
      } 
    }
    &__image {
        position: relative;
        z-index: -1;
        img {
            border-radius: 7px;
        }
    }
    &:hover {
        .grid-item__hover {
            opacity: 1;
        }
    }
    @include respond-to("medium and down") {
    }
}
</style>
