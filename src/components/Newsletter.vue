<template>
  <div class="newsletter">
    <single-column>
      <h2>Subscribe for<br>Secret Network<br>updates</h2>
      <p>Get the latest from the Secret Network ecosystem<br>and engineering updates, straight to your inbox.</p>
      <form>
        <input type="text" placeholder="Your email">
        <button>Suscribe</button>
      </form>
    </single-column>
  </div>
</template>

<style lang="scss" scoped>
.newsletter {
  background-image: url('../assets/newsletter-black.svg');
  background-repeat: no-repeat;
  background-position: left top;
  background-color: $primary-black-color;

  // Override default text color for this component only
  & * {
    color: white;
  }

  @include respond-to("medium") {
    text-align: center;
  }

  form {
    display: grid;

    @include respond-to("large and up") {
      grid-auto-flow: column;
      grid-column-gap: rem(16px);
      grid-template-columns: rem(453px) min-content;
    }
    @include respond-to("medium") {
      grid-auto-flow: column;
      grid-template-columns: rem(453px) min-content;
      grid-column-gap: rem(16px);
      justify-content: center;
    }
    @include respond-to("small and down") {
      grid-auto-flow: row;
      grid-row-gap: rem(16px);
    }

    input {
      padding: rem(15px);
      border-radius: 4px;
      border: 1px solid $primary-black-color;
      font-family: $text-font;
    }

    button {
      padding: rem(15px);
      background-color: $primary-blue-color;
      color: white;
      border-radius: 4px;
      font-weight: bold;
    }
  }
}
</style>
