import pages from './pages/pages.js'
import './blocks/header/header.js'
import renderHomeBanner from "./blocks/banner/banner.js"
import renderSectionBanner from './blocks/custom-section-banner/custom-section-banner.js'
import './../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import './../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'
import './blocks/footer/footer.js'
import renderSocialLayoutFooter from "./blocks/footer/footer.js";

renderSocialLayoutFooter()

if(pages.home) {
  renderHomeBanner()
  renderSectionBanner()
}