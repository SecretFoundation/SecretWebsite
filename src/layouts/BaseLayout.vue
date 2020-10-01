<template>
  <simple-layout>
    <template #logo><g-link to="/"><g-image class="logo" src="../assets/secret-logo--white.svg"></g-image></g-link></template>
    <template #navigation>
      <g-link to="/about/about-secret-network">About</g-link>
      <g-link to="/committees/introduction">Committees</g-link>
      <g-link to="/community">Community</g-link>
      <g-link to="/developers/introduction/overview">Developers</g-link>
      <g-link to="/ecosystem/overview">Ecosystem</g-link>
      <g-link to="/about/faq">FAQ</g-link>
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
