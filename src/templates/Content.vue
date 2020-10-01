<template>
  <base-layout>
    <VueRemarkContent />
  </base-layout>
</template>

<script>
import BaseLayout from "../layouts/BaseLayout";

export default {
  name: "Content",
  components: { BaseLayout },
};
</script>

<page-query>
query ($id: ID!) {
  content(id: $id) {
    title
    content
  }
}
</page-query>


<style lang="scss">
  .column {
    padding: rem($gutter-large);
  }
</style>