// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import openGraph from './config/open-graph'

import './sass/index.scss'

import Flare from '@lkmx/flare-legacy/src/main'

import Faq from './components/Faq'
import Newsletter from './components/Newsletter'
import HomePageHero from './components/home/HomePageHero'
import HomeCard from './components/home/HomeCard'
import Separator from './components/Separator'
import Card from './components/Card'
import CardHolder from './components/CardHolder'
import CommitteeCard from './components/CommitteeCard'
import DeveloperCard from './components/DeveloperCard'
import ThemedImage from '@/components/ThemedImage'
import LatestPosts from '@/components/blog/LatestPosts'
import LatestPostsTwelve from '@/components/blog/LatestPostsTwelve'
import FeaturedPosts from '@/components/blog/FeaturedPosts'
import SimpleSection from '@/components/SimpleSection'
import BlogCardFeatured from '@/components/blog/BlogCardFeatured'
import PostsFeatured from '@/components/blog/PostsFeatured'
import MediaCard from '@/components/MediaCard'
import NextButton from './components/NextButton'
import GridItem from './components/GridItem'
import CommunityCard from './components/CommunityCard'
import Announcement from './components/Announcement'
import SmallAnnouncement from './components/SmallAnnouncement'
import BackButton from './components/BackButton'
import ColorPalette from '@/components/ColorPalette'
import AlertBar from './components/AlertBar'
//import Calendar from './components/Calendar'
import Submenu from './components/Submenu'
import VideoCard from './components/VideoCard'
import VueSocialSharing from 'vue-social-sharing'

require('typeface-hind');
require('typeface-montserrat');
require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");

export default function (Vue, { router, head, isClient }) {
  openGraph.forEach(item => head.meta.push(item))

  head.script.push({
    src: 'https://apis.google.com/js/api.js',
    body: true
  })

  head.link.push({
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  })

  Vue.config.productionTip = false
  Vue.use(Flare)
  Vue.use(VueSocialSharing);

  Vue.component('Faq', Faq)
  Vue.component('Newsletter', Newsletter)
  Vue.component('HomePageHero', HomePageHero)
  Vue.component('HomeCard', HomeCard)
  Vue.component('Separator', Separator)
  Vue.component('Card', Card)
  Vue.component('CardHolder', CardHolder)
  Vue.component('DeveloperCard', DeveloperCard)
  Vue.component('CommitteeCard', CommitteeCard)
  Vue.component('ThemedImage', ThemedImage)
  Vue.component('LatestPosts', LatestPosts)
  Vue.component('LatestPostsTwelve', LatestPostsTwelve)
  Vue.component('FeaturedPosts', FeaturedPosts)
  Vue.component('SimpleSection', SimpleSection)
  Vue.component('BlogCardFeatured', BlogCardFeatured)
  Vue.component('PostsFeatured', PostsFeatured)
  Vue.component('MediaCard', MediaCard)
  Vue.component('NextButton', NextButton)
  Vue.component('GridItem', GridItem)
  Vue.component('CommunityCard', CommunityCard)
  Vue.component('Announcement', Announcement)
  Vue.component('SmallAnnouncement', SmallAnnouncement)
  Vue.component('BackButton', BackButton)
  Vue.component('ColorPalette', ColorPalette)
  Vue.component('AlertBar', AlertBar)
  //Vue.component('Calendar', Calendar)
  Vue.component('Submenu', Submenu)
  Vue.component('VideoCard', VideoCard)

  if (isClient) {
  }
}