<template>
  <grid columns="3">
    <blog-card-featured v-for="{ node } in posts" :key="node.id" :tag="node.primary_tag != null ? node.primary_tag.name : ''">
      <template #tag v-if="node.primary_tag">{{ node.primary_tag.name }}</template>
      <h4><g-link :to="`/blog/${node.slug}`">{{ node.title }}</g-link></h4>
      <separator small space-small></separator>
      <p>{{ node.description | truncate }}</p>
      <template #footer>
        <g-image picture v-if="node.primary_author.profile_image" :src="node.primary_author.profile_image"></g-image>
        <g-image picture v-else src="@/assets/scrt-logo.png"></g-image>
        <div info>
          <div>{{ node.primary_author.name }}</div>
          <div>{{ node.date }} &#8226; {{ node.reading_time }} min read</div>
        </div>
      </template>
    </blog-card-featured>
  </grid>
</template>

<script>
import BlogCardFeatured from '@/components/blog/BlogCardFeatured'

const truncateSize = 200

export default {
  components: { BlogCardFeatured },
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  filters: {
    truncate(value) {
      if (!value) return ''
      return value.length >= truncateSize ? `${value.substring(0, truncateSize - 1)}...` : value
    }
  }
}
</script>
