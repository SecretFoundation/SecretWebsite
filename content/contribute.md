---
layout: ~/layouts/MainPageLayout
---

<template v-slot:title>

## Secret Website Documentation

</template>

<slim-column class="description">

This website has a variety of components such as cards, buttons, announcements, etc. Here you can find examples, descriptions and information on how to use them.

<a class="white-button" href="https://github.com/SecretFoundation/SecretWebsite">Go to Github Repository</a>

</slim-column>

<slim-column>

## Cards

<hr>

### Home Cards

Home Cards are the main Call to Action on the Homepage. They are used as links to other pages on the website.

<themed-image>

<g-image light light-colored src="../src/assets/vertical_card_light.png" class="width__455px"></g-image>

<g-image dark dark-colored src="../src/assets/vertical_card_dark.png" class="width__455px"></g-image>

</themed-image>

<themed-image>

<g-image light light-colored src="../src/assets/horizontal_card_light.png"></g-image>

<g-image dark dark-colored src="../src/assets/horizontal_card_dark.png"></g-image>

</themed-image>

#### Example

<pre>
<code><<div class="hot-pink">home-card</div> <div class="purple">to</div>="/about/about-secret-network" <div class="purple">vertical</div>><div>### **Learn about**<<div class="br">br</div>>Secret Network</div><<div class="hot-pink">separator small</div> />
<div>   ![Community](./img/home-card/learn-about-secret-network.png)</div>
</<div class="hot-pink">home-card</div>></code>
</pre>

<pre>
<code><<div class="hot-pink">home-card</div> <div class="purple">to</div>="/about/about-secret-network" <div class="purple">horizontal</div>><div>### **Explore the**<<div class="br">br</div>>Ecosystem</div><<div class="hot-pink">separator small</div> />
<div>   ![Node Operator](./img/home-card/explore-the-ecosystem.png)</div>
</<div class="hot-pink">home-card</div>></code>
</pre>

<hr>

### Media Cards

Media Cards are used to share media content such as videos, podcast episodes and blog articles, whether it's Secret Network original content or from an external source but relates to Secret Network.

<themed-image>

<g-image light light-colored src="../src/assets/media_card_light.png" class="width__490px"></g-image>

<g-image dark dark-colored src="../src/assets/media_card_dark.png" class="width__490px"></g-image>

</themed-image>

#### Example

<pre>
<code><<div class="hot-pink">media-card</div>&nbsp;<div class="purple">tag</div>="podcast" <div class="purple">title</div>="Tor Bair on Nugget's News Podcast" <div class="purple">src</div>="media-card/image2.png" <div class="purple">to</div>="https://www.youtube.com/watch?v=2kttQDQOT3Y" <div class="purple">cta</div>="Listen Now"></<div class="hot-pink">media-card</div>></code>
</pre>

<hr>

### Cards

Cards are very versatile components, composed by a header, body and footer, and can be used to describe concepts, steps or just link to other pages.

<themed-image>

<g-image light light-colored src="../src/assets/cards_light.png" class="width__570px"></g-image>

<g-image dark dark-colored src="../src/assets/cards_dark.png" class="width__570px"></g-image>

</themed-image>

#### Example

<pre>
<code><<div class="hot-pink">card</div>>
<div><<div class="hot-pink">template</div> <div class="purple">v-slot</div>:header></div>
<div>    ![Run](../img/card/run.svg)</div>
<div></<div class="hot-pink">template</div>></div>
<div>#### Node Runner Guide</div>
<div><<div class="hot-pink">template</div> <div class="purple">v-slot</div>:footer></div>
<div><<div class="hot-pink">next-button</div> <div class="purple">tag</div>="Read guide"</div>
<div><div class="purple">to</div>="https://build.scrt.network/validators-and-full-nodes/join-validator-mainnet.html"></div>
<div></<div class="hot-pink">next-button</div>></div>
<div></<div class="hot-pink">template</div>></div>
<div></<div class="hot-pink">card</div>></div>
</code>
</pre>

<hr>

### Community Cards

Community cards are used to link Secret Network social media and platforms where the community gets together. (e. g. Telegram, Discord, etc.)

