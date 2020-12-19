---
layout: ~/layouts/MainPageLayout
---

<template v-slot:title>

## Secret Contributors

</template>

<slim-column>

<grid columns="4" class="contributors-grid">

<grid-item name="Secret Foundation" tag="" tagTwo="" to="https://scrt.network/blog/introducing-secret-foundation/" src="contributors/image1.png">

</grid-item>

<grid-item name="Secret Nodes" tag="validator" tagTwo="developer" to="https://secretnodes.org/#/" src="contributors/image2.png">

</grid-item>

<grid-item name="Enigma" tag="developer" tagTwo="" to="https://www.enigma.co/" src="contributors/image3.png">

</grid-item>

<grid-item name="Chain of Secrets" tag="validator" tagTwo="developer" to="https://chainofsecrets.org/" src="contributors/image4.png">

</grid-item>

<grid-item name="Mathwallet" tag="wallet" tagTwo="validator" to="http://mathwallet.org/" src="contributors/image5.png">

</grid-item>

<grid-item name="Outlier" tag="fund" tagTwo="validator" to="https://outlierventures.io" src="contributors/image6.png">

</grid-item>

<grid-item name="Dokia Capital" tag="validator" tagTwo="" to="https://dokia.capital/" src="contributors/image7.png">

</grid-item>

<grid-item name="Citadel.one" tag="validator" tagTwo="" to="https://citadel.one" src="contributors/image8.png">

</grid-item>

<grid-item name="Fenbushi" tag="fund" tagTwo="" to="https://fenbushi.vc" src="contributors/image9.png">

</grid-item>

<grid-item name="Hashed" tag="fund" tagTwo="" to="https://hashed.com" src="contributors/image10.png">

</grid-item>

<grid-item name="B-Harvest" tag="validator" tagTwo="" to="https://bharvest.io" src="contributors/image11.png">

</grid-item>

<grid-item name="Chorus One" tag="validator" tagTwo="" to="https://chorus.one" src="contributors/image12.png">

</grid-item>

</grid>

</slim-column>

<slim-column class="back-to">

<back-button tag="Back to Ecosystem" to="/ecosystem/overview">

</back-button>

</slim-column>

<style lang="scss">
.contributors-grid {
    @include respond-to("medium and down") {
        grid-template-columns: repeat(3, 1fr) !important;
    }
}
.back-to {
    width: auto;
    text-align: center;
    .back-button {
      display: inline-block;
      margin: 0 auto;
    }
    @include respond-to("medium and down") {
        width: 100%;
        .back-button {
            margin: unset;
            display: unset;
        }
    }
}
</style>