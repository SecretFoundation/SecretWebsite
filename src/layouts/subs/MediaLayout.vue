<template>
  <main-page-layout>
    <template v-slot:title>
        <h2>Media</h2>
    </template>
    <slim-column>

    <h2>Want to build a better internet? Solve for privacy.</h2>
    <p>
        Secret Network is the first blockchain with privacy-preserving smart contracts. That means applications built on Secret can utilize encrypted data without revealing it to anyone, even the nodes in the network. For the first time, Secret Network allows developers to build powerful, permissionless, privacy-preserving applications - Secret Apps.
        <br><br>
        Blockchains are public by default. That means that all the data used in smart contracts is exposed to everyone. For blockchain technology to achieve global adoption, users and organizations need control over how their data is used – they can’t just expose it to everyone. Secret Network solves the problem of privacy, helping to secure and scale the decentralized web.
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
    <h2>Want to build a better internet? Solve for privacy.</h2>
    <p>
        Secret Network is the first blockchain with privacy-preserving smart contracts. That means applications built on Secret can utilize encrypted data without revealing it to anyone, even the nodes in the network. For the first time, Secret Network allows developers to build powerful, permissionless, privacy-preserving applications - Secret Apps.
        <br><br>
        Blockchains are public by default. That means that all the data used in smart contracts is exposed to everyone. For blockchain technology to achieve global adoption, users and organizations need control over how their data is used – they can’t just expose it to everyone. Secret Network solves the problem of privacy, helping to secure and scale the decentralized web.
    </p>
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