<themed-image>

<g-image light light-colored src="../src/assets/community_card_light.png" class="width__455px"></g-image>

<g-image dark dark-colored src="../src/assets/community_card_dark.png" class="width__455px"></g-image>

</themed-image>

#### Example

<pre>
<code>
<div><<div class="hot-pink">community-grid</div> <div class="purple">name</div>="Discord Chat"<br><div class="purple">to</div>="https://discord.com/invite/SJK32GY" <div class="purple">class</div>="discord"></div>
<div><<div class="hot-pink">template</div> <div class="purple">v-slot</div>:icon></div>
<div><<div class="hot-pink">themed-image</div>></div>
<div><<div class="hot-pink">g-image</div> <div class="purple">light light-colored</div></div>
<div><div class="purple">src</div>="./img/community-card/discord-black.svg"></<div class="hot-pink">g-image</div>></div>
<div><<div class="hot-pink">g-image</div> <div class="purple">light light-colored</div></div>
<div><div class="purple">src</div>="./img/community-card/discord-white.svg"></<div class="hot-pink">g-image</div>></div>
<div></<div class="hot-pink">themed-image</div>></div>
<div></<div class="hot-pink">template</div>></div>
<div></<div class="hot-pink">community-grid</div>></div>
</code>
</pre>

<hr>

### Grid Item

As its name suggests, this component is part of a grid of elements such as validators, contributors, members, etc. They are used as links and when hovering over them, the name and tags are displayed.

<themed-image>

<g-image light light-colored src="../src/assets/grid_item_light.png" class="width__530px"></g-image>

<g-image dark dark-colored src="../src/assets/grid_item_dark.png" class="width__530px"></g-image>

</themed-image>

#### Example

<pre>
<code>
<div><<div class="hot-pink">grid-item</div> <div class="purple">name</div>="Secret Nodes" <div class="purple">tag</div>="validator" <div class="purple">tagTwo</div>="developer"<br><div class="purple">to</div>="https://secretnodes.org"<br><div class="purple">src</div>="grid-item/contributors/image2.png"></div>
<div></<div class="hot-pink">grid-item</div>></div>
</code>
</pre>

</slim-column>

<slim-column>

## Buttons

<hr>

### "Next" Button

Composed by a "next" arrow and a tag, used mostly to link to other pages inside or outside the website.

<themed-image>

<g-image light light-colored src="../src/assets/next_button_light.png" class="width__250px"></g-image>

<g-image dark dark-colored src="../src/assets/next_button_dark.png" class="width__250px"></g-image>

</themed-image>

#### Example

<pre>
<code><<div class="hot-pink">next-button</div> <div class="purple">tag</div>="See more" <div class="purple">to</div>="/podcast">
<div></<div class="hot-pink">next-button</div>></div></code>
</pre>

<hr>

### "Back" Button

Composed by a "back" arrow and a tag, used mostly to link to the previous page.

<themed-image>

<g-image light light-colored src="../src/assets/back_button_light.png" class="width__250px"></g-image>

<g-image dark dark-colored src="../src/assets/back_button_dark.png" class="width__250px"></g-image>

</themed-image>

#### Example

<pre>
<code><<div class="hot-pink">back-button</div> <div class="purple">tag</div>="Back to Ecosystem" <div class="purple">to</div>="/ecosystem/overview">
<div></<div class="hot-pink">back-button</div>></div></code>
</pre>

</slim-column>

<slim-column>

## Announcements

<hr>

### Large Announcement

This announcement occupies 100% of the page width and it's part of the website's layout so it's visible on every page. It's composed by the announcement text and link on the left and an image on the right.

<themed-image>

<g-image light light-colored src="../src/assets/large_announcement_light.png"></g-image>

<g-image dark dark-colored src="../src/assets/large_announcement_dark.png"></g-image>

</themed-image>

#### Example

