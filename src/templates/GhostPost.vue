<template>
  <blog-entry-layout class="post">
    <template #title>
      <div tag v-if="$page.post.primary_tag">{{ $page.post.primary_tag.name }}</div>
      <h1>{{ $page.post.title }}</h1>
      <p>{{ $page.post.description }}</p>
    </template>
    <slim-column>
      <blog-author :includeShareButtons="true">
        <g-image picture :src="coverImage"></g-image>
        <div info>
          <div>{{ $page.post.primary_author.name }}</div>
          <div>{{ $page.post.date }} &#8226; {{ $page.post.reading_time }} min read</div>
        </div>
        <div class="share-icons">
          <ShareNetwork
            v-for="network in networks"
            :network="network.network"
            :key="network.network"
            :style="{backgroundColor: network.color}"
            :url="url"
            :title="$page.post.title"
            :description="$page.post.description"
          >
            <i :class="network.icon"></i>
            <span>{{ network.name }}</span>
          </ShareNetwork>
        </div>
      </blog-author>
      <hr>
      <g-image class="cover-image" picture :src="$page.post.coverImage"></g-image>
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
  },
  data() {
    return {
      url: 'https://scrt.network' + this.$route.fullPath,
      networks: [
        { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },
        { network: 'linkedin', name: 'LinkedIn', icon: 'fab fah fa-lg fa-linkedin', color: '#007bb5' }
      ]
    }
  },
  computed: {
    coverImage: function() {
      return this.$page.post.primary_author.profile_image ? this.$page.post.primary_author.profile_image : '@/assets/scrt-logo.png';
    }
  }
}
</script>

<style lang="scss">
.post {
  .slim-column {
    @include respond-to("xlarge and up") {
      width: 900px;
    }
    @include respond-to("large") {
      width: 750px;
    }
    @include respond-to("medium") {
      width: 500px;
    }
  }
  .blog-hero {
    &__content {
      p {
        line-height: rem(32px);
      }
    }
  }
  p {
    font-family: $secondary-text-font;
    line-height: 2.5rem;
  }
  a {
    text-decoration: none;
    word-break: break-word;
  }
  .cover-image {
    margin: rem(16px) 0 rem(32px) 0;
  }
  &__content {
    h2 {
      margin: 50px 0 16px 0;
    }
    h3 {
      margin: 36px 0 24px 0;
    }
    iframe {
      width: 100%;
    }
    p {
      code {
        line-height: 1em;
        padding: 3px 5px;
        font-size: .8em;
        border-radius: 3px;
        font-family: monospace, monospace;
        white-space: pre-wrap;
        word-break: break-word;
        overflow-x: auto;
        @include theme(dark dark-colored) {
          background-color: #F2F2F2;
          color: $primary-black-color;
        }
        @include theme(light light-colored) {
          background-color: $primary-black-color;
          color: white;
        }
      }
    }
    pre {
      background-color: $primary-black-color;
      border: 1px solid black;
      white-space: pre;
      word-break: break-word;
      overflow-x: auto;
      width: min-content;
      max-width: 100%;
      margin: 0 30px $gutter-large 20px;
      padding: $gutter;
      border-radius: 3px;
      line-height: 1.5em;
      @include theme(dark dark-colored) {
        background-color: #F2F2F2;
      }
      @include theme(light light-colored) {
        background-color: $primary-black-color;
      }
      @include respond-to("large and up") {
        width: 100%;
        max-width: calc(858px - 40px);
      }
      @media (min-width: 1008px) and (max-width: 1199px) {
        width: 100%;
        max-width: calc(708px - 40px);
      }
      @include respond-to("medium") {
        width: 100%;
        max-width: calc(458px - 40px);
      } 
      @include respond-to("small") {
        max-width: calc(415px - 40px);
      }
      @include respond-to("xsmall") {
        max-width: calc(333px - 40px);
      }
      @media (min-width: 320px) and (max-width: 374px) {
        max-width: calc(275px - 40px);
      }
      code {
        font-family: monospace, monospace;
        @include theme(dark dark-colored) {
          color: $primary-black-color;
        }
        @include theme(light light-colored) {
          color: white;
        }
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
      img[src*=small-black-squiggle], img[src*=Black-Squiggle-Separator], img[src*=black-squiggle] {
        @include theme(dark dark-colored) {
          -webkit-filter: invert(100%);
          filter: invert(100%);
        }
      }
    }
    blockquote {
      font-family: $secondary-text-font;
      font-size: 22px;
      font-style: italic;
      @include respond-to("small and down") {
        word-break: break-word;
        font-size: 20px;
        margin: 0;
      }
    }
    p, li, blockquote {
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
  padding: 0 30px 0 20px;
  iframe[src*=youtube] {
    width: 100%;
    height: rem(375px);
    @include respond-to("medium") {
      height: rem(235px);
    }
    @media (min-width: 600px) and (max-width: 768px) {
      height: 380px;
    }
    @media (min-width: 500px) and (max-width: 599px) {
      height: 300px;
    }
    @media (min-width: 414px) and (max-width: 499px) {
      height: 235px;
    }
    @media (min-width: 320px) and (max-width: 413px) {
      height: 190px;
    }
    @include respond-to("small and down") {
      width: 100%;
    }
  }
}
.kg-bookmark {
  &-card {
    width: 100%;
    padding: 0 30px 0 20px;
    margin-bottom: $gutter-large;
  }
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
  &-metadata {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: rem(337px);
    @include respond-to("medium and down") {
      max-width: 100%;
      white-space: unset;
      overflow: unset;
      text-overflow: unset;
    }
  }
  &-author {
    &:after {
      content: "•";
      margin-left: $gutter-xsmall;
    }
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
      //vertical-align: middle;
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
