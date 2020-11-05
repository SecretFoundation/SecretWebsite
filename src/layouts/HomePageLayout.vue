<template>
  <div>
    <home-page-hero></home-page-hero>
    <slot name="default"></slot>
  </div>
</template>

<script>
import HomePageHero from '@/components/home/HomePageHero'

export default {
  components: { HomePageHero }
}
</script>
