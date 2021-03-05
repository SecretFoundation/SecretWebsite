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

<style lang="scss">

.sub-content {
  background: #1b2129;
}
.submenu {
  background-color: $primary-purple-color;
  padding-top: 0;
  padding-bottom: 0;
  z-index: -1;
  .single-column {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(4, rem($header-nav-items-width));
        grid-column-gap: rem($header-nav-spacing);
        justify-content: $header-nav-justify-content;
        justify-items: $header-nav-justify-items;
        padding-top: 0;
        padding-bottom: 0;
        a {
            text-decoration: none;
            width: calc(100% + 2px);
            height: 100%;
            display: inline-grid;
            place-content: center center;
            position: relative;
            padding: $gutter-large 0;
            height: 100%;
            cursor: pointer;
            &:not(:first-child) {
                &:before {
                content: '';
                position: absolute;
                left: 0.5px;
                width: 1px;
                height: 26px;
                top: 20px;
                background: var(--theme-fg);
                z-index: 1;
            }
        }
        &.active, &:hover {
            z-index: 10;
        }
        &.active {
          &:not([home]) {
            @include theme(dark light dark-colored light-colored) {
              @each $name, $color in $primary-colors {
                &[#{$name}] {
                  background-color: $color;
                  color: var(--theme-fg);
                }
                &[cream], &[yellow], &[orange] {
                  color: $primary-black-color;
                }
              }
            }
          }
        }
        &:hover {
          @include theme(dark light dark-colored light-colored) {
            @each $name, $color in $primary-colors {
              &[#{$name}] {
                background-color: $color;
                color: white;
              }
              &[cream], &[yellow], &[orange] {
                color: $primary-black-color;
              }
            }
          }
          &:before {
            opacity: 0;
          }
        }
        &:active {
          &:before {
            display: none;
          }
        }
    }  
  }
  @include respond-to("small and down") {
        padding-left: 0 !important;
        padding-right: 0 !important;
        .single-column {
            overflow-x: scroll;
            justify-content: left;
            padding-left: 0;
            padding-right: 0;
            width: 100%;
            a {
                width: $header-nav-items-width;
            }
        }
    }
}
</style>