<pre>
<code><<div class="hot-pink">announcement</div>>
<div><<div class="hot-pink">template</div> <div class="purple">v-slot</div>:content-left></div>
<div>#### Announcement</div>
<div>### Upgrade Complete:<<div class="br">br</div>>Secret Contracts are<<div class="br">br</div>>LIVE on Mainnet!</div>
<div>The secret is out! Privacy-preserving smart contracts are now LIVE on Secret Network. Learn about this launch, our exciting initial apps, our new strategic partnership with Hashed, and what comes next as "programmable privacy" comes to public blockchains.</div>
<div></<div class="hot-pink">template</div>></div>
<div><<div class="hot-pink">template</div> <div class="purple">v-slot</div>:content-right></div>
<div>![](./img/announcement/announcement.png)</div>
<div></<div class="hot-pink">template</div>></div>
<div></<div class="hot-pink">announcement</div>></div></code>
</pre>

<hr>

### Small Announcement

This announcement occupies 2/3 of the page width and it's part of the website's layout so it's visible on every page. It's composed by the announcement text and link.

<themed-image>

<g-image light light-colored src="../src/assets/small_announcement_light.png" class="width__620px"></g-image>

<g-image dark dark-colored src="../src/assets/small_announcement_dark.png" class="width__620px"></g-image>

</themed-image>

#### Example

<pre>
<code><<div class="hot-pink">small-announcement</div>>
<div><<div class="hot-pink">template</div> <div class="purple">v-slot</div>:content></div>
<div>#### Announcement</div>
<div>### Secret Network Gets a Secret API!</div>
<div>Chain of Secrets just launched the Secret API for Secret Network as part of our developer community on-boarding efforts. We hope to connect and collaborate with all kinds of secret app builders!</div>
<div><<div class="hot-pink">next-button</div> <div class="purple">class</div>="turquoise" <div class="purple">tag</div>="Read more"</div> 
<div><div class="purple">to</div>="/blog/secret-api/"></div>
<div></<div class="hot-pink">next-button</div>></div>
<div></<div class="hot-pink">template</div>></div>
<div></<div class="hot-pink">small-announcement</div>></div></code>
</pre>

</slim-column>

<style lang="scss">
.description {
    .white-button {
        display: block;
        width: rem(289px);
        margin: 0 auto;
        text-align: center;
        border-radius: 10px;
        padding: 10px 0;
        color: var(--theme-bg);
        background-color: var(--theme-fg);
        font-weight: bold;
        text-decoration: none;
        @include respond-to("xsmall and down") {
            width: 100%;
        }
        @include theme(dark dark-colored) {
            &:hover {
                color: $primary-red-color;
            }
        }
        @include theme(light light-colored) {
            &:hover {
                color: $primary-blue-color;
            }
        }
    }
}
.slim-column {
  .themed-image {
    img {
      width: auto;
      margin: 0 auto $gutter-xlarge auto;
      @include respond-to("large and up") {
        &.width {
          &__250px {
            width: rem(250px);
          }
          &__455px {
            width: rem(455px);
          }
          &__490px {
            width: rem(490px);
          }
          &__530px {
            width: rem(530px);
          }
          &__570px {
            width: rem(570px);
          }
          &__620px {
            width: rem(620px);
          }
        }
      }
      @include respond-to("medium and down") {
        &.width {
          &__250px {
            max-width: rem(250px);
          }
        }
      }
    }
  }
    pre {
      background-color: $primary-black-color;
      border: 1px solid black;
      white-space: normal;
      word-break: break-word;
      overflow-x: hidden;
      width: 100%;
      max-width: 100%;
      padding: $gutter;
      border-radius: 10px;
      line-height: 1;
      @include theme(dark dark-colored) {
        background-color: #F2F2F2;
      }
      @include theme(light light-colored) {
        background-color: $primary-black-color;
      }
      code {
        font-family: monospace, monospace;
        white-space: normal;
        word-break: break-word;
        overflow-x: hidden;
        line-height: 2em;
        font-size: $gutter;
        @include theme(dark dark-colored) {
          color: $primary-black-color;
        }
        @include theme(light light-colored) {
          color: white;
        }
        .hot-pink, .purple, .br {
          display: inline-block;
        }
        .hot-pink {
          color: $high-key-pink-color;
        }
        .purple {
          color: $high-key-purple-color;
        }
      }
    }
}
</style>
