<template>
  <div class="app">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
  .app {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>
