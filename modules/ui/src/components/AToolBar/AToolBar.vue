<template>
  <div class="a-tool-bar">
    <AContainer>
      <div class="a-tool-bar__inner">
        <AToolBarLogo />
      </div>
    </AContainer>
  </div>
</template>

<script>
import AToolBarLogo from '@UI/components/AToolBar/AToolBarLogo';
import AContainer from '@UI/components/Layout/AContainer';

export default {
  name: 'AToolBar',
  components: {
    AToolBarLogo,
    AContainer,
  },
};
</script>

<style lang="scss" scoped>
  .a-tool-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: $Z_INDEX_LVL_9;
    display: flex;
    align-items: center;
    height: 64px;
    background-color: $WHITE;
    background-image: url("~@UI/assets/img/toolbar-border.svg");
    background-repeat: no-repeat;
    background-size: 100% 5px;
    background-position: 0 calc(100% - 1px);

    &__inner {
      display: flex;
      justify-content: center;
    }
  }
</style>
