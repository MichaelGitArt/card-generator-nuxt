<template>
  <nuxt-link
    class="a-tool-bar-logo"
    to="/"
    v-text="$t('appName')"
  />
</template>

<script>

export default {
  name: 'AToolBarLogo',
};
</script>

<style lang="scss" scoped>
  .a-tool-bar-logo {
    padding: 4px 20px;
    color: $BLACK;
    font-size: 38px;
    font-weight: 700;
  }
</style>
