<template>
  <base-layout class="blog">
    <main-page-layout>
      <template #title>
        <h2>Secret Network Blog</h2>
      </template>
      <single-column>
        <div class="inline">
          <h2>Featured Secrets</h2>
          <hr>
        </div>
        <featured-posts :posts="$page.posts.edges"></featured-posts>
        <hr>
      </single-column>
      <single-column>
        <h2>All Secrets</h2>
        <posts :posts="$page.posts.edges"></posts>
      </single-column>
    </main-page-layout>
  </base-layout>
</template>

<script>
import BaseLayout from '../layouts/BaseLayout'
import MainPageLayout from '../layouts/MainPageLayout'
import Posts from '@/components/blog/Posts'
import PostsFeatured from '@/components/blog/PostsFeatured'

export default {
  components: { BaseLayout, MainPageLayout, Posts, PostsFeatured },
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

  tags: allGhostTag {
    edges {
      node {
        name
        id
        ghostId
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.blog {
  h2 {
    margin: 0;
    padding: 0;
  }
  hr {
    margin: $gutter-xlarge 0;
  }
  .inline {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: rem(47px);
    align-items: center;
    h2 {
      margin: 0;
      padding: 0;
    }
    @include respond-to("medium and down") {
      display: grid;
      grid-template-columns: 100%;
      grid-column-gap: 0;
      align-items: left;
      hr {
        margin: $gutter-large 0;
      }
    }
  }
  .grid {
    margin-top: rem(55px);
  }
}
</style>
