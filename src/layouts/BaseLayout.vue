<template>
  <simple-layout>
    <template #logo><g-link to="/"><g-image class="logo" src="../assets/flare-starter-logo--white.svg"></g-image></g-link></template>
    <template #navigation>
      <a href="#">Features</a>
      <a href="#">User roles</a>
      <a href="#">System</a>
    </template>
    <template #actions>
      <a href="#">Sign in</a>
    </template>
    <base-page>
      <slot></slot>
    </base-page>
    <template #footer></template>
  </simple-layout>
</template>

<script>
  export default {
    name: 'BaseLayout',
  };
</script>

<style>
  .logo {
    height: 30px;
    width: auto;
  }
</style>
