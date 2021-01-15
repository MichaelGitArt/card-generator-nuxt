<template>
  <div>
    <div
      :class="classes"
      v-text="label"
    />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'InputLabel',
  props: {
    /**
     * The label is a text caption or description for the component
     */
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return [
        'input-label',
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
  .input-label {
    text-align: center;
    text-transform: uppercase;
  }
</style>
