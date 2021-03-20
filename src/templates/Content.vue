<template>
  <base-layout :nav="$page.content.nav">
    <VueRemarkContent class="content" />
  </base-layout>
</template>

<script>
import BaseLayout from "../layouts/BaseLayout";

export default {
  name: "Content",
  components: { BaseLayout }
};
</script>

<page-query>
query ($id: ID!) {
  content(id: $id) {
    title
    content
    nav
  }
}
</page-query>

<style lang="scss">
.content {
  padding-bottom: $gutter-xlarge;
}
</style>
