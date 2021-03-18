<template>
  <main-page-layout>
    <template v-slot:title>
        <h2>Media</h2>
    </template>
    <slim-column>
        <h2>Above Content</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </slim-column>
    <submenu class="subnav" id="nav" location="left">
        <template v-slot:content-center>
            <g-link orange to="/media/blog#nav">Blog</g-link>
            <g-link blue to="/media/video#nav">Videos</g-link>
            <g-link yellow to="/media/podcast#nav">Podcasts</g-link>
            <g-link red to="/media/brand#nav">Brand</g-link>
            <!-- <g-link green to="/media/community-content">Community Content</g-link> -->
        </template>
        <template v-slot:sub-content>
            <slot></slot>
        </template>
    </submenu>
    <slim-column>
    <h2>Below Content</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    </slim-column>
  </main-page-layout>
</template>

<script>
import MainPageLayout from '../MainPageLayout.vue'

    export default {
        name: 'MediaLayout',
        components: { MainPageLayout }
    }
</script>

<style lang="scss" scoped>
    .subnav {
        margin-bottom: 50px;
        &#nav {
            padding-top: 150px;
            margin-top: -150px;
        }
    }
</style>
