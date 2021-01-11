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
    width: 100%;
    height: 100vh;
    padding: 64px 0 0;
  }
</style>
