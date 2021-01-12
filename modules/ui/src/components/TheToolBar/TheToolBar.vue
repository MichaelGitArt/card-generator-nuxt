<template>
  <div class="the-tool-bar">
    <AContainer>
      <div class="the-tool-bar__inner">
        <TheToolBarLogo />
      </div>
    </AContainer>
  </div>
</template>

<script>
import AContainer from '@UI/components/Layout/AContainer';
import TheToolBarLogo from '@UI/components/TheToolBar/TheToolBarLogo';

export default {
  name: 'TheToolBar',
  components: {
    AContainer,
    TheToolBarLogo,
  },
};
</script>

<style lang="scss" scoped>
  .the-tool-bar {
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
