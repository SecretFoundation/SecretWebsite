<template>
  <div class="newsletter">
    <single-column>
      <h2>Subscribe for<br>Secret Network<br>updates</h2>
      <p>Get the latest from the Secret Network ecosystem<br>and engineering updates, straight to your inbox.</p>
      <form>
        <input type="text" placeholder="Your email">
        <button>Subscribe</button>
      </form>
    </single-column>
  </div>
</template>

<style lang="scss" scoped>
.newsletter {

  .column {
    padding: $gutter-xlarge $gutter;
  }

  background-color: var(--theme-fg);

  & * {
    color: var(--theme-bg);
  }

  @include respond-to("medium") {
    text-align: center;
  }

  form {
    display: grid;

    @include respond-to("large and up") {
      grid-auto-flow: column;
      grid-column-gap: rem(16px);
      grid-template-columns: rem(453px) rem(181px);
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
      padding: $gutter;
      border-radius: 8px;
      border: 1px solid $primary-black-color;
      font-family: $text-font;
    }

    button {
      padding: $gutter;
      background-color: $primary-purple-color;
      color: white;
      border-radius: 8px;
      font-weight: bold;
    }
  }
}
</style>
