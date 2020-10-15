// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './sass/index.scss'

import Flare from '@lkmx/flare/src/main'

import Faq from './components/Faq'
import Newsletter from './components/Newsletter'
import HomePageHero from './components/home/HomePageHero'
import HomeCard from './components/home/HomeCard'
import Separator from './components/Separator'
import Card from './components/Card'
import CardHolder from './components/CardHolder'
import CommitteeCard from './components/CommitteeCard'
import ThemedImage from '@/components/ThemedImage'

require('hind');
require('typeface-montserrat');

export default function (Vue, { router, head, isClient }) {
  Vue.config.productionTip = false
  Vue.use(Flare)

  Vue.component('Faq', Faq)
  Vue.component('Newsletter', Newsletter)
  Vue.component('HomePageHero', HomePageHero)
  Vue.component('HomeCard', HomeCard)
  Vue.component('Separator', Separator)
  Vue.component('Card', Card)
  Vue.component('CardHolder', CardHolder)
  Vue.component('CommitteeCard', CommitteeCard)
  Vue.component('ThemedImage', ThemedImage)

  if (isClient) {
    Vue.$setDefaultTheme()
  }
}
