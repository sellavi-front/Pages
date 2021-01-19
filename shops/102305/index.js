/*import "./../../fixes/js/RemoveBLur/RemoveBlur.js"*/
import './../../templates/TemplateTypeTwo/TemplateTypeTwo.js'
/*import "./../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js"*/
//import "../../fixes/fixes.js"
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

let target = document.querySelector("#content > div > div.row.products.grid");
const config = {
  childList: true,
};
const callback = function(mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      target.querySelectorAll('.product-item img').forEach(prod => {
        console.log(prod)

        prod.setAttribute('src', prod.getAttribute('src').replace(/e_blur:2000/gi, ''));
      })
    }
  }
};
const observer = new MutationObserver(callback);
observer.observe(target, config);

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
  product.errorMessage()
}


