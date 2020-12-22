---
layout: ~/layouts/ThankYouLayout
---

<text-banner>

### Subscription Confirmed

</text-banner>

<text-banner class="thank-you-banner">

# Thank you for subscribing!

You've been added to our mailing list and will now be among the first to hear about new updates. We hope you enjoy being part of our Secret Network.

</text-banner>

<slim-column class="join">

### Join the Conversation

</slim-column>

<card-holder columns="3">

<community-card name="Secret Forum" to="https://forum.scrt.network/" class="forum">

<template v-slot:icon>

<themed-image>

<g-image light light-colored src="./img/community-card/forum-black.svg"></g-image>

<g-image dark dark-colored src="./img/community-card/forum-white.svg"></g-image>

</themed-image>

</template>

</community-card>

<community-card name="Discord Chat" to="https://discord.com/invite/SJK32GY" class="discord">

<template v-slot:icon>

<themed-image>

<g-image light light-colored src="./img/community-card/discord-black.svg"></g-image>

<g-image dark dark-colored src="./img/community-card/discord-white.svg"></g-image>

</themed-image>

</template>

</community-card>

<community-card name="Telegram" to="https://t.me/SCRTCommunity" class="telegram">

<template v-slot:icon>

<themed-image>

<g-image light light-colored src="./img/community-card/telegram-black.svg"></g-image>

<g-image dark dark-colored src="./img/community-card/telegram-white.svg"></g-image>

</themed-image>

</template>

</community-card>

<community-card name="Twitter" to="https://twitter.com/SecretNetwork" class="twitter">

<template v-slot:icon>

<themed-image>

<g-image light light-colored src="./img/community-card/twitter-black.svg"></g-image>

<g-image dark dark-colored src="./img/community-card/twitter-white.svg"></g-image>

</themed-image>

</template>

</community-card>

<community-card name="YouTube Channel" to="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw" class="youtube">

<template v-slot:icon>

<themed-image>

<g-image light light-colored src="./img/community-card/youtube-black.svg"></g-image>

<g-image dark dark-colored src="./img/community-card/youtube-white.svg"></g-image>

</themed-image>

</template>

</community-card>

<community-card name="Github Repository" to="https://github.com/SecretFoundation/SecretWebsite" class="github">

<template v-slot:icon>

<themed-image>

<g-image light light-colored src="./img/community-card/github-black.svg"></g-image>

<g-image dark dark-colored src="./img/community-card/github-white.svg"></g-image>

</themed-image>

</template>

</community-card>

</card-holder>

<style lang="scss">
.join {
    padding-top: rem(83px);
}
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
</style>
