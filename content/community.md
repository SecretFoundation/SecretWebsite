---
layout: ~/layouts/MainPageLayout
---

<template v-slot:title>

## Secret Network Community

</template>

<slim-column>

Whether you’re a developer, an artist, a writer, an entrepreneur, or a dreamer, there are many ways for you to contribute to Secret Network. Come talk with our community about Secret Network, privacy-preserving applications, and how we can enable a more human-centric, sustainable, decentralized future.

</slim-column>

<slim-column>

### Join the Conversation

</slim-column>

<card-holder columns="3">

<community-card name="Secret Forum" to="https://forum.scrt.network/" class="forum">

<template v-slot:icon>

<themed-image class="community-icon">

<g-image light light-colored src="../src/assets/community-icons/forum-black.svg"></g-image>

<g-image dark dark-colored src="../src/assets/community-icons/forum-white.svg"></g-image>

</themed-image>

</template>

</community-card>

<community-card name="Discord Chat" to="https://discord.com/invite/SJK32GY" class="discord">

<template v-slot:icon>

<themed-image class="community-icon">

<g-image light light-colored src="../src/assets/community-icons/discord-black.svg"></g-image>

<g-image dark dark-colored src="../src/assets/community-icons/discord-white.svg"></g-image>

</themed-image>

</template>

</community-card>

<community-card name="Telegram" to="https://t.me/SCRTCommunity" class="telegram">

<template v-slot:icon>

<themed-image class="community-icon">

<g-image light light-colored src="../src/assets/community-icons/telegram-black.svg"></g-image>

<g-image dark dark-colored src="../src/assets/community-icons/telegram-white.svg"></g-image>

</themed-image>

</template>

</community-card>

<community-card name="Twitter" to="https://twitter.com/SecretNetwork" class="twitter">

<template v-slot:icon>

<themed-image class="community-icon">

<g-image light light-colored src="../src/assets/community-icons/twitter-black.svg"></g-image>

<g-image dark dark-colored src="../src/assets/community-icons/twitter-white.svg"></g-image>

</themed-image>

</template>

</community-card>

<community-card name="YouTube Channel" to="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw" class="youtube">

<template v-slot:icon>

<themed-image class="community-icon">

<g-image light light-colored src="../src/assets/community-icons/youtube-black.svg"></g-image>

<g-image dark dark-colored src="../src/assets/community-icons/youtube-white.svg"></g-image>

</themed-image>

</template>

</community-card>

<community-card name="Github Repository" to="https://github.com/SecretFoundation/SecretWebsite" class="github">

<template v-slot:icon>

<themed-image class="community-icon">

<g-image light light-colored src="../src/assets/community-icons/github-black.svg"></g-image>

<g-image dark dark-colored src="../src/assets/community-icons/github-white.svg"></g-image>

</themed-image>

</template>

</community-card>

</card-holder>

<slim-column>

### Secret Agents

Here are a few of our Secret Network Agents:

<grid columns="5" class="agents-grid">

<grid-item name="Mohammed" tag="Canada" tagTwo="" to="" src="agents/Mohammed - Canada.png">

</grid-item>

<grid-item name="Taariq" tag="South Africa" tagTwo="" to="" src="agents/Taariq - South Africa.png">

</grid-item>

<grid-item name="Brendan" tag="USA" tagTwo="" to="" src="agents/Brendan - USA.png" >

</grid-item>

<grid-item name="Ian" tag="Delta Quadrant" tagTwo="" to="" src="agents/Ian - Delta Quadrant.png">

</grid-item>

<grid-item name="Laura" tag="USA" tagTwo="" to="" src="agents/Laura - USA.png">

</grid-item>

<grid-item name="Vlad" tag="Russia" tagTwo="" to="" src="agents/Vlad - Russia.png">

</grid-item>

<grid-item name="Rina" tag="Russia" tagTwo="" to="" src="agents/Rina - Russia.png">

</grid-item>

<grid-item name="Vladimir" tag="Planet Earth" tagTwo="" to="" src="agents/Vladimir - Planet Earth.png">

</grid-item>

<grid-item name="James" tag="USA" tagTwo="" to="" src="agents/James - USA.png">

</grid-item>

<grid-item name="Josh" tag="UK" tagTwo="" to="" src="agents/Josh - UK.png">

</grid-item>

