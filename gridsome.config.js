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
  siteName: 'Secret Network',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Content',
        baseDir: './content',
        path: '/',
        template: './src/templates/Content.vue',
        remark: {
          // remark options
        },
      },
    },
    {
      use: '@gridsome/source-ghost',
      options: {
        typeName: 'Ghost',
        baseUrl: 'https://blog.scrt.network',
        contentKey: '74d989aa8008b1d8e3c9464b65',
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-173950488-3'
      }
    }
  ],
  templates: {
    GhostPost: '/blog/:slug'
  },
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
    config.resolve.alias.set('@images', '@/assets')
  },
};
