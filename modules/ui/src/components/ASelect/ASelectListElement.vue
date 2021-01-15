<template>
  <div
    :class="classes"
    @click.prevent="onSelect(value.id)"
  >
    <span
      v-text="value.label"
    />
  </div>
</template>

<script>
export default {
  name: 'ASelectListElement',
  props: {
    /**
     * Index of given component at the loop
     */
    index: {
      type: Number,
      required: true,
    },
    /**
     * Determines if component is selected
     */
    selected: {
      type: Boolean,
      default: false,
    },
    /**
     * The value of the dropdown list option
     */
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    classes() {
      return [
        'a-select-list-element',
        {
          'a-select-list-element--active': this.selected,
        },
      ];
    },
  },
  methods: {
    onSelect() {
      this.$emit('select', this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
  .a-select-list-element {
    $element: &;

    padding: 4px 10px;
    transition: all 0.2s;
    cursor: pointer;
    user-select: none;

    &:hover:not(#{$element}--active) {
      background: rgba(0, 0, 0, 0.08);
    }

    &--active {
      background: rgba(0, 0, 0, 0.12);
    }
  }
</style>