<grid-item name="Robin" tag="Switzerland" tagTwo="" to="" src="agents/Robin - Switzerland.png">

</grid-item>

<grid-item name="Eckhard" tag="Norway" tagTwo="" to="" src="agents/Eckhard - Norway.png">

</grid-item>

<grid-item name="Marcel" tag="Germany" tagTwo="" to="" src="agents/Marcel - Germany.png" >

</grid-item>

<grid-item name="Julian" tag="Switzerland" tagTwo="" to="" src="agents/Julian - Switzerland.png">

</grid-item>

<grid-item name="Zach" tag="USA" tagTwo="" to="" src="agents/Zach - USA.png">

</grid-item>

</grid>

</slim-column>

<single-column>

<twin-columns class="sharing-secrets">

<template v-slot:left>

## Sharing Secrets Podcast

Sharing Secrets - a new series from the Secret Foundation - explores the biggest secrets of the blockchain and cryptocurrency space. Hosted by Tor Bair, Sharing Secrets features everything from interviews, to monologues, to special guests, to technical explainers, to surprises, and beyond.

</template>

<template v-slot:right>

<next-button tag="See more" to="/podcast">

</next-button>

</template>

</twin-columns>

</single-column>

<single-column>

<template>

<grid columns="3">

<media-card tag="podcast" title="Ep 10 - Brittany Kaiser - Cambridge Analytica & Own Your Data" src="media/image9.png" to="https://soundcloud.com/sharing-secrets/ep-10-brittany-kaiser-cambridge-analytica-own-your-data" cta="Listen Now"></media-card>

<media-card tag="podcast" title="Ep 9 - Jamie Burke - Outlier Ventures" src="media/image9.png" to="https://soundcloud.com/sharing-secrets/ep-9-jamie-burke-outlier-ventures" cta="Listen Now"></media-card>

<media-card tag="podcast" title="Ep 8 - RAC - Grammy Winning Musician" src="media/image9.png" to="https://soundcloud.com/sharing-secrets/ep-8-rac-grammy-winning-musician" cta="Listen Now"></media-card>

</grid>

</template>

</single-column>

<slim-column>

### Committees

There is no more consequential way to get involved with Secret Network than to join a community committee. Committees are made up of experts and enthusiasts working together to build our network and ecosystem.

#### [Learn More or Join](/committees)

</slim-column>

<style lang="scss">
.community-card {
    &:hover {
        &.forum {
            background-color: $primary-orange-color;
        }
        &.discord {
            background-color: #7289DA;
        }
        &.telegram {
            background-color: #0085D3;
        }
        &.twitter {
            background-color: #1DA1F2;
        }
        &.youtube {
            background-color: #F00;
        }
        &.github {
            background-color: #24292E;
        }
        @include theme(dark dark-colored) {
            .community-card__icon {
                .themed-image {
                    img {
                        filter: invert(0);
                    }
                }
            }
        }
        @include theme(light light-colored) {
            .community-card__icon {
                .themed-image {
                    img {
                        filter: invert(1);
                    }
                }
            }
        }
        .community-card__name {
            h4 {
                color: white;
            }
        }
    }
}
.agents-grid {
    grid-row-gap: $gutter !important;
    grid-column-gap: $gutter !important;
    @include respond-to("medium and down") {
        grid-template-columns: repeat(4, 1fr) !important;
    }
    .grid-item {
        border: 0 !important;
        &__hover {
            .top {
                p {
                    font-size: 18px;
                }
            } 
            .bottom {
                span {
                    color: $primary-blue-color !important;
                    font-size: 15px;
                }
            } 
        }
    }
}
.twin-columns {
    &.sharing-secrets {
        grid-template-columns: 1fr 332px;
        padding-bottom: 0;
        .twins-column {
            &--start {
                width: 100%;
                padding: 0;
                justify-self: left;
                p {
                    margin-bottom: 0;
                }
            }
            &--end {
                width: 100%;
                padding-right: 0;
                text-align: right;
            }
        }
        @include respond-to("medium and down") {
            grid-template-columns: 100%;
            grid-template-rows: auto;
            .twins-column {
                &--start {
                    width: 100%;
                    padding: 0;
                    justify-self: left;
                }
                &--end {
                    width: 100%;
                    padding-right: unset;
                    padding-left: 0;
                    text-align: left;
                }
            }
        }
    }
}
</style>
