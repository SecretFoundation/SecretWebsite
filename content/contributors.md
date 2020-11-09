---
layout: ~/layouts/MainPageLayout
---

<template v-slot:title>

## Secret Contributors

</template>

<slim-column>

<grid columns="4" class="logos-grid">

<contributor-logo role="" roleTwo="" name="Secret Foundation" to="https://learn.scrt.network/foundation.html">

<template v-slot:image>

![] (./img/contributors/image1.png)

</template>

</contributor-logo>

<contributor-logo role="validator" roleTwo="developer" name="Secret Nodes" to="https://secretnodes.org/#/">

<template v-slot:image>

![] (./img/contributors/image2.png)

</template>

</contributor-logo>

<contributor-logo role="developer" roleTwo="" name="Enigma" to="https://www.enigma.co/">

<template v-slot:image>

![] (./img/contributors/image3.png)

</template>

</contributor-logo>

<contributor-logo role="validator" roleTwo="developer" name="Chain of Secrets" to="https://chainofsecrets.org/">

<template v-slot:image>

![] (./img/contributors/image4.png)

</template>

</contributor-logo>

<contributor-logo role="wallet" roleTwo="validator" name="Mathwallet" to="http://mathwallet.org/">

<template v-slot:image>

![] (./img/contributors/image5.png)

</template>

</contributor-logo>

<contributor-logo role="fund" roleTwo="validator" name="Outlier" to="https://outlierventures.io">

<template v-slot:image>

![] (./img/contributors/image6.png)

</template>

</contributor-logo>

<contributor-logo role="validator" roleTwo="" name="Dokia Capital" to="https://dokia.capital/">

<template v-slot:image>

![] (./img/contributors/image7.png)

</template>

</contributor-logo>

<contributor-logo role="validator" roleTwo="" name="Citadel.one" to="https://citadel.one">

<template v-slot:image>

![] (./img/contributors/image8.png)

</template>

</contributor-logo>

<contributor-logo role="fund" roleTwo="" name="Fenbushi" to="https://fenbushi.vc">

<template v-slot:image>

![] (./img/contributors/image9.png)

</template>

</contributor-logo>

<contributor-logo role="fund" roleTwo="" name="Hashed" to="https://hashed.com">

<template v-slot:image>

![] (./img/contributors/image10.png)

</template>

</contributor-logo>

<contributor-logo role="validator" roleTwo="" name="B-Harvest" to="https://bharvest.io">

<template v-slot:image>

![] (./img/contributors/image11.png)

</template>

</contributor-logo>

<contributor-logo role="validator" roleTwo="" name="Chorus One" to="https://chorus.one">

<template v-slot:image>

![] (./img/contributors/image12.png)

</template>

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