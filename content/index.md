<ClientOnly>
<home-page-hero></home-page-hero>
</ClientOnly>

<slim-column>

### About
## What’s the secret of Secret Network?

Secret Network is a blockchain-based, open-source protocol that lets anyone perform computations on encrypted data, bringing privacy to smart contracts and public blockchains. Our mission: improve the adoption and usability of decentralized technologies, for the benefit of all.

These are some ways you can join the Secret Network:

</slim-column>

<triplet-columns>

<template v-slot:left>

<div class="card">

### **Join the**<br>Community

![Community](./img/illustration_community.png)

</div>

</template>

<template v-slot:middle>

<div class="card">

### **Build a**<br> Secret App

![Secret App](./img/illustration_secret-app.png)

</div>

</template>
  
<template v-slot:right>

<div class="card">

### **Become a**<br>Node Operator

![Node Operator](./img/illustration_node-operator.png)

</div>

</template>

</triplet-columns>

</text-banner>

<style lang="scss">
.triplets-columns {
  grid-row-gap: rem(34px);
  padding-bottom: rem(100px);
}
.card {
  position: relative;
  border-radius: 17px;
  padding: 25px 19px;
  height: 100%;
  @include theme(dark dark-colored) {
    border: 3px solid white;
  }
  @include theme(light light-colored) {
    border: 3px solid black;
  }
  & > h3 {
    font-size: rem(32px);
    margin: 0;
    & > strong {
      font-size: rem(22px);
    }
  }
  & > p:nth-of-type(1) {
    width: calc(100% + 40px);
    margin: 0;
    position: relative;
    left: -20px;
    bottom: -34px;
    & > img {
       width: 100%;
       object-position: bottom;
    }
  }
}
</style>
