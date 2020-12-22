import './../../templates/TemplateTypeTwo/TemplateTypeTwo.js'
import "../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js"
import "../../fixes/fixes.js"
//import ContactsWithMap from "../../components/ContactsWithMap/ContactsWithMap.js"
import Fixes from "./fixes/fixes.js"
import AdvantagesTypeTwo from "../../components/AdvantagesTypeTwo/AdvantagesTypeTwo.js"
import {adv} from "./utils/utils.js"
import {contactData} from "./utils/utils.js"
import Footer from "./blocks/footer.js"
import ProductPage from "./blocks/product-page.js"


let fixes = new Fixes()
let footer = new Footer()

fixes.deleteUnnecessaryClasses()
fixes.updateImgCategories()
fixes.insertTitleToCategories()
fixes.updateClasses()

footer.addIcons()


if (document.querySelector('.common-home')) {
  //const customSection = document.querySelector('.custom_section')
  //customSection.classList.add('container')
  //const map = new ContactsWithMap(customSection, 'beforeend', contactData)
  //map.render()
  let advantages = new AdvantagesTypeTwo(document.querySelector("#home > div.wrapper.wrapper-closed > div.content-area > section.page-section.latest-section > div"), adv)
  advantages.render()
}

if(document.querySelector(".product-product")) {
  let product = new ProductPage()
  product.renderColor()
}


