<template>
  <div :class="classes">
    <slot />

    <div class="input-controller__append">
      <slot name="append" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputController',
  computed: {
    classes() {
      return [
        'input-controller',
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
  .input-controller {
    position: relative;
    z-index: $Z_INDEX_LVL_2;
    display: flex;
    align-items: center;

    &__append {
      margin-left: 6px;
    }
  }
</style>
