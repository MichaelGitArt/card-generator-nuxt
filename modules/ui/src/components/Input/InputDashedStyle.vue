<template>
  <div :class="classes">
    <div
      class="input-dashed-style__input"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp">
      <fieldset />
      <slot name="activator" />
    </div>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'InputDashedStyle',
  computed: {
    classes() {
      return [
        'input-dashed-style',
      ];
    },
  },
  methods: {
    onMouseDown(event) {
      this.$emit('mousedown', event);
    },
    onMouseUp(event) {
      this.$emit('mouseup', event);
    },
  },
};
</script>

<style lang="scss" scoped>
  .input-dashed-style {
    &__input {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 3px 8px 3px 12px;
    }

    fieldset {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border: $BORDER_DASHED_3_BLACK;
      background-color: $WHITE;
    }
  }
</style>
