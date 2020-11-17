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
    word-break: break-word;
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
    pre {
      white-space: pre;
      word-break: break-word;
      overflow-x: auto;
      width: min-content;
      max-width: 100%;
      margin: rem(25px) 0;
      padding: $gutter;
      border: 1px solid black;
      background-color: $primary-black-color;
      border-radius: 3px;
      line-height: 1.5em;
      @include respond-to("large and up") {
        max-width: calc(#{$slim-column-width-xlarge} - 64px);
      }
      @media (min-width: 1008px) and (max-width: 1199px) {
        max-width: calc(#{$slim-column-width-large} - 64px);
      }
      @include respond-to("medium") {
        max-width: calc(#{$slim-column-width-medium} - 32px);
      } 
      @include respond-to("small") {
        max-width: calc(414px - 64px);
      }
      @include respond-to("xsmall and down") {
        max-width: calc(375px - 64px);
      }
      code {
        font-family: monospace, monospace;
        color: white;
      }
    }
    p {
      code {
        background-color: $primary-black-color;
        line-height: 1em;
        padding: 2px 5px;
        font-size: .8em;
        border-radius: 3px;
        font-family: monospace, monospace;
        color: white;
        white-space: pre-wrap;
        word-break: break-word;
        overflow-x: auto;
      }
    }
    ul, ol {
      padding-left: 1.3em;
      li {
        font-family: $secondary-text-font;
        line-height: $paragraph-line-height;
      }
    }
    ul {
      list-style: disc;
    }
    ol {
      list-style: decimal;
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
.kg-embed-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.kg-bookmark {
  &-container {
    display: grid;
    box-shadow: 0 0 1px var(--theme-fg);
    border-radius: 3px;
    @include respond-to("large and up") {
      grid-auto-flow: column;
      grid-template-columns: 1fr 231px;
      grid-template-rows: minmax(156px, 100%);
    }
    @include respond-to("medium and down") {
      grid-template-columns: 1fr;
    }
    &:hover {
      color: var(--theme-fg);
      .kg-bookmark-title {
        @include theme(dark dark-colored) {
          color: $secondary-turquoise-color;
        }
        @include theme(light light-colored) {
          color: $primary-blue-color;
        }
      }
    }
  }
  &-content {
    display: grid;
    padding: $gutter;
    grid-auto-rows: max-content;
    grid-row-gap: $gutter;
    width: 100%;
    @include respond-to("medium and down") {
      order: 2;
    }
  }
  &-icon {
    width: rem(24px);
    height: rem(24px);
  }
  &-title {
    font-size: 1rem;
    font-weight: bold;
    line-height: $paragraph-line-height;
  }
  &-description {
    line-height: $paragraph-line-height;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
  &-thumbnail {
    position: relative;
    min-width: 33%;
    max-height: 100%;
    background-color: $primary-black-color;
    img {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      width: 100%;
      max-width: 1040px;
      height: 100%;
      border-radius: 0 3px 3px 0;
      -o-object-fit: cover;
      object-fit: cover;
      vertical-align: middle;
    }
    @include respond-to("medium and down") {
      order: 1;
      min-height: rem(160px);
      width: 100%;
      img {
        border-radius: 3px 3px 0 0;
      }
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
