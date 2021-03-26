<template>
  <div>
    <no-column class="submenu">
        <single-column>
            <slot name="content-center"></slot>
        </single-column>
    </no-column>
    <div class="sub-content">
      <slot name="sub-content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      location: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">

.sub-content {
  //background: #1b2129;
  padding: $gutter-xlarge 0 $gutter-small;
}
.submenu {
  background-color: $primary-purple-color;
  padding-top: 0;
  padding-bottom: 0;
  z-index: -1;
  margin: $gutter-xlarge 0 0 0;
  .single-column {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repat(auto-fit, $header-nav-items-width);
    grid-column-gap: rem($header-nav-spacing);
    padding: 0;
    overflow-x: auto;
    width: auto;
    max-width: 1200px;
    text-align: center;
    input[type="radio"] {
      opacity: 0;
      position: fixed;
      width: 0;
    }
    a, label {
      text-decoration: none;
      width: calc(100% + 2px);
      height: 100%;
      display: inline-grid;
      place-content: center center;
      position: relative;
      padding: $gutter-large;
      text-align: center;
      cursor: pointer;
      &:not(:first-child) {
        &:before {
          content: '';
          position: absolute;
          left: 0.5px;
          width: 1px;
          height: 26px;
          top: 50%;
          background: var(--theme-fg);
          z-index: 1;
          transform: translateY(-50%);
        }
      }
      &.active, &:hover {
          z-index: 10;
      }
      &.active {
        @include theme(dark light dark-colored light-colored) {
          @each $name, $color in $submenu-colors {
            &[#{$name}] {
              background-color: $color;
              color: var(--theme-fg);
            }
            &[white], &[cream], &[yellow], &[orange], &[secondary-purple], &[secondary-yellow], &[secondary-green], &[secondary-peach], &[secondary-turquoise], &[secondary-pink], &[secondary-red], &[secondary-orange], &[secondary-blue] {
              color: $primary-black-color;
            }
          }
        }
        &:before {
          display: none;
        }
      }
      &:hover {
        @include theme(dark light dark-colored light-colored) {
          @each $name, $color in $submenu-colors {
            &[#{$name}] {
              background-color: $color;
              color: white;
            }
            &[white], &[cream], &[yellow], &[orange], &[secondary-purple], &[secondary-yellow], &[secondary-green], &[secondary-peach], &[secondary-turquoise], &[secondary-pink], &[secondary-red], &[secondary-orange], &[secondary-blue] {
              color: $primary-black-color;
            }
          }
        }
        &:before {
          opacity: 0;
        }
      }
    }
    input[type="radio"]:checked + label {
        background-color: #bfb;
        border-color: #4c4;
    }
  }
  @include respond-to("small and down") {
        padding-left: 0 !important;
        padding-right: 0 !important;
        .single-column {
            overflow-x: auto;
            white-space: nowrap;
            justify-content: left;
            padding-left: 0;
            padding-right: 0;
            width: 100%;
            display: inline-block;
            a, label {
                min-width: $header-nav-items-width;
                width: auto;
                padding: $gutter-large $gutter-xlarge;
                &:not(:first-child) {
                  &:before {
                    left: -1px;
                  }
                }
            }
        }
    }
}
</style>
