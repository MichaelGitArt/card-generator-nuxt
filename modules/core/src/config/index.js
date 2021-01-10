export default {
  name: 'core',
  order: 10,
  aliases: {
    '@Core': '/',
  },
  relations: [
    'ui',
  ],
  plugins: [
    {
      ssr: true,
      src: './plugins/axios',
    },
    {
      ssr: true,
      src: './plugins/i18n',
    },
  ],
};
