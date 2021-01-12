<template>
  <div class="app-main">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppMain',
};
</script>

<style lang="scss" scoped>
  .app-main {
    flex: 1;
    width: 100%;
    padding: 64px 0 0;
  }
</style>
