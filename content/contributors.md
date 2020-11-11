---
layout: ~/layouts/MainPageLayout
---

<template v-slot:title>

## Secret Contributors

</template>

<slim-column>

<grid columns="4" class="logos-grid">

<contributor-logo role="" roleTwo="" name="Secret Foundation" to="https://learn.scrt.network/foundation.html" src="contributors/image1.png">

</contributor-logo>

<contributor-logo role="validator" roleTwo="developer" name="Secret Nodes" to="https://secretnodes.org/#/" src="contributors/image2.png">

</contributor-logo>

<contributor-logo role="developer" roleTwo="" name="Enigma"  to="https://www.enigma.co/" src="contributors/image3.png" >

</contributor-logo>

<contributor-logo role="validator" roleTwo="developer" name="Chain of Secrets" to="https://chainofsecrets.org/" src="contributors/image4.png">

</contributor-logo>

<contributor-logo role="wallet" roleTwo="validator" name="Mathwallet" to="http://mathwallet.org/" src="contributors/image5.png">

</contributor-logo>

<contributor-logo role="fund" roleTwo="validator" name="Outlier" to="https://outlierventures.io" src="contributors/image6.png">

</contributor-logo>

<contributor-logo role="validator" roleTwo="" name="Dokia Capital" to="https://dokia.capital/" src="contributors/image7.png">

</contributor-logo>

<contributor-logo role="validator" roleTwo="" name="Citadel.one" to="https://citadel.one" src="contributors/image8.png">

</contributor-logo>

<contributor-logo role="fund" roleTwo="" name="Fenbushi" to="https://fenbushi.vc" src="contributors/image9.png">

</contributor-logo>

<contributor-logo role="fund" roleTwo="" name="Hashed" to="https://hashed.com" src="contributors/image10.png">

</contributor-logo>

<contributor-logo role="validator" roleTwo="" name="B-Harvest" to="https://bharvest.io" src="contributors/image11.png">

</contributor-logo>

<contributor-logo role="validator" roleTwo="" name="Chorus One" to="https://chorus.one" src="contributors/image12.png">

</contributor-logo>

</grid>

</slim-column>

<style lang="scss">
.logos-grid {
    @include respond-to("medium and down") {
        grid-template-columns: repeat(3, 1fr) !important;
    }
}
</style>