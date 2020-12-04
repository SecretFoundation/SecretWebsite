<template>
  <div class="newsletter">
    <single-column>
      <h2>Subscribe for<br>Secret Network<br>updates</h2>
      <p>Get the latest from the Secret Network ecosystem <br>and engineering updates, straight to your inbox.</p>
      <form action="https://network.us2.list-manage.com/subscribe/post?u=7a05e306cd4c801a88ddcb060&amp;id=889f1a33bc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Your email" required>
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
      </form>
    </single-column>
  </div>
</template>

<style lang="scss" scoped>
.newsletter {

  .column {
    padding: rem(34px) $gutter;
    h2 {
      line-height: 56px;
    }
    @media (min-width: 320px) and (max-width: 465px){
      p {
        br {
          display: none;
        }
      }
    }
  }

  background-color: var(--theme-fg);
  height: min-content;

  & * {
    color: var(--theme-bg);
  }

  @include respond-to("medium") {
    text-align: center;
  }

  p {
    font-family: $text-font;
  }

  span {
    text-decoration: underline;
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
      font-size: $base-size;
      color: $primary-black-color;

      &:focus {
        outline: unset;
      }
    }

    input[type=submit] {
      -webkit-appearance: none;
      padding: $gutter;
      background-color: $primary-purple-color;
      color: white;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;

      &[subscribed] {
        background-color: lightness($primary-purple-color);
      }
    }
  }
}
</style>
