<template>
  <base-layout>
    <blog-hero>
      <slot name="title"></slot>
    </blog-hero>
    <slot name="default"></slot>
  </base-layout>
</template>

<script>
import BaseLayout from '../layouts/BaseLayout'
import BlogHero from '../components/blog/BlogHero'

export default {
  components: { BaseLayout, BlogHero }
}
</script>
