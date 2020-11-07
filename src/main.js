// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import openGraph from './config/open-graph'

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
import LatestPosts from '@/components/blog/LatestPosts'
import FeaturedPosts from '@/components/blog/FeaturedPosts'
import SimpleSection from '@/components/SimpleSection'
import BlogCardFeatured from '@/components/blog/BlogCardFeatured'
import PostsFeatured from '@/components/blog/PostsFeatured'
import MediaCard from '@/components/MediaCard'
import BlueButton from './components/BlueButton'
import LogosGrid from './components/LogosGrid'
import ContributorLogo from './components/ContributorLogo'
import CommunityCard from './components/CommunityCard'

require('typeface-hind');
require('typeface-montserrat');

export default function (Vue, { router, head, isClient }) {
  openGraph.forEach(item => head.meta.push(item))

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
  Vue.component('LatestPosts', LatestPosts)
  Vue.component('FeaturedPosts', FeaturedPosts)
  Vue.component('SimpleSection', SimpleSection)
  Vue.component('BlogCardFeatured', BlogCardFeatured)
  Vue.component('PostsFeatured', PostsFeatured)
  Vue.component('MediaCard', MediaCard)
  Vue.component('BlueButton', BlueButton)
  Vue.component('LogosGrid', LogosGrid)
  Vue.component('ContributorLogo', ContributorLogo)
  Vue.component('CommunityCard', CommunityCard)

  if (isClient) {
  }
}


