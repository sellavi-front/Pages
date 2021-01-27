import Requisites from '../../modules/Requisites/Requisites.js'
import requsites from './utils/requsites.js'
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

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ООО ОРГАНИК СТОРИС');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ООО ОРГАНИК СТОРИС', media);
  req.setTemplate();
}
