<template>
  <InputDashedStyle
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    ref="activator"
  >
    <template #activator>
      <InputController>
        <input
          :class="classes"
          :placeholder="placeholder"
          @focus="onFocus"
          @blur="onBlur"
          readonly
          ref="input"
        >
        <InputSelectValue
          v-if="selectedItem"
          :value="selectedItem.label"
        />

        <template #append>
          <IconArrowDropdown />
        </template>
      </InputController>
    </template>

    <ASelectDropdown
      :is-visible="isFocused"
      :options="options"
      :parent-reference="$refs.activator"
      :value="value"
      @input="onSelectValue"
      @click-outside="onClickOutside"
    />
  </InputDashedStyle>
</template>

<script>
import ASelectDropdown from '@UI/components/ASelect/Dropdown/ASelectDropdown';
import IconArrowDropdown from '@UI/components/Icons/Arrows/IconArrowDropdown';
import InputController from '@UI/components/Input/InputController';
import InputDashedStyle from '@UI/components/Input/InputDashedStyle';
import InputSelectValue from '@UI/components/Input/InputSelectValue';

export default {
  name: 'ASelect',
  components: {
    ASelectDropdown,
    IconArrowDropdown,
    InputController,
    InputDashedStyle,
    InputSelectValue,
  },
  props: {
    /**
     * Component value
     */
    value: {
      type: [
        String,
        Number,
      ],
      default: '',
    },
    /**
     * The variants that user can choose from
     */
    options: {
      type: Array,
      required: true,
    },
    /**
     * The placeholder is a helper text for the component
     */
    placeholder: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    isFocused: false,
    isBlurringNeeded: false,
  }),
  computed: {
    classes() {
      return [
        'a-select',
      ];
    },
    selectedItem() {
      return this.options.find(option => option.id === this.value);
    },
  },
  methods: {
    blur() {
      this.isFocused = false;
      this.$emit('focus', false);
    },
    onBlur() {
      if (this.isBlurringNeeded) {
        this.blur();
      }
    },
    onFocus(event) {
      event.preventDefault();
      this.isBlurringNeeded = false;
      this.isFocused = true;
      this.$emit('focus', true);
    },
    onMouseDown(event) {
      event.preventDefault();
    },
    onMouseUp() {
      if (this.isFocused) {
        this.isBlurringNeeded = true;
        this.$refs.input.blur();
      } else {
        this.$refs.input.focus();
      }
    },
    onClickOutside({
      isInsideActivator,
    }) {
      if (document.activeElement !== this.$refs.input && isInsideActivator) {
        this.blur();
      } else if (!isInsideActivator && document.activeElement !== this.$refs.input) {
        this.blur();
      }
    },
    onSelectValue(value) {
      this.blur();
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" scoped>
  .a-select {
    flex: 1;
    width: 100%;
    max-width: 100%;
    border: none;
    padding: 0;
    min-width: 0;
    text-align: center;

    &::placeholder {
      opacity: 0.4;
      color: $BLACK_LIGHTEN_2;
    }
  }
</style>
