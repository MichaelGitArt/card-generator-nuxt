<template>
  <div class="lang-switcher">
    <span
      v-for="lang in locales"
      :key="lang.code"
      class="lang-switcher__item"
      :class="{'lang-switcher__item--active' : $i18n.locale === lang.code}"
      @click="changeLang(lang.code)"
    >
      {{ lang.name }}
    </span>
  </div>
</template>

<script>
import {
  mapState,
} from 'vuex';

export default {
  name: 'LangSwitcher',
  computed: {
    ...mapState('lang', [
      'locales',
    ]),
  },
  methods: {
    changeLang(langCode) {
      this.$store.dispatch('lang/setLang', langCode);
    },
  },
};
</script>

<style lang="scss" scoped>
  .lang-switcher {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 16px;
    font-size: 0.6em;
    text-transform: uppercase;
    cursor: pointer;

    &__item {
      border: 2px dashed transparent;
      padding: 2px 10px 0;
      transition: all 0.2s;

      &--active,
      &:hover {
        border: $BORDER_DASHED_2_BLACK;
      }
    }
  }
</style>
