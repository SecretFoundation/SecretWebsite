---
layout: ~/layouts/MainPageLayout
---

<template v-slot:title>

## Secret Network Ecosystem

</template>

<slim-column>

Secret Network is currently supported by over 30 active validators as well as a number of key contributors to the ecosystem developing network tooling, core protocol functionality, and more. 

A few key network contributors are featured below.

<grid columns="4" class="logos-grid">

<contributor-logo role="" roleTwo="" name="Secret Foundation" to="https://learn.scrt.network/foundation.html">

<template v-slot:image>

![] (../img/contributors/image1.png)

</template>

</contributor-logo>

<contributor-logo role="validator" roleTwo="developer" name="Secret Nodes" to="https://secretnodes.org/#/">

<template v-slot:image>

![] (../img/contributors/image2.png)

</template>

</contributor-logo>

<contributor-logo role="developer" roleTwo="" name="Enigma" to="https://www.enigma.co/">

<template v-slot:image>

![] (../img/contributors/image3.png)

</template>

</contributor-logo>

<contributor-logo role="validator" roleTwo="developer" name="Chain of Secrets" to="https://chainofsecrets.org/">

<template v-slot:image>

![] (../img/contributors/image4.png)

</template>

</contributor-logo>

<contributor-logo role="wallet" roleTwo="validator" name="Mathwallet" to="http://mathwallet.org/">

<template v-slot:image>

![] (../img/contributors/image5.png)

</template>

</contributor-logo>

<contributor-logo role="fund" roleTwo="validator" name="Outlier" to="https://outlierventures.io">

<template v-slot:image>

![] (../img/contributors/image6.png)

</template>

</contributor-logo>

<contributor-logo role="validator" roleTwo="" name="Dokia Capital" to="https://dokia.capital/">

<template v-slot:image>

![] (../img/contributors/image7.png)

</template>

</contributor-logo>

<contributor-logo role="validator" roleTwo="" name="Citadel.one" to="https://citadel.one">

<template v-slot:image>

![] (../img/contributors/image8.png)

</template>

</contributor-logo>

<contributor-logo role="fund" roleTwo="" name="Fenbushi" to="https://fenbushi.vc">

<template v-slot:image>

![] (../img/contributors/image9.png)

</template>

</contributor-logo>

<contributor-logo role="fund" roleTwo="" name="Hashed" to="https://hashed.com">

<template v-slot:image>

![] (../img/contributors/image10.png)

</template>

</contributor-logo>

<contributor-logo role="validator" roleTwo="" name="B-Harvest" to="https://bharvest.io">

<template v-slot:image>

![] (../img/contributors/image11.png)

</template>

</contributor-logo>

<contributor-logo role="validator" roleTwo="" name="Chorus One" to="https://chorus.one">

<template v-slot:image>

![] (../img/contributors/image12.png)

</template>

</contributor-logo>

</grid>

</slim-column>

<slim-column class="see-more">

<blue-button tag="See more" to="/contributors">

</blue-button>

</slim-column>

<slim-column>

### Exchange and Wallet Support

Secret Network is secured by the SCRT coin (Secret), which is used for fees, staking, and governance. You can trade Secret (SCRT) on Binance. See also: CoinMarketCap and CoinGecko. Multiple wallets already provide support for SCRT transactions and staking:

</slim-column>

<card-holder columns="2">

<card>

<template v-slot:header>

#### Ledger Nano S and Ledger Nano X

</template>

<template v-slot:footer>

[See documentation](https://build.scrt.network/ledger-nano-s.html)

</template>

</card>

<card>

<template v-slot:header>

#### Keplr<br>&nbsp;

</template>

<template v-slot:footer>

[Visit website](https://wallet.keplr.app)

</template>

</card>

</card-holder>

<card-holder columns="2">

<card>

<template v-slot:header>

#### Cosmostation<br>Wallet

</template>

<template v-slot:footer>

[Visit website](https://wallet.cosmostation.io/)

</template>

</card>

<card>

<template v-slot:header>

#### Math<br>Wallet

</template>

<template v-slot:footer>

[Visit website](https://mathwallet.org/web/secret)

</template>

</card>

</card-holder>

<slim-column>

### Block Explorers and Staking

Use the following Secret Network block explorers for staking, governance proposals, viewing transactions and active validators, and much more:

</slim-column>

<card-holder columns="2">

<card>

<template v-slot:header>

#### Puzzle by<br>Secretnodes.org

</template>

<template v-slot:footer>

[Visit website](https://puzzle.report)

</template>

</card>

<card>

<template v-slot:header>

#### Cashmaney Secret<br>Network Explorer

</template>

<template v-slot:footer>

[Visit website](https://explorer.cashmaney.com/)

</template>

</card>

</card-holder>

<slim-column>

You can find information on staking rewards calculations at:

</slim-column>

<card-holder columns="2">

<card>

<template v-slot:header>

#### Stake or Die!

</template>

<template v-slot:footer>

[Visit website](https://stakeordie.com/rewards-calculator)

</template>

</card>

<card>

<template v-slot:header>

#### Staking Rewards

</template>

<template v-slot:footer>

[Visit website](https://www.stakingrewards.com/earn/secret-network)

</template>

</card>

</card-holder>

<slim-column>

### Related Content

</slim-column>

<card-holder columns="2">

<card>

<template v-slot:header>

#### Community Projects

</template>

<template v-slot:footer>

[See projects]()

</template>

</card>

<card>

<template v-slot:header>

#### SGX Compliance

</template>

<template v-slot:footer>

[See documentation](https://learn.scrt.network/sgx.html)

</template>

</card>

</card-holder>

<card-holder columns="2">

<card>

<template v-slot:header>

#### Secret Apps

</template>

<template v-slot:footer>

[Visit website]()

</template>

</card>

</card-holder>

<style lang="scss">
.logos-grid {
    @include respond-to("medium and down") {
        grid-template-columns: repeat(3, 1fr) !important;
    }
}
.contributors-grid {
    grid-column-gap: $gutter !important;
    grid-row-gap: $gutter !important;
    p {
        margin: 0;
        line-height: 0;
        transition: 0.5s ease;
        -webkit-transition: 0.5s ease;
        img {
            border-radius: rem(10px);
        }
        &:hover {
            visibility : hidden;
        }
    }
    @include respond-to("medium and down") {
        grid-template-columns: repeat(3, 1fr) !important;
    }
}
.see-more {
    width: auto;
    text-align: center;
    .blue-button {
      display: inline-block;
      margin: 0 auto;
    }
    @include respond-to("medium and down") {
        width: 100%;
        .blue-button {
            margin: unset;
            display: unset;
        }
    }
}
</style>
