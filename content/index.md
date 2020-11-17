---
layout: ~/layouts/HomePageLayout
---

<slim-column>

## Want to build a better internet? Solve for privacy.

Secret Network is the first blockchain with privacy-preserving smart contracts. That means applications built on Secret can utilize encrypted data without revealing it to anyone, even the nodes in the network. For the first time, Secret Network allows developers to build powerful, permissionless, privacy-preserving applications - Secret Apps.

Blockchains are public by default. That means that all the data used in smart contracts is exposed to everyone. For blockchain technology to achieve global adoption, users and organizations need control over how their data is used – they can’t just expose it to everyone. Secret Network solves the problem of privacy, helping to secure and scale the decentralized web.

</slim-column>

<triplet-columns>

<template v-slot:left>

<home-card to="/about/about-secret-network" vertical>

### **Learn about**<br>Secret Network

<separator small />

![Community](./img/learn-about-secret-network.png)

</home-card>

</template>

<template v-slot:middle>

<home-card to="/community" vertical>

### **Join**<br>Our Community

<separator small />

![Secret App](./img/join-our-community.png)

</home-card>

</template>

<template v-slot:right>

<home-card to="/developers" vertical>

### **Build your own**<br>Secret App

<separator small />

![Node Operator](./img/build-your-own-secret-app.png)

</home-card>

</template>

</triplet-columns>

<single-column class="ecosystem">

<home-card to="/ecosystem/overview" horizontal>

### **Explore the**<br>Ecosystem

<separator small />

![Node Operator](./img/explore-the-ecosystem.png)

</home-card>

</single-column>

<small-announcement>

<template v-slot:content>

#### Announcement

### Secret Network Gets a Secret API!

Chain of Secrets just launched the Secret API for Secret Network as part of our developer community on-boarding efforts. We hope to connect and collaborate with all kinds of secret app builders!

<next-button class="turquoise" tag="Read more" to="/contributors">

</next-button>

</template>

</small-announcement>

<twin-columns class="latest-posts">

<template v-slot:left>

### Latest Blog Posts

Read, watch and absorb the secrets that we publish in<br/>our official blog.

</template>

<template v-slot:right>

<next-button tag="Unveil more secrets" to="/blog">

</next-button>

</template>

</twin-columns>

<single-column>

<latest-posts class="latest-blog-cards"></latest-posts>

</single-column>

<announcement>

<template v-slot:content-left>

#### Announcement

### Upgrade Complete:<br>Secret Contracts are<br>LIVE on Mainnet!

The secret is out! Privacy-preserving smart contracts are now LIVE on Secret Network. Learn about this launch, our exciting initial apps, our new strategic partnership with Hashed, and what comes next as "programmable privacy" comes to public blockchains.

<next-button class="turquoise" tag="Read more" to="/blog/upgrade-complete-secret-contracts-live-mainnet">

</next-button>

</template>

<template v-slot:content-right>

![](../src/assets/announcement.png)

</template>

</announcement>

<twin-columns class="latest-media-articles">

<template v-slot:left>

## Latest Media

</template>

<template v-slot:right>

<next-button tag="View all media" to="/media">

</next-button>

</template>

</twin-columns>

<single-column>

<template>

<grid columns="3">

<media-card tag="podcast" title="Private Smart Contracts: Anthony Pompliano" src="media/image1.png" to="https://www.youtube.com/watch?v=Kx9hb3U7pfs" cta="Watch Now"></media-card>

<media-card tag="podcast" title="Secret Network on The Defiant Podcast" src="media/image2.png" to="https://anchor.fm/thedefiant/episodes/Privacy-Might-be-the-Only-Thing-Left-That-Makes-Web-3-0-a-Viable-Alternative-Tor-Bair-of-Secret-Foundation-el9n52" cta="Listen Now"></media-card>

<media-card tag="video" title="Defi Privacy Is Here: Ivan on Tech" src="media/image3.png" to="https://www.youtube.com/watch?v=rvkMPcMK_7Ah" cta="Watch Now"></media-card>

</grid>

</template>

</single-column>

<style lang="scss">
.ecosystem {
  @include respond-to("large and up") {
    padding-top: 0;
    padding-bottom: 89px;
  }
}
.simple-section {
  text-align: center;
}
.latest-blog-cards {
  padding-bottom: $gutter-xxxlarge;
}
.latest-posts, .latest-media-articles {
  align-items: end;
  padding-top: $gutter-xxxlarge;
  padding-bottom: 0;
  .twins-column {
    &--end {
      text-align: right;
      @include respond-to("medium and down") {
        text-align: left;
      }
    }
    p {
      margin: 0;
    }
    .next-button {
      margin: 0;
    }
  }
}
</style>
