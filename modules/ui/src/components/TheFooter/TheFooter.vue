<template>
  <footer class="the-footer">
    <AContainer>
      <div class="the-footer__inner">
        <TheFooterCopyright />

        <LangSwitcher />
      </div>
    </AContainer>
  </footer>
</template>

<script>
import LangSwitcher from '@UI/components/LangSwitcher/LangSwitcher';
import AContainer from '@UI/components/Layout/AContainer';
import TheFooterCopyright from '@UI/components/TheFooter/TheFooterCopyright';

export default {
  name: 'TheFooter',
  components: {
    LangSwitcher,
    AContainer,
    TheFooterCopyright,
  },
};
</script>

<style lang="scss" scoped>
  .the-footer {
    background-color: $WHITE;
    background-image: url("~@UI/assets/img/toolbar-border.svg");
    background-repeat: no-repeat;
    background-size: 100% 5px;
    background-position: 0 1px;

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 9px 0 6px;
    }
  }
</style>
