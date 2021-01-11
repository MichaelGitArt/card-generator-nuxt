<template>
  <button
    :disabled="disabled"
    :class="classes"
  >
    <slot />
  </button>
</template>

<script>
import {
  SIZE,
  THEME,
} from '@Core/defaults/theme/index';

export default {
  name: 'AButton',
  props: {
    /**
     * The color theme of the component
     */
    theme: {
      type: String,
      default: THEME.LIGHT,
      validator: value => Object.values(THEME).indexOf(value) !== -1,
    },
    /**
     * The size of the component
     */
    size: {
      type: String,
      default: SIZE.REGULAR,
      validator: value => Object.values(SIZE).indexOf(value) !== -1,
    },
    /**
     * Determinate if the component is disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        'a-button',
        `a-button--${this.theme}`,
        `a-button--${this.size}`,
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
  .a-button {
    border: $BORDER_2_BLACK;
    padding: 8px 50px;
    transition: all 0.2s;
    border-radius: 15px;
    font-size: 0.7rem;
    text-transform: uppercase;
    cursor: pointer;

    &--dark {
      background-color: $WHITE;
      box-shadow:
        inset 0 0 0 2px #fff,
        inset 0 0 0 2px #000;
      color: $BLACK;

      &:hover {
        box-shadow:
          inset 0 0 0 2px #fff,
          inset 0 0 0 4px #000;
      }

      &:focus {
        background: $LIGHT;
      }
    }

    &--light {
      background-color: $BLACK;
      box-shadow:
        inset 0 0 0 2px #000,
        inset 0 0 0 2px #fff;
      color: $WHITE;

      &:hover {
        box-shadow:
          inset 0 0 0 2px #000,
          inset 0 0 0 4px #fff;
      }

      &:focus {
        background: $BLACK_LIGHTEN_2;
      }
    }

    &--regular {
      min-height: 55px;
    }

    &--small {
      min-height: 46px;
      font-size: 0.55rem;
      padding-left: 22px;
      padding-right: 22px;
    }

    &--large {
      min-height: 60px;
      font-size: 0.8rem;
    }
  }

  @include MEDIA-MD {
    .a-button {
      font-size: 0.55rem;

      &--large {
        min-height: 60px;
        font-size: 0.65rem;
      }
    }
  }
</style>
