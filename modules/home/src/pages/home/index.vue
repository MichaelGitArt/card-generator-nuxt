<template>
  <div class="home">
    <HomePage />
  </div>
</template>

<script>
import HomePage from '@Home/components/Pages/HomeMain';

export default {
  name: 'Home',
  components: {
    HomePage,
  },
};
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
</style>
