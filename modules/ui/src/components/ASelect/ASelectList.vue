<template>
  <div
    :class="classes"
  >
    <ASelectListElement
      v-for="(item, index) in items"
      :key="item.id"
      :value="item"
      :index="index"
      :selected="isItemSelected(item.id)"
      @select="onSelect(item.id)"
    />
  </div>
</template>

<script>
import ASelectListElement from '@UI/components/ASelect/ASelectListElement';

export default {
  name: 'ASelectList',
  components: {
    ASelectListElement,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
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
  },
  computed: {
    classes() {
      return [
        'a-select-list',
      ];
    },
    isItemSelected() {
      return id => this.value === id;
    },
  },
  methods: {
    onSelect(id) {
      if (this.isItemSelected(id)) {
        this.$emit('input', '');
      } else {
        this.$emit('input', id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .a-select-list {
    text-align: center;
  }
</style>
