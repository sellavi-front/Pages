import pages from './pages/pages.js'
import './blocks/header/header.js'
import renderHomeBanner from "./blocks/banner/banner.js";

if(pages.home) {
  renderHomeBanner()
}