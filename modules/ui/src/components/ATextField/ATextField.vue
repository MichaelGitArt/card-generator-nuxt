<template>
  <InputDashedStyle>
    <template #activator>
      <InputController>
        <input
          :class="classes"
          :placeholder="placeholder"
          :value="value"
          @input="onValueChange"
        >
      </InputController>
    </template>
  </InputDashedStyle>
</template>

<script>
import InputController from '@UI/components/Input/InputController';
import InputDashedStyle from '@UI/components/Input/InputDashedStyle';

export default {
  name: 'ATextField',
  components: {
    InputController,
    InputDashedStyle,
  },
  props: {
    /**
     * The placeholder is a helper text for the component
     */
    placeholder: {
      type: String,
      default: null,
    },
    /**
     * Component value
     */
    value: {
      type: String,
      default: null,
    },
  },
  computed: {
    classes() {
      return [
        'a-text-field',
      ];
    },
  },
  methods: {
    onValueChange(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
  .a-text-field {
    width: 100%;
    max-width: 100%;
    border: none;
    text-align: center;

    &::placeholder {
      opacity: 0.4;
      color: $BLACK_LIGHTEN_2;
    }
  }
</style>
