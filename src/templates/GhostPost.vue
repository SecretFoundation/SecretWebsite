<template>
  <blog-entry-layout class="post">
    <template #title>
      <div tag v-if="$page.post.primary_tag">{{ $page.post.primary_tag.name }}</div>
      <h1>{{ $page.post.title }}</h1>
      <separator small space-small center />
      <p>{{ $page.post.description }}</p>
    </template>
    <single-column>
      <g-image :src="$page.post.coverImage" class="post cover image"></g-image>
    </single-column>
    <slim-column>
      <blog-author>
        <g-image picture :src="$page.post.primary_author.profile_image"></g-image>
        <div info>
          <div>{{ $page.post.primary_author.name }}</div>
          <div>{{ $page.post.date }} &#8226; {{ $page.post.reading_time }} min read</div>
        </div>
      </blog-author>
      <hr>
      <div class="post__content" v-html="$page.post.content"></div>
    </slim-column>
  </blog-entry-layout>
</template>

<script>
import BlogEntryLayout from '@/layouts/BlogEntryLayout'
import BlogAuthor from '@/components/blog/BlogAuthor'

export default {
  components: { BlogEntryLayout, BlogAuthor }
}
</script>

<style lang="scss">
.post {
  &__content {
    iframe {
      width: 100%;
    }
  }
}
.kg-card {
  margin-bottom: $gutter-xlarge;

  figcaption {
    text-align: center;
    text-decoration: underline;
  }
}
.kg-bookmark {
  &-container {
    display: grid;
    box-shadow: 0 0 1px var(--theme-fg);

    @include respond-to("large and up") {
      grid-auto-flow: column;
      grid-template-columns: 1fr 231px;
      grid-template-rows: minmax(100%, 156px);
    }
    @include respond-to("medium and down") {
      grid-template-columns: 1fr;
    }
  }
  &-content {
    display: grid;
    padding: $gutter;
    grid-auto-rows: max-content;
    grid-row-gap: $gutter;
  }
  &-icon {
    width: rem(24px);
    height: rem(24px);
  }
  &-title {
    font-size: 1rem;
    font-weight: bold;
  }
  &-description {
    overflow-y: hidden;
    max-height: 48px;
  }
  &-thumbnail {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-author:after {
    content: "•";
    margin-left: $gutter-small;
  }
  &-metadata {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: rem(24px) max-content max-content;
    align-items: center;
    grid-column-gap: $gutter-small;
  }
}
</style>

<page-query>
query Post ($path: String!) {
  post: ghostPost (path: $path) {
    title
    path
    date: published_at (format: "D MMM YYYY")
    description: excerpt
    content: html
    coverImage: feature_image
    primary_tag {
      name
    }
    primary_author {
      name
      profile_image
    }
  }
}
</page-query>
