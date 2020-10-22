<template>
  <posts :posts="$static.posts.edges"></posts>
</template>

<script>
import Posts from '@/components/blog/Posts'

export default {
  components: { Posts }
}
</script>

<static-query>
{
  posts: allGhostPost(filter: { featured: { eq: true }}, sortBy: "published_at", limit: 3) {
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
