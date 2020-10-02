<simple-hero>

<template v-slot:cover>

![hero-cover](./img/hero-color.svg)

</template>

![secret-seal](./img/logo-seal.svg)

## Welcome to Secret Network

</simple-hero>


<triplet-columns>

<template v-slot:left>

### Community

Read more about our blockchain-based, open-source protocol that lets anyone perform computations on encrypted data.

</template>

<template v-slot:middle>

### Developers

Read our documentation and learn how you can write Secret Contracts and start building.

</template>
  
<template v-slot:right>

### Operators

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio viverra integer id nec mauris dui. Pellentesque turpis morbi vulputate.

</template>

</triplet-columns>

<slim-column>

### About
## What’s the secret of Secret Network?

Secret Network is a blockchain-based, open-source protocol that lets anyone perform computations on encrypted data, bringing privacy to smart contracts and public blockchains. Our mission: improve the adoption and usability of decentralized technologies, for the benefit of all.

These are some ways you can join the Secret Network:



</slim-column>

</text-banner>

<style>
.simple-hero__content {
   border: 4px solid #FFFFFF;
   border-radius: 16px;
   background: #1b1b1b;
   padding: 68px;
   position: relative;
 }
@media only screen and (max-width: 600px) {
  .simple-hero__content {
    padding: 45px 30px 20px 30px;
    text-align: center;
  }
   img[alt="hero-cover"] {
    object-position: left;
  }  
} 
 img[alt="hero-cover"] {
    object-position: bottom;
 }
@media only screen and (max-width: 600px) {
   img[alt="hero-cover"] {
    object-position: left;
  }  
} 
 img[alt="secret-seal"] {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
 }
</style>
