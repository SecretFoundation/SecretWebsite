<template>
  <main-page-layout>
    <template v-slot:title>
        <h2>Media</h2>
    </template>
    <submenu class="subnav" id="nav" location="left">
        <template v-slot:content-center>
            <g-link orange to="/media/features" :class="isActive('/media/features')">Features</g-link>
            <g-link blue to="/media/blog" :class="isActive('/media/blog')">Blog</g-link>
            <g-link green to="/media/video" :class="isActive('/media/video')">Videos</g-link>
            <g-link yellow to="/media/podcast" :class="isActive('/media/podcast')">Podcast</g-link>
            <g-link red to="/media/brand" :class="isActive('/media/brand')">Brand</g-link>
            <!-- <g-link green to="/media/community-content">Community Content</g-link> -->
        </template>
        <template v-slot:sub-content>
            <slot></slot>
        </template>
    </submenu>
  </main-page-layout>
</template>

<script>
import MainPageLayout from '../MainPageLayout.vue'

    export default {
        name: 'MediaLayout',
        components: { MainPageLayout },
        computed: {
            isActive() {
                return (name) => {
                    if(name == this.$route.path) {
                        return "active";
                    }
                } 
            }
        }
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
