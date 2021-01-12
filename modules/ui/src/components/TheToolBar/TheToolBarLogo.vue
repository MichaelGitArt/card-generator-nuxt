<template>
  <nuxt-link
    class="the-tool-bar-logo"
    to="/"
    v-text="$t('appName')"
  />
</template>

<script>

export default {
  name: 'TheToolBarLogo',
};
</script>

<style lang="scss" scoped>
  .the-tool-bar-logo {
    padding: 4px 20px;
    color: $BLACK;
    font-size: 38px;
    font-weight: 700;
  }
</style>
