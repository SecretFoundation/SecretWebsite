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

### Members

Here are a few of our Secret Network Members:

<grid columns="5" class="members-grid">

<contributor-logo role="" roleTwo="" name="" to="" src="members/image1.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image2.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image3.png" >

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image4.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image5.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image6.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image7.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image8.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image9.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image10.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image11.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image12.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image13.png" >

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image14.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image15.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image16.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image17.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image18.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image19.png">

</contributor-logo>

<contributor-logo role="" roleTwo="" name="" to="" src="members/image20.png">

</contributor-logo>

</grid>

</slim-column>

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
.members-grid {
    grid-row-gap: $gutter !important;
    grid-column-gap: $gutter !important;
    @include respond-to("medium and down") {
        grid-template-columns: repeat(4, 1fr) !important;
    }
}
</style>
