<template>
  <single-column class="docs">
    <div class="docs__sidebar">
      <ul class="docs-index">
        <li v-for="(item, index) in nav" :key="item.href">
          <div class="docs-index__menu" @click="expand(index)">
            <span>{{ item.text }}</span>
            <themed-image class="docs-index__chevron" :class="{ 'docs-index__chevron--show': !expanded[index] }">
              <g-image light light-colored src="@/assets/chevron-right-dark.svg"></g-image>
              <g-image dark dark-colored src="@/assets/chevron-right-light.svg"></g-image>
            </themed-image>
            <themed-image class="docs-index__chevron" :class="{ 'docs-index__chevron--show': expanded[index] }">
              <g-image light light-colored src="@/assets/chevron-down-dark.svg"></g-image>
              <g-image dark dark-colored src="@/assets/chevron-down-light.svg"></g-image>
            </themed-image>
          </div>
          <ul class="docs-index__submenu" :class="{ 'docs-index__submenu--expanded': expanded[index] }">
            <li v-for="subItem in item.sublinks" :key="subItem.href" :class="{ 'docs-index__submenu--current': subItem.href === currentNav }">
              <g-link :to="subItem.href">{{ subItem.text }}</g-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <slim-column class="docs__body">
      <slot name="default"></slot>
    </slim-column>
  </single-column>
</template>

<script>
import nav from './docs-nav.json'

export default {
  data() {
    return {
      nav,
      expanded: {},
      currentNav: '',
    }
  },
  created() {
    if (process.isClient) {
      this.currentNav = window.location.pathname
      Object.keys(this.nav).forEach(key => {
        this.$set(this.expanded, key, false)
      })
      const index = this.search(this.currentNav) || 0
      this.$set(this.expanded, index, true)
    }
  },
  methods: {
    expand(index) {
      if (typeof this.expanded[index] === 'undefined') {
        this.$set(this.expanded, index, false)
      }
      this.$set(this.expanded, index, !this.expanded[index])
      this.reset(index)
    },
    reset(ignoreIndex) {
      Object.keys(this.nav)
        .filter(key => key != ignoreIndex)
        .forEach(key => this.$set(this.expanded, key, false))
    },
    search(pathname) {
      let index = null
      for (let i = 0; i < this.nav.length; i++) {
        for (let j = 0; j < this.nav[i].sublinks.length; j++) {
          if (this.nav[i].sublinks[j].href === pathname) {
            index = i
            break
          }
        }
        if (index != null) break
      }
      return index
    }
  }
}
</script>

<style lang="scss" scoped>
$-icon-size: 10px;

.docs-index {

  &__menu {
    display: grid;
    grid-template-columns: max-content $-icon-size;
    grid-column-gap: $gutter-xsmall;
    align-items: center;
    cursor: pointer;
    user-select: none;

    span {
      font-weight: bold;
    }

    img {
      width: $-icon-size;
      height: $-icon-size;
    }
  }

  &__submenu {
    display: none;
    padding: $gutter 0 0 $gutter;

    &--expanded {
      display: block;
    }

    &--current {
      a {
        color: $primary-purple-color;
        font-weight: bold;
      }
    }
  }

  &__chevron {
    display: none;

    &--show {
      display: block;
    }
  }
}

.docs {
  display: grid;
  justify-content: space-between;

  @include respond-to("large and up") {
    grid-template-columns: rem(250px) 1fr;
  }

  @include respond-to("medium and down") {
    grid-auto-flow: row;
  }

  &__body {
    &.column {
      padding: 0;
    }
  }

  &__sidebar {
    @include respond-to("large and up") {
      position: sticky;
      overflow: auto;
      height: min-content;
      padding: $gutter-xlarge 0;

      @include respond-to("small and down") {
       top: $page-mobile-header-offset;
      }
      @include respond-to("medium") {
        top: $page-tablet-header-offset;
      }
      @include respond-to("large and up") {
        top: $page-desktop-header-offset;
      }
    }
  }
}
</style>
