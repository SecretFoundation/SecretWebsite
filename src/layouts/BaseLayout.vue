<template>
  <simple-layout>
    <template #logo><g-link to="/"><g-image class="logo" src="../assets/secret-logo--white.svg"></g-image></g-link></template>
    <template #navigation>
      <g-link to="/">Home</g-link>
      <g-link to="/about">About</g-link>
      <g-link to="/blog">Blog</g-link>
      <g-link to="/wiki">Wiki</g-link>
      <g-link to="/">Chat</g-link>
      <g-link to="/">Forum</g-link>
      <g-link to="/">Twitter</g-link>
    </template>
    <template #actions>
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
