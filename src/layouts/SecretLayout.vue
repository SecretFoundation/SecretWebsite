<template>
  <div class="secret-layout">
    <secret-header>
      <template #logo
        ><slot name="logo"></slot
      ></template>
      <template #navigation
        ><slot name="navigation"></slot
      ></template>
      <template #actions
        ><slot name="actions"></slot
      ></template>
      <template #nav-toggle
        ><slot name="nav-toggle"></slot
      ></template>
      <template #nav-toggle-close
        ><slot name="nav-toggle-close"></slot
      ></template>
      <template #navigation-header
        ><slot name="navigation-header"></slot
      ></template>
    </secret-header>


    <slot></slot>
    <simple-footer>
      <slot name="footer"></slot>
    </simple-footer>
  </div>
</template>

<script>
import AlertBar from '../components/AlertBar.vue';
import SecretHeader from '../components/SecretHeader.vue';
export default {
  components: { SecretHeader, AlertBar },
  name: "SecretLayout",
  data() {
    return {
      alertBarVisible: true
    };
  },
  methods: {
    closeAlertBar() {
      this.alertBarVisible = !this.alertBarVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
.secret-layout {
  display: grid;
  grid-template-rows: 1fr min-content;
  min-height: 100%;

  @if ($header-position == fixed) {
    grid-template-rows: 1fr min-content;
  }
}
</style>
