export default {
  setLang(_, langCode) {
    this.app.$cookies.set('lang', langCode);
    this.app.$setInterfaceLanguage(langCode);
  },
};
