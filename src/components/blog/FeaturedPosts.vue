<template>
  <posts-featured :posts="$static.posts.edges"></posts-featured>
</template>

<script>
import PostsFeatured from '@/components/blog/PostsFeatured'

export default {
  components: { PostsFeatured }
}
</script>

<static-query>
{
  posts: allGhostPost(filter: { featured: { eq: true }}, sortBy: "published_at", limit: 8) {
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
