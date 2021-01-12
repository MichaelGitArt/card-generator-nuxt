export default async ({
  app,
}, inject) => {
  const DEFAULT_LANGUAGE = app.i18n.fallbackLocale;
  const loadedLanguages = [];
  const cookieLang = app.$cookies.get('lang');

  let language = cookieLang || DEFAULT_LANGUAGE;

  const setI18nLanguage = ({
    lang, message,
  }) => {
    app.i18n.setLocaleMessage(lang, message);
    loadedLanguages.push(lang);
    app.i18n.locale = lang;
  };
  const loadLanguageAsync = async (lang) => {
    if (app.i18n.locale === lang || loadedLanguages.includes(lang)) {
      app.i18n.locale = lang;
    } else {
      try {
        if (!loadedLanguages.length) {
          const defaultMessage = await import(`@/.nuxt/locales/${DEFAULT_LANGUAGE}`);

          setI18nLanguage({
            lang: DEFAULT_LANGUAGE,
            message: defaultMessage.default,
          });
        }
        const message = await import(`@/.nuxt/locales/${lang}`);

        setI18nLanguage({
          lang,
          message: message.default,
        });
      } catch (e) {
        app.i18n.locale = DEFAULT_LANGUAGE;
      }
    }
  };

  loadLanguageAsync(language);

  inject('setInterfaceLanguage', async (lang) => {
    await loadLanguageAsync(lang);
  });
};
