<template>
  <blog-entry-layout class="post">
    <template #title>
      <div tag v-if="$page.post.primary_tag">{{ $page.post.primary_tag.name }}</div>
      <h1>{{ $page.post.title }}</h1>
      <p>{{ $page.post.description }}</p>
    </template>
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

const url = `https://scrt.network`

export default {
  components: { BlogEntryLayout, BlogAuthor },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: 'title', content: this.$page.post.title },
        { name: 'author', content: this.$page.post.primary_author.name },
        { key: 'og:url', property: 'og:url', content: `${url}${this.$route.fullPath}` },
        { key: 'og:title', property: 'og:title', content: this.$page.post.title },
        { key: 'og:description', property: 'og:description', content: this.$page.post.description },
        { key: 'og:image', property: 'og:image', content: this.$page.post.coverImage },
        { key: 'twitter:image', property: 'twitter:image', content: this.$page.post.coverImage }
      ],
    }
  }
}
</script>

<style lang="scss">
.post {
  p {
    font-family: $secondary-text-font;
    line-height: rem(32px);
  }
  a {
    text-decoration: none;
    word-break: break-all;
  }
  &__content {
    iframe {
      width: 100%;
    }
    p {
      a {
        text-decoration: underline;
        font-weight: bold;
        @include theme(dark dark-colored) {
          color: $secondary-turquoise-color;
        }
        @include theme(light light-colored) {
          color: $primary-blue-color;
        }
      }
    }
    .kg-image-card {
      img[src*=small-black-squiggle], img[src*=Black-Squiggle-Separator] {
        @include theme(dark dark-colored) {
          -webkit-filter: invert(100%);
          filter: invert(100%);
        }
      }
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
      grid-template-rows: minmax(156px, 100%);
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
    width: 100%;
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
    margin-left: $gutter-xsmall;
  }
  &-metadata {
    @include respond-to("large and up") {
      display: grid;
      grid-auto-columns: max-content;
      grid-auto-flow: column;
      align-items: center;
      grid-column-gap: $gutter-xsmall;
    }
    @include respond-to("medium and down") {
      & > * {
        display: inline-block;
        vertical-align: middle;
        margin-right: $gutter-small;
        margin-bottom: $gutter-small;
      }
    }
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
