module.exports = {
  env: {
    test: {
      presets: [
        '@babel/env',
      ],
      plugins: [
        'dynamic-import-node',
        '@babel/transform-runtime',
      ],
    },
  },
};
