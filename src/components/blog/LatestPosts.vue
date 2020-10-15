<template>
  <grid columns="3">
    <blog-card v-for="{ node } in $static.posts.edges" :key="node.id" :tag="node.primary_tag != null ? node.primary_tag.name : ''">
      <template #tag v-if="node.primary_tag">{{ node.primary_tag.name }}</template>
      <h4><g-link :to="`/blog/${node.slug}`">{{ node.title }}</g-link></h4>
      <separator small space-small></separator>
      <p>{{ node.description }}</p>
      <template #footer>
        <g-image picture :src="node.primary_author.profile_image"></g-image>
        <div info>
          <div>{{ node.primary_author.name }}</div>
          <div>{{ node.date }} &#8226; {{ node.reading_time }} min read</div>
        </div>
      </template>
    </blog-card>
  </grid>
</template>

<script>
import BlogCard from '@/components/blog/BlogCard'

export default {
  components: { BlogCard }
}
</script>

<static-query>
{
  posts: allGhostPost(sortBy: "published_at", order: DESC, limit: 3) {
    edges {
      node {
        title
        description: excerpt
        date: published_at (format: "D MMM YYYY")
        id
        slug
        reading_time
        primary_tag {
          name
        }
        primary_author {
          name
          profile_image
        }
      }
    }
  }
}
</static-query>
