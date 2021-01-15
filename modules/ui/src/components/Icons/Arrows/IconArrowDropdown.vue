<template>
  <div class="control-icon" />
</template>

<script>
export default {
  name: 'IconArrowDropdown',
};
</script>

<style lang="scss" scoped>
.control-icon {
  height: 34px;
  min-width: 34px;
  border-radius: 6px 8px 5px 6px;
  background-image: url("~@UI/assets/img/icons/icon-arrow-dropdown.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 72% auto;
  background-color: $BLACK;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: $BLACK_LIGHTEN_2;
  }
}
</style>
