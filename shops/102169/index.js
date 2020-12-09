import pages from './pages/pages.js'
import './blocks/header/header.js'
import renderHomeBanner from "./blocks/banner/banner.js"
import renderSectionBanner from './blocks/custom-section-banner/custom-section-banner.js'
import './../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';

if(pages.home) {
  renderHomeBanner()
  renderSectionBanner()
}