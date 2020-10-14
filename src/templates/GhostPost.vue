<template>
  <div class="post">
    Hello
  </div>
</template>

<page-query>
query Post ($path: String!) {
  post: ghostPost (path: $path) {
    title
    path
    date: published_at (format: "D. MMMM YYYY")
    tags {
      id
      title: name
    }
    description: excerpt
    content: html
    coverImage: feature_image
  }
}
</page-query>
