<template>
  <g-link :to="to" class="next-button" :class="location">
    <span>{{ tag }}</span>
    <themed-image>
      <svg light light-colored width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="#4195C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 5L19 12L12 19" stroke="#4195C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg dark dark-colored width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="#83D9DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 5L19 12L12 19" stroke="#83D9DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </themed-image>
  </g-link>
</template>

<script>

export default {
  props: {
    tag: {
      type: String,
      required: false
    },
    to: {
      type: String,
      required: false
    },
    location: {
      type: String,
      required: false,
      default: ""
    }
  }
}
</script>

<style lang="scss">
.next-button {
  
  display: inline-block;
  width: auto;
  padding: 10px $gutter;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  border-radius: 10px;
  margin: 0 0 $gutter 0;
  transition: 0.1s ease;
  -webkit-transition: 0.1s ease;
  @include theme(dark dark-colored) {
    color: $secondary-turquoise-color;
    border: 1px solid $secondary-turquoise-color;
  }
  @include theme(light light-colored) {
    color: $primary-blue-color;
    border: 1px solid $primary-blue-color;
  }
  span, .themed-image {
      display: inline-block;
      vertical-align: middle;
  }
  .themed-image {
    margin-left: rem(13px);
  }
  &:hover {
    @include theme(dark dark-colored) {
      background-color: $secondary-turquoise-color;
      color: var(--theme-bg);
      .themed-image {
        svg {
          path {
            stroke: var(--theme-bg);
          }
        }
      }
    }
    @include theme(light light-colored) {
      background-color: $primary-blue-color;
      color: var(--theme-bg);
      .themed-image {
        svg {
          path {
            stroke: var(--theme-bg);
          }
        }
      }
    }
  }
  &.turquoise {
    color: $secondary-turquoise-color !important;
    border: 1px solid $secondary-turquoise-color !important;
    @include theme(light light-colored) {
      .themed-image {
        svg {
          path {
            stroke: #83D9DD;
          }
        }
      }
    }
    &:hover {
      @include theme(light light-colored) {
        background-color: $secondary-turquoise-color;
        color: $primary-black-color !important;
        .themed-image {
          svg {
            path {
              stroke: var(--theme-fg);
            }
          }
        }
      }
      @include theme(dark dark-colored) {
        color: $primary-black-color !important;
      }
    }
  }
  &.green {
    color: $secondary-green-color !important;
    border: 1px solid $secondary-green-color !important;
    @include theme(light light-colored) {
      .themed-image {
        svg {
          path {
            stroke: #A6DDA9;
          }
        }
      }
    }
    @include theme(dark dark-colored) {
      .themed-image {
        svg {
          path {
            stroke: #A6DDA9;
          }
        }
      }
    }
    &:hover {
      @include theme(light light-colored) {
        background-color: $secondary-green-color;
        color: $primary-black-color !important;
        .themed-image {
          svg {
            path {
              stroke: var(--theme-fg);
            }
          }
        }
      }
      @include theme(dark dark-colored) {
        color: $primary-black-color !important;
      }
    }
  }
}
.move-left{
  margin-right:auto;
}

.move-right{
  margin-left:auto;
}

</style>
