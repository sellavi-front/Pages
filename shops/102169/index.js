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

if(location.href === 'https://organic-stories.shop/checkout/') {
  let newElement = document.createElement('form')
  let oldElement = document.querySelector("#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout")
  newElement.innerHTML = oldElement.innerHTML
  oldElement.parentNode.replaceChild(newElement, oldElement)
  console.log(newElement)
  newElement.classList.add("form_checkout")
}