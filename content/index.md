<simple-hero>

<template v-slot:cover>

![hero-cover](./img/hero-color.svg)
![hero-cover](./img/hero-black.svg)
![hero-cover](./img/hero-white.svg)

</template>

![secret-seal](./img/logo-seal.svg)

## Welcome to Secret Network

</simple-hero>

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

<newsletter></newsletter>

</text-banner>

<style lang="scss">
.simple-hero__content {
  border: 4px solid;
  border-radius: 16px;
  padding: 68px;
  position: relative;
  @include theme(dark dark-colored) {
    border-color: white;
    background: $primary-black-color;
  }
  @include theme(light light-colored) {
    border-color: $primary-black-color;
    background: white;
  }
  @include respond-to("small and down") {
    padding: 45px 30px 20px 30px;
    text-align: center;
  }
  img[alt="secret-seal"] {
     position: absolute;
     top: 0%;
     left: 50%;
     transform: translate(-50%, -50%);
  }
}
.simple-hero__cover {
  img {
    object-position: bottom;
    display: none;
    @include respond-to("small and down") {
      object-position: left;
    }
    &[data-src*=black] {
      @include theme(light) {
        display: block;
      }
    }
    &[data-src*=white] {
      @include theme(dark) {
        display: block;
      }
    }
    &[data-src*=color] {
      @include theme(light-colored dark-colored) {
        display: block;
      }
    }
  }
}
img[alt="secret-seal"] {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
}
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
