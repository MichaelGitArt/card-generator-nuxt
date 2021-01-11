<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AContainer',
  props: {
    fillHeight: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        'a-container',
        {
          'a-container--fill-height': this.fillHeight,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
  .a-container {
    width: 100%;
    max-width: $CONTAINER_MAX_WIDTH;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;

    &--fill-height {
      height: 100%;
    }
  }
</style>
