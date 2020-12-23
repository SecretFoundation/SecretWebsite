---
layout: ~/layouts/MainPageLayout
---

<template v-slot:title>

## Secret Network Developer<br>Resources

</template>

<slim-column>

### Build with Privacy by Default

Use Secret Contracts to build decentralized applications with improved usability and explore new frontiers in web3.

<a class="white-button" href="https://github.com/enigmampc/secret-contracts-guide" target="_blank">Quickstart</a>

</slim-column>

<single-column>

### How do I get started?

</single-column>

<card-holder class="how-to-get-started" columns="5">

<card>

<template v-slot:header>

![Book](../img/card/book.svg)

</template>

#### Learn about Secret Contracts

<template v-slot:footer>

<next-button tag="Learn more" to="https://learn.scrt.network/protocol.html#how-secret-works">

</next-button>

</template>

</card>

<card>

<template v-slot:header>

![Manual guide](../img/card/manual-guide.svg)

</template>

#### Secret Contract development guide

<template v-slot:footer>

<next-button tag="Read guide" to="https://github.com/enigmampc/secret-contracts-guide">

</next-button>

</template>

</card>

<card>

<template v-slot:header>

![Library](../../src/assets/library.svg)

</template>

#### Secret App Quickstarts

<template v-slot:footer>

<next-button tag="Get started" to="https://github.com/enigmampc/SecretJS-Templates">

</next-button>

</template>

</card>

<card>

<template v-slot:header>

![Run](../img/card/run.svg)

</template>

#### Node Runner Guide

<template v-slot:footer>

<next-button tag="Read guide" to="https://build.scrt.network/validators-and-full-nodes/join-validator-mainnet.html">

</next-button>

</template>

</card>

<card>

<template v-slot:header>

![Source code](../img/card/source-code.svg)

</template>

#### View Source Code

<template v-slot:footer>

<next-button tag="View code" to="https://github.com/enigmampc/SecretNetwork">

</next-button>

</template>

</card>

</card-holder>

<single-column>

### About Secret Contracts

</single-column>

<card-holder>

<card class="contract-card">

<template v-slot:header>

#### Smart contracts with data privacy

</template>

Build contracts with encrypted inputs, output and state enabled by a decentralized network of TEEs.

</card>

<card class="contract-card">

<template v-slot:header>

#### Interoperability that brings privacy to public blockchains

</template>

Bridges to <a href="/blog/secret-ethereum-bridge-privacy/" target="_blank">Ethereum</a> and Cosmos ecosystem to improve usability in existing ecosystems.

</card>

<card class="contract-card">

<template v-slot:header>

#### Ease of coding with Rust

</template>

Build secret contracts using Rust.

</card>

<card class="contract-card">

<template v-slot:header>

#### Proven consensus model

</template>

Secret Network uses Tendermint Consensus model for Byzantine Fault Tolerant Consensus.

</card>

<card class="contract-card">

<template v-slot:header>

#### Built-in wallet support

</template>

Keplr provides a metamask-like user experience in Secret Contract.

</card>

<card class="contract-card">

<template v-slot:header>

#### Ecosystem Developer Program

</template>

Join Secret Network developer program to receive help from funding to support in contract development and go-to-market strategy.

</card>

</card-holder>

<style lang="scss">
#secret-network-developerbrresources {
   @include respond-to("large and up") {
    line-height: rem(40px);
  }
   @include respond-to("medium and down") {
    font-size: rem(24px);
  }
  @include respond-to("medium") {
    padding-top: rem(21px);
  }
}
#how-do-i-get-started {
    margin: 0;
}
#about-secret-contracts {
    margin: 25px 0 0 0;
}
.how-to-get-started {
  .grid {
    @include respond-to("large and up") {
        grid-column-gap: rem(16px);
    }
    @include respond-to("small and down") {
      grid-column-gap: unset;
      grid-row-gap: rem(34px);
    }
    .card {
      border: 1px solid var(--theme-fg) !important;
      border-radius: 10px !important;
      grid-template-rows: 34px 1fr 46px;
      grid-row-gap: 10px;
      padding: $gutter;
      &__header {
          padding: 0;
         .separator {
            display: none;
         }
         p {
            height: rem(34px);
            margin: 0 0 $gutter 0;
         }
      }
      &__body{
          padding: 0;
          margin-bottom: 11px;
        h4 {
            margin: 0;
            padding: 0;
            line-height: 26px;
        }
      }
      &__footer { 
          padding: 0;
          a {
              margin: 0;
              background-color: unset;
              font-size: rem(16px);
                @include theme(dark dark-colored) {
                    color: $secondary-turquoise-color;
                    border: 1px solid $secondary-turquoise-color;
                }
                @include theme(light light-colored) {
                    color: $primary-blue-color;
                    border: 1px solid $primary-blue-color;
                }
                &:hover {
                    transition: 0.5s ease;
                    -webkit-transition: 0.5s ease;
                    @include theme(dark dark-colored) {
                        background-color: $secondary-turquoise-color;
                        color: var(--theme-bg);
                        .themed-image {
                            img {
                                filter: brightness(0);
                            }
                        }
                    }
                    @include theme(light light-colored) {
                        background-color: $primary-blue-color;
                        color: var(--theme-bg);
                        .themed-image {
                            img {
                                filter: brightness(0) invert(1);
                            }
                        }
                    }
                }
                @media (min-width: 1008px) and (max-width: 1199px) {
                    font-size: rem(14px);
                } 
                @include respond-to("small and down") {
                    width: 100%;
                    text-align: center;
                }
            }
        }
    } 
  }
}
.contract-card {
  border: 1px solid var(--theme-fg) !important;
  border-radius: 10px !important;
  grid-template-rows: 80px 1fr;
  grid-row-gap: rem(21px);
  .card__header {
    .separator {
      display: none;
    }
    h4 {
        margin: 0;
    }
  }
  .card__body {
    padding: 0;
    p {
        margin: 0;
        padding: 0 $gutter $gutter $gutter;
        min-height: rem(110px);
        a {
            display: inline-block !important;
            width: auto !important;
            padding: 0 !important;
            font-weight: 100 !important;
            background-color: unset !important;
            color: var(--theme-fg) !important;
            text-decoration: underline !important;
        }
    }
  }
  .card__footer {
    display: none;
  }
    @include respond-to("small and down") {
        grid-template-rows: auto;
        .card__body {
            padding: 0;
            p {
                min-height: unset;
            }
        }
    }
}
.white-button {
    display: block;
    width: rem(200px);
    margin: 0 auto;
    text-align: center;
    border-radius: 10px;
    padding: 10px 0;
    color: var(--theme-bg);
    background-color: var(--theme-fg);
    font-weight: bold;
    text-decoration: none;
    @include respond-to("small and down") {
        width: 100%;
    }
}
</style>
