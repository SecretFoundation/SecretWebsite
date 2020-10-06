// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './sass/index.scss';

import Flare from '@lkmx/flare/src/main';

import Faq from './components/Faq'

require('hind');

export default function (Vue, { router, head, isClient }) {
  Vue.config.productionTip = false;
  Vue.use(Flare);
  Vue.component('Faq', Faq)
  if (process.isClient) {
    Vue.$setDefaultTheme()
  }
}
