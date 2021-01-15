<template>
  <div :class="classes">
    <slot>
      <span
        v-text="value"
      />
    </slot>
  </div>
</template>

<script>
export default {
  name: 'InputSelectValue',
  props: {
    /**
     * Component value
     */
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return [
        'input-select-value',
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
  .input-select-value {
    display: flex;
    align-items: center;
    width: 100%;
    color: #33373E;

    & > span {
      flex: 1 1 auto;
      width: 0;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
</style>
