import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

const IS_DEV = process.env.NODE_ENV !== 'production';
const BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000';

export default {
  ssr: true,
  dev: IS_DEV,
  head: {
    title: 'MiCard',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        contaent: 'width=device-width, initial-scale=1',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  components: true,

  buildModules: [
    '@ergonode/vuems',
    '@nuxtjs/router',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-i18n',
    'cookie-universal-nuxt',
  ],

  vuems: {
    vuex: true,
    modules: {
      local: [
        'core',
        'ui',
        'home',
      ],
    },
    i18n: [
      'ru_RU',
      'uk_UA',
    ],
  },
  i18n: {
    vueI18n: {
      locale: 'ru_RU',
      fallbackLocale: 'ru_RU',
      silentTranslationWarn: true,
    },
    locales: [
      {
        code: 'ru_RU',
      },
      {
        code: 'uk_UA',
      },
    ],
    vuex: false,
    strategy: 'no_prefix',
  },
  axios: {
    baseURL: BASE_URL || 'http://localhost:8000',
  },
  build: {
    babel: {
      configFile: './babel.config.js',
    },
    parallel: true,
    cssSourceMap: false,
    optimizeCSS: true,
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxSize: 200000,
      },
    },
  },
};
