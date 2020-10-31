<ClientOnly>
<home-page-hero></home-page-hero>
</ClientOnly>

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

<twin-columns class="latest-posts">

<template v-slot:left>

### Latest Blog Posts

Read, watch and absorb the secrets that we publish in our official blog.

</template>

<template v-slot:right>

[Unveil more secrets](/blog) ![](../src/assets/arrow-right-circle.svg)

</template>

</twin-columns>

<single-column>

<latest-posts class="latest-blog-cards"></latest-posts>

</single-column>

<twin-columns class="announcement">

<template v-slot:left>

#### Announcement

## Upgrade Complete: Secret Contracts are LIVE on Mainnet!

The secret is out! Privacy-preserving smart contracts are now LIVE on Secret Network. Learn about this launch, our exciting initial apps, our new strategic partnership with Hashed, and what comes next as "programmable privacy" comes to public blockchains.

[Read more](https://scrt.network/blog/upgrade-complete-secret-contracts-live-mainnet) ![](../src/assets/arrow-right-circle.svg)

</template>

<template v-slot:right>

![](../src/assets/announcement.png)

</template>

</twin-columns>

<twin-columns class="latest-media-articles">

<template v-slot:left>

## Latest Media Articles

</template>

<template v-slot:right>

[View all articles](/media) ![](../src/assets/arrow-right-circle.svg)

</template>

</twin-columns>

<single-column>

<template>

<grid columns="3">

<media-card tag="podcast" title="Tor Bair on Nugget's News Podcast" src="image1.png" to="https://www.youtube.com/watch?v=2kttQDQOT3Y" cta="Listen Now"></media-card>

<media-card tag="podcast" title="Decentralize This! Podcast" src="image2.png" to="https://www.youtube.com/watch?v=BGRWDKU1f6w" cta="Listen Now"></media-card>

<media-card tag="video" title="Tor Bair's interview with Ivan on Tech" src="image3.png" to="https://www.youtube.com/watch?v=rvkMPcMK_7Ah" cta="Listen Now"></media-card>

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
.announcement {
  background-color: $primary-purple-color;
  padding-top: rem(78px);
  padding-bottom: rem(78px);
  .twins-column {
    &--start {
      p {
        a {
          text-decoration: none;
          color: $primary-orange-color;
        }
        img {
          vertical-align: middle;
          margin-left: 10px;
        }
      }
    }
  }
  @include respond-to("medium and down") {
    padding-top: $gutter;
    padding-bottom: $gutter;
  }
}
.latest-posts, .latest-media-articles {
  align-items: end;
  padding-top: $gutter-xxxlarge;
  padding-bottom: 0;
  .twins-column {
    &--end {
      p {
        text-align: right;
        a {
          text-decoration: none;
          color: $primary-orange-color;
        }
        img {
          vertical-align: middle;
          margin-left: 10px;
        }
        @include respond-to("medium and down") {
          text-align: left;
        }
      }
    }
  }
}
</style>
