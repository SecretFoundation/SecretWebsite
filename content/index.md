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

### Community

Read more about our blockchain-based, open-source protocol that lets anyone perform computations on encrypted data.

![Community](./img/illustration_community.png)

</div>

</template>

<template v-slot:middle>

<div class="card">

### Developers

Read our documentation and learn how you can write Secret Contracts and start building.

![Secret App](./img/illustration_secret-app.png)

</div>

</template>
  
<template v-slot:right>

<div class="card">

### Operators

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio viverra integer id nec mauris dui. Pellentesque turpis morbi vulputate.

![Node Operator](./img/illustration_node-operator.png)

</div>

</template>

</triplet-columns>

</text-banner>

<style lang="scss">
.simple-hero__content {
  border: 4px solid #FFFFFF;
  border-radius: 16px;
  background: #1b1b1b;
  padding: 68px;
  position: relative;
  @media only screen and (max-width: 600px) {
    .simple-hero__content {
      padding: 45px 30px 20px 30px;
      text-align: center;
    }
     img[alt="hero-cover"] {
      object-position: left;
    }
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
}
.simple-hero__cover {
  img[alt="hero-cover"] {
     object-position: bottom;
  }
}
img[alt="secret-seal"] {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.triplets-columns {
  grid-row-gap: $gutter;
}
body {
  &[theme*=dark] {
     .card {
        border: 3px solid white;
     }
  }
  &[theme*=light] {
     .card {
        border: 3px solid black;
     }
  }
}
.card {
  position: relative;
  border-radius: 17px;
  padding: 25px 19px;
  min-height: 550px;
  @include respond-to("small and down") {
     min-height: 520px;
  }
  & > p:nth-of-type(2) {
     position: absolute;
     width: 100%;
     right: 0;
     bottom: 0;
     margin: 0;
     & > img {
        object-fit: cover;
        width: 100%;
     }
  }
}
body {
  &[theme*=dark] {
    img {
      &[src*=color] {
        display: none;
      }
      &[src*=black] {
        display: none;
      }
      &[src*=white] {
        display: block;
      }
    }
  }
  &[theme*=light] {
    img {
      &[src*=color] {
        display: none;
      }
      &[src*=black] {
        display: block;
      }
      &[src*=white] {
        display: none;
      }
    }
  }
  &[theme*=dark-colored] {
    img {
      &[src*=color] {
        display: block;
      }
      &[src*=black] {
        display: none;
      }
      &[src*=white] {
        display: none;
      }
    }
  }
  &[theme*=light-colored] {
    img {
      &[src*=color] {
        display: block;
      }
      &[src*=black] {
        display: none;
      }
      &[src*=white] {
        display: none;
      }
    }
  }
}
</style>
