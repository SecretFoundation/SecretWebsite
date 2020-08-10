// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');

function addStyleResource(rule) {
  rule.use('style-resource').loader('style-resources-loader').options({
    patterns: [
      path.resolve(__dirname, './src/sass/_tokens.scss'),
      path.resolve(__dirname,
          './node_modules/@lkmx/flare/src/components/**/*.scss'),
      path.resolve(__dirname,
          './node_modules/@lkmx/flare/src/functions/**/*.scss'),
      path.resolve(__dirname,
          './node_modules/@lkmx/flare/src/guides/**/*.scss'),
      path.resolve(__dirname,
          './node_modules/@lkmx/flare/src/structures/**/*.scss'),
    ],
  });
}

module.exports = {
  siteName: 'MAAD lab',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/**/*.md',
        typeName: 'Content',
        remark: {
          // remark options
        },
      },
    },
  ],
  transformers: {
    remark: {
      // global remark options
    },
  },
  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });
  },
};
