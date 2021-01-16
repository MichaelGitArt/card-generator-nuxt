<template>
  <div
    :class="classes"
    ref="dropdown">
    <slot />
  </div>
</template>

<script>
import debounce from 'debounce';

export default {
  name: 'Dropdown',
  props: {
    /**
     * Determines visibility of component
     */
    visible: {
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
  computed: {
    classes() {
      return [
        'dropdown',
      ];
    },
    parentElement() {
      return typeof this.parentReference.$el === 'undefined'
        ? this.parentReference
        : this.parentReference.$el;
    },
  },
  watch: {
    visible: {
      immediate: true,
      handler() {
        if (typeof window === 'undefined') {
          return;
        }

        if (!this.parentReference || !this.visible) {
          if (!this.visible) {
            requestAnimationFrame(() => {
              this.$refs.dropdown.style.visibility = 'hidden';
              this.$refs.dropdown.style.opacity = '0';
            });

            window.removeEventListener('click', this.onClickOutside);
            window.removeEventListener('resize', this.reCalc);
            window.removeEventListener('scroll', this.reCalc, {
              passive: true,
            });

            return;
          }
        }

        requestAnimationFrame(() => {
          this.$refs.dropdown.style.visibility = 'initial';
          this.$refs.dropdown.style.opacity = '1';

          this.calcPosition();
        });

        window.addEventListener('click', this.onClickOutside);
        window.addEventListener('resize', this.reCalc);
        window.addEventListener('scroll', this.reCalc, {
          passive: true,
        });
      },
    },
  },
  created() {
    this.reCalc = debounce(this.reCalc, 100);
  },
  mounted() {
    const app = document.documentElement.querySelector('.app');

    app.appendChild(this.$refs.dropdown);
  },
  beforeDestroy() {
    const app = document.documentElement.querySelector('.app');

    if (app.contains(this.$refs.dropdown)) {
      app.removeChild(this.$refs.dropdown);
    }
  },
  methods: {
    onClickOutside(event) {
      if (
        event.target !== this.$refs.dropdown
        && !this.$refs.dropdown.contains(event.target)
      ) {
        const isInsideActivator = event.target === this.parentElement
          || this.parentElement.contains(event.target);

        this.$emit('click-outside', {
          isInsideActivator,
        });
      }
    },
    // debounce on created
    reCalc() {
      this.calcPosition();
    },
    calcPosition() {
      const parentOffset = this.parentElement.getBoundingClientRect();
      const defaultMaxHeight = 250;
      const minMaxHeight = 120;

      const {
        innerHeight,
      } = window;
      const offset = 2;
      const toTop = parentOffset.y + parentOffset.height;

      const freeAboveSpace = parentOffset.y;
      const freeBelowSpace = innerHeight - toTop;
      let freeSpace;

      this.$refs.dropdown.style.width = `${parentOffset.width}px`;
      this.$refs.dropdown.style.left = `${parentOffset.x}px`;

      if (freeBelowSpace < freeAboveSpace && freeBelowSpace < minMaxHeight) {
        this.$refs.dropdown.style.bottom = `${innerHeight - parentOffset.y + offset}px`;
        this.$refs.dropdown.style.top = 'auto';
        freeSpace = freeAboveSpace;
      } else {
        this.$refs.dropdown.style.top = `${toTop + offset}px`;
        this.$refs.dropdown.style.bottom = 'auto';
        freeSpace = freeBelowSpace;
      }

      const maxHeight = Math.min(
        Math.max(freeSpace, minMaxHeight),
        defaultMaxHeight,
      );
      this.$refs.dropdown.style.maxHeight = `${maxHeight}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .dropdown {
    position: fixed;
    z-index: $Z_INDEX_MAX;
    display: flex;
    flex-direction: column;
    border: $BORDER_DASHED_3_BLACK;
    background-color: $WHITE;
    transition: all 0.2s;
    opacity: 0;
    visibility: hidden;
    will-change:
      visibility,
      opacity,
      top,
      left,
      bottom,
      right,
      height,
      width;
  }
</style>
