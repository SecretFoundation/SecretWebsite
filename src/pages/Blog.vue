<template>
  <base-layout class="blog">
    <main-page-layout>
      <template #title>
        <h2>Secret Network Blog</h2>
      </template>
      <single-column>
        <h2>Featured Posts</h2>
        <hr>
        <featured-posts></featured-posts>
      </single-column>
      <single-column>
        <h2>All Posts</h2>
        <hr>
        <posts :posts="$page.posts.edges"></posts>
      </single-column>
    </main-page-layout>
  </base-layout>
</template>

<script>
import BaseLayout from '../layouts/BaseLayout'
import MainPageLayout from '../layouts/MainPageLayout'
import Posts from '@/components/blog/Posts'

export default {
  components: { BaseLayout, MainPageLayout, Posts },
}
</script>

<page-query>
{
  posts: allGhostPost(sortBy: "published_at", order: DESC) {
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
</page-query>

<style lang="scss" scoped>
.blog {
  h2 {
    margin: 0;
  }
  hr {
    margin: $gutter-xlarge 0;
  }
}
</style>
