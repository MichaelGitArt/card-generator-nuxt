<template>
  <Dropdown
    :visible="isVisible"
    :parent-reference="parentReference"
    @click-outside="onClickOutside"
  >
    <slot
      name="options"
    >
      <ASelectList
        :items="options"
        :value="value"
        @input="onValueChange"
      />
    </slot>
  </Dropdown>
</template>

<script>
import ASelectList from '@UI/components/ASelect/ASelectList';
import Dropdown from '@UI/components/ASelect/Dropdown/Dropdown';

export default {
  name: 'ASelectDropdown',
  components: {
    ASelectList,
    Dropdown,
  },
  props: {
    /**
     * The variants that user can choose from
     */
    options: {
      type: Array,
      required: true,
    },
    /**
     * Map of selected item values
     */
    value: {
      type: [
        String,
        Number,
      ],
      default: '',
    },
    /**
     * Determines visibility of component
     */
    isVisible: {
      type: Boolean,
      default: false,
    },
    /**
     * The vue component reference to which dropdown is hooked
     */
    // eslint-disable-next-line vue/require-prop-types
    parentReference: {
      required: true,
    },
  },
  methods: {
    onClickOutside(payload) {
      this.$emit('click-outside', payload);
    },
    onValueChange(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" scoped>
  .a-select-dropdown {
    height: 100%;
    overflow-y: auto;
  }
</style>
